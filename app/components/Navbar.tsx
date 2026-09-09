'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { Search, Moon, Sun, Menu, X, ChevronDown } from 'lucide-react'

const Navbar = () => {
  const [mounted, setMounted] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isOtherDropdownOpen, setIsOtherDropdownOpen] = useState(false)
  const { theme, resolvedTheme, setTheme } = useTheme()
  const pathname = usePathname()
  const router = useRouter()
  const activeTheme = resolvedTheme ?? theme
  const isDark = activeTheme === 'dark'

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Games', href: '/games' },
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
    setTheme(isDark ? 'light' : 'dark')
  }

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname?.startsWith(href)
  }

  const submitSearch = () => {
    const q = searchText.trim()
    if (!q) return
    router.push(`/search?q=${encodeURIComponent(q)}`)
    setIsSearchOpen(false)
  }

  if (!mounted) return null

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mgn-nav-shell">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 h-20">
          {/* Logo */}
          <Link href="/" className="group flex flex-shrink-0 items-center space-x-3">
            <div className="relative overflow-hidden rounded-2xl border border-fuchsia-400/20 bg-[#050912] px-3 py-2 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_14px_30px_rgba(0,0,0,0.25)]">
              <Image
                src="/images/logo.png"
                alt="MyGamingNews.net Logo"
                width={220}
                height={44}
                priority
                className="h-8 w-auto sm:h-9"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`navbar-item relative pb-1 ${isActive(item.href) ? 'mgn-text-strong' : ''}`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400 transition-[width] duration-150 ${isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
            
            {/* Other Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsOtherDropdownOpen(!isOtherDropdownOpen)}
                className="navbar-item flex items-center space-x-1"
              >
                <span>Other</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOtherDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isOtherDropdownOpen && (
                <div className="mgn-nav-panel absolute top-full left-0 mt-4 w-56 overflow-hidden rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.18)]">
                  {otherCategories.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block px-4 py-3 text-sm font-medium transition-colors duration-150 ${isActive(item.href) ? 'mgn-surface-chip mgn-text-strong' : 'mgn-text-soft hover:bg-white/5 hover:text-[var(--mgn-text-strong)]'}`}
                      onClick={() => setIsOtherDropdownOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="mgn-control-surface grid h-11 w-11 place-items-center rounded-2xl transition-colors duration-150"
              >
                <Search className="w-5 h-5" />
              </button>
              
              {isSearchOpen && (
                <div className="absolute right-0 top-full mt-4 w-[min(18rem,calc(100vw-1rem))] sm:w-auto">
                  <div className="mgn-nav-panel flex flex-col gap-2 rounded-[1.25rem] p-2 shadow-[0_20px_40px_rgba(0,0,0,0.18)] sm:flex-row sm:items-center">
                    <input
                      type="text"
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          submitSearch()
                        }
                      }}
                      placeholder="Search articles..."
                      className="mgn-input w-full sm:w-64"
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={submitSearch}
                      className="btn-primary justify-center whitespace-nowrap px-4 py-2"
                    >
                      Search
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="mgn-control-surface grid h-11 w-11 place-items-center rounded-2xl transition-colors duration-150"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-amber-300" />
              ) : (
                <Moon className="w-5 h-5 text-violet-700" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="mgn-control-surface xl:hidden grid h-11 w-11 place-items-center rounded-2xl transition-colors duration-150"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden border-t border-white/10 py-4">
            <div className="mgn-nav-panel flex flex-col space-y-4 rounded-[1.75rem] p-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition-colors duration-150 ${isActive(item.href) ? 'mgn-surface-chip mgn-text-strong' : 'mgn-text-soft hover:bg-white/5 hover:text-[var(--mgn-text-strong)]'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="px-4">
                <div className="mb-2 text-[11px] font-black uppercase tracking-[0.22em] text-fuchsia-200/80">Other Categories</div>
                {otherCategories.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block rounded-2xl py-3 pl-4 text-sm font-medium transition-colors duration-150 ${isActive(item.href) ? 'mgn-surface-chip mgn-text-strong' : 'mgn-text-soft hover:bg-white/5 hover:text-[var(--mgn-text-strong)]'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      </div>
    </nav>
  )
}

export default Navbar
