import Hero from './components/Hero'
import CategorySection from './components/CategorySection'
import DeferredSection from './components/DeferredSection'
import { getRecentArticles, getArticlesByCategory } from './data/articles'

export default function Home() {
  const recentArticles = getRecentArticles(5)
  const newsArticles = getArticlesByCategory('News', 5)
  const reviewsArticles = getArticlesByCategory('Reviews', 5)
  const releasesArticles = getArticlesByCategory('Releases', 5)
  const techArticles = getArticlesByCategory('Tech', 5)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero articles={recentArticles} />
      
      {/* Main Content */}
      <div className="pb-16">
        {/* News Section */}
        <CategorySection
          title="Latest News"
          articles={newsArticles}
          viewAllLink="/news"
        />
        
        {/* Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <hr className="mgn-divider" />
        </div>
        
        <DeferredSection minHeight={520}>
          {/* Releases Section */}
          <CategorySection
            title="New Releases"
            articles={releasesArticles}
            viewAllLink="/releases"
          />
        </DeferredSection>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <hr className="mgn-divider" />
        </div>

        <DeferredSection minHeight={520}>
          {/* Reviews Section */}
          <CategorySection
            title="Reviews"
            articles={reviewsArticles}
            viewAllLink="/reviews"
          />
        </DeferredSection>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <hr className="mgn-divider" />
        </div>

        <DeferredSection minHeight={520}>
          {/* Tech Section */}
          <CategorySection
            title="Tech"
            articles={techArticles}
            viewAllLink="/tech"
          />
        </DeferredSection>
      </div>
    </div>
  )
}
