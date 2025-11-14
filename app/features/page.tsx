import { getArticlesByCategory } from '../data/articles'
import ArticleCard from '../components/ArticleCard'
import EmojiCarousel from '../components/EmojiCarousel'

export const metadata = {
  title: 'Gaming Features - MyGamingNews.net',
  description: 'In-depth features, analysis, and editorial content exploring the gaming industry, trends, and culture.',
}

export default function FeaturesPage() {
  const featuresArticles = getArticlesByCategory('Features')

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Gaming Features
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            In-depth features, analysis, and editorial content exploring the gaming industry, trends, and culture.
          </p>
        </div>

        {/* Top Carousel */}
        <div className="mb-10">
          <EmojiCarousel articles={featuresArticles} />
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresArticles.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="btn-primary">
            Load More Features
          </button>
        </div>
      </div>
    </div>
  )
}