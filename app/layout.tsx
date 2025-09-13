import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ThemeProvider } from './components/ThemeProvider'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SchemaMarkup from './components/SchemaMarkup'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MyGamingNews.net - Latest Gaming News & Reviews',
  description: 'Your ultimate destination for gaming news, reviews, features, releases, and eSports coverage.',
  keywords: 'gaming news, game reviews, esports, gaming industry, video games, gaming features',
  authors: [{ name: 'MyGamingNews.net Team' }],
  creator: 'MyGamingNews.net',
  publisher: 'MyGamingNews.net',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mygamingnews.net',
    siteName: 'MyGamingNews.net',
    title: 'MyGamingNews.net - Latest Gaming News & Reviews',
    description: 'Your ultimate destination for gaming news, reviews, features, releases, and eSports coverage.',
    images: [{
      url: 'https://mygamingnews.net/images/Mygamingnewslogo.png',
      width: 400,
      height: 400,
      alt: 'MyGamingNews.net Logo'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mygamingnews',
    creator: '@mygamingnews',
    title: 'MyGamingNews.net - Latest Gaming News & Reviews',
    description: 'Your ultimate destination for gaming news, reviews, features, releases, and eSports coverage.',
    images: ['https://mygamingnews.net/images/Mygamingnewslogo.png']
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
          src="https://www.googletagmanager.com/gtag/js?id=G-N18DLD6QYV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N18DLD6QYV');
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
          <div className="min-h-screen bg-gradient-dark dark:bg-gradient-dark bg-gradient-light transition-all duration-300">
            <Navbar />
            <main className="pt-20">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}