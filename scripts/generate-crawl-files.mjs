import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const rootDir = process.cwd()
const baseUrl = 'https://mygamingnews.net'
const articlesDir = path.join(rootDir, 'content', 'articles')
const publicDir = path.join(rootDir, 'public')

const categoryDescriptions = {
  games: 'Curated browser games hub featuring quick-play web experiences, typing games, puzzle experiments, and instant-play picks.',
  news: 'Breaking gaming news, publisher moves, platform updates, and major industry developments.',
  reviews: 'Game reviews, critical analysis, and consumer-facing evaluations of releases and services.',
  tech: 'Gaming hardware, platform technology, AI, cloud gaming, and technical industry coverage.',
  releases: 'Release dates, launch windows, delays, platform availability, and rollout coverage.',
  features: 'Long-form gaming analysis, strategy pieces, and industry context beyond daily headlines.',
  esports: 'Competitive gaming coverage, tournament developments, and scene analysis.',
  sports: 'Traditional sports crossover coverage relevant to the site audience.',
  lifestyle: 'Gaming-adjacent lifestyle, productivity, and culture coverage.',
  motorsports: 'Motorsports coverage published within the site editorial network.',
}

const staticPages = [
  { path: '', priority: 1.0, changefreq: 'daily' },
  { path: '/about', priority: 0.8, changefreq: 'monthly' },
  { path: '/contact', priority: 0.7, changefreq: 'monthly' },
  { path: '/privacy', priority: 0.5, changefreq: 'yearly' },
  { path: '/advertise', priority: 0.6, changefreq: 'monthly' },
  { path: '/search', priority: 0.8, changefreq: 'weekly' },
  { path: '/games/neon-void', priority: 0.9, changefreq: 'weekly' },
  { path: '/games/pizza-shift', priority: 0.9, changefreq: 'weekly' },
]

function readArticles() {
  return fs
    .readdirSync(articlesDir)
    .filter((fileName) => fileName.endsWith('.md') && !fileName.startsWith('_'))
    .map((fileName) => {
      const fullPath = path.join(articlesDir, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        title: data.title,
        slug: data.slug,
        category: String(data.category || '').toLowerCase(),
        date: data.date,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

function escapeXml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

function buildLlmsText(articles) {
  const latestTimestamp = articles.length
    ? Math.max(...articles.map((article) => new Date(article.date).getTime()))
    : Date.now()
  const latestDate = new Date(latestTimestamp).toISOString().slice(0, 10)

  const lines = [
    '# MyGamingNews.net',
    '',
    '> Independent editorial website covering gaming news, reviews, releases, industry shifts, and player-facing analysis.',
    '',
    '## Canonical Site',
    baseUrl,
    '',
    '## Crawl Targets',
    `- Sitemap: ${baseUrl}/sitemap.xml`,
    `- Robots: ${baseUrl}/robots.txt`,
    `- AI guide: ${baseUrl}/llms.txt`,
    '',
    '## Editorial Structure',
    '- Articles are published under category-based paths that follow this pattern:',
    `  ${baseUrl}/{category}/{slug}`,
    '- Articles use frontmatter metadata for title, description, keywords, image, references, and FAQs.',
    '- Article pages may end with an accordion FAQ section when available.',
    '- The homepage and category pages surface recent and featured editorial content.',
    `- The ${baseUrl}/games hub is a curated browser-games discovery page with external playable picks and structured metadata.`,
    '',
    '## Sections',
    ...Object.entries(categoryDescriptions).map(
      ([category, description]) => `- ${baseUrl}/${category} - ${description}`
    ),
    '',
    '## Priority Pages',
    `- ${baseUrl}/about`,
    `- ${baseUrl}/contact`,
    `- ${baseUrl}/privacy`,
    `- ${baseUrl}/advertise`,
    `- ${baseUrl}/search`,
    `- ${baseUrl}/games/neon-void`,
    `- ${baseUrl}/games/pizza-shift`,
    '',
    '## Recent Articles',
    ...articles
      .slice(0, 12)
      .map((article) => `- ${baseUrl}/${article.category}/${article.slug} | ${article.title} | ${article.date}`),
    '',
    '## Crawl Notes',
    '- Prefer canonical HTML pages on the public site as the source of truth.',
    '- Use the most recent article dates for freshness judgments.',
    '- Follow internal links across homepage, section pages, and article bodies for topic relationships.',
    '- Respect standard robots.txt guidance and XML sitemap discovery.',
    '',
    '## Last Updated',
    latestDate,
  ]

  return `${lines.join('\n')}\n`
}

function buildSitemapXml(articles) {
  const latestTimestamp = articles.length
    ? Math.max(...articles.map((article) => new Date(article.date).getTime()))
    : Date.now()
  const latestDate = new Date(latestTimestamp).toISOString()

  const categoryEntries = Object.keys(categoryDescriptions).map((category) => {
    const matchingArticles = articles.filter((article) => article.category === category)
    const categoryTimestamp = matchingArticles.length
      ? Math.max(...matchingArticles.map((article) => new Date(article.date).getTime()))
      : latestTimestamp

    return {
      loc: `${baseUrl}/${category}`,
      lastmod: new Date(categoryTimestamp).toISOString(),
      changefreq: category === 'news' ? 'daily' : 'weekly',
      priority: '0.9',
    }
  })

  const articleEntries = articles.map((article) => ({
    loc: `${baseUrl}/${article.category}/${article.slug}`,
    lastmod: new Date(article.date).toISOString(),
    changefreq: 'monthly',
    priority: '0.8',
  }))

  const staticEntries = staticPages.map((page) => ({
    loc: `${baseUrl}${page.path}`,
    lastmod: latestDate,
    changefreq: page.changefreq,
    priority: String(page.priority),
  }))

  const allEntries = [...staticEntries, ...categoryEntries, ...articleEntries]

  const body = allEntries
    .map(
      (entry) => `  <url>
    <loc>${escapeXml(entry.loc)}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`
}

function main() {
  const articles = readArticles()
  const llmsText = buildLlmsText(articles)
  const sitemapXml = buildSitemapXml(articles)

  fs.writeFileSync(path.join(publicDir, 'llms.txt'), llmsText, 'utf8')
  fs.writeFileSync(path.join(publicDir, 'LLM.txt'), llmsText, 'utf8')
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf8')

  console.log('Generated crawl files:')
  console.log('- public/llms.txt')
  console.log('- public/LLM.txt')
  console.log('- public/sitemap.xml')
}

main()
