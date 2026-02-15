"use client";
import Header from '../../../components/Header';
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations();
  return (
    <>
      <Header />
      <main className="flex-1 max-w-5xl mx-auto px-4 py-8 space-y-4">
        <h1 className="text-2xl font-semibold">{t('about.title')}</h1>
        <p className="text-gray-700">{t('about.description')}</p>
      </main>
    </>
  );
}