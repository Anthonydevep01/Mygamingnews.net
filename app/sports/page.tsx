import { getArticlesByCategory } from '../data/articles'
import CategoryLandingPage from '../components/CategoryLandingPage'

export const metadata = {
  title: 'Sports News - MyGamingNews.net',
  description: 'Stay updated with the latest sports news, athlete updates, and sporting events coverage.',
}

export default function SportsPage() {
  const sportsArticles = getArticlesByCategory('Sports')

  return (
    <CategoryLandingPage
      title="Sports News"
      description="Stay updated with the latest sports news, athlete updates, and sporting events coverage."
      categoryLabel="Sports Wire"
      articles={sportsArticles}
      emptyState="No sports stories are available right now. Check back soon for fresh coverage and athlete updates."
    />
  )
}
