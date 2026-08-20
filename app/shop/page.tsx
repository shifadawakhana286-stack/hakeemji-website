

import Shop from "@/components/home/Shop";
import BackHomeLink from "@/components/common/BackHomeLink";

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