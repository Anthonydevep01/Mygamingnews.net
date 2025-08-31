import { getAllArticles } from '../lib/markdown'
import SearchClient from './SearchClient'

export const metadata = {
  title: 'Search Articles - MyGamingNews.net',
  description: 'Search through our collection of gaming news, reviews, and articles.',
}

export default function SearchPage() {
  const articles = getAllArticles()
  
  return <SearchClient articles={articles} />
}