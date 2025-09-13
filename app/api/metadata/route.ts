import { NextRequest, NextResponse } from 'next/server';
import { getAllArticles } from '../../lib/markdown';

// Force fresh deployment - TypeScript fix applied

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');
  const slug = searchParams.get('slug');
  const category = searchParams.get('category');

  const baseUrl = 'https://mygamingnews.net';
  const articles = getAllArticles();

  try {
    switch (type) {
      case 'article':
        if (!slug) {
          return NextResponse.json({ error: 'Slug required for article metadata' }, { status: 400 });
        }
        
        const article = articles.find(a => a.slug === slug);
        if (!article) {
          return NextResponse.json({ error: 'Article not found' }, { status: 404 });
        }

        return NextResponse.json({
          title: article.meta_title || article.title,
          description: article.meta_description || article.description,
          url: `${baseUrl}/${article.category.toLowerCase()}/${article.slug}`,
          image: article.image ? `${baseUrl}${article.image}` : `${baseUrl}/images/Mygamingnewslogo.png`,
          author: article.author,
          publishedTime: new Date(article.date).toISOString(),
          modifiedTime: new Date(article.date).toISOString(),
          section: article.category,
          tags: [article.primary_keyword, ...(article.secondary_keywords || [])].filter(Boolean),
          wordCount: article.word_count || 600
        });

      case 'category':
        if (!category) {
          return NextResponse.json({ error: 'Category required for category metadata' }, { status: 400 });
        }

        const categoryArticles = articles.filter(a => a.category.toLowerCase() === category.toLowerCase());
        
        return NextResponse.json({
          title: `${category} - MyGamingNews.net`,
          description: `Latest ${category.toLowerCase()} articles and coverage from MyGamingNews.net`,
          url: `${baseUrl}/${category.toLowerCase()}`,
          articleCount: categoryArticles.length,
          latestArticles: categoryArticles.slice(0, 5).map(a => ({
            title: a.title,
            slug: a.slug,
            date: a.date,
            author: a.author
          }))
        });

      case 'sitemap-data':
        return NextResponse.json({
          articles: articles.map(a => ({
            slug: a.slug,
            category: a.category.toLowerCase(),
            lastModified: new Date(a.date).toISOString(),
            changeFreq: 'monthly',
            priority: 0.9
          })),
          categories: ['news', 'reviews', 'tech', 'releases', 'features', 'esports', 'sports', 'lifestyle', 'motorsports'],
          staticPages: [
            { url: '', priority: 1.0, changeFreq: 'daily' },
            { url: '/about', priority: 0.8, changeFreq: 'monthly' },
            { url: '/contact', priority: 0.7, changeFreq: 'monthly' },
            { url: '/privacy', priority: 0.5, changeFreq: 'yearly' },
            { url: '/advertise', priority: 0.6, changeFreq: 'monthly' },
            { url: '/search', priority: 0.8, changeFreq: 'weekly' }
          ]
        });

      case 'stats':
        const categoryStats = articles.reduce((acc, article) => {
          const cat = article.category.toLowerCase();
          acc[cat] = (acc[cat] || 0) + 1;
          return acc;
        }, {} as Record<string, number>);

        return NextResponse.json({
          totalArticles: articles.length,
          categoryCounts: categoryStats,
          latestUpdate: Math.max(...articles.map(a => new Date(a.date).getTime())),
          authors: Array.from(new Set(articles.map(a => a.author))),
          averageWordCount: Math.round(articles.reduce((sum, a) => sum + (a.word_count || 600), 0) / articles.length)
        });

      default:
        return NextResponse.json({ error: 'Invalid metadata type' }, { status: 400 });
    }
  } catch (error) {
    console.error('Metadata API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}