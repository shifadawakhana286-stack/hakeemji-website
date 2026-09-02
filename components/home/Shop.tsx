"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import ProductCard from "./Products";
import { ProductCategory, products } from "@/data/products";

interface ShopProps {
  limit?: number;
}

export default function Shop({ limit }: ShopProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | "All">("All");
  const categories: ProductCategory[] = ["Majoon", "Powder", "Drops", "Tablet", "Syrup"];
  const visibleProducts = limit
    ? products.slice(0, limit)
    : selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <section id="shop" className="bg-[#F8F6F1] py-20">
      <Container>
        <SectionTitle
          title="Premium"
          highlight="Shop"
          subtitle="Premium Unani medicines prepared with authentic herbs."
        />

        {!limit && (
          <div className="mt-8 flex flex-wrap justify-center gap-2" aria-label="Product categories">
            {(["All", ...categories] as const).map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  selectedCategory === category
                    ? "bg-[#07583F] text-white"
                    : "bg-white text-[#07583F] ring-1 ring-[#07583F]/20 hover:bg-[#eaf6f0]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        <div className="mt-8 grid grid-cols-2 gap-2.5 sm:gap-4 md:mt-12 md:grid-cols-3 xl:grid-cols-4">
          {visibleProducts.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
            />
          ))}
        </div>

        {!limit && visibleProducts.length === 0 && (
          <p className="mt-10 text-center text-[#567067]">No products are available in this category.</p>
        )}

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
