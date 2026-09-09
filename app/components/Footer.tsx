'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Games', href: '/games' },
    { name: 'News', href: '/news' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Features', href: '/features' },
    { name: 'Releases', href: '/releases' },
    { name: 'eSports', href: '/esports' },
  ]

  const contactLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Advertise', href: '/advertise' },
  ]

  const socialLinks = [
    { name: 'Facebook', icon: Facebook },
    { name: 'X (Twitter)', icon: Twitter },
    { name: 'Instagram', icon: Instagram },
  ]

  return (
    <footer className="mgn-footer-shell relative z-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-14 sm:px-6 lg:px-8">
        <div className="mgn-footer-cta mb-10 rounded-[2rem] border border-fuchsia-400/15 px-6 py-8 shadow-[0_18px_52px_rgba(0,0,0,0.12)] sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
            <div>
              <div className="mb-3 text-[11px] font-black uppercase tracking-[0.28em] text-fuchsia-200/80">The MGN Drop</div>
              <h2 className="mgn-text-strong text-2xl font-black sm:text-3xl">One gaming brief. No filler.</h2>
              <p className="mgn-text-body mt-3 max-w-2xl text-sm leading-7 sm:text-base">
                News, reviews, releases, features, browser games, and platform trends in one broadcast-style destination.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link href="/games" className="btn-primary">Open Games Hub</Link>
              <Link href="/advertise" className="btn-secondary">Advertise With Us</Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[1.55fr,0.8fr,0.8fr,0.85fr]">
          {/* Logo Column */}
          <div className="mgn-panel space-y-5 p-6">
            <Link href="/" className="group flex items-center space-x-3">
              <div className="overflow-hidden rounded-2xl border border-fuchsia-400/20 bg-[#050912] px-3 py-2">
                <Image
                  src="/images/petlogo.png"
                  alt="MyGamingNews.net Logo"
                  width={320}
                  height={80}
                  className="h-12 w-auto"
                />
              </div>
            </Link>
            <p className="mgn-text-soft text-sm leading-7">
              Your ultimate destination for the latest gaming news, reviews, and industry insights.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="mgn-panel space-y-4 p-6">
            <h3 className="mgn-text-strong text-lg font-black uppercase tracking-[0.2em]">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="mgn-text-soft text-sm transition-colors duration-150 hover:text-[var(--mgn-text-strong)]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Column */}
          <div className="mgn-panel space-y-4 p-6">
            <h3 className="mgn-text-strong text-lg font-black uppercase tracking-[0.2em]">Contact</h3>
            <ul className="space-y-2">
              {contactLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="mgn-text-soft text-sm transition-colors duration-150 hover:text-[var(--mgn-text-strong)]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us Column */}
          <div className="mgn-panel space-y-4 p-6">
            <h3 className="mgn-text-strong text-lg font-black uppercase tracking-[0.2em]">Follow</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <span
                    key={social.name}
                    className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5"
                    aria-label={social.name}
                  >
                    <IconComponent className="mgn-text-strong w-5 h-5" />
                  </span>
                )
              })}
            </div>
            <div className="mgn-text-soft text-sm">
              <p>Stay connected for the latest updates!</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mgn-divider mt-10 border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="mgn-text-soft text-sm">
              © 2024 MyGamingNews.net. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/terms"
                className="mgn-text-soft text-sm transition-colors duration-150 hover:text-[var(--mgn-text-strong)]"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="mgn-text-soft text-sm transition-colors duration-150 hover:text-[var(--mgn-text-strong)]"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookies"
                className="mgn-text-soft text-sm transition-colors duration-150 hover:text-[var(--mgn-text-strong)]"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
