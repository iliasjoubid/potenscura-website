import type { MetadataRoute } from 'next';
import { concept } from '@/lib/gegevens';
import { volledig } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  const nietIndexeren = concept || process.env.VERCEL_ENV === 'preview';
  return {
    rules: nietIndexeren ? { userAgent: '*', disallow: '/' } : { userAgent: '*', allow: '/' },
    sitemap: volledig('/sitemap.xml'),
  };
}
