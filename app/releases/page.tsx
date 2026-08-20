import { getArticlesByCategory } from '../data/articles'
import CategoryLandingPage from '../components/CategoryLandingPage'

export const metadata = {
  title: 'Game Releases - MyGamingNews.net',
  description: 'Discover upcoming game releases, launch dates, and everything you need to know about new games coming to all platforms.',
}

export default function ReleasesPage() {
  const releasesArticles = getArticlesByCategory('Releases')

  return (
    <CategoryLandingPage
      title="Game Releases"
      description="Discover upcoming game releases, launch dates, and everything you need to know about new games coming to all platforms."
      categoryLabel="Release Watch"
      articles={releasesArticles}
      emptyState="No release coverage is available right now. Check back soon for launch dates and platform updates."
    />
  )
}
