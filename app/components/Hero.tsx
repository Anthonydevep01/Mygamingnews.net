'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface Article {
  id: string
  title: string
  description: string
  image: string
  category: string
  slug: string
}

interface HeroProps {
  articles: Article[]
}

const Hero = ({ articles }: HeroProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const articleCount = articles?.length ?? 0

  useEffect(() => {
    if (articleCount <= 1) return

    const timeoutId = window.setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % articleCount)
    }, 7000)

    return () => window.clearTimeout(timeoutId)
  }, [articleCount, currentSlide])

  const nextSlide = () => {
    if (articles.length > 1) {
      setCurrentSlide((prev) => (prev + 1) % articles.length)
    }
  }

  const prevSlide = () => {
    if (articles.length > 1) {
      setCurrentSlide((prev) => (prev - 1 + articles.length) % articles.length)
    }
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const activeArticle = articles[currentSlide]
  const sideArticles = articles
    .filter((_, index) => index !== currentSlide)
    .slice(0, 4)
  const activeImage = activeArticle.image?.startsWith('/') ? activeArticle.image : `/${activeArticle.image}`

  // Don't render if no articles
  if (articleCount === 0) {
    return null
  }

  return (
    <section className="px-4 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <span className="mgn-kicker">Top Broadcast</span>
            <h1 className="mgn-text-strong mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              This Week In Gaming
            </h1>
          </div>
          {articles.length > 1 && (
            <div className="hidden items-center gap-2 md:flex">
              <button
                onClick={prevSlide}
                className="mgn-control-surface grid h-11 w-11 place-items-center rounded-full transition-colors duration-150"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="mgn-control-surface grid h-11 w-11 place-items-center rounded-full transition-colors duration-150"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.65fr)_minmax(320px,0.85fr)]">
          <div className="relative min-h-[380px] overflow-hidden rounded-[2rem] border border-fuchsia-400/20 shadow-[0_20px_60px_rgba(19,8,37,0.32)] sm:min-h-[440px] lg:min-h-[560px]">
            <div className="absolute inset-0">
                <Image
                  src={activeImage}
                  alt={activeArticle.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,7,13,0.08),rgba(8,7,13,0.95))]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,62,165,0.20),transparent_28%)]" />

                <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-8 lg:p-10">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-rose-500 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-white">
                      Breaking
                    </span>
                    <span className="mgn-overlay-chip rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
                      {activeArticle.category}
                    </span>
                  </div>

                  <h2 className="mgn-text-strong max-w-4xl text-3xl font-black leading-[0.95] sm:text-5xl lg:text-6xl">
                    {activeArticle.title}
                  </h2>

                  <p className="mgn-text-body mt-4 max-w-2xl text-base leading-7 sm:text-lg">
                    {activeArticle.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      href={`/${activeArticle.category.toLowerCase()}/${activeArticle.slug}`}
                      prefetch={false}
                      className="btn-primary"
                    >
                      Read Feature
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                    {articles.length > 1 && (
                      <button
                        onClick={nextSlide}
                        className="btn-secondary"
                      >
                        Next Story
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
            </div>
          </div>

          <aside className="grid gap-4">
            {sideArticles.map((article, index) => {
              const articleImage = article.image?.startsWith('/') ? article.image : `/${article.image}`

              return (
                <Link
                  key={article.id}
                  href={`/${article.category.toLowerCase()}/${article.slug}`}
                  prefetch={false}
                  className="group"
                >
                  <div className="mgn-panel mgn-panel-hover grid gap-3 overflow-hidden p-3 sm:grid-cols-[112px_1fr]">
                    <div className="relative min-h-[110px] overflow-hidden rounded-2xl">
                      <Image
                        src={articleImage}
                        alt={article.title}
                        fill
                        sizes="112px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="text-[11px] font-black uppercase tracking-[0.22em] text-fuchsia-200/80">
                        {index === 0 ? 'Top Story' : index === 1 ? 'Trending' : index === 2 ? 'Watchlist' : 'Radar'}
                      </div>
                      <h3 className="mgn-text-strong mt-2 text-lg font-black leading-tight transition-colors duration-150 group-hover:text-fuchsia-200">
                        {article.title}
                      </h3>
                      <p className="mgn-text-soft mt-2 line-clamp-2 text-sm leading-6">
                        {article.description}
                      </p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </aside>
        </div>

        <div className="mt-5 flex items-center justify-center gap-3">
          {articles.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition-[width,background-color] duration-150 ${
                index === currentSlide
                  ? 'w-10 bg-gradient-to-r from-violet-400 to-fuchsia-400'
                  : 'w-2.5 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
