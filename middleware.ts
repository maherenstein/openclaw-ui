import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ar', 'fr'],
  defaultLocale: 'en'
});

export const config = {
  // Match the root and all locale-prefixed routes
  matcher: ['/', '/(en|ar|fr)/:path*']
};
