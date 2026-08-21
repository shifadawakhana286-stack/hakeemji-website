import Link from "next/link";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import ProductCard from "./Products";
import { products } from "@/data/products";

interface ShopProps {
  limit?: number;
}

export default function Shop({ limit }: ShopProps) {
  return (
    <section id="shop" className="bg-[#F8F6F1] py-20">
      <Container>
        <SectionTitle
          title="Premium"
          highlight="Shop"
          subtitle="Premium Unani medicines prepared with authentic herbs."
        />

        <div className="mt-8 grid grid-cols-2 gap-2.5 sm:gap-4 md:mt-12 md:grid-cols-3 xl:grid-cols-4">
          {(limit ? products.slice(0, limit) : products).map((item) => (
            <ProductCard
              key={item.id}
              item={item}
            />
          ))}
        </div>

        {/* Show All Products Button - Only on Home */}
        {limit && (
          <div className="mt-10 flex justify-center md:mt-12">
            <Link
              href="/shop"
              className="group inline-flex items-center gap-3 rounded-full bg-[#07583F] px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#064A35] hover:shadow-xl md:px-10 md:py-4 md:text-lg"
            >
              <span>Show All Products</span>

              <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}