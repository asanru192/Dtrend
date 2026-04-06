import { MetadataRoute } from 'next';
import { NAV_LINKS } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dtrend.uk';
  
  return NAV_LINKS.map((link) => ({
    url: `${baseUrl}${link.href === '/' ? '' : link.href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: link.href === '/' ? 1 : 0.8,
  }));
}
