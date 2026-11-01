import type { MetadataRoute } from 'next';
import { bijgewerkt, paginas } from '@/lib/gegevens';
import { volledig } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [...new Set([...Object.values(paginas).map((p) => p.pad), '/begeleiding', '/traject', '/ouders', '/kwaliteit'])].map((pad) => ({ url: volledig(pad), lastModified: bijgewerkt }));
}
