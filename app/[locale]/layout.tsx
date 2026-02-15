import "../globals.css";
import {NextIntlClientProvider} from "next-intl";
import {getMessages, setRequestLocale} from "next-intl/server";
import {notFound} from "next/navigation";

const SUPPORTED = ["en", "ar", "fr"] as const;

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const {locale} = params;

  if (!SUPPORTED.includes(locale as any)) notFound();

  setRequestLocale(locale);

  // ✅ next-intl will call i18n/request.ts and return messages
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
