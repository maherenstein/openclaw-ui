"use client";
import Header from '../../../components/Header';
import { useTranslations } from 'next-intl';

export default function RecommendPage() {
  const t = useTranslations();
  return (
    <>
      <Header />
      <main className="flex-1 max-w-5xl mx-auto px-4 py-8 space-y-4">
        <h1 className="text-2xl font-semibold">{t('recommend.title')}</h1>
        <p className="text-gray-600">
          This recommendation wizard is a work in progress. In a future release, you’ll
          be able to answer a few questions and receive suggested skills.
        </p>
      </main>
    </>
  );
}