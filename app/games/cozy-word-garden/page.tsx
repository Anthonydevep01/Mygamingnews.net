import type { Metadata } from 'next'
import CozyWordGardenClient from './CozyWordGardenClient'

const baseUrl = 'https://mygamingnews.net'

export const metadata: Metadata = {
  title: 'Cozy Word Garden: Peaceful Educational Word Search (Free Browser Game) | MyGamingNews.net',
  description:
    'Play Cozy Word Garden, a calm educational word search with themed vocabulary, cozy ambience, and short definitions in English and Spanish.',
  alternates: {
    canonical: '/games/cozy-word-garden',
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
    title: 'Cozy Word Garden: Peaceful Educational Word Search',
    description: 'A calm word search with educational themes, cozy ambience, and bilingual definitions.',
    url: `${baseUrl}/games/cozy-word-garden`,
    siteName: 'MyGamingNews.net',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/games/cozy-word-garden/cozy-word-garden-preview.jpg`,
        width: 1600,
        height: 900,
        alt: 'Cozy Word Garden - MyGamingNews.net browser game',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cozy Word Garden: Peaceful Educational Word Search',
    description: 'A calm word search with educational themes, cozy ambience, and bilingual definitions.',
    images: [`${baseUrl}/games/cozy-word-garden/cozy-word-garden-preview.jpg`],
  },
}

export default function CozyWordGardenPage() {
  const pageUrl = `${baseUrl}/games/cozy-word-garden`
  const gameUrl = `${baseUrl}/games/cozy-word-garden/index.html`

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
            name: 'Cozy Word Garden',
            item: pageUrl,
          },
        ],
      },
      {
        '@type': 'VideoGame',
        name: 'Cozy Word Garden',
        url: pageUrl,
        description:
          'Cozy Word Garden is a calm educational word search with themed vocabulary, cozy ambience, and short definitions in English and Spanish.',
        genre: ['Word Search', 'Educational', 'Puzzle'],
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
        <CozyWordGardenClient gamePath="/games/cozy-word-garden" />
      </div>
    </>
  )
}

