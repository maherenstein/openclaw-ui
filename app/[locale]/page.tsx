"use client";

import Header from '../../components/Header';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function HomePage() {
  const t = useTranslations();
  const locale = t.locale;
  return (
    <>
      <Header />
      <main className="flex-1 max-w-5xl mx-auto px-4 py-8 space-y-8">
        <h1 className="text-3xl font-semibold">
          {t('home.subtitle')}
        </h1>
        <p className="text-gray-700 leading-relaxed">
          {t('home.intro')}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <Link
            href={`/${locale}/categories`}
            className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded text-center"
          >
            {t('home.cta.browse')}
          </Link>
          <Link
            href={`/${locale}/search`}
            className="block bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded text-center"
          >
            {t('home.cta.search')}
          </Link>
          <Link
            href={`/${locale}/recommend`}
            className="block bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded text-center"
          >
            {t('home.cta.recommend')}
          </Link>
          <Link
            href={`/${locale}/about`}
            className="block bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-3 rounded text-center"
          >
            {t('home.cta.install')}
          </Link>
        </div>
      </main>
    </>
  );
}