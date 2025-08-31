import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import gfm from 'remark-gfm'

const contentDirectory = path.join(process.cwd(), 'content/articles')

export interface ArticleMetadata {
  title: string
  slug: string
  author: string
  category: string
  date: string
  meta_title: string
  meta_description: string
  primary_keyword: string
  secondary_keywords: string[]
  score?: number
  word_count: number
  image: string
}

export interface ArticleContent {
  type?: string
  heading_h2?: string
  text?: string
  video_embed?: string
}

export interface Article extends ArticleMetadata {
  id: string
  content: ArticleContent[]
  description: string
}

export function getAllArticles(): Article[] {
  // Check if content directory exists
  if (!fs.existsSync(contentDirectory)) {
    console.warn('Content directory does not exist, returning empty array')
    return []
  }

  const fileNames = fs.readdirSync(contentDirectory)
  const articles = fileNames
    .filter(name => name.endsWith('.md'))
    .map(fileName => {
      const id = fileName.replace(/\.md$/, '')
      const fullPath = path.join(contentDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      
      // Parse markdown content into structured format
      const parsedContent = parseMarkdownContent(content)
      
      return {
        id,
        ...data as ArticleMetadata,
        content: parsedContent,
        description: data.meta_description || extractDescription(content)
      }
    })
  
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

function parseMarkdownContent(content: string): ArticleContent[] {
  const lines = content.split('\n')
  const sections: ArticleContent[] = []
  let currentSection: Partial<ArticleContent> = {}
  let currentText = ''
  
  for (const line of lines) {
    const trimmedLine = line.trim()
    
    // Handle video embeds
    if (trimmedLine.startsWith('<video>') || trimmedLine.includes('youtube.com/embed/')) {
      // Save current section if it has content
      if (currentSection.heading_h2 || currentText.trim()) {
        sections.push({
          ...currentSection,
          text: currentText.trim()
        } as ArticleContent)
        currentSection = {}
        currentText = ''
      }
      
      // Extract video URL and create embed
      const videoUrl = trimmedLine.replace('<video>', '').replace('</video>', '').trim()
      const videoId = extractYouTubeId(videoUrl)
      if (videoId) {
        sections.push({
          type: 'video',
          video_embed: `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
        })
      }
      continue
    }
    
    // Handle H2 headings
    if (trimmedLine.startsWith('## ')) {
      // Save previous section
      if (currentSection.heading_h2 || currentText.trim()) {
        sections.push({
          ...currentSection,
          text: currentText.trim()
        } as ArticleContent)
      }
      
      // Start new section
      currentSection = {
        heading_h2: trimmedLine.replace('## ', '')
      }
      currentText = ''
      continue
    }
    
    // Handle hook (first paragraph in bold)
    if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**') && sections.length === 0 && !currentSection.heading_h2) {
      sections.push({
        type: 'hook',
        text: trimmedLine.replace(/\*\*/g, '')
      })
      continue
    }
    
    // Accumulate text content
    if (trimmedLine && !trimmedLine.startsWith('#') && !trimmedLine.startsWith('---')) {
      currentText += (currentText ? '\n' : '') + trimmedLine
    }
  }
  
  // Add final section
  if (currentSection.heading_h2 || currentText.trim()) {
    sections.push({
      ...currentSection,
      text: currentText.trim()
    } as ArticleContent)
  }
  
  return sections
}

function extractYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/embed\/|youtu\.be\/)([a-zA-Z0-9_-]+)/)
  return match ? match[1] : null
}

function extractDescription(content: string): string {
  const firstParagraph = content.split('\n\n')[0]
  return firstParagraph.substring(0, 160) + '...'
}

export function getArticlesByCategory(category: string): Article[] {
  return getAllArticles().filter(article => 
    article.category.toLowerCase() === category.toLowerCase()
  )
}

export function getRecentArticles(limit: number = 6): Article[] {
  return getAllArticles().slice(0, limit)
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getAllArticles().find(article => article.slug === slug)
}