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
  
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + '...'
  }

  return (
    <div className="w-full max-w-sm bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      {/* Category Tabs */}
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`flex-1 px-3 py-3 text-sm font-medium transition-colors duration-200 ${
              activeTab === category
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>
      
      {/* Articles List */}
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {currentArticles.map((article, index) => (
          <Link
            key={article.id}
            href={`/${article.category.toLowerCase()}/${article.slug}`}
            className="block p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-2 leading-tight mb-1">
                  {truncateText(article.title, 60)}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                  {truncateText(article.description, 80)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {/* Advertisement Banner */}
      <Link
        href="/contact"
        className="block p-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 transition-all duration-200"
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
          <div className="text-white font-bold text-lg mb-1">Your AD Here!</div>
          <div className="text-white/80 text-sm">Click to advertise with us</div>
        </div>
      </Link>
    </div>
  )
}

export default ArticleSidebar