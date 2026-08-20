'use client'

import React, { useState, useRef } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
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

const itemsPerView = {
  mobile: 1,
  tablet: 2,
  desktop: 3,
  large: 5
}

const CategorySection = ({ title, articles, viewAllLink }: CategorySectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentItemsPerView, setCurrentItemsPerView] = useState(5)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

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
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="mgn-kicker mb-3">Latest Feed</div>
            <h2 className="mgn-text-strong text-3xl font-black tracking-tight md:text-4xl">
              {title}
            </h2>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Navigation Arrows */}
            <div className="flex space-x-2">
              <button
                onClick={scrollLeft}
                disabled={!canScrollLeft}
                className={`p-2 rounded-lg transition-colors duration-150 ${
                  canScrollLeft
                    ? 'mgn-control-surface'
                    : 'border border-white/5 bg-white/5 text-white/25 cursor-not-allowed'
                }`}
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={scrollRight}
                disabled={!canScrollRight}
                className={`p-2 rounded-lg transition-colors duration-150 ${
                  canScrollRight
                    ? 'mgn-control-surface'
                    : 'border border-white/5 bg-white/5 text-white/25 cursor-not-allowed'
                }`}
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            
            {/* View All Link */}
            {viewAllLink && (
              <Link
                href={viewAllLink}
                className="group hidden items-center text-sm font-black uppercase tracking-[0.18em] text-fuchsia-300 transition-colors duration-150 hover:text-[var(--mgn-text-strong)] sm:flex"
              >
                View All
                <ChevronRight className="ml-1 w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" />
              </Link>
            )}
          </div>
        </div>

        {/* Articles Container */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-white/[0.02] px-1 py-4">
          <div
            ref={scrollContainerRef}
            className="flex transition-transform duration-300 ease-out"
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
          </div>
        </div>

        {/* Mobile Scroll Indicators */}
        <div className="flex justify-center mt-6 space-x-2 lg:hidden">
          {Array.from({ length: Math.ceil(articles.length / itemsPerView.mobile) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-[transform,background-color] duration-150 ${
                Math.floor(currentIndex / itemsPerView.mobile) === index
                  ? 'scale-125 bg-fuchsia-400'
                  : 'bg-white/25 hover:bg-white/45'
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
