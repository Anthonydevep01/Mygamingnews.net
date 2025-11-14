import { getArticlesByCategory } from '../data/articles'
import ArticleCard from '../components/ArticleCard'
import EmojiCarousel from '../components/EmojiCarousel'

export const metadata = {
  title: 'Lifestyle - MyGamingNews.net',
  description: 'Discover lifestyle content, wellness tips, productivity hacks, and personal development insights for gamers and tech enthusiasts.',
}

export default function LifestylePage() {
  const lifestyleArticles = getArticlesByCategory('Lifestyle')

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Lifestyle
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Discover lifestyle content, wellness tips, productivity hacks, and personal development insights for gamers and tech enthusiasts.
          </p>
        </div>

        {/* Top Carousel */}
        <div className="mb-10">
          <EmojiCarousel articles={lifestyleArticles} />
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lifestyleArticles.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="btn-primary">
            Load More Lifestyle Articles
          </button>
        </div>
      </div>
    </div>
  )
}