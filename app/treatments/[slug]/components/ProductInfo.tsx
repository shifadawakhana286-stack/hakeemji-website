"use client";

import { TreatmentPackage } from "@/data/treatments";
import {
  Star,
  Clock,
  Package,
  ShieldCheck,
  MessageCircle,
  ShoppingCart,
} from "lucide-react";

interface ProductInfoProps {
  treatment: TreatmentPackage;
}

export default function ProductInfo({
  treatment,
}: ProductInfoProps) {

  const discountPercent =
    treatment.oldPrice
      ? Math.round(
          ((treatment.oldPrice - treatment.price) /
            treatment.oldPrice) *
            100
        )
      : treatment.discount;

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

        <span className="discount">
          {discountPercent}% OFF
        </span>

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

        <button className="buy-now-btn">
          Buy Now
        </button>

        <button className="cart-btn">
          <ShoppingCart size={18} />
          Add to Cart
        </button>

        <a
          href={`https://wa.me/91XXXXXXXXXX?text=Hello, I want to order ${encodeURIComponent(
            treatment.title
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          <MessageCircle size={18} />
          Order on WhatsApp
        </a>

      </div>

    </div>
  );
}