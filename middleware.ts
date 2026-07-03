import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match root page and locale prefixes
    '/',
    '/(es|en)/:path*',
    // Match all paths except static assets, internal paths, and api routes
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};
