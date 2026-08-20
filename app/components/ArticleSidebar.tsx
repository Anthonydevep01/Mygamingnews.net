'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Article {
  id: string
  title: string
  description: string
  image: string
  category: string
  slug: string
  author?: string
  date?: string
}

interface ArticleSidebarProps {
  newsArticles: Article[]
  releasesArticles: Article[]
  sportsArticles: Article[]
}

const ArticleSidebar = ({ newsArticles, releasesArticles, sportsArticles }: ArticleSidebarProps) => {
  const [activeTab, setActiveTab] = useState('News')
  
  const categories = ['News', 'Releases', 'Sports']
  
  const getArticlesByCategory = (category: string): Article[] => {
    switch (category) {
      case 'News':
        return newsArticles.slice(0, 4)
      case 'Releases':
        return releasesArticles.slice(0, 4)
      case 'Sports':
        return sportsArticles.slice(0, 4)
      default:
        return []
    }
  }
  
  const currentArticles = getArticlesByCategory(activeTab)
  
  return (
    <div className="mgn-panel w-full overflow-hidden rounded-[2rem]">
      {/* Category Tabs */}
      <div className="flex border-b border-white/10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`flex-1 px-3 py-3 text-xs font-black uppercase tracking-[0.16em] transition-colors duration-200 ${
              activeTab === category
                ? 'bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white'
                : 'bg-transparent mgn-text-soft hover:bg-white/5 hover:text-[var(--mgn-text-strong)]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Articles List */}
      <div className="divide-y divide-white/6">
        {currentArticles.map((article, index) => (
          <Link
            key={article.id}
            href={`/${article.category.toLowerCase()}/${article.slug}`}
            prefetch={false}
            className="block p-4 transition-colors duration-200 hover:bg-white/5"
          >
            <div className="flex items-start space-x-3">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-sm font-black text-white shadow-[0_12px_26px_rgba(141,77,255,0.25)]">
                {index + 1}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="mgn-text-strong mb-1 line-clamp-3 text-sm font-bold leading-tight">
                  {article.title}
                </h3>
                <p className="mgn-text-soft line-clamp-2 text-xs leading-5">
                  {article.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {/* Advertisement Banner */}
      <Link
        href="/contact"
        className="block border-t border-white/10 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 p-4 transition-opacity duration-150 hover:opacity-95"
      >
        <div className="text-center">
          <svg
            className="mx-auto mb-2 w-16 h-16 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" opacity="0.3"/>
          </svg>
          <div className="mb-1 text-lg font-black text-white">Your AD Here!</div>
          <div className="text-white/80 text-sm">Click to advertise with us</div>
        </div>
      </Link>
    </div>
  )
}

export default ArticleSidebar
