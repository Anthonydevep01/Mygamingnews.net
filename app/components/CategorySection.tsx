'use client'

import React, { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import ArticleCard from './ArticleCard'

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

interface CategorySectionProps {
  title: string
  articles: Article[]
  viewAllLink?: string
}

const CategorySection = ({ title, articles, viewAllLink }: CategorySectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentItemsPerView, setCurrentItemsPerView] = useState(5)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  
  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
    large: 5
  }

  // Update items per view based on screen size
  React.useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setCurrentItemsPerView(itemsPerView.mobile)
      } else if (window.innerWidth < 1024) {
        setCurrentItemsPerView(itemsPerView.tablet)
      } else if (window.innerWidth < 1280) {
        setCurrentItemsPerView(itemsPerView.desktop)
      } else {
        setCurrentItemsPerView(itemsPerView.large)
      }
    }

    updateItemsPerView()
    window.addEventListener('resize', updateItemsPerView)
    return () => window.removeEventListener('resize', updateItemsPerView)
  }, [])

  const canScrollLeft = currentIndex > 0
  const canScrollRight = currentIndex < articles.length - currentItemsPerView

  const scrollLeft = () => {
    if (canScrollLeft) {
      setCurrentIndex(prev => Math.max(0, prev - 1))
    }
  }

  const scrollRight = () => {
    if (canScrollRight) {
      setCurrentIndex(prev => Math.min(articles.length - currentItemsPerView, prev + 1))
    }
  }

  if (!articles.length) return null

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
          >
            {title}
          </motion.h2>
          
          <div className="flex items-center space-x-4">
            {/* Navigation Arrows */}
            <div className="flex space-x-2">
              <button
                onClick={scrollLeft}
                disabled={!canScrollLeft}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  canScrollLeft
                    ? 'bg-primary-600 hover:bg-primary-700 text-white hover:scale-110'
                    : 'bg-gray-600 dark:bg-gray-600 bg-gray-300 text-gray-400 dark:text-gray-400 text-gray-500 cursor-not-allowed'
                }`}
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={scrollRight}
                disabled={!canScrollRight}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  canScrollRight
                    ? 'bg-primary-600 hover:bg-primary-700 text-white hover:scale-110'
                    : 'bg-gray-600 dark:bg-gray-600 bg-gray-300 text-gray-400 dark:text-gray-400 text-gray-500 cursor-not-allowed'
                }`}
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            
            {/* View All Link */}
            {viewAllLink && (
              <motion.a
                href={viewAllLink}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-primary-400 dark:text-primary-400 text-primary-600 hover:text-primary-300 dark:hover:text-primary-300 hover:text-primary-700 font-medium transition-colors duration-300 flex items-center group"
              >
                View All
                <ChevronRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>
            )}
          </div>
        </div>

        {/* Articles Container */}
        <div className="relative overflow-hidden">
          <motion.div
            ref={scrollContainerRef}
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / currentItemsPerView)}%)`
            }}
          >
            {articles.map((article, index) => (
              <div
                key={article.id}
                className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/5 flex-shrink-0 px-3"
              >
                <ArticleCard article={article} index={index} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Scroll Indicators */}
        <div className="flex justify-center mt-6 space-x-2 lg:hidden">
          {Array.from({ length: Math.ceil(articles.length / itemsPerView.mobile) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / itemsPerView.mobile) === index
                  ? 'bg-primary-500 scale-125'
                  : 'bg-gray-400 dark:bg-gray-400 bg-gray-300 hover:bg-gray-300 dark:hover:bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategorySection