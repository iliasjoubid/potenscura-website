import type { Metadata } from 'next';
import { paginas } from './gegevens';

export function meta(sleutel: keyof typeof paginas): Metadata {
  const p = paginas[sleutel];
  const beeld = { url: `/og/${sleutel}.png`, width: 1200, height: 630, alt: p.h1 };
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: p.pad },
    openGraph: { type: 'website', locale: 'nl_NL', siteName: 'Potens Cura', url: p.pad, title: p.title, description: p.description, images: [beeld] },
    twitter: { card: 'summary_large_image', title: p.title, description: p.description, images: [beeld.url] },
  };
}
