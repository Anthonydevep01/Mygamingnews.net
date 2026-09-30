'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { ExternalLink, Maximize2, MousePointerClick, Play, X } from 'lucide-react'

type Props = {
  gamePath: string
}

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

export default function PizzaShiftClient({ gamePath }: Props) {
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

  return (
    <div className="w-full">
      {!isPlaying ? (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-white/80">
                <MousePointerClick className="h-4 w-4" />
                Standalone HTML game
              </div>
              <h1 className="mt-4 text-balance text-4xl font-black tracking-tight text-white md:text-5xl">Pizza Shift</h1>
              <p className="mt-4 max-w-[70ch] text-pretty text-base leading-relaxed text-white/75">
                Run a pizza shop, prepare customer orders, manage the ovens, and upgrade your kitchen.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-300/90 via-orange-500/90 to-rose-500/90 px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-black shadow-[0_18px_42px_rgba(251,146,60,0.3)] transition hover:translate-y-[-1px]"
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
                  <span className="font-semibold text-white/90">Mouse / touch</span> to interact with stations and ingredients.
                </li>
                <li>
                  <span className="font-semibold text-white/90">1–4</span> to switch stations (Counter, Prep, Oven, Cut &amp; serve).
                </li>
                <li>
                  <span className="font-semibold text-white/90">P</span> to pause and <span className="font-semibold text-white/90">M</span>{' '}
                  to toggle sound.
                </li>
              </ul>

              <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                <div className="px-4 pt-4 text-xs font-black uppercase tracking-[0.14em] text-white/70">Preview</div>
                <div className="p-4 pt-3">
                  <img
                    src="/games/pizza-shift/pizza-shift-preview.gif"
                    alt="Pizza Shift gameplay preview"
                    className="h-auto w-full rounded-xl"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
                <div className="text-xs font-black uppercase tracking-[0.14em] text-white/70">Tip</div>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  If music does not start right away, click inside the game once and toggle the sound button.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
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
              <span className="text-sm font-black text-white">Pizza Shift</span>
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
              isFullscreen || isCssFullscreen ? 'h-[100svh]' : 'h-[min(80svh,860px)] min-h-[420px] sm:min-h-[620px]'
            }`}
          >
            <iframe
              ref={iframeRef}
              src={iframeSrc}
              title="Pizza Shift - Pizza shop management browser game"
              className="h-full w-full"
              tabIndex={0}
              allow="autoplay; fullscreen"
              allowFullScreen
              scrolling="no"
              style={{ border: 0, overflow: 'hidden' }}
            />
          </div>
        </div>
      )}
    </div>
  )
}
