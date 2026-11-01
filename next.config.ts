import type { NextConfig } from 'next';
import { concept } from './lib/gegevens';

const config: NextConfig = {
  async headers() {
    return concept ? [{ source: '/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] }] : [];
  },
  images: { unoptimized: true },
  poweredByHeader: false,
  turbopack: {
    root: __dirname,
    rules: { '*.css': { loaders: ['@tailwindcss/turbopack'], as: '*.css' } },
  },
  outputFileTracingRoot: __dirname,
};
export default config;
