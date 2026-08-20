import Link from 'next/link'
import { Users, Target, Award, Heart, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'About Us - MyGamingNews.net',
  description: 'Learn about MyGamingNews.net, our mission, and the passionate team behind the latest gaming news and reviews.',
}

export default function AboutPage() {
  return (
    <div className="mgn-page-shell">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <header className="mgn-page-header">
          <div className="relative z-10 max-w-4xl">
            <div className="mgn-kicker">About The Brand</div>
            <h1 className="mgn-text-strong mt-4 text-4xl font-black leading-[0.95] sm:text-5xl lg:text-6xl">
              About MyGamingNews.net
            </h1>
            <p className="mgn-text-body mt-5 text-base leading-7 sm:text-lg">
              Your ultimate destination for gaming news, reviews, and industry insights.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/advertise" className="btn-secondary">
                Partner With Us
              </Link>
            </div>
          </div>
        </header>

        <section className="mgn-panel px-6 py-8 sm:px-8 lg:px-10">
          <div className="flex items-center gap-4">
            <div className="grid h-14 w-14 place-items-center rounded-2xl border border-fuchsia-400/20 bg-fuchsia-500/10 text-fuchsia-200">
              <Target className="h-7 w-7" />
            </div>
            <div>
              <div className="mgn-kicker">Mission</div>
              <h2 className="mgn-text-strong mt-3 text-3xl font-black">Our Mission</h2>
            </div>
          </div>
          <p className="mgn-text-body mt-6 text-lg leading-8">
            At MyGamingNews.net, we are passionate about bringing you the latest and most comprehensive gaming content.
            Our mission is to keep gamers informed, entertained, and connected to the ever-evolving world of video
            games. From breaking news and in-depth reviews to exclusive features and eSports coverage, we strive to be
            your trusted source for everything gaming.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              icon: Award,
              title: 'Quality Content',
              text: 'We deliver high-quality, well-researched content that gamers can trust and rely on for accurate information.'
            },
            {
              icon: Users,
              title: 'Community First',
              text: 'Our gaming community is at the heart of everything we do. We listen, engage, and create content that matters to you.'
            },
            {
              icon: Heart,
              title: 'Passion for Gaming',
              text: 'We are gamers ourselves, and our genuine love for gaming drives us to share the best content with fellow enthusiasts.'
            }
          ].map(({ icon: Icon, title, text }) => (
            <article key={title} className="mgn-panel h-full px-6 py-7 text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-fuchsia-400/20 bg-fuchsia-500/10 text-fuchsia-200">
                <Icon className="h-8 w-8" />
              </div>
              <h3 className="mgn-text-strong mt-5 text-xl font-black">{title}</h3>
              <p className="mgn-text-soft mt-3 text-sm leading-7">{text}</p>
            </article>
          ))}
        </section>

        <section className="mgn-panel px-6 py-8 sm:px-8 lg:px-10">
          <div className="mb-8 text-center">
            <div className="mgn-kicker">Coverage Map</div>
            <h2 className="mgn-text-strong mt-4 text-3xl font-black">What We Cover</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {[
              ['Breaking News', 'Stay updated with the latest gaming industry news, announcements, and developments.'],
              ['Game Reviews', 'Comprehensive reviews of the latest games across all platforms and genres.'],
              ['Release Coverage', 'Everything you need to know about upcoming game releases and launch dates.'],
              ['eSports', 'Tournament coverage, player profiles, and competitive gaming insights.'],
              ['Technology', 'Gaming hardware reviews, tech innovations, and industry developments.'],
              ['Features', 'In-depth analysis, opinion pieces, and exclusive gaming content.']
            ].map(([title, text]) => (
              <article key={title} className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] px-5 py-5">
                <h3 className="text-xl font-black text-fuchsia-200">{title}</h3>
                <p className="mgn-text-soft mt-3 text-sm leading-7">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-fuchsia-400/15 bg-[linear-gradient(90deg,rgba(78,23,131,0.42),rgba(122,24,88,0.34),rgba(98,24,53,0.38))] px-6 py-8 text-center shadow-[0_24px_80px_rgba(16,8,30,0.32)] sm:px-10">
          <h2 className="mgn-text-strong text-3xl font-black">Join Our Gaming Community</h2>
          <p className="mgn-text-body mx-auto mt-4 max-w-3xl text-lg leading-8">
            Have questions, suggestions, or want to contribute? We would love to hear from you.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/contact" className="btn-primary">
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
