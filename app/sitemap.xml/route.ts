import { NextResponse } from 'next/server';
import { getAllArticles } from '../lib/markdown';

export async function GET() {
  const baseUrl = 'https://mygamingnews.net';
  const articles = getAllArticles();
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/privacy',
    '/advertise',
    '/search',
    '/news',
    '/reviews',
    '/tech',
    '/releases',
    '/features',
    '/esports',
    '/sports',
    '/lifestyle',
    '/motorsports'
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.map(page => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
${articles.map(article => `
  <url>
    <loc>${baseUrl}/${article.category.toLowerCase()}/${article.slug}</loc>
    <lastmod>${new Date(article.date).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`).join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  });
}