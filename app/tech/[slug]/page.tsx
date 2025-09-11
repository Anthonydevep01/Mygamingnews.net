import { getArticleBySlug, getArticlesByCategory } from '../../data/articles'
import ArticlePage from '../../components/ArticlePage'

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const techArticles = getArticlesByCategory('Tech')
  return techArticles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug)
  
  if (!article || article.category.toLowerCase() !== 'tech') {
    return {
      title: 'Article Not Found - MyGamingNews.net',
    }
  }

  return {
    title: article.meta_title ? `${article.meta_title} - MyGamingNews.net` : `${article.title} - MyGamingNews.net`,
    description: article.meta_description || article.description,
    keywords: article.primary_keyword ? [article.primary_keyword, ...(article.secondary_keywords || [])].join(', ') : undefined,
  }
}

export default function TechArticlePage({ params }: ArticlePageProps) {
  return (
    <ArticlePage 
      slug={params.slug} 
      category="Tech" 
      categoryDisplayName="Tech" 
    />
  )
}