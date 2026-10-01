'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { ExternalLink, Maximize2, MousePointerClick, Play, SlidersHorizontal, Type, Volume2, VolumeX, X } from 'lucide-react'

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
  const [scaleMode, setScaleMode] = useState<'fit' | 'readable'>('readable')
  const [gameSoundOn, setGameSoundOn] = useState<boolean | null>(null)
  const [gameSettingsOpen, setGameSettingsOpen] = useState(false)
  const [dockTop, setDockTop] = useState<number | null>(null)
  const iframeRef = useRef<HTMLIFrameElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useKeyboardScrollBlock(isPlaying)
  useScrollbarHide(isPlaying && !(isFullscreen || isCssFullscreen))
  useDocumentScrollLock(isFullscreen || isCssFullscreen || isPlaying)

  const iframeSrc = useMemo(() => `${gamePath.replace(/\/+$/, '')}/index.html`, [gamePath])

  const applyIframeUiOverrides = useCallback(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    try {
      const doc = iframe.contentDocument
      if (!doc) return

      const id = 'mgn-pizza-shift-iframe-overrides'
      let styleEl = doc.getElementById(id) as HTMLStyleElement | null
      if (!styleEl) {
        styleEl = doc.createElement('style')
        styleEl.id = id
        doc.head?.appendChild(styleEl)
      }

      styleEl.textContent = `
        .topbar { display: none !important; }
        .site-footer { display: none !important; }
        main { padding-top: 0 !important; }
      `
    } catch {
      return
    }
  }, [])

  const clickGameButton = useCallback((id: string) => {
    const iframe = iframeRef.current
    if (!iframe) return

    try {
      const doc = iframe.contentDocument
      const button = doc?.getElementById(id) as HTMLButtonElement | null
      button?.click()
    } catch {
      return
    }
  }, [])

  const closeGameSettings = useCallback(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    try {
      const doc = iframe.contentDocument
      const modal = doc?.getElementById('modal') as HTMLDialogElement | null
      if (!modal) return
      if (modal.hasAttribute('open')) modal.close()
    } catch {
      return
    }
  }, [])

  const syncGameUiState = useCallback(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    try {
      const doc = iframe.contentDocument
      if (!doc) return

      const soundBtn = doc.getElementById('sound-btn')
      if (soundBtn) setGameSoundOn(soundBtn.getAttribute('aria-pressed') === 'true')

      const modal = doc.getElementById('modal') as HTMLDialogElement | null
      setGameSettingsOpen(Boolean(modal?.hasAttribute('open')))
    } catch {
      return
    }
  }, [])

  const syncDockTop = useCallback(() => {
    if (document.fullscreenElement || isCssFullscreen) return
    const nav = document.querySelector('nav') ?? document.querySelector('[role="navigation"]')
    if (!nav) return
    const rect = nav.getBoundingClientRect()
    setDockTop(rect.bottom + 12)
  }, [isCssFullscreen])

  const syncIframeScale = useCallback(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    try {
      const doc = iframe.contentDocument
      if (!doc) return

      const docEl = doc.documentElement
      const body = doc.body

      docEl.style.transform = ''
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

      if (scale === 1 && offsetX === 0 && offsetY === 0) {
        docEl.style.transform = ''
        docEl.style.width = ''
        docEl.style.height = ''
        return
      }

      docEl.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`
      docEl.style.width = `${contentWidth}px`
      docEl.style.height = `${contentHeight}px`
    } catch {
      return
    }
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
    const handle = window.setTimeout(() => {
      window.scrollTo(0, 0)
      iframeRef.current?.focus()
      syncDockTop()
      applyIframeUiOverrides()
      syncGameUiState()
      syncIframeScale()
      window.setTimeout(syncDockTop, 80)
      window.setTimeout(applyIframeUiOverrides, 120)
      window.setTimeout(syncGameUiState, 160)
      window.setTimeout(syncIframeScale, 400)
    }, 50)
    return () => window.clearTimeout(handle)
  }, [applyIframeUiOverrides, isPlaying, syncDockTop, syncGameUiState, syncIframeScale])

  useEffect(() => {
    if (!isPlaying) return
    const onResize = () => {
      window.setTimeout(syncDockTop, 10)
      window.setTimeout(syncIframeScale, 50)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [isPlaying, syncDockTop, syncIframeScale])

  useEffect(() => {
    if (!isPlaying) return
    if (isFullscreen || isCssFullscreen) return
    syncDockTop()
  }, [isCssFullscreen, isFullscreen, isPlaying, syncDockTop])

  useEffect(() => {
    if (!isPlaying) return
    syncIframeScale()
    window.setTimeout(syncIframeScale, 120)
  }, [isPlaying, scaleMode, syncIframeScale])

  useEffect(() => {
    if (!isPlaying) return
    const interval = window.setInterval(syncGameUiState, 500)
    return () => window.clearInterval(interval)
  }, [isPlaying, syncGameUiState])

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

  if (!isPlaying) {
    return (
      <div className="w-full">
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
                  onClick={() => {
                    window.scrollTo(0, 0)
                    setIsPlaying(true)
                  }}
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
                  <span className="font-semibold text-white/90">Mouse / touch</span> to interact with stations and
                  ingredients.
                </li>
                <li>
                  <span className="font-semibold text-white/90">1–4</span> to switch stations (Counter, Prep, Oven, Cut
                  &amp; serve).
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
      </div>
    )
  }

  return createPortal(
    <>
      {!isFullscreen && !isCssFullscreen ? (
        <div className="fixed inset-0 z-[99998] bg-black/90 backdrop-blur-sm" aria-hidden="true" />
      ) : null}

      <div
        ref={containerRef}
        className={`flex flex-col overflow-hidden border border-white/10 bg-black/40 shadow-[0_30px_120px_rgba(0,0,0,0.5)] ${
          isFullscreen || isCssFullscreen
            ? 'fixed inset-0 z-[99999] h-[100svh] rounded-none border-none bg-black'
            : 'fixed left-4 right-4 z-[99999] rounded-3xl'
        }`}
        style={!isFullscreen && !isCssFullscreen ? { top: dockTop ?? 96, bottom: 16 } : undefined}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-black/40 px-4 py-3 backdrop-blur">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase tracking-[0.14em] text-white/70">Now Playing</span>
            <span className="text-sm font-black text-white">Pizza Shift</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                clickGameButton('sound-btn')
                window.setTimeout(syncGameUiState, 60)
              }}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/12 bg-white/5 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-white/80 transition hover:bg-white/10"
              aria-label="Toggle in-game sound"
            >
              {gameSoundOn === false ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              {gameSoundOn === false ? 'Muted' : 'Sound'}
            </button>
            <button
              type="button"
              onClick={() => {
                if (gameSettingsOpen) closeGameSettings()
                else clickGameButton('settings-btn')
                window.setTimeout(syncGameUiState, 60)
              }}
              className={`inline-flex items-center gap-2 rounded-2xl border border-white/12 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] transition ${
                gameSettingsOpen ? 'bg-white/12 text-white' : 'bg-white/5 text-white/80 hover:bg-white/10'
              }`}
              aria-label="Open in-game settings"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Settings
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
              onClick={() => setScaleMode((mode) => (mode === 'fit' ? 'readable' : 'fit'))}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/12 bg-white/5 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-white/80 transition hover:bg-white/10"
            >
              <Type className="h-4 w-4" />
              {scaleMode === 'fit' ? 'Readable' : 'Fit'}
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

        <div className="w-full flex-1 min-h-0">
          <iframe
            ref={iframeRef}
            src={iframeSrc}
            title="Pizza Shift - Pizza shop management browser game"
            className="h-full w-full"
            tabIndex={0}
            onLoad={() => {
              applyIframeUiOverrides()
              syncGameUiState()
              syncIframeScale()
              window.setTimeout(applyIframeUiOverrides, 120)
              window.setTimeout(syncGameUiState, 160)
              window.setTimeout(syncIframeScale, 400)
            }}
            allow="autoplay; fullscreen"
            allowFullScreen
            scrolling={scaleMode === 'fit' ? 'no' : 'auto'}
            style={{
              border: 0,
              overflow: scaleMode === 'fit' ? 'hidden' : 'auto',
              height: '100%',
              width: '100%',
            }}
          />
        </div>
      </div>
    </>,
    document.body
  )
}
