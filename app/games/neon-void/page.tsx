import type { Metadata } from 'next'
import NeonVoidClient from './NeonVoidClient'

const baseUrl = 'https://mygamingnews.net'

export const metadata: Metadata = {
  title: 'Neon Void: Infinite Roguelike Typing Shooter (Free Browser Game) | MyGamingNews.net',
  description:
    'Play Neon Void, an infinite roguelike typing shooter built for MyGamingNews.net. Survive escalating sectors, defeat bosses, earn upgrades, and track your WPM, accuracy, and records.',
  alternates: {
    canonical: '/games/neon-void',
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
    title: 'Neon Void: Infinite Roguelike Typing Shooter',
    description:
      'A first-party browser game by MyGamingNews.net. Type to shoot, earn upgrades, and push infinite sector progression with bosses and stat tracking.',
    url: `${baseUrl}/games/neon-void`,
    siteName: 'MyGamingNews.net',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/games/neon-void/neon-void-preview.jpg`,
        width: 1600,
        height: 900,
        alt: 'Neon Void - MyGamingNews.net browser game',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neon Void: Infinite Roguelike Typing Shooter',
    description:
      'Type to destroy enemies, earn upgrades, and survive infinite sector progression with bosses, WPM, and accuracy tracking.',
    images: [`${baseUrl}/games/neon-void/neon-void-preview.jpg`],
  },
}

export default function NeonVoidPage() {
  const pageUrl = `${baseUrl}/games/neon-void`
  const gameUrl = `${baseUrl}/games/neon-void/index.html`

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
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
            item: `${baseUrl}/games`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Neon Void',
            item: pageUrl,
          },
        ],
      },
      {
        '@type': 'VideoGame',
        name: 'Neon Void',
        url: pageUrl,
        description:
          'Neon Void is an infinite roguelike typing shooter created for MyGamingNews.net, featuring bosses, upgrades, scoring, WPM, accuracy, local records, and infinite sector progression.',
        genre: ['Typing', 'Roguelike', 'Shooter'],
        gamePlatform: 'Web Browser',
        operatingSystem: 'Any',
        playMode: 'SinglePlayer',
        applicationCategory: 'Game',
        inLanguage: 'en',
        publisher: {
          '@type': 'Organization',
          name: 'MyGamingNews.net',
          url: baseUrl,
        },
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: pageUrl,
        },
        sameAs: [gameUrl],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="mx-auto w-full max-w-[1500px] px-4 pb-16 pt-6 md:px-6 md:pt-10">
        <div className="mb-6">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-white/70">
            Games
          </div>
        </div>

        <NeonVoidClient gamePath="/games/neon-void" />
      </div>
    </>
  )
}
