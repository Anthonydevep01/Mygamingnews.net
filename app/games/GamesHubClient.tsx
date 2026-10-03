'use client'

import type { CSSProperties } from 'react'
import { useMemo, useState } from 'react'
import Link from 'next/link'
import {
  Bell,
  Brain,
  Compass,
  ExternalLink,
  Flame,
  Gamepad2,
  Grid2x2,
  Heart,
  Home,
  Search,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  Wand2,
  Zap,
} from 'lucide-react'
import { gamesFaqs, hubGames, type HubGame } from './games-data'

const leftRailItems = [
  { icon: Home, label: 'Home' },
  { icon: Compass, label: 'Discover' },
  { icon: Trophy, label: 'Trending' },
  { icon: Grid2x2, label: 'Genres' },
  { icon: Users, label: 'Party' },
  { icon: Heart, label: 'Saved' },
]

const categoryBands = [
  {
    title: 'Typing Arena',
    subtitle: 'Fast keyboard-first web games',
    icon: Zap,
    from: '#5927ff',
    to: '#a53dff',
  },
  {
    title: 'Arcade Rush',
    subtitle: 'Quick reaction and short loops',
    icon: Flame,
    from: '#ff4d5c',
    to: '#ff8b2c',
  },
  {
    title: 'Brain & Puzzle',
    subtitle: 'Logic, pairing, and pattern play',
    icon: Brain,
    from: '#1b8bff',
    to: '#57d4ff',
  },
  {
    title: 'Creative Lab',
    subtitle: 'Drawing, sandboxes, strange toys',
    icon: Wand2,
    from: '#18b57a',
    to: '#54f1c9',
  },
  {
    title: 'Play With Friends',
    subtitle: 'Competitive browser tabs',
    icon: Users,
    from: '#fc3d97',
    to: '#ff8bc1',
  },
]

const getGame = (href: string) => hubGames.find((game) => game.href === href)

const makeShelfItems = (hrefs: string[]) => hrefs.map(getGame).filter(Boolean) as HubGame[]

const shelves = [
  {
    title: 'Most Popular Games Today',
    description: 'High-visibility picks with quick launch paths and immediate readability.',
    badge: 'Top',
    items: makeShelfItems([
      '/games/neon-void',
      '/games/pizza-shift',
      '/games/cozy-word-garden',
      'https://sandspiel.club/',
      'https://slither.io/',
      'https://zty.pe/',
    ]),
    featured: true,
  },
  {
    title: 'Featured Games',
    description: 'A tighter curated row with stronger visual emphasis.',
    badge: 'Hot',
    items: makeShelfItems([
      '/games/pizza-shift',
      '/games/neon-void',
      '/games/cozy-word-garden',
      'https://zty.pe/',
      'https://quickdraw.withgoogle.com/',
      'https://sandspiel.club/',
    ]),
  },
  {
    title: 'New Games',
    description: 'Fresh browser-play ideas and experiments worth trying.',
    badge: 'New',
    items: makeShelfItems([
      '/games/cozy-word-garden',
      '/games/pizza-shift',
      '/games/neon-void',
      'https://littlealchemy2.com/',
      'https://quickdraw.withgoogle.com/',
      'https://zty.pe/',
    ]),
  },
  {
    title: 'Train your brain',
    description: 'Puzzle and focus-heavy picks for lower-friction sessions.',
    badge: 'Mind',
    items: makeShelfItems([
      '/games/cozy-word-garden',
      'https://littlealchemy2.com/',
      'https://quickdraw.withgoogle.com/',
      '/games/pizza-shift',
      'https://sandspiel.club/',
      '/games/neon-void',
    ]),
  },
  {
    title: 'Adrenaline',
    description: 'Action and competitive tabs when you want the pace up immediately.',
    badge: 'Rush',
    items: makeShelfItems([
      '/games/neon-void',
      'https://zty.pe/',
      'https://slither.io/',
      'https://agar.io/',
      '/games/pizza-shift',
      'https://quickdraw.withgoogle.com/',
    ]),
  },
  {
    title: 'Play With Friends',
    description: 'Faster multiplayer-friendly picks and shareable tab games.',
    badge: 'Party',
    items: makeShelfItems([
      'https://slither.io/',
      'https://agar.io/',
      'https://slither.io/',
      'https://agar.io/',
      'https://zty.pe/',
      '/games/neon-void',
    ]),
  },
  {
    title: '5-Minute Fun',
    description: 'Short sessions built for a break, not a commitment.',
    badge: 'Quick',
    items: makeShelfItems([
      'https://quickdraw.withgoogle.com/',
      'https://sandspiel.club/',
      'https://zty.pe/',
      '/games/cozy-word-garden',
      'https://agar.io/',
      '/games/pizza-shift',
    ]),
  },
  {
    title: 'Timeless Classics',
    description: 'Simple browser formats that still work because the loop is so clear.',
    badge: 'Classic',
    items: makeShelfItems([
      'https://agar.io/',
      'https://slither.io/',
      'https://sandspiel.club/',
      'https://zty.pe/',
      'https://littlealchemy2.com/',
      '/games/pizza-shift',
    ]),
  },
]

