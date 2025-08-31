'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
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
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'X (Twitter)', href: '#', icon: Twitter },
    { name: 'Instagram', href: '#', icon: Instagram },
  ]

  return (
    <footer className="bg-black border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <Image
                  src="/images/Mygamingnewslogo.png"
                  alt="MyGamingNews.net Logo"
                  width={32}
                  height={32}
                  className="transition-all duration-300 group-hover:scale-110"
                />
              </div>
              <span className="text-lg font-bold text-gradient">MyGamingNews.net</span>
            </Link>
            <p className="text-white text-sm leading-relaxed">
              Your ultimate destination for the latest gaming news, reviews, and industry insights.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-primary-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Column */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Contact Us</h3>
            <ul className="space-y-2">
              {contactLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-primary-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us Column */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="p-2 rounded-lg bg-gray-800 hover:bg-primary-600 transition-all duration-300 hover:scale-110 group"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5 text-white group-hover:text-white transition-colors duration-300" />
                  </Link>
                )
              })}
            </div>
            <div className="text-white text-sm">
              <p>Stay connected for the latest updates!</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white text-sm">
              © 2024 MyGamingNews.net. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/terms"
                className="text-white hover:text-primary-400 transition-colors duration-300 text-sm"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-white hover:text-primary-400 transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookies"
                className="text-white hover:text-primary-400 transition-colors duration-300 text-sm"
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