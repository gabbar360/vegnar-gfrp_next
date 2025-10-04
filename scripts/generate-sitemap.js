const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://vegnargfrp.com';
const OUTPUT_PATH = path.join(__dirname, '../public/sitemap.xml');

const STATIC_PAGES = [
  { url: BASE_URL, changefreq: 'daily', priority: '1.0' },
  { url: `${BASE_URL}/about`, changefreq: 'monthly', priority: '0.8' },
  { url: `${BASE_URL}/benefits`, changefreq: 'monthly', priority: '0.8' },
  { url: `${BASE_URL}/contact`, changefreq: 'monthly', priority: '0.8' },
  { url: `${BASE_URL}/blog`, changefreq: 'daily', priority: '0.9' },
  { url: `${BASE_URL}/case-studies-global`, changefreq: 'weekly', priority: '0.8' },
  { url: `${BASE_URL}/corporate-identity`, changefreq: 'monthly', priority: '0.8' },
  { url: `${BASE_URL}/get-quote`, changefreq: 'monthly', priority: '0.8' },
  { url: `${BASE_URL}/privacy`, changefreq: 'yearly', priority: '0.3' },
  { url: `${BASE_URL}/safety-guidelines`, changefreq: 'monthly', priority: '0.8' },
  { url: `${BASE_URL}/technical-specification`, changefreq: 'monthly', priority: '0.8' },
  { url: `${BASE_URL}/terms`, changefreq: 'yearly', priority: '0.3' },
];

function getBlogPosts() {
  try {
    const blogDir = path.join(__dirname, '../src/data/blog');
    if (!fs.existsSync(blogDir)) {
      console.log('No blog directory found, using static pages only');
      return [];
    }
    
    const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.json') || file.endsWith('.md'));
    
    const posts = files.map(file => {
      const filePath = path.join(blogDir, file);
      const stats = fs.statSync(filePath);
      const slug = file.replace(/\.(json|md)$/, '');
      
      return {
        slug,
        modified: stats.mtime.toISOString()
      };
    });
    
    console.log(`Found ${posts.length} blog posts`);
    return posts;
  } catch (error) {
    console.error('Error scanning blog posts:', error.message);
    return [];
  }
}

function generateSitemapXML(pages, posts) {
  const now = new Date().toISOString().split('T')[0];
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add static pages
  pages.forEach(page => {
    xml += `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  });

  // Add dynamic posts
  posts.forEach(post => {
    const lastmod = post.modified ? post.modified.split('T')[0] : now;
    xml += `
  <url>
    <loc>${BASE_URL}/blog/${post.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
  });

  xml += `
</urlset>`;

  return xml;
}

function generateSitemap() {
  console.log('Starting sitemap generation...');
  
  try {
    const posts = getBlogPosts();
    const sitemapXML = generateSitemapXML(STATIC_PAGES, posts);
    
    fs.writeFileSync(OUTPUT_PATH, sitemapXML, 'utf8');
    
    const totalUrls = STATIC_PAGES.length + posts.length;
    console.log(`✅ Sitemap generated successfully with ${totalUrls} URLs`);
    console.log(`📁 Saved to: ${OUTPUT_PATH}`);
    
  } catch (error) {
    console.error('❌ Sitemap generation failed:', error.message);
    
    const fallbackXML = generateSitemapXML(STATIC_PAGES, []);
    fs.writeFileSync(OUTPUT_PATH, fallbackXML, 'utf8');
    console.log(`⚠️  Fallback sitemap generated with ${STATIC_PAGES.length} static URLs`);
  }
}

if (require.main === module) {
  generateSitemap();
}

module.exports = { generateSitemap };