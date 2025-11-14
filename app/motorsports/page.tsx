import { getArticlesByCategory } from '../data/articles'
import ArticleCard from '../components/ArticleCard'
import EmojiCarousel from '../components/EmojiCarousel'

export const metadata = {
  title: 'Motorsports - MyGamingNews.net',
  description: 'Latest motorsports news, Formula Drift coverage, racing updates, and championship results from the world of competitive racing.',
  keywords: 'motorsports, Formula Drift, racing news, drifting, championship results, racing coverage'
}

export default function MotorsportsPage() {
  const motorsportsArticles = getArticlesByCategory('Motorsports')

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Motorsports
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Latest motorsports news, Formula Drift coverage, racing updates, and championship results from the world of competitive racing.
          </p>
        </div>

        {/* Top Carousel */}
        <div className="mb-10">
          <EmojiCarousel articles={motorsportsArticles} />
        </div>

        {/* Articles Grid */}
        {motorsportsArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {motorsportsArticles.map((article, index) => (
              <ArticleCard key={article.id} article={article} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-500 dark:text-gray-400 text-lg">
              No motorsports articles available yet. Check back soon for the latest racing news!
            </div>
          </div>
        )}

        {/* Load More Button (for future implementation) */}
        {motorsportsArticles.length > 9 && (
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-300">
              Load More Articles
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
