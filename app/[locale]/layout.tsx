import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Define supported locales.  If a user navigates to an unsupported locale
// segment, fall back to a 404.
const SUPPORTED_LOCALES = ['en', 'ar', 'fr'] as const;
export const metadata: Metadata = {
  title: 'Awesome OpenClaw Skills',
  description: 'Discover and install skills for your OpenClaw assistant'
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  if (!SUPPORTED_LOCALES.includes(locale as any)) {
    // Show 404 for unknown locales
    notFound();
  }
  // Dynamically import translation messages for the given locale
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (err) {
    notFound();
  }
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}