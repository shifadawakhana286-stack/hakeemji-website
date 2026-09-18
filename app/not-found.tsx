import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-[#F8FAF7] px-6 py-24 text-center">
      <div className="max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A227]">404</p>
        <h1 className="mt-3 text-4xl font-bold text-[#083C2A]">Page not found</h1>
        <p className="mt-4 text-gray-600">The medicine or treatment link may be outdated or unavailable.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-[#0B5D3B] px-6 py-3 font-semibold text-white transition hover:bg-[#083C2A]">
          Return home
        </Link>
      </div>
    </main>
  );
}
