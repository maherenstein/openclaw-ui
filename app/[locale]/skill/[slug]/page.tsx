import { getData } from '../../../../lib/data';
import Header from '../../../../components/Header';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Params {
  locale: string;
  slug: string;
}

export default async function SkillPage({ params }: { params: Params }) {
  const { locale, slug } = params;
  const { skills } = await getData();
  const skill = skills.find((s) => s.slug === slug);
  if (!skill) {
    notFound();
  }
  // Translate headings manually
  const headings = {
    install:
      locale === 'ar' ? 'التثبيت' : locale === 'fr' ? 'Installer' : 'Install',
    manual:
      locale === 'ar'
        ? 'التثبيت اليدوي'
        : locale === 'fr'
        ? 'Installation manuelle'
        : 'Manual installation',
    safety:
      locale === 'ar' ? 'قائمة السلامة' : locale === 'fr' ? 'Liste de sécurité' : 'Safety checklist'
  };
  return (
    <>
      <Header />
      <main className="flex-1 max-w-5xl mx-auto px-4 py-8 space-y-6">
        <h1 className="text-2xl font-semibold">{skill.name}</h1>
        <p className="text-gray-700">{skill.description}</p>
        <p className="text-sm text-gray-600">
          {locale === 'ar'
            ? `التصنيف: ${skill.category}`
            : locale === 'fr'
            ? `Catégorie : ${skill.category}`
            : `Category: ${skill.category}`}
        </p>
        {/* Installation commands */}
        <section>
          <h2 className="text-xl font-semibold mb-2">{headings.install}</h2>
          <div className="space-y-2">
            <div className="bg-gray-100 p-2 rounded font-mono text-sm overflow-x-auto">
              npx clawhub@latest install {skill.slug}
            </div>
            <div className="bg-gray-100 p-2 rounded font-mono text-sm overflow-x-auto">
              clawhub install {skill.slug}
            </div>
          </div>
        </section>
        {/* Manual installation */}
        <section>
          <h2 className="text-xl font-semibold mb-2">{headings.manual}</h2>
          <p className="text-sm text-gray-700">
            {locale === 'ar'
              ? `يمكنك تنزيل المجلد الخاص بالمهارة ووضعه في أحد المسارات التالية: ~/.openclaw/skills/ للتثبيت العالمي أو <project>/skills/ لمشروع معين.`
              : locale === 'fr'
              ? `Vous pouvez copier le dossier de la compétence vers l’un des emplacements suivants : ~/.openclaw/skills/ pour une installation globale ou <project>/skills/ pour un projet spécifique.`
              : `Copy the skill folder into one of these locations: ~/.openclaw/skills/ for a global install or <project>/skills/ for a specific project.`}
          </p>
        </section>
        {/* Safety panel */}
        <section>
          <h2 className="text-xl font-semibold mb-2">{headings.safety}</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>
              {locale === 'ar'
                ? 'تحقق من تقرير VirusTotal على ClawHub لمعرفة إذا كانت المهارة آمنة.'
                : locale === 'fr'
                ? 'Vérifiez le rapport VirusTotal sur ClawHub pour voir si la compétence est sûre.'
                : 'Check the VirusTotal report on ClawHub to see if the skill is safe.'}
            </li>
            <li>
              {locale === 'ar'
                ? 'راجع الكود المصدري للمهارة لمعرفة ما تقوم به.'
                : locale === 'fr'
                ? 'Examinez le code source de la compétence pour comprendre ce qu’elle fait.'
                : 'Review the skill’s source code to understand what it does.'}
            </li>
          </ul>
        </section>
        {/* Link to source */}
        <section>
          <Link href={skill.url} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            View source on GitHub
          </Link>
        </section>
      </main>
    </>
  );
}