import type { MetadataRoute } from 'next';
import { concept } from '@/lib/gegevens';
import { volledig } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: concept ? { userAgent: '*', disallow: '/' } : { userAgent: '*', allow: '/' },
    sitemap: volledig('/sitemap.xml'),
  };
}
