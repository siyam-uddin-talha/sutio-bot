import { buildRobotsTxt } from '@/lib/sitemap-xml';

export const dynamic = 'force-static';
export const revalidate = 86400;

export async function GET() {
  return new Response(buildRobotsTxt(), {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
