import { getArticlesByCategory } from '../data/articles'
import CategoryLandingPage from '../components/CategoryLandingPage'

export const metadata = {
  title: 'Gaming News - MyGamingNews.net',
  description: 'Stay updated with the latest gaming news, industry updates, and breaking stories from the world of video games.',
}

export default function NewsPage() {
  const newsArticles = getArticlesByCategory('News')

  return (
    <CategoryLandingPage
      title="Gaming News"
      description="Stay updated with the latest gaming news, industry updates, and breaking stories from the world of video games."
      categoryLabel="News Desk"
      articles={newsArticles}
      emptyState="No news articles are available right now. Please check back soon for the latest headlines."
    />
  )
}
