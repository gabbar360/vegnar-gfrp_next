export interface SitemapUrl {
  url: string;
  lastModified: string;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export interface CMSPost {
  id: string;
  slug: string;
  modified: string;
  type: 'post' | 'page' | 'product';
  title?: string;
  status?: string;
}

export interface CMSCategory {
  id: string;
  slug: string;
  name: string;
  count: number;
}

export interface SitemapConfig {
  baseUrl: string;
  cmsApiUrl?: string;
  cmsApiToken?: string;
  revalidateInterval: number;
  maxUrls: number;
}