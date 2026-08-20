"use client";

import "./ProductDetails.css";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  Star,
  ShieldCheck,
  Truck,
  Leaf,
  ShoppingCart,
  Zap,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";

import { Product, products } from "@/data/products";
import { useCart } from "@/hooks/useCart";

interface Props {
  product: Product;
}

export default function ProductDetails({ product }: Props) {
  const router = useRouter();
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);

  const relatedProducts = products
    .filter((item) => item.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleBuyNow = () => {
    addToCart(product);
    router.push("/cart");
  };

  return (
    <section className="product-page">
      <div className="product-container">

        <Link href="/shop" className="back-btn">
          <ArrowLeft size={18} />
          Back to Shop
        </Link>

        <div className="product-grid">

          {/* LEFT */}

          <div className="image-column">

            <div className="main-image">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                priority
                className="product-image"
              />
            </div>

            <div className="thumb-row">
              {product.images.map((img, index) => (
                <div
                  key={index}
                  className={`thumb ${
                    selectedImage === index ? "active-thumb" : ""
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={img}
                    alt={product.name}
                    fill
                    className="thumb-image"
                  />
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT */}

          <div className="info-column">

            <span className="badge">
              Premium Herbal Medicine
            </span>

            <h1>{product.name}</h1>

            <div className="rating">
              <Star fill="#facc15" color="#facc15" size={18} />
              <Star fill="#facc15" color="#facc15" size={18} />
              <Star fill="#facc15" color="#facc15" size={18} />
              <Star fill="#facc15" color="#facc15" size={18} />
              <Star fill="#facc15" color="#facc15" size={18} />

              <span>4.9 (200+ Reviews)</span>
            </div>

            <div className="price-box">
              <h2>₹{product.price}</h2>

              {product.oldPrice && (
                <del>₹{product.oldPrice}</del>
              )}
            </div>

            <p className="short-desc">
              {product.shortDescription}
            </p>

            <div className="highlights">

              <div>
                <Leaf size={20} />
                100% Herbal
              </div>

              <div>
                <ShieldCheck size={20} />
                GMP Certified
              </div>

              <div>
                <Truck size={20} />
                Fast Delivery
              </div>

            </div>

            {/* ACTION BUTTONS */}

            <div className="action-buttons">

              <button
                className="cart-btn"
                onClick={handleAddToCart}
              >
                <ShoppingCart size={20} />
                Add to Cart
              </button>

              <button
                className="buy-btn"
                onClick={handleBuyNow}
              >
                <Zap size={18} />
                Buy Now
              </button>

            </div>

            <a
              href={`https://wa.me/917037305542?text=Hello, I want to order ${product.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              Order on WhatsApp
            </a>

          </div>

        </div>

        {/* ======= PART 2 CONTINUES FROM HERE ======= */}
                {/* ================= ABOUT ================= */}

        <div className="section-card">
          <h2>About this Product</h2>

          <p className="description">
            {product.description}
          </p>
        </div>

        {/* ================= INGREDIENTS ================= */}

        <div className="section-card">
          <h2>Natural Ingredients</h2>

          <div className="ingredient-grid">
            {product.ingredients.map((ingredient, index) => (
              <div
                key={index}
                className="ingredient-item"
              >
                <Leaf size={16} />
                {ingredient}
              </div>
            ))}
          </div>
        </div>

        {/* ================= USES ================= */}

        <div className="section-card">
          <h2>Health Benefits</h2>

          <div className="uses-grid">
            {(product.uses ?? []).map((use, index) => (
              <div
                key={index}
                className="use-item"
              >
                <CheckCircle
                  size={18}
                  className="check-icon"
                />

                {use}
              </div>
            ))}
          </div>
        </div>

        {/* ================= DOSAGE ================= */}

        <div className="section-card">
          <h2>Recommended Dosage</h2>

          <div className="info-box">
            <p>{product.dosage}</p>
          </div>
        </div>

        {/* ================= STORAGE ================= */}

        <div className="section-card">
          <h2>Storage Instructions</h2>

          <div className="storage-list">
            {product.storage.map((item, index) => (
              <div
                key={index}
                className="storage-item"
              >
                <CheckCircle
                  size={18}
                  className="storage-icon"
                />

                {item}
              </div>
            ))}
          </div>
        </div>

        {/* ================= DISCLAIMER ================= */}

        <div className="disclaimer-box">
          <h3>Medical Disclaimer</h3>

          <p>
            This product is based on traditional Ayurvedic
            and Unani formulations. Please use it only
            under the guidance of a qualified physician.
            The information provided is for educational
            purposes and should not be considered a
            substitute for professional medical advice,
            diagnosis or treatment.
          </p>
        </div>

        {/* ================= RELATED PRODUCTS ================= */}

        <div className="section-card">
          <h2>You May Also Like</h2>

          <div className="related-products">
            {relatedProducts.map((item) => (
              <Link
                key={item.id}
                href={`/shop/${item.id}`}
                className="related-card"
              >
                <div className="related-image">
                  <Image
                    src={item.images[0]}
                    alt={item.name}
                    fill
                    className="related-img"
                  />
                </div>

                <h4>{item.name}</h4>

                <span className="related-price">
                  ₹{item.price}
                </span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}