import { getData } from '../../../lib/data';
import Header from '../../../components/Header';
import Link from 'next/link';

interface Params {
  locale: string;
}

export default async function CategoriesPage({ params }: { params: Params }) {
  const { locale } = params;
  const { categories } = await getData();
  // Determine localized heading manually to avoid using client‑side hooks here.
  const heading =
    locale === 'ar'
      ? 'التصنيفات'
      : locale === 'fr'
      ? 'Catégories'
      : 'Categories';
  return (
    <>
      <Header />
      <main className="flex-1 max-w-5xl mx-auto px-4 py-8 space-y-8">
        <h1 className="text-2xl font-semibold">{heading}</h1>
        {categories.length === 0 ? (
          <p className="text-gray-600">No categories found.</p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <li key={cat.slug} className="border rounded p-4 hover:shadow">
                <Link href={`/${locale}/category/${cat.slug}`}
                  className="block">
                  <h2 className="font-medium mb-1">{cat.name}</h2>
                  <p className="text-sm text-gray-500">
                    {cat.count} {cat.count === 1 ? 'skill' : 'skills'}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}