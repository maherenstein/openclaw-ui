import type { Category, Skill } from './types';

// Simple slugify helper: lowercases and replaces non‑alphanumeric chars with hyphens.
function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-');
}

let cache: { categories: Category[]; skills: Skill[]; lastUpdated: string } | null = null;

/**
 * Fetches the raw README from GitHub.
 */
async function fetchReadme(): Promise<string> {
  const res = await fetch(
    'https://raw.githubusercontent.com/VoltAgent/awesome-openclaw-skills/main/README.md'
  );
  if (!res.ok) {
    throw new Error(`Failed to fetch README: ${res.status}`);
  }
  return await res.text();
}

/**
 * Parses the README markdown into structured categories and skills.
 */
function parseReadme(markdown: string): { categories: Category[]; skills: Skill[] } {
  const categories: Category[] = [];
  const skills: Skill[] = [];
  const detailsRegex = /<details[^>]*>\s*<summary>\s*<h3[^>]*>(.*?)<\/h3>\s*<\/summary>([\s\S]*?)<\/details>/g;
  let match: RegExpExecArray | null;
  while ((match = detailsRegex.exec(markdown)) !== null) {
    const [_, rawCategory, body] = match;
    const name = rawCategory.replace(/\([^)]*\)/g, '').trim(); // strip counts in parentheses
    const slug = slugify(name);
    // Extract skill lines
    const skillRegex = /-\s+\[(.*?)\]\((.*?)\)\s*-\s*([^\n\r]*)/g;
    let skillMatch: RegExpExecArray | null;
    const categorySkills: Skill[] = [];
    while ((skillMatch = skillRegex.exec(body)) !== null) {
      const [, skillName, url, desc] = skillMatch;
      const skillSlug = slugify(skillName);
      const description = desc.trim();
      categorySkills.push({
        name: skillName,
        slug: skillSlug,
        description,
        category: name,
        url
      });
    }
    categories.push({ name, slug, count: categorySkills.length });
    skills.push(...categorySkills);
  }
  return { categories, skills };
}

/**
 * Returns parsed data, caching the result in memory.  If the cache is empty,
 * fetches and parses the README.  Intended to be called from server-side
 * functions (e.g., in Next.js route handlers).
 */
export async function getData(): Promise<{
  categories: Category[];
  skills: Skill[];
  lastUpdated: string;
}> {
  if (cache) return cache;
  const markdown = await fetchReadme();
  const { categories, skills } = parseReadme(markdown);
  const lastUpdated = new Date().toISOString();
  cache = { categories, skills, lastUpdated };
  return cache;
}