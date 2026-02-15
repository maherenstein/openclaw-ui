"use client";
import Header from '../../../components/Header';
import { useTranslations } from 'next-intl';

export default function ExportPage() {
  const t = useTranslations();
  return (
    <>
      <Header />
      <main className="flex-1 max-w-5xl mx-auto px-4 py-8 space-y-4">
        <h1 className="text-2xl font-semibold">{t('export.title')}</h1>
        <p className="text-gray-600">Exporting selected skills to commands or scripts is not implemented yet.</p>
      </main>
    </>
  );
}