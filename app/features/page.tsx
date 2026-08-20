import { getArticlesByCategory } from '../data/articles'
import CategoryLandingPage from '../components/CategoryLandingPage'

export const metadata = {
  title: 'Gaming Features - MyGamingNews.net',
  description: 'In-depth features, analysis, and editorial content exploring the gaming industry, trends, and culture.',
}

export default function FeaturesPage() {
  const featuresArticles = getArticlesByCategory('Features')

  return (
    <CategoryLandingPage
      title="Gaming Features"
      description="In-depth features, analysis, and editorial content exploring the gaming industry, trends, and culture."
      categoryLabel="Editorial Picks"
      articles={featuresArticles}
      emptyState="No feature stories are available right now. Check back soon for more deep dives and editorial analysis."
    />
  )
}
