import { notFound } from 'next/navigation'
import { getArticleBySlug, getArticlesByCategory } from '../data/articles'
import Link from 'next/link'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import ArticleSidebar from './ArticleSidebar'
import SchemaMarkup from './SchemaMarkup'

interface ArticlePageProps {
  slug: string
  category: string
  categoryDisplayName: string
}

export default function ArticlePage({ slug, category, categoryDisplayName }: ArticlePageProps) {
  const article = getArticleBySlug(slug)

  if (!article || article.category.toLowerCase() !== category.toLowerCase()) {
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
            { name: categoryDisplayName, url: `/${category.toLowerCase()}` },
            { name: article.title, url: `/${category.toLowerCase()}/${article.slug}` }
          ]
        }} 
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          href={`/${category.toLowerCase()}`}
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to {categoryDisplayName}
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
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {article.title}
          </h1>
          
          <div className="flex items-center space-x-6 text-gray-300 dark:text-gray-300 text-gray-600">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{new Date(article.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            {article.word_count && (
              <div className="text-sm">
                <span>{article.word_count} words</span>
              </div>
            )}
          </div>
        </div>

        {/* Article Image */}
        {article.image && (
          <div className="mb-8">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        )}

        {/* Article Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="text-gray-800 dark:text-gray-200 leading-relaxed">
            {article.content.map((section, index) => {
              if (section.type === 'heading_h2' && section.heading_h2) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
                    {section.heading_h2}
                  </h2>
                )
              }
              if (section.type === 'text' && section.text) {
                return (
                  <div 
                    key={index} 
                    className="mb-4"
                    dangerouslySetInnerHTML={{ __html: section.text }}
                  />
                )
              }
              if (section.type === 'video_embed' && section.video_embed) {
                return (
                  <div key={index} className="my-8">
                    <div 
                      className="aspect-video"
                      dangerouslySetInnerHTML={{ __html: section.video_embed }}
                    />
                  </div>
                )
              }
              return null
            })}
          </div>
        </div>

        {/* Article Tags */}
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

          </div>

          {/* Sidebar */}
          <div className="lg:w-80">
            <ArticleSidebar 
              newsArticles={newsArticles}
              releasesArticles={releasesArticles}
              sportsArticles={sportsArticles}
            />
          </div>
        </div>
      </div>
    </div>
  )
}