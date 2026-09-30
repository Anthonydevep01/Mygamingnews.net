import type { Metadata } from 'next'
import GamesHubClient from './GamesHubClient'
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
      <GamesHubClient />
    </>
  )
}
