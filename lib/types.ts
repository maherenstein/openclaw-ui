export interface Category {
  /** Human‑readable category name. */
  name: string;
  /** URL‑friendly slug. */
  slug: string;
  /** Number of skills in this category. */
  count: number;
}

export interface Skill {
  /** Skill name (e.g., `achurch`). */
  name: string;
  /** URL‑friendly slug derived from the name. */
  slug: string;
  /** Short description extracted from the README. */
  description: string;
  /** Name of the category this skill belongs to. */
  category: string;
  /** Link to the SKILL.md file in the openclaw skills repo. */
  url: string;
}