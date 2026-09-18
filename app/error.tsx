"use client";

export default function Error({
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-[#F8FAF7] px-6 py-24 text-center">
      <div className="max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A227]">Sorry</p>
        <h1 className="mt-3 text-4xl font-bold text-[#083C2A]">Something went wrong</h1>
        <p className="mt-4 text-gray-600">Please try loading this page again.</p>
        <button type="button" onClick={unstable_retry} className="mt-8 rounded-full bg-[#0B5D3B] px-6 py-3 font-semibold text-white transition hover:bg-[#083C2A]">
          Try again
        </button>
      </div>
    </main>
  );
}