const trustNotes = [
  {
    icon: ShieldCheck,
    title: 'SEO + SERP foundation',
    text: 'Canonical metadata, Open Graph, robots, JSON-LD, FAQ schema, and sitemap coverage stay attached to the new section.',
  },
  {
    icon: Sparkles,
    title: 'Marketplace-style UX',
    text: 'This version shifts away from an editorial landing page and toward denser shelf discovery inspired by the screenshot.',
  },
  {
    icon: Gamepad2,
    title: 'Expandable hub model',
    text: 'The shelves can scale into genres, originals, collections, or first-party playable entries without redesigning the route again.',
  },
]

function gameMatchesCategory(game: HubGame, category: string) {
  const genre = game.genre.toLowerCase()
  const tags = game.tags.map((tag) => tag.toLowerCase())
  const playMode = game.playMode.toLowerCase()

  if (category === 'Typing Arena') return genre.includes('typing') || tags.includes('keyboard') || tags.includes('speed')
  if (category === 'Arcade Rush') return genre.includes('arcade') || tags.includes('arcade') || tags.includes('reflex')
  if (category === 'Brain & Puzzle') return genre.includes('puzzle') || tags.includes('puzzle') || tags.includes('strategy')
  if (category === 'Creative Lab')
    return tags.includes('creative') || tags.includes('sandbox') || tags.includes('simulation') || tags.includes('experimental')
  if (category === 'Play With Friends')
    return playMode.includes('multiplayer') || tags.includes('multiplayer') || tags.includes('competitive')
  return true
}

