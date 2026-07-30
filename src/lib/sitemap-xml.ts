import { SEO_PAGES } from '@/lib/seo-pages';
import { absoluteUrl } from '@/lib/seo';

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function buildSitemapXml() {
  const urls: Array<{ loc: string; changefreq: string; priority: string }> = [
    { loc: absoluteUrl('/'), changefreq: 'daily', priority: '1.0' },
  ];

  for (const slug of Object.keys(SEO_PAGES)) {
    urls.push({
      loc: absoluteUrl(`/${slug}`),
      changefreq: 'weekly',
      priority: '0.8',
    });
  }

  const body = urls
    .map(
      (entry) =>
        `  <url>\n    <loc>${escapeXml(entry.loc)}</loc>\n    <changefreq>${entry.changefreq}</changefreq>\n    <priority>${entry.priority}</priority>\n  </url>`,
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemap.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

export function buildRobotsTxt() {
  return `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${absoluteUrl('/sitemap.xml')}
`;
}
