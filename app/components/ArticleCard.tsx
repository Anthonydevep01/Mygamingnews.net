'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, User, ChevronRight } from 'lucide-react'

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

interface ArticleCardProps {
  article: Article
  index?: number
}

const ArticleCard = ({ article, index = 0 }: ArticleCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group"
    >
      <Link href={`/${article.category.toLowerCase()}/${article.slug}`} className="block h-full">
        <div className="card dark:card card-light h-full overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
          {/* Image Container */}
          <div className="relative overflow-hidden rounded-lg mb-4">
            <div 
              className="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 transition-transform duration-500 group-hover:scale-110 relative overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${article.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Category Badge */}
              <div className="absolute top-3 left-3">
                <span className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
                  {article.category}
                </span>
              </div>
              
              {/* Hover Overlay Content */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <ChevronRight className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-3">
            {/* Meta Information */}
            {(article.author || article.date) && (
              <div className="flex items-center space-x-4 text-sm text-gray-400 dark:text-gray-400 text-gray-600">
                {article.author && (
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                )}
                {article.date && (
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                )}
              </div>
            )}
            
            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300 line-clamp-2">
              {article.title}
            </h3>
            
            {/* Description */}
            <p className="text-gray-300 dark:text-gray-300 text-gray-700 leading-relaxed line-clamp-3">
              {article.description}
            </p>
            
            {/* Read More Button */}
            <div className="pt-4">
              <span className="inline-flex items-center text-primary-400 dark:text-primary-400 text-primary-600 hover:text-primary-300 dark:hover:text-primary-300 hover:text-primary-700 font-medium transition-colors duration-300 group/button">
                Read More
                <ChevronRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover/button:translate-x-1" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default ArticleCard