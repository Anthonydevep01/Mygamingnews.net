import type { CSSProperties } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Bell,
  Brain,
  Compass,
  ExternalLink,
  Flame,
  Gamepad2,
  Gem,
  Grid2x2,
  Heart,
  Home,
  Search,
  ShieldCheck,
  Sparkles,
  Swords,
  TimerReset,
  Trophy,
  Users,
  Wand2,
  Zap,
} from 'lucide-react'
import { gamesFaqs, hubGames } from './games-data'

const baseUrl = 'https://www.mygamingnews.net'
const pageUrl = `${baseUrl}/games`

export const metadata: Metadata = {
  title: 'Games Hub: Free Browser Games & Instant Web Play | MyGamingNews.net',
  description:
    'Discover curated browser games, typing challenges, quick web experiments, and instant-play picks in the new MyGamingNews.net Games hub.',
  keywords: [
    'browser games',
    'web games',
    'free browser games',
    'typing games',
    'instant play games',
    'games hub',
    'small website games',
  ],
  alternates: {
    canonical: '/games',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Games Hub: Free Browser Games & Instant Web Play',
    description:
      'A new discovery hub for curated browser games, fast sessions, and web-first picks that feel different from the rest of the site.',
    url: pageUrl,
    siteName: 'MyGamingNews.net',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/images/petlogo.png`,
        width: 1600,
        height: 900,
        alt: 'MyGamingNews.net Games Hub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Games Hub: Free Browser Games & Instant Web Play',
    description:
      'Explore curated browser games, typing challenges, creative web experiments, and low-friction playable picks.',
    images: [`${baseUrl}/images/petlogo.png`],
  },
}

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

const shelves = [
  {
    title: 'Most Popular Games Today',
    description: 'High-visibility picks with quick launch paths and immediate readability.',
    badge: 'Top',
    items: [hubGames[0], hubGames[4], hubGames[5], hubGames[2], hubGames[1], hubGames[3]],
    featured: true,
  },
  {
    title: 'Featured Games',
    description: 'A tighter curated row with stronger visual emphasis.',
    badge: 'Hot',
    items: [hubGames[4], hubGames[2], hubGames[0], hubGames[3], hubGames[5], hubGames[1]],
  },
  {
    title: 'New Games',
    description: 'Fresh browser-play ideas and experiments worth trying.',
    badge: 'New',
    items: [hubGames[1], hubGames[3], hubGames[5], hubGames[0], hubGames[2], hubGames[4]],
  },
  {
    title: 'Train your brain',
    description: 'Puzzle and focus-heavy picks for lower-friction sessions.',
    badge: 'Mind',
    items: [hubGames[2], hubGames[1], hubGames[3], hubGames[5], hubGames[0], hubGames[2]],
  },
  {
    title: 'Adrenaline',
    description: 'Action and competitive tabs when you want the pace up immediately.',
    badge: 'Rush',
    items: [hubGames[4], hubGames[5], hubGames[0], hubGames[1], hubGames[4], hubGames[5]],
  },
  {
    title: 'Play With Friends',
    description: 'Faster multiplayer-friendly picks and shareable tab games.',
    badge: 'Party',
    items: [hubGames[4], hubGames[5], hubGames[0], hubGames[4], hubGames[5], hubGames[1]],
  },
  {
    title: '5-Minute Fun',
    description: 'Short sessions built for a break, not a commitment.',
    badge: 'Quick',
    items: [hubGames[1], hubGames[2], hubGames[3], hubGames[0], hubGames[5], hubGames[2]],
  },
  {
    title: 'Timeless Classics',
    description: 'Simple browser formats that still work because the loop is so clear.',
    badge: 'Classic',
    items: [hubGames[0], hubGames[5], hubGames[4], hubGames[2], hubGames[1], hubGames[3]],
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
    icon: Gem,
    title: 'Expandable hub model',
    text: 'The shelves can scale into genres, originals, collections, or first-party playable entries without redesigning the route again.',
  },
]

export default function GamesPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Games',
        item: pageUrl,
      },
    ],
  }

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Games Hub',
    description:
      'Curated browser games, playful web experiences, and instant-play picks selected for speed, accessibility, and replay value.',
    url: pageUrl,
    isPartOf: {
      '@type': 'WebSite',
      name: 'MyGamingNews.net',
      url: baseUrl,
    },
    mainEntity: {
      '@type': 'ItemList',
      name: 'Featured browser games',
      numberOfItems: hubGames.length,
      itemListElement: hubGames.map((game, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: game.href,
        item: {
          '@type': 'VideoGame',
          name: game.name,
          description: game.description,
          genre: game.genre,
          url: game.href,
          gamePlatform: 'Web Browser',
          applicationCategory: 'Game',
          operatingSystem: 'Any',
        },
      })),
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: gamesFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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

            <section className="games-market-intro">
              <div>
                <div className="games-market-kicker">New Major Section</div>
                <h1 className="games-market-title">A denser browser-games hub with a real marketplace feel.</h1>
                <p className="games-market-copy">
                  This redesign shifts the Games page away from the previous editorial layout and much closer to the layered,
                  shelf-based browsing style in your screenshot, while keeping the schema, sitemap, and search metadata work
                  intact underneath.
                </p>
              </div>

              <div className="games-market-statbar">
                <div className="games-market-stat">
                  <span className="games-market-stat-label">Hub Type</span>
                  <strong>Curated shelves</strong>
                </div>
                <div className="games-market-stat">
                  <span className="games-market-stat-label">Launch focus</span>
                  <strong>Instant web play</strong>
                </div>
                <div className="games-market-stat">
                  <span className="games-market-stat-label">Section priority</span>
                  <strong>SEO + UX</strong>
                </div>
              </div>
            </section>

            <section className="games-market-bands">
              {categoryBands.map((band) => {
                const Icon = band.icon
                return (
                  <article
                    key={band.title}
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
                  </article>
                )
              })}
            </section>

            {shelves.map((shelf) => (
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
                      className={`games-tile${shelf.featured && index === 0 ? ' games-tile--hero' : ''}`}
                      style={
                        {
                          '--games-from': game.accentFrom,
                          '--games-to': game.accentTo,
                          '--games-glow': game.accentGlow,
                        } as CSSProperties
                      }
                    >
                      <span className="games-tile-badge">{index % 3 === 0 ? shelf.badge : game.genre}</span>
                      <span className="games-tile-platform">{game.playMode}</span>
                      <div className="games-tile-art">
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
    </>
  )
}
