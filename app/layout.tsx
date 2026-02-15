import "./globals.css";
import {NextIntlClientProvider} from "next-intl";
import {getMessages, setRequestLocale} from "next-intl/server";
import {notFound} from "next/navigation";

const SUPPORTED_LOCALES = ["en", "ar", "fr"] as const;

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const {locale} = params;

  if (!SUPPORTED_LOCALES.includes(locale as any)) {
    notFound();
  }

  // ✅ This is the missing piece:
  setRequestLocale(locale);

  // ✅ Get messages from next-intl (uses i18n/request.ts)
  const messages = await getMessages();

  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir}>
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
