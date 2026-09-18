

import Shop from "@/components/home/Shop";
import BackHomeLink from "@/components/common/BackHomeLink";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unani Medicines Shop",
  description: "Browse traditional Unani medicines and herbal formulations from Shifa Dawakhana.",
};

export default function ShopPage() {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-5 pb-2 pt-24 lg:px-8">
        <BackHomeLink />
      </div>
      <Shop />
    </main>
  );
}