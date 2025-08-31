// Import from markdown system
import { getAllArticles, getArticlesByCategory as getMarkdownArticlesByCategory, getRecentArticles as getMarkdownRecentArticles, getArticleBySlug as getMarkdownArticleBySlug, Article, ArticleContent } from '../lib/markdown'

// Export types for compatibility
export type { Article, ArticleContent }

// Load articles from markdown files
export const sampleArticles: Article[] = getAllArticles()

// Keep existing helper functions but use markdown data
export const getArticlesByCategory = (category: string, limit?: number): Article[] => {
  const articles = getMarkdownArticlesByCategory(category)
  return limit ? articles.slice(0, limit) : articles
}

export const getRecentArticles = (limit: number = 5): Article[] => {
  return getMarkdownRecentArticles(limit)
}

export const getArticleBySlug = (slug: string): Article | undefined => {
  return getMarkdownArticleBySlug(slug)
}