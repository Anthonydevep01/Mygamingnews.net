'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

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
  const normalized = article.image?.startsWith('/') ? article.image : `/${article.image}`
  const src = normalized || '/images/logo.png'

  return (
    <div className="group h-full">
      <Link href={`/${article.category.toLowerCase()}/${article.slug}`} prefetch={false} className="block h-full">
        <div className="card mgn-panel-hover h-full overflow-hidden p-3 cursor-pointer">
          {/* Image Container */}
          <div className="relative mb-4 overflow-hidden rounded-[1.25rem]">
            <div className="relative h-56 w-full overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-gray-800 to-gray-900 transition-transform duration-500 group-hover:scale-105">
              <Image
                src={src}
                alt={article.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 20vw"
                quality={55}
                className="object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,7,13,0.02),rgba(8,7,13,0.88))]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,62,165,0.18),transparent_26%)] opacity-80" />
              
              {/* Category Badge */}
              <div className="absolute top-3 left-3">
                <span className="mgn-overlay-chip inline-flex rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em]">
                  {article.category}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <div className="mgn-text-body flex items-center justify-between gap-3 text-[11px] font-semibold uppercase tracking-[0.16em]">
                  <span>{article.author || 'MyGamingNews.net'}</span>
                  {article.date && <span>{article.date}</span>}
                </div>
              </div>
              
              {/* Hover Overlay Content */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="rounded-full border border-white/15 bg-white/10 p-3">
                  <ChevronRight className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-3 px-1 pb-2">
            {/* Title */}
            <h3 className="mgn-text-strong line-clamp-2 text-xl font-black leading-tight transition-colors duration-300 group-hover:text-fuchsia-200">
              {article.title}
            </h3>
            
            {/* Description */}
            <p className="mgn-text-soft line-clamp-3 text-sm leading-7">
              {article.description}
            </p>
            
            {/* Read More Button */}
            <div className="pt-4">
              <span className="inline-flex items-center text-sm font-black uppercase tracking-[0.16em] text-fuchsia-300 transition-colors duration-300 group/button hover:text-[var(--mgn-text-strong)]">
                Read Story
                <ChevronRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover/button:translate-x-1" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ArticleCard
