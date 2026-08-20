import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { TreatmentPackage } from "@/data/treatments";

interface RelatedProductsProps {
  products: TreatmentPackage[];
}

export default function RelatedProducts({
  products,
}: RelatedProductsProps) {
  return (
    <section className="related-products">

      <div className="section-heading">
        <h2>Related Treatment Packages</h2>
        <p>
          You may also be interested in these healthcare treatment packages.
        </p>
      </div>

      <div className="related-grid">

        {products.map((product) => {

          const discount =
            product.oldPrice
              ? Math.round(
                  ((product.oldPrice - product.price) /
                    product.oldPrice) *
                    100
                )
              : product.discount;

          return (
            <div
              className="related-card"
              key={product.id}
            >

              <Link href={`/treatments/${product.slug}`}>

                <div className="related-image">

                  <Image
                    src={product.image}
                    alt={product.title}
                    width={350}
                    height={350}
                  />

                  {product.badge && (
                    <span className="related-badge">
                      {product.badge}
                    </span>
                  )}

                </div>

                <div className="related-content">

                  <h3>{product.title}</h3>

                  <div className="related-rating">

                    <Star
                      size={16}
                      fill="currentColor"
                    />

                    <span>{product.rating}</span>

                  </div>

                  <div className="related-price">

                    <span className="price">
                      ₹{product.price}
                    </span>

                    {product.oldPrice && (
                      <span className="old-price">
                        ₹{product.oldPrice}
                      </span>
                    )}

                    <span className="discount">
                      {discount}% OFF
                    </span>

                  </div>

                  <button className="view-details-btn">
                    View Details
                  </button>

                </div>

              </Link>

            </div>
          );
        })}

      </div>

    </section>
  );
}