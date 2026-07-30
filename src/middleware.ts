import NextAuth from 'next-auth';

import { authConfig } from '@/app/(auth)/auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|api/cron|google[a-z0-9]+\\.html|.*\\.[a-zA-Z0-9]+$).*)',
  ],
};
