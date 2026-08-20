"use client";

import "./Products.css";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingCart,
  Eye,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Product } from "@/data/products";
import { useCart } from "@/hooks/useCart";

interface Props {
  item: Product;
}

export default function ProductCard({ item }: Props) {
  const [currentImage, setCurrentImage] = useState(0);

  const { addToCart } = useCart();

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === item.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? item.images.length - 1 : prev - 1
    );
  };

  const handleAddToCart = () => {
  addToCart(item);
};

  const handleBuyNow = () => {
    addToCart(item);
    window.location.href = "/checkout";
  };

  return (
    <div className="product-card">
      {/* Product Image */}

      <div className="product-image-wrapper">
        <Image
          src={item.images[currentImage]}
          alt={item.name}
          width={700}
          height={700}
          className="product-image"
        />

        {item.images.length > 1 && (
          <>
            <button
              className="image-arrow left"
              onClick={prevImage}
            >
              <ChevronLeft size={22} />
            </button>

            <button
              className="image-arrow right"
              onClick={nextImage}
            >
              <ChevronRight size={22} />
            </button>
          </>
        )}

        {item.images.length > 1 && (
          <div className="image-dots">
            {item.images.map((_, index) => (
              <span
                key={index}
                className={
                  currentImage === index
                    ? "dot active"
                    : "dot"
                }
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}

      <div className="product-content">
        <h3 className="product-title">
          {item.name}
        </h3>

        <p className="product-subtitle">
          Premium Herbal Medicine
        </p>

        {/* Buttons */}

        <div className="product-actions">
          <button
            className="cart-btn"
            onClick={handleAddToCart}
          >
            <ShoppingCart size={18} />
            <span>Add to Cart</span>
          </button>

          <button
            className="buy-btn"
            onClick={handleBuyNow}
          >
            Buy Now
          </button>
        </div>

        {/* Details */}

        <Link
          href={`/shop/${item.id}`}
          target="_blank"
          className="details-link"
        >
          <button className="details-btn">
            <Eye size={18} />
            <span>View Details</span>
          </button>
        </Link>
      </div>
    </div>
  );
}