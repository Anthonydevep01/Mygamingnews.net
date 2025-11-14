import { getArticlesByCategory } from '../data/articles'
import ArticleCard from '../components/ArticleCard'
import EmojiCarousel from '../components/EmojiCarousel'

export const metadata = {
  title: 'eSports News - MyGamingNews.net',
  description: 'Follow the latest eSports news, tournament coverage, player updates, and competitive gaming developments.',
}

export default function ESportsPage() {
  const esportsArticles = getArticlesByCategory('eSports')

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            eSports News
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Follow the latest eSports news, tournament coverage, player updates, and competitive gaming developments.
          </p>
        </div>

        {/* Top Carousel */}
        <div className="mb-10">
          <EmojiCarousel articles={esportsArticles} />
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {esportsArticles.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="btn-primary">
            Load More eSports News
          </button>
        </div>
      </div>
    </div>
  )
}