'use client'

import { ExternalLink, Maximize2, Play, Ratio, Type, X } from 'lucide-react'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

type Props = {
  gamePath: string
}

type ScaleMode = 'fit' | 'readable'

function useKeyboardScrollBlock(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return

    const onKeyDown = (event: KeyboardEvent) => {
      const keysToBlock = new Set([
        ' ',
        'ArrowUp',
        'ArrowDown',
        'ArrowLeft',
        'ArrowRight',
        'PageUp',
        'PageDown',
        'Home',
        'End',
      ])
      if (!keysToBlock.has(event.key)) return
      event.preventDefault()
    }

    window.addEventListener('keydown', onKeyDown, { capture: true })

    return () => {
      window.removeEventListener('keydown', onKeyDown, { capture: true } as any)
    }
  }, [enabled])
}

function useDocumentScrollLock(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return

    const html = document.documentElement
    const body = document.body
    const prevHtmlOverflow = html.style.overflow
    const prevBodyOverflow = body.style.overflow
    const prevBodyOverscroll = body.style.overscrollBehavior

    html.style.overflow = 'hidden'
    body.style.overflow = 'hidden'
    body.style.overscrollBehavior = 'none'

    return () => {
      html.style.overflow = prevHtmlOverflow
      body.style.overflow = prevBodyOverflow
      body.style.overscrollBehavior = prevBodyOverscroll
    }
  }, [enabled])
}

