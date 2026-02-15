import { redirect } from 'next/navigation';

export default function RootPage() {
  // Immediately redirect to the default locale (English).
  redirect('/en');
}