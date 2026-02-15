// Root layout.  This file is required for Next.js App Router.  It wraps
// everything except locale‑specific layouts.  We deliberately do not set
// language or direction here, leaving that to the [locale]/layout.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}