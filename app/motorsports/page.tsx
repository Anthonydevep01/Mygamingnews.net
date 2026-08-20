import { getArticlesByCategory } from '../data/articles'
import CategoryLandingPage from '../components/CategoryLandingPage'

export const metadata = {
  title: 'Motorsports - MyGamingNews.net',
  description: 'Latest motorsports news, Formula Drift coverage, racing updates, and championship results from the world of competitive racing.',
  keywords: 'motorsports, Formula Drift, racing news, drifting, championship results, racing coverage'
}

export default function MotorsportsPage() {
  const motorsportsArticles = getArticlesByCategory('Motorsports')

  return (
    <CategoryLandingPage
      title="Motorsports"
      description="Latest motorsports news, Formula Drift coverage, racing updates, and championship results from the world of competitive racing."
      categoryLabel="Race Control"
      articles={motorsportsArticles}
      emptyState="No motorsports articles are available yet. Check back soon for the latest racing news."
    />
  )
}
