'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import EmojiCarousel from './EmojiCarousel'
import ArticleCard from './ArticleCard'
import { Article } from '../data/articles'

interface CategoryLandingPageProps {
  title: string
  description: string
  categoryLabel: string
  articles: Article[]
  emptyState: string
}

export default function CategoryLandingPage({
  title,
  description,
  articles,
  emptyState
}: CategoryLandingPageProps) {
  return (
    <div className="mgn-page-shell">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        {articles.length > 0 && (
          <section className="mgn-panel overflow-hidden px-4 py-2 sm:px-5">
            <div className="flex flex-wrap items-center justify-between gap-3 px-2 pt-3">
              <div>
                <div className="mgn-kicker">Featured Rotation</div>
                <h2 className="mgn-text-strong mt-2 text-xl font-black tracking-tight sm:text-2xl">
                  Top Stories From {title}
                </h2>
              </div>
              <div className="mgn-surface-chip rounded-full px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.18em]">
                Updated Daily
              </div>
            </div>
            <EmojiCarousel articles={articles} />
          </section>
        )}

        {articles.length > 0 ? (
          <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {articles.map((article, index) => (
              <ArticleCard key={article.id} article={article} index={index} />
            ))}
          </section>
        ) : (
          <section className="mgn-panel px-6 py-14 text-center sm:px-10">
            <div className="mgn-kicker">Coming Up</div>
            <h2 className="mgn-text-strong mt-4 text-3xl font-black">More stories are on the way</h2>
            <p className="mgn-text-soft mx-auto mt-4 max-w-2xl text-base leading-7">
              {emptyState}
            </p>
          </section>
        )}

        {articles.length > 9 && (
          <div className="flex justify-center">
            <Link href={`/search?q=${encodeURIComponent(title)}`} className="btn-primary">
              Browse Search Archive
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
