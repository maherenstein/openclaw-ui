"use client";
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

/**
 * Site header with navigation links and language selector.
 */
export default function Header() {
  const t = useTranslations();
  // Extract locale from the current route (first segment)
  const params = useParams() as { locale: string };
  const locale = params.locale || 'en';
  const pathname = usePathname();

  // Generate language switcher links by replacing the first path segment.
  const buildLocalePath = (targetLocale: string) => {
    // Remove leading slash and split path
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length === 0) return `/${targetLocale}`;
    segments[0] = targetLocale;
    return '/' + segments.join('/');
  };

  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Title */}
        <Link href={`/${locale}`} className="font-bold text-lg">
          {t('home.title')}
        </Link>
        {/* Navigation links */}
        <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse rtl:space-x-reverse:space-x-reverse">
          <Link href={`/${locale}/categories`} className="text-sm hover:underline">
            {t('nav.categories')}
          </Link>
          <Link href={`/${locale}/recommend`} className="text-sm hover:underline">
            {t('nav.recommend')}
          </Link>
          <Link href={`/${locale}/compare`} className="text-sm hover:underline">
            {t('nav.compare')}
          </Link>
          <Link href={`/${locale}/export`} className="text-sm hover:underline">
            {t('nav.export')}
          </Link>
          <Link href={`/${locale}/about`} className="text-sm hover:underline">
            {t('nav.about')}
          </Link>
        </nav>
        {/* Language selector */}
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          {['en', 'ar', 'fr'].map((lng) => (
            <Link
              key={lng}
              href={buildLocalePath(lng)}
              className={`text-sm px-2 py-1 rounded ${
                lng === locale ? 'bg-gray-200' : 'hover:bg-gray-100'
              }`}
            >
              {lng.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}