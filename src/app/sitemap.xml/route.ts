import { buildSitemapXml } from '@/lib/sitemap-xml';

export const dynamic = 'force-static';
export const revalidate = 86400;

export async function GET() {
  return new Response(buildSitemapXml(), {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
