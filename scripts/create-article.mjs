import fs from 'fs'
import path from 'path'

const rootDir = process.cwd()
const templatePath = path.join(rootDir, 'content', 'templates', '_template-default.md')
const articlesDir = path.join(rootDir, 'content', 'articles')

const args = process.argv.slice(2)

const getArg = (name) => {
  const index = args.findIndex((arg) => arg === `--${name}`)
  if (index === -1) return undefined
  return args[index + 1]
}

const hasFlag = (name) => args.includes(`--${name}`)

const printHelp = () => {
  console.log(`
Create a new article markdown file from the default template.

Usage:
  npm run article:new -- --slug your-article-slug [--title "Article Title"] [--category News] [--author Abeelyn]

Options:
  --slug       Required. Output filename slug.
  --title      Optional. Prefills the title placeholder.
  --category   Optional. Defaults to News.
  --author     Optional. Defaults to Abeelyn.
  --date       Optional. Defaults to today's date in YYYY-MM-DD.
  --force      Overwrite the file if it already exists.
  --help       Show this help message.
`)
}

if (hasFlag('help')) {
  printHelp()
  process.exit(0)
}

const slug = getArg('slug')
if (!slug) {
  console.error('Missing required argument: --slug')
  printHelp()
  process.exit(1)
}

if (!fs.existsSync(templatePath)) {
  console.error(`Template file not found: ${templatePath}`)
  process.exit(1)
}

const title = getArg('title') ?? '{{TITLE}}'
const category = getArg('category') ?? 'News'
const author = getArg('author') ?? 'Abeelyn'
const date = getArg('date') ?? new Date().toISOString().slice(0, 10)
const outputPath = path.join(articlesDir, `${slug}.md`)

if (fs.existsSync(outputPath) && !hasFlag('force')) {
  console.error(`Article already exists: ${outputPath}`)
  console.error('Use --force if you want to overwrite it.')
  process.exit(1)
}

let template = fs.readFileSync(templatePath, 'utf8')

template = template
  .replaceAll('{{SLUG}}', slug)
  .replaceAll('{{TITLE}}', title)
  .replaceAll('{{CATEGORY}}', category)
  .replaceAll('{{AUTHOR}}', author)
  .replaceAll('{{DATE}}', date)
  .replaceAll('{{META_TITLE}}', title === '{{TITLE}}' ? '{{META_TITLE}}' : title)

fs.writeFileSync(outputPath, template, 'utf8')

console.log(`Created article template: ${outputPath}`)
