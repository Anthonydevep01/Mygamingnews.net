import { getArticleBySlug, getArticlesByCategory } from '../../data/articles'
import ArticlePage from '../../components/ArticlePage'

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const releasesArticles = getArticlesByCategory('Releases')
  return releasesArticles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug)
  
  if (!article || article.category.toLowerCase() !== 'releases') {
    return {
      title: 'Article Not Found - MyGamingNews.net',
    }
  }

  return {
    title: article.meta_title ? `${article.meta_title} - MyGamingNews.net` : `${article.title} - MyGamingNews.net`,
    description: article.meta_description || article.description,
    keywords: article.primary_keyword ? [article.primary_keyword, ...(article.secondary_keywords || [])].join(', ') : undefined,
    openGraph: {
      title: article.meta_title || article.title,
      description: article.meta_description || article.description,
      url: `https://www.mygamingnews.net/releases/${article.slug}`,
      siteName: 'MyGamingNews.net',
      locale: 'en_US',
      type: 'article',
      images: [
        {
          url: article.image.startsWith('http') ? article.image : `https://www.mygamingnews.net${article.image.startsWith('/') ? '' : '/'}${article.image}`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.meta_title || article.title,
      description: article.meta_description || article.description,
      images: [article.image.startsWith('http') ? article.image : `https://www.mygamingnews.net${article.image.startsWith('/') ? '' : '/'}${article.image}`],
    },
  }
}

export default function ReleasesArticlePage({ params }: ArticlePageProps) {
  return (
    <ArticlePage 
      slug={params.slug} 
      category="Releases" 
      categoryDisplayName="Releases" 
    />
  )
}