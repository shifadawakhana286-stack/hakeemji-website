"use client";

import "./Courses.css";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Heart,
  ShoppingCart,
  Eye,
  Star,
  Clock,
  Pill,
  X,
  Check,
  Zap,
} from "lucide-react";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import {
  treatments,
  TreatmentPackage,
} from "@/data/treatments";
import { useCart } from "@/hooks/useCart";

export default function Courses({
  showAll = false,
}: {
  showAll?: boolean;
}) {
  const router = useRouter();
  const { addToCart } = useCart();
  const [selectedTreatment, setSelectedTreatment] =
    useState<TreatmentPackage | null>(null);
  const [addingId, setAddingId] = useState<number | null>(null);
  const [wishlist, setWishlist] = useState<number[]>([]);

  const toggleWishlist = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleAddToCart = (item: TreatmentPackage, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setAddingId(item.id);
    addToCart(item);
    setTimeout(() => {
      setAddingId(null);
    }, 1000);
  };

  const handleBuyNow = (item: TreatmentPackage, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    addToCart(item);
    router.push("/cart");
  };

  return (
    <section id="courses" className="courses-section">
      <Container>
        <SectionTitle
          title="Complete"
          highlight="Treatment Packages"
          subtitle="Choose from our doctor-recommended Unani treatment packages specially designed for different health concerns."
        />

        <div className="courses-grid">
          {(showAll ? treatments : treatments.slice(0, 4)).map((item) => {
            const isAdding = addingId === item.id;
            const isWishlisted = wishlist.includes(item.id);

            return (
              <div className="course-card" key={item.id}>
                {/* Badge */}
                {item.badge && (
                  <span className="course-badge">{item.badge}</span>
                )}

                {/* Wishlist */}
                <button
                  className={`wishlist-btn ${isWishlisted ? "active" : ""}`}
                  onClick={(e) => toggleWishlist(item.id, e)}
                  aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                >
                  <Heart
                    size={18}
                    fill={isWishlisted ? "#ef4444" : "none"}
                    color={isWishlisted ? "#ef4444" : "currentColor"}
                  />
                </button>

                {/* Image */}
                <div className="course-image">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-contain"
                  />
                </div>

                {/* Content */}
                <div className="course-content">
                  <h3 title={item.title}>{item.title}</h3>

                  <p>{item.shortDescription}</p>

                  {/* Rating */}
                  <div className="rating-row">
                    <div className="stars">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={14}
                          fill="#C9A227"
                          color="#C9A227"
                        />
                      ))}
                    </div>

                    <span className="rating">{item.rating}</span>
                  </div>

                  {/* Price */}
                  <div className="price-row">
                    <span className="price">₹{item.price}</span>
                    {item.oldPrice && <span className="old-price">₹{item.oldPrice}</span>}
                  </div>

                  {/* Chips */}
                  <div className="course-meta">
                    <div className="chip">
                      <Clock size={13} />
                      <span>{item.duration}</span>
                    </div>

                    <div className="chip">
                      <Pill size={13} />
                      <span>{item.medicines.length} Meds</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="button-row">
                    <button
                      type="button"
                      className="cart-btn"
                      onClick={(e) => handleAddToCart(item, e)}
                      disabled={isAdding}
                      aria-label={`Add ${item.title} to cart`}
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
                      onClick={(e) => handleBuyNow(item, e)}
                      aria-label={`Buy ${item.title} now`}
                    >
                      <Zap size={15} />
                      <span>Buy Now</span>
                    </button>
                  </div>

                  <Link
                    href={`/treatments/${item.slug}`}
                    className="details-btn"
                  >
                    <Eye size={16} />
                    <span>View Details</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {!showAll && (
          <div className="mt-10 flex justify-center">
            <Link
              href="/courses"
              className="group relative z-20 inline-flex cursor-pointer items-center justify-center gap-3 rounded-full border-2 border-[#0B5D3B] bg-[#0B5D3B] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#0B5D3B]/20 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A227] hover:bg-[#C9A227] hover:shadow-xl hover:shadow-[#C9A227]/30"
            >
              <span>Show All Courses</span>
              <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        )}

        {/* ==========================
            DETAILS MODAL
        =========================== */}

        {selectedTreatment && (
          <div
            className="modal-overlay"
            onClick={() => setSelectedTreatment(null)}
          >
            <div
              className="treatment-modal"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                className="close-btn"
                onClick={() => setSelectedTreatment(null)}
                aria-label="Close modal"
              >
                <X size={22} />
              </button>

              {/* Image */}
              <div className="modal-image">
                <Image
                  src={selectedTreatment.image}
                  alt={selectedTreatment.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <div className="modal-content">
                {selectedTreatment.badge && (
                  <span className="modal-badge">
                    {selectedTreatment.badge}
                  </span>
                )}

                <h2>{selectedTreatment.title}</h2>

                <div className="modal-rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={18}
                      fill="#C9A227"
                      color="#C9A227"
                    />
                  ))}

                  <span>{selectedTreatment.rating}</span>
                </div>

                <div className="modal-price">
                  <h3>₹{selectedTreatment.price}</h3>

                  {selectedTreatment.oldPrice && (
                    <span>₹{selectedTreatment.oldPrice}</span>
                  )}
                </div>

                <div className="duration-box">
                  <Clock size={18} />
                  <span>
                    Treatment Duration :
                    <strong> {selectedTreatment.duration}</strong>
                  </span>
                </div>

                <p className="modal-description">
                  {selectedTreatment.details}
                </p>

                {/* Symptoms */}
                <div className="modal-section">
                  <h4>Recommended For</h4>

                  <ul>
                    {selectedTreatment.symptoms.map((symptom, index) => (
                      <li key={index}>✓ {symptom}</li>
                    ))}
                  </ul>
                </div>

                {/* Medicines */}
                <div className="modal-section">
                  <h4>Package Includes</h4>

                  <ul>
                    {selectedTreatment.medicines.map((medicine, index) => (
                      <li key={index}>💊 {medicine}</li>
                    ))}
                  </ul>
                </div>

                {/* Buttons */}
                <div className="modal-buttons">
                  <button
                    className="cart-btn"
                    onClick={() => handleAddToCart(selectedTreatment)}
                  >
                    <ShoppingCart size={20} />
                    Add to Cart
                  </button>

                  <button
                    className="buy-btn"
                    onClick={() => handleBuyNow(selectedTreatment)}
                  >
                    Buy Now
                  </button>
                </div>

                <a
                  href={`https://wa.me/917037305542?text=Hello%20Shifa%20Dawakhana,%20I%20want%20to%20know%20about%20${encodeURIComponent(
                    selectedTreatment.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-btn"
                >
                  WhatsApp Consultation
                </a>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}

