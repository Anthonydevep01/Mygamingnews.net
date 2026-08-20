import { getArticlesByCategory } from '../data/articles'
import CategoryLandingPage from '../components/CategoryLandingPage'

export const metadata = {
  title: 'Gaming Tech - MyGamingNews.net',
  description: 'Explore the latest gaming technology, hardware reviews, industry innovations, and technical developments in gaming.',
}

export default function TechPage() {
  const techArticles = getArticlesByCategory('Tech')

  return (
    <CategoryLandingPage
      title="Gaming Tech"
      description="Explore the latest gaming technology, hardware reviews, industry innovations, and technical developments in gaming."
      categoryLabel="Tech Lab"
      articles={techArticles}
      emptyState="No tech articles are available right now. Check back soon for more hardware and innovation coverage."
    />
  )
}
