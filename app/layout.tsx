import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from './components/ThemeProvider'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SchemaMarkup from './components/SchemaMarkup'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://mygamingnews.net'),
  title: 'MyGamingNews.net - Latest Gaming News & Reviews',
  description: 'Your ultimate destination for gaming news, reviews, features, releases, and eSports coverage.',
  keywords: 'gaming news, game reviews, esports, gaming industry, video games, gaming features',
  authors: [{ name: 'MyGamingNews.net Team' }],
  creator: 'MyGamingNews.net',
  publisher: 'MyGamingNews.net',
  robots: 'index, follow',
  icons: {
    icon: '/images/pet.png',
    shortcut: '/images/pet.png',
    apple: '/images/pet.png'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mygamingnews.net',
    siteName: 'MyGamingNews.net',
    title: 'MyGamingNews.net - Latest Gaming News & Reviews',
    description: 'Your ultimate destination for gaming news, reviews, features, releases, and eSports coverage.',
    images: [{
      url: 'https://mygamingnews.net/images/petlogo.png',
      width: 1600,
      height: 900,
      alt: 'MyGamingNews.net Logo'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mygamingnews',
    creator: '@mygamingnews',
    title: 'MyGamingNews.net - Latest Gaming News & Reviews',
    description: 'Your ultimate destination for gaming news, reviews, features, releases, and eSports coverage.',
    images: ['https://mygamingnews.net/images/petlogo.png']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VW1QDGYSF9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);} 
            gtag('js', new Date());
            gtag('config', 'G-VW1QDGYSF9');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <SchemaMarkup type="website" />
          <SchemaMarkup type="organization" />
          <div className="site-frame min-h-screen">
            <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-px bg-gradient-to-r from-transparent via-fuchsia-400/60 to-transparent" />
            <Navbar />
            <main className="relative z-10 pt-24">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
