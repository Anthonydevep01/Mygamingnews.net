import { notFound } from 'next/navigation'
import { getArticleBySlug, getArticlesByCategory, ArticleContent } from '../../data/articles'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import ArticleSidebar from '../../components/ArticleSidebar'
import SchemaMarkup from '../../components/SchemaMarkup'

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const newsArticles = getArticlesByCategory('News')
  return newsArticles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug)
  
  if (!article || article.category.toLowerCase() !== 'news') {
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

export default function NewsArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug)

  if (!article || article.category.toLowerCase() !== 'news') {
    notFound()
  }
  
  // Get articles for sidebar
  const newsArticles = getArticlesByCategory('News')
  const releasesArticles = getArticlesByCategory('Releases')
  const sportsArticles = getArticlesByCategory('Sports')

  return (
    <div className="min-h-screen py-12">
      <SchemaMarkup 
        type="article" 
        data={{ 
          article: {
            title: article.title,
            slug: article.slug,
            author: article.author,
            category: article.category,
            date: article.date,
            meta_description: article.meta_description || article.description,
            image: article.image,
            word_count: article.word_count
          }
        }} 
      />
      <SchemaMarkup 
        type="breadcrumb" 
        data={{ 
          breadcrumbs: [
            { name: 'Home', url: '/' },
            { name: 'News', url: '/news' },
            { name: article.title, url: `/news/${article.slug}` }
          ]
        }} 
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          href="/news" 
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to News
        </Link>
        
        {/* Main Layout with Sidebar */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 lg:max-w-4xl">

        {/* Article Header */}
        <div className="mb-8">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-600 text-white rounded-full">
              {article.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {article.title}
          </h1>
          <hr className="border-gray-200 dark:border-gray-700 mb-6" />
          
          <div className="flex items-center space-x-6 text-gray-300 dark:text-gray-300 text-gray-600">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{article.date}</span>
            </div>
          </div>
        </div>

        {/* Article Image */}
        <div className="mb-8">
          <Image
            src={(() => {
              const normalized = article.image?.startsWith('/') ? article.image : `/${article.image}`
              return article.slug === 'valve-steam-machine-next-gen-competition' ? '/images/valve-steam-machine.jpeg' : normalized
            })()}
            alt={article.title}
            width={1200}
            height={600}
            className="w-full h-64 md:h-96 object-cover rounded-lg"
            priority
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {article.content && Array.isArray(article.content) ? (
            article.content.map((section: ArticleContent, index: number) => (
              <div key={index} className="mb-6">
                {section.type === 'hook' && (
                  <div 
                    className="text-xl font-medium text-blue-400 mb-6 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: section.text?.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="link-anchor">$1</a>') || '' }}
                  />
                )}
                
                {section.heading_h2 && (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-2">
                      {section.heading_h2}
                    </h2>
                    <hr className="border-gray-200 dark:border-gray-700 mb-4" />
                  </>
                )}
                
                {section.text && section.type !== 'hook' && (
                  <div 
                    className="text-gray-300 dark:text-gray-300 text-gray-700 leading-relaxed mb-4 prose prose-lg dark:prose-invert"
                    dangerouslySetInnerHTML={{ __html: section.text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="link-anchor">$1</a>') }}
                  />
                )}
                
                {section.type === 'video' && section.video_embed && (
                  <div className="my-8 flex justify-center">
                    <div 
                      className="w-full max-w-4xl"
                      dangerouslySetInnerHTML={{ __html: section.video_embed }}
                    />
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-gray-300 dark:text-gray-300 text-gray-700">
              <p>{article.description}</p>
            </div>
          )}
        </div>

        {article.primary_keyword && (
          <div className="mt-8">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                {article.primary_keyword}
              </span>
              {article.secondary_keywords?.map((keyword, index) => (
                <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Article Score (for reviews) */}
        {article.score && (
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">
                {article.score}/10
              </div>
              <div className="text-blue-100">
                MyGamingNews.net Score
              </div>
            </div>
          </div>
        )}
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="sticky top-8">
              <ArticleSidebar 
                newsArticles={newsArticles}
                releasesArticles={releasesArticles}
                sportsArticles={sportsArticles}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}