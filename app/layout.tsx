import type { Metadata, Viewport } from 'next';
import './globals.css';
import Kop from '@/components/Kop';
import Voet from '@/components/Voet';
import JsonLd from '@/components/JsonLd';
import { concept, paginas } from '@/lib/gegevens';
import { SITE } from '@/lib/site';
import { organisatieLd, websiteLd } from '@/lib/structured';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: paginas.home.title, template: '%s' },
  description: paginas.home.description,
  robots: concept ? { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } } : { index: true, follow: true },
  icons: { icon: [{ url: '/favicon-32.png', sizes: '32x32', type: 'image/png' }, { url: '/icon-512.png', sizes: '512x512', type: 'image/png' }], apple: '/apple-touch-icon.png' },
  openGraph: { siteName: 'Potens Cura', locale: 'nl_NL', type: 'website' },
  formatDetection: { telephone: false, email: false, address: false },
};
export const viewport: Viewport = { themeColor: '#EEF1F4', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/fonts/commissioner.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a className="overslaan" href="#inhoud">Naar de inhoud</a>
        <Kop />
        <main id="inhoud">{children}</main>
        <Voet />
        <JsonLd data={[organisatieLd(), websiteLd()]} />
      </body>
    </html>
  );
}
