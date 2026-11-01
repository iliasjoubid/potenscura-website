import type { MetadataRoute } from 'next';
import { bijgewerkt, paginas } from '@/lib/gegevens';
import { volledig } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(paginas).map((p) => ({ url: volledig(p.pad), lastModified: bijgewerkt }));
}
