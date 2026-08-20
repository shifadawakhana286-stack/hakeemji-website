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

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
          {(limit ? products.slice(0, limit) : products).map((item) => (
            <ProductCard
              key={item.id}
              item={item}
            />
          ))}
        </div>

        {/* Show All Products Button - Only on Home */}
        {limit && (
          <div className="mt-12 flex justify-center">
            <Link
              href="/shop"
              className="group flex items-center gap-3 rounded-full bg-[#07583F] px-10 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#064A35] hover:shadow-xl"
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