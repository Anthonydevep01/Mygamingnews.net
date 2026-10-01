import type { Metadata } from 'next'
import PizzaShiftClient from './PizzaShiftClient'

const baseUrl = 'https://mygamingnews.net'

export const metadata: Metadata = {
  title: 'Pizza Shift: Pizza Shop Management (Free Browser Game) | MyGamingNews.net',
  description:
    'Play Pizza Shift, a standalone browser game about running a pizza shop. Take orders, prepare pizzas, watch the ovens, serve customers, and upgrade your kitchen.',
  alternates: {
    canonical: '/games/pizza-shift',
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
    title: 'Pizza Shift: Pizza Shop Management',
    description: 'Run a pizza shop, manage stations, serve orders, and keep the ovens under control.',
    url: `${baseUrl}/games/pizza-shift`,
    siteName: 'MyGamingNews.net',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/images/petlogo.png`,
        width: 1600,
        height: 900,
        alt: 'Pizza Shift - MyGamingNews.net browser game',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pizza Shift: Pizza Shop Management',
    description: 'Run a pizza shop, manage stations, serve orders, and upgrade your kitchen.',
    images: [`${baseUrl}/images/petlogo.png`],
  },
}

export default function PizzaShiftPage() {
  const pageUrl = `${baseUrl}/games/pizza-shift`
  const gameUrl = `${baseUrl}/games/pizza-shift/index.html`

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
            name: 'Pizza Shift',
            item: pageUrl,
          },
        ],
      },
      {
        '@type': 'VideoGame',
        name: 'Pizza Shift',
        url: pageUrl,
        description: 'Run a pizza shop, prepare customer orders, manage the ovens, and upgrade your kitchen.',
        genre: ['Simulation', 'Management', 'Cooking'],
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
      <div className="mx-auto w-full max-w-[1500px] px-4 pb-10 pt-4 md:px-6 md:pt-6">
        <PizzaShiftClient gamePath="/games/pizza-shift" />
      </div>
    </>
  )
}
