import { notFound } from 'next/navigation'
import { getArticleBySlug, getArticlesByCategory } from '../data/articles'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, User, ArrowLeft, ChevronDown } from 'lucide-react'
import ArticleSidebar from './ArticleSidebar'
import SchemaMarkup from './SchemaMarkup'
import type { Article, FaqItem } from '../lib/markdown'

interface ArticlePageProps {
  slug: string
  category: string
  categoryDisplayName: string
}

const formatInlineLinks = (text: string) =>
  text.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer" class="link-anchor">$1</a>'
  )

const getFallbackFaqs = (article: Article): FaqItem[] => {
  const categoryLabel = article.category.toLowerCase()

  return [
    {
      question: `What is this ${categoryLabel} article about?`,
      answer: article.meta_description || article.description
    },
    {
      question: `Why does this ${article.primary_keyword} story matter?`,
      answer: `This article explains why the latest ${article.primary_keyword} developments matter, what they could change for players or the industry, and which details are worth following next.`
    },
    {
      question: 'Is this article based on official information?',
      answer: 'MyGamingNews.net uses official announcements and credible reporting whenever available, and the source list in each article is used to support the key facts covered in the story.'
    },
    {
      question: `Where can I find more ${categoryLabel} coverage?`,
      answer: `You can explore more ${categoryLabel} coverage on MyGamingNews.net for related updates, follow-up reports, and broader context around this topic.`
    }
  ]
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
  const faqs = article.faqs?.length ? article.faqs : getFallbackFaqs(article)

  return (
    <div className="mgn-page-shell">
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
      <SchemaMarkup
        type="faq"
        data={{
          faqs
        }}
      />
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link 
          href={`/${category.toLowerCase()}`}
          className="mgn-surface-chip mb-8 inline-flex items-center rounded-full px-4 py-2 text-sm font-black uppercase tracking-[0.16em] text-fuchsia-300 transition-colors hover:bg-white/10 hover:text-[var(--mgn-text-strong)]"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to {categoryDisplayName}
        </Link>
        
        {/* Main Layout with Sidebar */}
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Main Content */}
          <div className="flex-1 lg:max-w-4xl">

        {/* Article Header */}
        <div className="mgn-page-header mb-8">
          <div className="mb-4">
            <span className="mgn-kicker">
              {article.category}
            </span>
          </div>
          
          <h1 className="mgn-text-strong relative z-10 text-4xl font-black leading-[0.95] md:text-5xl">
            {article.title}
          </h1>
          <hr className="mgn-divider mb-6 mt-5" />
          
          <div className="mgn-text-body flex flex-wrap items-center gap-6 text-sm uppercase tracking-[0.12em]">
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
            <Image 
              src={article.image.startsWith('/') ? article.image : `/${article.image}`}
              alt={article.title}
              width={1200}
              height={600}
              className="w-full rounded-[2rem] border border-white/10 object-cover shadow-[0_24px_80px_rgba(0,0,0,0.32)] h-64 md:h-96"
              priority
            />
          </div>
        )}

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="mgn-panel mgn-text-body p-6 leading-relaxed sm:p-8 lg:p-10">
            {article.content.map((section, index) => {
              // Handle sections with both heading and text
              if (section.heading_h2 && section.text) {
                return (
                  <div key={index}>
                    <h2 className="mgn-text-strong mt-8 mb-2 text-2xl font-black">
                      {section.heading_h2}
                    </h2>
                    <hr className="mgn-divider mb-4" />
                    <div 
                      className="mgn-text-body mb-4 leading-8"
                      dangerouslySetInnerHTML={{ __html: section.text }}
                    />
                  </div>
                )
              }
              
              // Handle headings only
              if (section.heading_h2 && !section.text) {
                return (
                  <div key={index}>
                    <h2 className="mgn-text-strong mt-8 mb-2 text-2xl font-black">
                      {section.heading_h2}
                    </h2>
                    <hr className="mgn-divider mb-4" />
                  </div>
                )
              }
              
              // Handle hook (first paragraph in bold)
              if (section.type === 'hook' && section.text) {
                return (
                  <div key={index} className="mb-6">
                    <div
                      className="mgn-surface-chip mgn-text-strong rounded-[1.5rem] px-5 py-5 text-lg font-semibold leading-8"
                      dangerouslySetInnerHTML={{ __html: formatInlineLinks(section.text) }}
                    />
                  </div>
                )
              }
              
              // Handle video embeds
              if (section.type === 'video' && section.video_embed) {
                return (
                  <div key={index} className="my-8">
                    <div 
                      className="aspect-video overflow-hidden rounded-[1.5rem] border border-white/10"
                      dangerouslySetInnerHTML={{ __html: section.video_embed }}
                    />
                  </div>
                )
              }

              // Handle inline article images parsed from markdown
              if (section.type === 'image' && section.image_src) {
                const imageSrc = section.image_src.startsWith('/') ? section.image_src : `/${section.image_src}`

                return (
                  <div key={index} className="my-8 overflow-hidden rounded-[1.5rem] border border-white/10">
                    <Image
                      src={imageSrc}
                      alt={section.image_alt || article.title}
                      width={1200}
                      height={700}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                )
              }
              
              // Handle regular text content only
              if (section.text && !section.heading_h2) {
                return (
                  <div 
                    key={index} 
                    className="mgn-text-body mb-4 leading-8"
                    dangerouslySetInnerHTML={{ __html: section.text }}
                  />
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
              <span className="rounded-full border border-fuchsia-400/20 bg-fuchsia-500/10 px-3 py-1 text-sm text-fuchsia-200">
                {article.primary_keyword}
              </span>
              {article.secondary_keywords?.map((keyword, index) => (
                <span key={index} className="mgn-surface-chip rounded-full px-3 py-1 text-sm">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        )}

        {article.score && (
          <div className="mgn-panel mt-8 px-6 py-8 text-center">
            <div className="text-[11px] font-black uppercase tracking-[0.24em] text-fuchsia-200/75">
              Review Verdict
            </div>
            <div className="mgn-text-strong mt-4 text-5xl font-black">
              {article.score}/10
            </div>
            <div className="mgn-text-body mt-2 text-sm uppercase tracking-[0.16em]">
              MyGamingNews.net Score
            </div>
          </div>
        )}

        {faqs.length > 0 && (
          <div className="mgn-panel mt-8 p-6 sm:p-8">
            <div className="text-[11px] font-black uppercase tracking-[0.24em] text-fuchsia-200/75">
              FAQ
            </div>
            <h2 className="mgn-text-strong mt-3 text-2xl font-black">
              Frequently Asked Questions
            </h2>
            <hr className="mgn-divider mb-5 mt-4" />
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <details
                  key={`${faq.question}-${index}`}
                  className="group overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/5"
                >
                  <summary className="mgn-text-strong flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-base font-bold marker:content-none">
                    <span>{faq.question}</span>
                    <ChevronDown className="h-5 w-5 flex-shrink-0 transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <div className="mgn-text-body border-t border-white/10 px-5 py-4 text-sm leading-7 sm:text-base">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        )}

          </div>

          {/* Sidebar */}
          <div className="lg:w-[24rem] lg:flex-shrink-0 xl:w-[25rem]">
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
