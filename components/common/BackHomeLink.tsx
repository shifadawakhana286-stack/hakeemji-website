import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BackHomeLink() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B5D3B] transition hover:text-[#C9A227]"
    >
      <ArrowLeft size={17} />
      Back to Home
    </Link>
  );
}
