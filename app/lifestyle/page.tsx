import { getArticlesByCategory } from '../data/articles'
import CategoryLandingPage from '../components/CategoryLandingPage'

export const metadata = {
  title: 'Lifestyle - MyGamingNews.net',
  description: 'Discover lifestyle content, wellness tips, productivity hacks, and personal development insights for gamers and tech enthusiasts.',
}

export default function LifestylePage() {
  const lifestyleArticles = getArticlesByCategory('Lifestyle')

  return (
    <CategoryLandingPage
      title="Lifestyle"
      description="Discover lifestyle content, wellness tips, productivity hacks, and personal development insights for gamers and tech enthusiasts."
      categoryLabel="Life + Play"
      articles={lifestyleArticles}
      emptyState="No lifestyle stories are available right now. Check back soon for more wellness and productivity coverage."
    />
  )
}
