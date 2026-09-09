'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { ExternalLink, Keyboard, Maximize2, Play, X } from 'lucide-react'

type Props = {
  gamePath: string
}

function useKeyboardScrollBlock(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return

    const onKeyDown = (event: KeyboardEvent) => {
      const keysToBlock = new Set([' ', 'ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End'])
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

function useScrollbarHide(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return

    const html = document.documentElement
    const body = document.body
    html.classList.add('scrollbar-hide')
    body.classList.add('scrollbar-hide')

    return () => {
      html.classList.remove('scrollbar-hide')
      body.classList.remove('scrollbar-hide')
    }
  }, [enabled])
}

export default function NeonVoidClient({ gamePath }: Props) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isCssFullscreen, setIsCssFullscreen] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useKeyboardScrollBlock(isPlaying)
  useScrollbarHide(isPlaying && !(isFullscreen || isCssFullscreen))
  useDocumentScrollLock(isFullscreen || isCssFullscreen)

  const iframeSrc = useMemo(() => `${gamePath.replace(/\/+$/, '')}/index.html`, [gamePath])

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
    const handle = window.setTimeout(() => {
      iframeRef.current?.focus()
      iframeRef.current?.contentWindow?.postMessage('mgn:resume-audio', window.location.origin)
    }, 50)

    return () => window.clearTimeout(handle)
  }, [isPlaying])

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
      className={`relative overflow-hidden border border-white/10 bg-black/40 shadow-[0_30px_120px_rgba(0,0,0,0.5)] ${
        isFullscreen || isCssFullscreen ? 'fixed inset-0 z-[60] rounded-none border-none bg-black' : 'rounded-3xl'
      }`}
    >
      <div
        className={`flex flex-wrap items-center justify-between gap-3 bg-black/40 px-4 py-3 backdrop-blur ${
          isFullscreen || isCssFullscreen ? 'absolute inset-x-0 top-0 z-10 border-b border-white/10' : 'border-b border-white/10'
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="text-xs font-black uppercase tracking-[0.14em] text-white/70">Now Playing</span>
          <span className="text-sm font-black text-white">Neon Void</span>
        </div>
        <div className="flex items-center gap-2">
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

      <div
        className={`w-full ${
          isFullscreen || isCssFullscreen ? 'h-[100svh]' : 'h-[min(80svh,860px)] min-h-[360px] sm:min-h-[520px]'
        }`}
      >
        <iframe
          ref={iframeRef}
          src={iframeSrc}
          title="Neon Void - Infinite Roguelike Typing Shooter"
          className="h-full w-full"
          tabIndex={0}
          allow="autoplay; fullscreen"
          allowFullScreen
          scrolling="no"
          style={{ border: 0, overflow: 'hidden' }}
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
                <Keyboard className="h-4 w-4" />
                First-party web game
              </div>
              <h1 className="mt-4 text-balance text-4xl font-black tracking-tight text-white md:text-5xl">
                Neon Void
              </h1>
              <p className="mt-4 max-w-[70ch] text-pretty text-base leading-relaxed text-white/75">
                Neon Void is an infinite roguelike typing shooter created for MyGamingNews.net. Type to destroy enemies, earn
                upgrades, and survive escalating sectors with bosses, score, WPM, and accuracy tracking.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
                  Infinite progression
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
                  Upgrades + bosses
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
                  Local records
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
                  WPM + accuracy
                </span>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400/90 via-indigo-500/90 to-fuchsia-500/90 px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-black shadow-[0_18px_42px_rgba(123,68,255,0.32)] transition hover:translate-y-[-1px]"
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
              <div className="text-xs font-black uppercase tracking-[0.14em] text-white/70">Controls</div>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-white/75">
                <li>
                  <span className="font-semibold text-white/90">Type</span> the highlighted words to shoot enemies.
                </li>
                <li>
                  <span className="font-semibold text-white/90">Enter</span> confirms selections and upgrades inside the game.
                </li>
                <li>
                  <span className="font-semibold text-white/90">Backspace</span> edits your current typed buffer.
                </li>
                <li>
                  <span className="font-semibold text-white/90">Escape</span> opens the in-game menu.
                </li>
              </ul>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
                <div className="text-xs font-black uppercase tracking-[0.14em] text-white/70">Tips</div>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Click inside the game after pressing Play if your browser does not automatically focus the game. You can
                  still scroll the page normally while playing.
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