export default function CozyWordGardenClient({ gamePath }: Props) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isCssFullscreen, setIsCssFullscreen] = useState(false)
  const [scaleMode, setScaleMode] = useState<ScaleMode>('readable')
  const iframeRef = useRef<HTMLIFrameElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useKeyboardScrollBlock(isPlaying)
  useDocumentScrollLock(isFullscreen || isCssFullscreen)

  const iframeSrc = useMemo(() => `${gamePath.replace(/\/+$/, '')}/index.html`, [gamePath])

  const syncIframeScale = useCallback(() => {
    const iframe = iframeRef.current
    if (!iframe) return
    const doc = iframe.contentDocument
    if (!doc) return

    const docEl = doc.documentElement
    const body = doc.body

    docEl.style.transform = ''
    docEl.style.transformOrigin = ''
    docEl.style.width = ''
    docEl.style.height = ''
    docEl.style.overflow = ''
    if (body) body.style.overflow = ''

    if (scaleMode === 'readable') return

    const contentWidth = Math.max(docEl.scrollWidth, body?.scrollWidth ?? 0)
    const contentHeight = Math.max(docEl.scrollHeight, body?.scrollHeight ?? 0)
    const frameWidth = iframe.clientWidth
    const frameHeight = iframe.clientHeight
    if (!contentWidth || !contentHeight || !frameWidth || !frameHeight) return

    const scale = Math.min(frameWidth / contentWidth, frameHeight / contentHeight, 1)
    const usedWidth = contentWidth * scale
    const usedHeight = contentHeight * scale
    const offsetX = Math.max((frameWidth - usedWidth) / 2, 0)
    const offsetY = Math.max((frameHeight - usedHeight) / 2, 0)

    docEl.style.transformOrigin = 'top left'
    docEl.style.overflow = 'hidden'
    if (body) body.style.overflow = 'hidden'

    if (scale === 1 && offsetX === 0 && offsetY === 0) return

    docEl.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`
    docEl.style.width = `${contentWidth}px`
    docEl.style.height = `${contentHeight}px`
  }, [scaleMode])

  useEffect(() => {
    const onFullscreenChange = () => {
      const container = containerRef.current
      const active = document.fullscreenElement
      if (!container || !active) {
        setIsFullscreen(false)
        return
      }
      setIsFullscreen(active === container || container.contains(active))
    }
    document.addEventListener('fullscreenchange', onFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange)
  }, [])

  useEffect(() => {
    if (!isPlaying) return
    const iframe = iframeRef.current
    if (!iframe) return

    const onLoad = () => {
      syncIframeScale()
      window.setTimeout(syncIframeScale, 200)
    }

    iframe.addEventListener('load', onLoad)
    const resizeHandle = window.setTimeout(syncIframeScale, 50)
    window.addEventListener('resize', syncIframeScale)

    return () => {
      iframe.removeEventListener('load', onLoad)
      window.clearTimeout(resizeHandle)
      window.removeEventListener('resize', syncIframeScale)
    }
  }, [isPlaying, syncIframeScale])

  useEffect(() => {
    if (!isPlaying) return
    syncIframeScale()
  }, [isPlaying, scaleMode, syncIframeScale])

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      if (document.fullscreenElement) document.exitFullscreen().catch(() => {})
      setIsCssFullscreen(false)
    }
    window.addEventListener('keydown', onEscape)
    return () => window.removeEventListener('keydown', onEscape)
  }, [])

  const toggleFullscreen = () => {
    const container = containerRef.current
    if (!container) return

    const browserFullscreenActive = Boolean(document.fullscreenElement)
    if (browserFullscreenActive || isCssFullscreen) {
      if (browserFullscreenActive) document.exitFullscreen().catch(() => {})
      setIsCssFullscreen(false)
      return
    }

    if (document.fullscreenEnabled && typeof container.requestFullscreen === 'function') {
      ;(container.requestFullscreen as any)({ navigationUI: 'hide' }).catch(() => {})
      return
    }

    setIsCssFullscreen(true)
  }

  const playingChrome = (
    <div
      ref={containerRef}
      className={`relative flex flex-col overflow-hidden border border-white/10 bg-black/40 shadow-[0_30px_120px_rgba(0,0,0,0.5)] ${
        isFullscreen || isCssFullscreen
          ? 'fixed inset-0 z-[60] h-[100svh] rounded-none border-none bg-black'
          : 'rounded-3xl'
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-black/40 px-4 py-3 backdrop-blur">
        <div className="flex items-center gap-2">
          <span className="text-xs font-black uppercase tracking-[0.14em] text-white/70">Now Playing</span>
          <span className="text-sm font-black text-white">Cozy Word Garden</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setScaleMode((prev) => (prev === 'readable' ? 'fit' : 'readable'))}
            className="inline-flex items-center gap-2 rounded-2xl border border-white/12 bg-white/5 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-white/80 transition hover:bg-white/10"
          >
            {scaleMode === 'readable' ? <Type className="h-4 w-4" /> : <Ratio className="h-4 w-4" />}
            {scaleMode === 'readable' ? 'Readable' : 'Fit'}
          </button>
          <button
            type="button"
            onClick={toggleFullscreen}
            className="inline-flex items-center gap-2 rounded-2xl border border-white/12 bg-white/5 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-white/80 transition hover:bg-white/10"
          >
            <Maximize2 className="h-4 w-4" />
            {isFullscreen || isCssFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
          </button>
          <button
            type="button"
            onClick={async () => {
              if (document.fullscreenElement) await document.exitFullscreen().catch(() => {})
              setIsCssFullscreen(false)
              setIsPlaying(false)
            }}
            className="inline-flex items-center gap-2 rounded-2xl border border-white/12 bg-white/5 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-white/80 transition hover:bg-white/10"
          >
            <X className="h-4 w-4" />
            Exit game
          </button>
        </div>
      </div>

      <div className={`w-full flex-1 min-h-0 ${isFullscreen || isCssFullscreen ? '' : 'h-[min(82svh,900px)] min-h-[420px]'}`}>
        <iframe
          ref={iframeRef}
          src={iframeSrc}
          title="Cozy Word Garden - Peaceful Educational Word Search"
          className="h-full w-full"
          tabIndex={0}
          allow="autoplay; fullscreen"
          allowFullScreen
          scrolling={scaleMode === 'fit' ? 'no' : 'yes'}
          style={{ border: 0, overflow: scaleMode === 'fit' ? 'hidden' : 'auto' }}
        />
      </div>
    </div>
  )

  return (
    <div className="w-full">
      {!isPlaying ? (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-white/80">
                <span className="text-sm">🌿</span>
                First-party web game
              </div>
              <h1 className="mt-4 text-balance text-4xl font-black tracking-tight text-white md:text-5xl">Cozy Word Garden</h1>
              <p className="mt-4 max-w-[70ch] text-pretty text-base leading-relaxed text-white/75">
                A calm, educational word search designed for quick sessions. Find themed words, build streaks, and unlock short
                definitions in English or Spanish.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
                  Educational themes
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
                  English + Español
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
                  Cozy soundtrack
                </span>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-300/90 via-lime-300/80 to-amber-200/90 px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-black shadow-[0_18px_42px_rgba(120,240,199,0.22)] transition hover:translate-y-[-1px]"
                >
                  <Play className="h-4 w-4" />
                  Play
                </button>

                <a
                  href={iframeSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/5 px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-white/85 transition hover:bg-white/10"
                >
                  <ExternalLink className="h-4 w-4" />
                  Open standalone
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-5">
              <div className="text-xs font-black uppercase tracking-[0.14em] text-white/70">How to play</div>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-white/75">
                <li>
                  <span className="font-semibold text-white/90">Drag</span> in a straight line to select a word.
                </li>
                <li>
                  <span className="font-semibold text-white/90">Complete</span> the word list to finish a level.
                </li>
                <li>
                  <span className="font-semibold text-white/90">Switch</span> languages on the start screen.
                </li>
              </ul>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
                <div className="text-xs font-black uppercase tracking-[0.14em] text-white/70">Fit vs Readable</div>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Use <span className="font-semibold text-white/90">Readable</span> for larger text and natural scrolling inside the
                  game. Switch to <span className="font-semibold text-white/90">Fit</span> if you want the whole board visible at
                  once.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        playingChrome
      )}
    </div>
  )
}

