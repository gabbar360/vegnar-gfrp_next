import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface SitemapUrl {
  url: string;
  lastModified: string;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

const BASE_URL = 'https://vegnargfrp.com';

const STATIC_PAGES: SitemapUrl[] = [
  { url: BASE_URL, lastModified: new Date().toISOString(), changeFrequency: 'daily', priority: 1.0 },
  { url: `${BASE_URL}/about`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/benefits`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/contact`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/blog`, lastModified: new Date().toISOString(), changeFrequency: 'daily', priority: 0.9 },
  { url: `${BASE_URL}/case-studies-global`, lastModified: new Date().toISOString(), changeFrequency: 'weekly', priority: 0.8 },
  { url: `${BASE_URL}/corporate-identity`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/get-quote`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/privacy`, lastModified: new Date().toISOString(), changeFrequency: 'yearly', priority: 0.3 },
  { url: `${BASE_URL}/safety-guidelines`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/technical-specification`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/terms`, lastModified: new Date().toISOString(), changeFrequency: 'yearly', priority: 0.3 },
];

function getBlogPosts(): SitemapUrl[] {
  try {
    const blogDir = path.join(process.cwd(), 'src/data/blog');
    if (!fs.existsSync(blogDir)) return [];
    
    const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.json') || file.endsWith('.md'));
    
    return files.map(file => {
      const filePath = path.join(blogDir, file);
      const stats = fs.statSync(filePath);
      const slug = file.replace(/\.(json|md)$/, '');
      
      return {
        url: `${BASE_URL}/blog/${slug}`,
        lastModified: stats.mtime.toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 0.7
      };
    });
  } catch (error) {
    console.error('Failed to scan blog posts:', error);
    return [];
  }
}

function generateSitemapXML(urls: SitemapUrl[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.url}</loc>
    <lastmod>${url.lastModified}</lastmod>
    <changefreq>${url.changeFrequency}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
}

export async function GET(request: NextRequest) {
  try {
    const blogPosts = getBlogPosts();
    const allUrls = [...STATIC_PAGES, ...blogPosts];
    const sitemapXML = generateSitemapXML(allUrls);

    return new NextResponse(sitemapXML, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    });
  } catch (error) {
    console.error('Sitemap generation error:', error);
    
    const fallbackXML = generateSitemapXML(STATIC_PAGES);
    return new NextResponse(fallbackXML, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=300',
      },
    });
  }
}