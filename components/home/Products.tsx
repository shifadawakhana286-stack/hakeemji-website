"use client";

import "./Products.css";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ShoppingCart,
  Eye,
  ChevronLeft,
  ChevronRight,
  Check,
  Zap,
} from "lucide-react";

import { Product } from "@/data/products";
import { useCart } from "@/hooks/useCart";

interface Props {
  item: Product;
}

export default function ProductCard({ item }: Props) {
  const router = useRouter();
  const [currentImage, setCurrentImage] = useState(0);
  const [isAdding, setIsAdding] = useState(false);

  const { addToCart } = useCart();

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage((prev) =>
      prev === item.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage((prev) =>
      prev === 0 ? item.images.length - 1 : prev - 1
    );
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    addToCart(item);
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  const handleBuyNow = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(item);
    router.push("/cart");
  };

  return (
    <div className="product-card">
      {/* Product Image */}
      <div className="product-image-wrapper">
        <Image
          src={item.images[currentImage]}
          alt={item.name}
          width={500}
          height={500}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="product-image"
        />

        {item.images.length > 1 && (
          <>
            <button
              className="image-arrow left"
              onClick={prevImage}
              aria-label="Previous image"
              type="button"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              className="image-arrow right"
              onClick={nextImage}
              aria-label="Next image"
              type="button"
            >
              <ChevronRight size={20} />
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
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentImage(index);
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="product-content">
        <h3 className="product-title" title={item.name}>
          {item.name}
        </h3>

        <div className="product-price-row">
          <span className="product-price">₹{item.price}</span>
          {item.oldPrice && (
            <span className="product-old-price">₹{item.oldPrice}</span>
          )}
        </div>

        {/* Buttons */}
        <div className="product-actions">
          <button
            type="button"
            className="cart-btn"
            onClick={handleAddToCart}
            disabled={isAdding}
            aria-label={`Add ${item.name} to cart`}
          >
            {isAdding ? (
              <>
                <Check size={16} />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingCart size={16} />
                <span>Add Cart</span>
              </>
            )}
          </button>

          <button
            type="button"
            className="buy-btn"
            onClick={handleBuyNow}
            aria-label={`Buy ${item.name} now`}
          >
            <Zap size={15} />
            <span>Buy Now</span>
          </button>
        </div>

        {/* Details */}
        <Link
          href={`/shop/${item.id}`}
          className="details-link"
        >
          <button type="button" className="details-btn">
            <Eye size={16} />
            <span>View Details</span>
          </button>
        </Link>
      </div>
    </div>
  );
}