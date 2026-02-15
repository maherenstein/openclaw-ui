"use client";
import Header from '../../../components/Header';
import { useTranslations } from 'next-intl';

export default function SearchPage() {
  const t = useTranslations();
  return (
    <>
      <Header />
      <main className="flex-1 max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-4">{t('search.placeholder')}</h1>
        <p className="text-gray-600">Search functionality is under construction.</p>
      </main>
    </>
  );
}