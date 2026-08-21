"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TreatmentPackage } from "@/data/treatments";
import { useCart } from "@/hooks/useCart";
import {
  Star,
  Clock,
  Package,
  ShieldCheck,
  MessageCircle,
  ShoppingCart,
  Check,
  Zap,
} from "lucide-react";

interface ProductInfoProps {
  treatment: TreatmentPackage;
}

export default function ProductInfo({
  treatment,
}: ProductInfoProps) {
  const router = useRouter();
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const discountPercent =
    treatment.oldPrice
      ? Math.round(
          ((treatment.oldPrice - treatment.price) /
            treatment.oldPrice) *
            100
        )
      : treatment.discount;

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(treatment);
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  const handleBuyNow = () => {
    addToCart(treatment);
    router.push("/cart");
  };

  return (
    <div className="product-info">

      {/* Badge */}
      {treatment.badge && (
        <span className="product-badge">
          {treatment.badge}
        </span>
      )}

      {/* Title */}
      <h1 className="product-title">
        {treatment.title}
      </h1>

      {/* Rating */}
      <div className="product-rating">
        <Star size={18} fill="currentColor" />

        <span>{treatment.rating}</span>

        <small>(Verified Package)</small>
      </div>

      {/* Price */}
      <div className="price-section">

        <span className="current-price">
          ₹{treatment.price}
        </span>

        {treatment.oldPrice && (
          <span className="old-price">
            ₹{treatment.oldPrice}
          </span>
        )}

        {discountPercent > 0 && (
          <span className="discount">
            {discountPercent}% OFF
          </span>
        )}

      </div>

      {/* Short Description */}
      <p className="product-short-description">
        {treatment.shortDescription}
      </p>

      {/* Quick Information */}
      <div className="product-highlights">

        <div className="highlight-item">
          <Clock size={18} />
          <span>
            Duration : {treatment.duration}
          </span>
        </div>

        <div className="highlight-item">
          <Package size={18} />
          <span>
            Stock : {treatment.stock} Available
          </span>
        </div>

        <div className="highlight-item">
          <ShieldCheck size={18} />
          <span>
            Traditional Unani Herbal Package
          </span>
        </div>

      </div>

      {/* Action Buttons */}
      <div className="product-buttons">

        <button
          type="button"
          className="buy-now-btn"
          onClick={handleBuyNow}
          aria-label={`Buy ${treatment.title} now`}
        >
          <Zap size={18} />
          <span>Buy Now</span>
        </button>

        <button
          type="button"
          className="cart-btn"
          onClick={handleAddToCart}
          disabled={isAdding}
          aria-label={`Add ${treatment.title} to cart`}
        >
          {isAdding ? (
            <>
              <Check size={18} />
              <span>Added to Cart</span>
            </>
          ) : (
            <>
              <ShoppingCart size={18} />
              <span>Add to Cart</span>
            </>
          )}
        </button>

        <a
          href={`https://wa.me/917037305542?text=Hello%20Shifa%20Dawakhana,%20I%20want%20to%20know%20about%20${encodeURIComponent(
            treatment.title
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          <MessageCircle size={18} />
          <span>WhatsApp Consultation</span>
        </a>

      </div>

    </div>
  );
}