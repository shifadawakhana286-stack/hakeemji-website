import { notFound } from "next/navigation";
import { treatments } from "@/data/treatments";

// Components (Abhi banayenge next step me)
import ProductGallery from "./components/ProductGallery";
import ProductInfo from "./components/ProductInfo";
import ProductTabs from "./components/ProductTabs";
import FAQ from "./components/FAQ";
import RelatedProducts from "./components/RelatedProducts";

import "./ProductPage.css";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function TreatmentPage({ params }: Props) {
  const { slug } = await params;

  const treatment = treatments.find(
    (item) => item.slug === slug
  );

  if (!treatment) {
    notFound();
  }

  const relatedTreatments = treatments
    .filter((item) => item.slug !== slug)
    .slice(0, 4);

  return (
    <main className="product-page">

      {/* Breadcrumb */}
      <div className="breadcrumb">
        Home / Treatments / {treatment.title}
      </div>

      {/* Top Section */}
      <section className="product-top">

        <ProductGallery
          images={treatment.images}
          title={treatment.title}
        />

        <ProductInfo
          treatment={treatment}
        />

      </section>

      {/* Tabs */}
      <ProductTabs
        treatment={treatment}
      />

      {/* FAQ */}
      <FAQ
        faqs={treatment.faqs}
      />

      {/* Related Products */}
      <RelatedProducts
        products={relatedTreatments}
      />

    </main>
  );
}