export default function GamesHubClient() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filteredShelves = useMemo(() => {
    if (!activeCategory) return shelves
    return shelves
      .map((shelf) => ({
        ...shelf,
        items: shelf.items.filter((game) => gameMatchesCategory(game, activeCategory)),
      }))
      .filter((shelf) => shelf.items.length > 0)
  }, [activeCategory])

  return (
    <div className="games-market-wrap">
      <div className="games-market-shell">
        <aside className="games-market-rail">
          <div className="games-market-brand">MGN</div>
          <div className="games-market-rail-items">
            {leftRailItems.map((item) => {
              const Icon = item.icon
              return (
                <button key={item.label} type="button" className="games-market-rail-button" aria-label={item.label}>
                  <Icon className="h-4 w-4" />
                </button>
              )
            })}
          </div>
        </aside>

        <div className="games-market-main">
          <header className="games-market-topbar">
            <div className="games-market-topbar-brand">
              <Gamepad2 className="h-4 w-4" />
              <span>Games Hub</span>
            </div>

            <label className="games-market-search">
              <Search className="h-4 w-4" />
              <input type="text" value="Search games and categories" readOnly aria-label="Search games" />
            </label>

            <div className="games-market-actions">
              <button type="button" className="games-market-action" aria-label="Favorites">
                <Heart className="h-4 w-4" />
              </button>
              <button type="button" className="games-market-action" aria-label="Notifications">
                <Bell className="h-4 w-4" />
              </button>
              <Link href="/contact" className="games-market-login">
                Suggest game
              </Link>
            </div>
          </header>

          <section className="games-market-bands">
            {categoryBands.map((band) => {
              const Icon = band.icon
              const pressed = activeCategory === band.title
              return (
                <button
                  key={band.title}
                  type="button"
                  aria-pressed={pressed}
                  onClick={() => setActiveCategory((prev) => (prev === band.title ? null : band.title))}
                  className="games-market-band"
                  style={
                    {
                      '--games-from': band.from,
                      '--games-to': band.to,
                    } as CSSProperties
                  }
                >
                  <div className="games-market-band-copy">
                    <span className="games-market-band-kicker">{band.title}</span>
                    <p>{band.subtitle}</p>
                  </div>
                  <div className="games-market-band-icon">
                    <Icon className="h-4 w-4" />
                  </div>
                </button>
              )
            })}
          </section>

          <div className="games-market-filterbar">
            {activeCategory ? (
              <>
                <span className="games-market-filter-label">Filter:</span>
                <span className="games-market-filter-pill">{activeCategory}</span>
                <button type="button" className="games-market-filter-clear" onClick={() => setActiveCategory(null)}>
                  Clear
                </button>
              </>
            ) : (
              <span className="games-market-filter-hint">Pick a category above to filter the shelves.</span>
            )}
          </div>

          {filteredShelves.map((shelf) => (
            <section key={shelf.title} className="games-shelf">
              <div className="games-shelf-header">
                <div>
                  <h2>{shelf.title}</h2>
                  <p>{shelf.description}</p>
                </div>
                <button type="button" className="games-shelf-viewall">
                  View all
                </button>
              </div>

              <div className={`games-shelf-grid${shelf.featured ? ' games-shelf-grid--featured' : ''}`}>
                {shelf.items.map((game, index) => (
                  <a
                    key={`${shelf.title}-${game.name}-${index}`}
                    href={game.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`games-tile${shelf.featured && index === 0 ? ' games-tile--hero' : ''}${game.previewImage ? ' games-tile--has-preview' : ''}`}
                    style={
                      {
                        '--games-from': game.accentFrom,
                        '--games-to': game.accentTo,
                        '--games-glow': game.accentGlow,
                      } as CSSProperties
                    }
                  >
                    <div className="games-tile-art">
                      {game.previewImage ? (
                        <div
                          className="games-tile-preview"
                          style={{ backgroundImage: `url(${game.previewImage})` }}
                          aria-hidden="true"
                        />
                      ) : null}
                      <div className="games-tile-orb" />
                      <div className="games-tile-grid" />
                    </div>
                    <div className="games-tile-overlay">
                      <h3>{game.name}</h3>
                      <p>{game.description}</p>
                      <div className="games-tile-meta">
                        <span>{game.session}</span>
                        <span>{game.difficulty}</span>
                        <span className="games-tile-open">
                          Play
                          <ExternalLink className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          ))}

          <section className="games-market-bottom">
            <div className="games-market-notes">
              {trustNotes.map((note) => {
                const Icon = note.icon
                return (
                  <article key={note.title} className="games-market-note">
                    <div className="games-market-note-icon">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h3>{note.title}</h3>
                      <p>{note.text}</p>
                    </div>
                  </article>
                )
              })}
            </div>

            <div className="games-market-faq">
              <div className="games-market-faq-header">
                <span className="games-market-kicker">FAQ</span>
                <p>Still schema-backed for search visibility.</p>
              </div>
              <div className="games-market-faq-list">
                {gamesFaqs.map((faq) => (
                  <details key={faq.question} className="games-market-faq-item">
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
