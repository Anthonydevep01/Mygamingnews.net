import { getArticlesByCategory } from '../data/articles'
import CategoryLandingPage from '../components/CategoryLandingPage'

export const metadata = {
  title: 'eSports News - MyGamingNews.net',
  description: 'Follow the latest eSports news, tournament coverage, player updates, and competitive gaming developments.',
}

export default function ESportsPage() {
  const esportsArticles = getArticlesByCategory('eSports')

  return (
    <CategoryLandingPage
      title="eSports News"
      description="Follow the latest eSports news, tournament coverage, player updates, and competitive gaming developments."
      categoryLabel="Arena Feed"
      articles={esportsArticles}
      emptyState="No eSports articles are available right now. Check back soon for tournament coverage and roster updates."
    />
  )
}
