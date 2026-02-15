import Header from '../../../components/Header';
export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 max-w-5xl mx-auto px-4 py-8 space-y-4">
        <h1 className="text-2xl font-semibold">Terms & Conditions</h1>
        <p className="text-gray-700">
          This is a placeholder for the terms of use. Provide your own
          disclaimer and terms here before publishing.
        </p>
      </main>
    </>
  );
}