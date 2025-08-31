'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import Image from 'next/image'
import { Search, Moon, Sun, Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [mounted, setMounted] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isOtherDropdownOpen, setIsOtherDropdownOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'News', href: '/news' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Features', href: '/features' },
    { name: 'Releases', href: '/releases' },
    { name: 'eSports', href: '/esports' },
  ]

  const otherCategories = [
    { name: 'Sports', href: '/sports' },
    { name: 'Motorsports', href: '/motorsports' },
    { name: 'Tech', href: '/tech' },
    { name: 'LifeStyle', href: '/lifestyle' },
    { name: 'Contact Us', href: '/contact' },
  ]

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  if (!mounted) return null

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Image
                src="/images/Mygamingnewslogo.png"
                alt="MyGamingNews.net Logo"
                width={40}
                height={40}
                className="transition-all duration-300 group-hover:scale-110"
              />
            </div>
            <span className="text-xl font-bold text-gradient">MyGamingNews.net</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="navbar-item dark:navbar-item navbar-item-light relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            
            {/* Other Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsOtherDropdownOpen(!isOtherDropdownOpen)}
                className="navbar-item dark:navbar-item navbar-item-light flex items-center space-x-1"
              >
                <span>Other</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOtherDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isOtherDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-xl border border-gray-700 overflow-hidden"
                  >
                    {otherCategories.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-3 text-white hover:bg-gray-800 hover:text-primary-400 transition-colors duration-200"
                        onClick={() => setIsOtherDropdownOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              >
                <Search className="w-5 h-5 text-white" />
              </button>
              
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    className="absolute right-0 top-full mt-2"
                  >
                    <input
                      type="text"
                      placeholder="Search articles..."
                      className="w-64 px-4 py-2 bg-dark-800 dark:bg-dark-800 bg-white border border-dark-700 dark:border-dark-700 border-gray-300 rounded-lg text-white dark:text-white text-gray-900 placeholder-gray-400 dark:placeholder-gray-400 placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors duration-300"
                      autoFocus
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-dark-700 dark:border-dark-700 border-gray-200 py-4"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="navbar-item dark:navbar-item navbar-item-light px-4 py-2 hover:bg-dark-800 dark:hover:bg-dark-800 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <div className="px-4">
                  <div className="text-sm font-semibold text-gray-400 dark:text-gray-400 text-gray-600 mb-2">Other Categories</div>
                  {otherCategories.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block navbar-item dark:navbar-item navbar-item-light py-2 pl-4 hover:bg-dark-800 dark:hover:bg-dark-800 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar