import { notFound } from "next/navigation";
import { treatments } from "@/data/treatments";
import BackHomeLink from "@/components/common/BackHomeLink";

import ProductGallery from "./components/ProductGallery";
import ProductInfo from "./components/ProductInfo";
import type { Metadata } from "next";
import ProductTabs from "./components/ProductTabs";
import FAQ from "./components/FAQ";
import RelatedProducts from "./components/RelatedProducts";

import "./ProductPage.css";


export function generateStaticParams() {
  return treatments.map((treatment) => ({ slug: treatment.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const treatment = treatments.find((item) => item.slug === slug);

  if (!treatment) return {};

  return {
    title: treatment.title,
    description: treatment.shortDescription,
    alternates: { canonical: `/treatments/${treatment.slug}` },
    openGraph: {
      title: treatment.title,
      description: treatment.shortDescription,
      images: [{ url: treatment.image, alt: treatment.title }],
    },
  };
}
interface Props {
  params: Promise<{
    slug: string;
  }>;
}


export const dynamicParams = false;
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

      <BackHomeLink />

      {/* Breadcrumb */}
      <div className="breadcrumb">
        Home / Treatments / {treatment.title}
      </div>

      {/* Top Section */}
      <section className="product-top">

        <ProductGallery
          images={[
            treatment.image,
            ...treatment.images.filter((image) => image !== treatment.image),
          ]}
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