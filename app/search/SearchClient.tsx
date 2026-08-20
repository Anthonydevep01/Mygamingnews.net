'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import ArticleCard from '../components/ArticleCard'
import { Search } from 'lucide-react'
import { Article } from '../lib/markdown'

interface SearchClientProps {
  articles: Article[]
}

export default function SearchClient({ articles }: SearchClientProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const [searchQuery, setSearchQuery] = useState(query)
  const [filteredArticles, setFilteredArticles] = useState(articles)

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = articles.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setFilteredArticles(filtered)
    } else {
      setFilteredArticles(articles)
    }
  }, [searchQuery, articles])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const q = searchQuery.trim()
    const nextUrl = q ? `/search?q=${encodeURIComponent(q)}` : '/search'
    router.replace(nextUrl, { scroll: false })
  }

  return (
    <div className="mgn-page-shell">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <header className="mgn-page-header">
          <div className="relative z-10">
            <div className="mgn-kicker">Search Archive</div>
            <h1 className="mgn-text-strong mt-4 text-4xl font-black leading-[0.95] sm:text-5xl lg:text-6xl">
              Search Articles
            </h1>

            <form onSubmit={handleSearch} className="mt-8 max-w-3xl">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for articles, categories, or keywords..."
                  className="mgn-input min-h-[64px] pl-12 pr-28 text-base sm:text-lg"
                />
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-fuchsia-200/70" />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-rose-500 px-5 py-2.5 text-sm font-black uppercase tracking-[0.14em] text-white transition-opacity duration-150 hover:opacity-90"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </header>

        <section className="mgn-panel px-6 py-6 sm:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="mgn-text-strong text-2xl font-black">
              {searchQuery ? `Search Results for "${searchQuery}"` : 'All Articles'}
            </h2>
            <span className="mgn-surface-chip rounded-full px-4 py-2 text-sm uppercase tracking-[0.14em]">
              {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
            </span>
          </div>
        </section>

        {filteredArticles.length > 0 ? (
          <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredArticles.map((article, index) => (
              <ArticleCard key={article.id} article={article} index={index} />
            ))}
          </section>
        ) : (
          <section className="mgn-panel px-6 py-16 text-center sm:px-8">
            <h2 className="mgn-text-strong text-2xl font-black">No articles found matching your search.</h2>
            <p className="mgn-text-soft mx-auto mt-4 max-w-2xl text-base leading-7">
              Try different keywords or browse our categories.
            </p>
          </section>
        )}
      </div>
    </div>
  )
}
