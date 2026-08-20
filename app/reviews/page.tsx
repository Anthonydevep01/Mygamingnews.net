import { getArticlesByCategory } from '../data/articles'
import CategoryLandingPage from '../components/CategoryLandingPage'

export const metadata = {
  title: 'Game Reviews - MyGamingNews.net',
  description: 'Read comprehensive game reviews, ratings, and detailed analysis of the latest video games across all platforms.',
}

export default function ReviewsPage() {
  const reviewsArticles = getArticlesByCategory('Reviews')

  return (
    <CategoryLandingPage
      title="Game Reviews"
      description="Read comprehensive game reviews, ratings, and detailed analysis of the latest video games across all platforms."
      categoryLabel="Review Radar"
      articles={reviewsArticles}
      emptyState="No reviews are available right now. Check back soon for our latest scoring and analysis."
    />
  )
}
