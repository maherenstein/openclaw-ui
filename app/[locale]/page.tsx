import Header from "../../components/Header";
import Link from "next/link";
import {getTranslations} from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations();

  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-8">
        <h1 className="text-3xl font-semibold">{t("home.subtitle")}</h1>
        <p className="text-gray-700 leading-relaxed">{t("home.intro")}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/categories" className="rounded-lg bg-blue-600 px-5 py-3 text-center text-white hover:bg-blue-700">
            {t("home.cta.browse")}
          </Link>
          <Link href="/search" className="rounded-lg bg-green-600 px-5 py-3 text-center text-white hover:bg-green-700">
            {t("home.cta.search")}
          </Link>
          <Link href="/recommend" className="rounded-lg bg-purple-600 px-5 py-3 text-center text-white hover:bg-purple-700">
            {t("home.cta.recommend")}
          </Link>
          <Link href="/about" className="rounded-lg bg-yellow-600 px-5 py-3 text-center text-white hover:bg-yellow-700">
            {t("home.cta.install")}
          </Link>
        </div>
      </main>
    </>
  );
}
