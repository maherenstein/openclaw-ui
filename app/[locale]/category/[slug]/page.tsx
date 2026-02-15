import { getData } from '../../../../lib/data';
import Header from '../../../../components/Header';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Params {
  locale: string;
  slug: string;
}

export default async function CategoryDetailPage({ params }: { params: Params }) {
  const { locale, slug } = params;
  const { categories, skills } = await getData();
  const category = categories.find((c) => c.slug === slug);
  if (!category) {
    notFound();
  }
  const filtered = skills.filter((s) => s.category === category!.name);
  return (
    <>
      <Header />
      <main className="flex-1 max-w-5xl mx-auto px-4 py-8 space-y-6">
        <h1 className="text-2xl font-semibold">{category!.name}</h1>
        <p className="text-gray-600">
          {filtered.length} {filtered.length === 1 ? 'skill' : 'skills'}
        </p>
        <ul className="space-y-4">
          {filtered.map((skill) => (
            <li key={skill.slug} className="border rounded p-4 hover:shadow">
              <Link href={`/${locale}/skill/${skill.slug}`} className="block">
                <h3 className="font-medium text-lg">{skill.name}</h3>
                <p className="text-sm text-gray-600">{skill.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}