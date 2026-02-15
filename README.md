# OpenClaw Skills Web UI

This Next.js project provides a friendly, multi‑lingual interface for the
[Awesome OpenClaw Skills](https://github.com/VoltAgent/awesome-openclaw-skills)
repository.  It mirrors the repository’s README at build time, parses
categories and skills, and exposes pages for browsing, viewing details and
learning how to install skills.

## Development

1. **Install dependencies**

   Navigate into the project folder and install packages:

   ```bash
   cd openclaw-ui
   npm install
   ```

   This installs Next.js, React, TypeScript, Tailwind CSS, next‑intl and
   supporting libraries.

2. **Run the development server**

   ```bash
   npm run dev
   ```

   Open http://localhost:3000/en in your browser.  The root route redirects
   to `/en` (English).  You can replace `en` with `ar` or `fr` to see the
   Arabic or French versions.  Changes you make to files inside `app/`,
   `lib/` or `components/` will automatically reload the page.

3. **Build for production**

   ```bash
   npm run build
   npm start
   ```

   The site will build static pages and enable incremental regeneration.
   Deploy the output to Vercel or Netlify; both platforms support Next.js
   projects out of the box.

## Project Structure

```
openclaw-ui/
├── app/                # Next.js app directory (App Router)
│   ├── [locale]/       # Routes scoped by locale (en, ar, fr)
│   │   ├── layout.tsx  # Locale-specific layout providing translations
│   │   ├── page.tsx    # Home page
│   │   ├── categories/ # Categories listing
│   │   ├── category/[slug]/ # Category detail
│   │   ├── skill/[slug]/    # Skill detail
│   │   ├── search/     # Search page (stub)
│   │   ├── recommend/  # Recommendation wizard (stub)
│   │   ├── compare/    # Compare skills (stub)
│   │   ├── export/     # Export skills (stub)
│   │   ├── about/      # About/FAQ page
│   │   ├── privacy/    # Privacy placeholder
│   │   └── terms/      # Terms placeholder
│   ├── layout.tsx      # Root layout (minimal)
│   ├── page.tsx        # Redirects to default locale
│   └── globals.css     # Tailwind base styles
├── components/         # Reusable components
│   └── Header.tsx      # Site header with nav and language switcher
├── lib/                # Server‑side data helpers
│   ├── data.ts         # Fetches and parses README from GitHub
│   └── types.ts        # TypeScript interfaces for Category and Skill
├── messages/           # Translation messages for each locale
│   ├── en.json
│   ├── ar.json
│   └── fr.json
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.js   # PostCSS configuration
├── next.config.js      # Next.js configuration with i18n settings
├── tsconfig.json       # TypeScript configuration
├── package.json        # Project metadata and scripts
└── README.md           # This file
```

## Notes

* Only a subset of the required features are implemented here.  Pages such
  as **Search**, **Recommend**, **Compare**, and **Export** are stubs to be
  completed.  The **Categories** and **Skill Detail** pages are fully
  functional and demonstrate the parsing of the repository’s README.
* All UI strings are translated into English, Arabic (RTL) and French.  Use
  the language switcher in the header to swap languages.
* Data is fetched at runtime from GitHub’s raw README; a simple cache is used
  to avoid refetching on every request.  For production, configure
  incremental static regeneration (see `getData()` in `lib/data.ts`).
* Before publishing, add real privacy and terms content and complete the
  unfinished pages.