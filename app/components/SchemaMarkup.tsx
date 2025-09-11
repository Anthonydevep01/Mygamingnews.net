'use client';

import { useEffect } from 'react';

interface Article {
  title: string;
  slug: string;
  author: string;
  category: string;
  date: string;
  meta_description: string;
  image?: string;
  word_count?: number;
}

interface SchemaMarkupProps {
  type: 'website' | 'article' | 'organization' | 'breadcrumb';
  data?: {
    article?: Article;
    breadcrumbs?: Array<{ name: string; url: string }>;
    pageTitle?: string;
    pageDescription?: string;
    pageUrl?: string;
  };
}

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  useEffect(() => {
    const baseUrl = 'https://mygamingnews.net';
    let schema: any = {};

    switch (type) {
      case 'website':
        schema = {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'MyGamingNews.net',
          description: 'Professional gaming news, reviews, and industry coverage',
          url: baseUrl,
          publisher: {
            '@type': 'Organization',
            name: 'MyGamingNews.net',
            logo: {
              '@type': 'ImageObject',
              url: `${baseUrl}/images/Mygamingnewslogo.png`
            }
          },
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `${baseUrl}/search?q={search_term_string}`
            },
            'query-input': 'required name=search_term_string'
          }
        };
        break;

      case 'organization':
        schema = {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'MyGamingNews.net',
          description: 'Professional gaming news and industry coverage',
          url: baseUrl,
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/images/Mygamingnewslogo.png`,
            width: 400,
            height: 400
          },
          sameAs: [
            // Add social media URLs when available
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            email: 'contact@mygamingnews.net',
            contactType: 'Customer Service'
          }
        };
        break;

      case 'article':
        if (data?.article) {
          const article = data.article;
          schema = {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: article.title,
            description: article.meta_description,
            image: article.image ? `${baseUrl}${article.image}` : `${baseUrl}/images/Mygamingnewslogo.png`,
            author: {
              '@type': 'Person',
              name: article.author
            },
            publisher: {
              '@type': 'Organization',
              name: 'MyGamingNews.net',
              logo: {
                '@type': 'ImageObject',
                url: `${baseUrl}/images/Mygamingnewslogo.png`
              }
            },
            datePublished: new Date(article.date).toISOString(),
            dateModified: new Date(article.date).toISOString(),
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `${baseUrl}/${article.category.toLowerCase()}/${article.slug}`
            },
            articleSection: article.category,
            wordCount: article.word_count || 600,
            genre: 'Gaming News',
            keywords: `${article.category}, gaming, ${article.title.toLowerCase().split(' ').slice(0, 5).join(', ')}`
          };
        }
        break;

      case 'breadcrumb':
        if (data?.breadcrumbs) {
          schema = {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: data.breadcrumbs.map((crumb, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: crumb.name,
              item: `${baseUrl}${crumb.url}`
            }))
          };
        }
        break;
    }

    // Create or update script tag
    const existingScript = document.querySelector(`script[data-schema="${type}"]`);
    if (existingScript) {
      existingScript.textContent = JSON.stringify(schema);
    } else {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-schema', type);
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup on unmount
      const scriptToRemove = document.querySelector(`script[data-schema="${type}"]`);
      if (scriptToRemove) {
        document.head.removeChild(scriptToRemove);
      }
    };
  }, [type, data]);

  return null; // This component doesn't render anything visible
}