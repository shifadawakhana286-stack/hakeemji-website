"use client";

import "./page.css";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeft,
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ShieldCheck,
  Truck,
  BadgeCheck,
  CreditCard,
  MessageCircle,
} from "lucide-react";

import { useCart } from "@/hooks/useCart";

export default function CartPage() {
  const {
    cart,
    totalItems,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const shipping = 0;
  const grandTotal = totalPrice + shipping;

  const scrollToPayment = () => {
    const el = document.getElementById("payment-instructions");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const whatsappMessage = encodeURIComponent(
`🌿 *SHIFA DAWAKHANA*

I would like to place an order.

----------------------------

${cart
  .map(
    (item) =>
      `• ${item.name}\nQty : ${item.quantity}\nPrice : ₹${item.price}`
  )
  .join("\n\n")}

----------------------------

Total Items : ${totalItems}
Grand Total : ₹${grandTotal}

I will attach my payment confirmation screenshot.
Please confirm my order.

Thank You.`
  );

  if (cart.length === 0) {
    return (
      <section className="cart-page empty-cart">
        <div className="empty-box">
          <ShoppingBag size={70} />
          <h1>Your Cart is Empty</h1>
          <p>
            Looks like you haven&apos;t added any herbal medicines or treatment packages yet.
          </p>
          <Link href="/shop" className="empty-btn">
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <div className="cart-container">
        <Link href="/shop" className="back-btn">
          <ArrowLeft size={18} />
          Continue Shopping
        </Link>

        <div className="cart-header">
          <div className="cart-title">
            <h1>Shopping Cart</h1>
            <p>{totalItems} Item{totalItems > 1 ? "s" : ""} in your cart</p>
          </div>

          <button
            type="button"
            className="clear-cart-btn-header"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>

        <div className="cart-grid">
          {/* LEFT: PRODUCTS LIST */}
          <div className="cart-products">
            {cart.map((item) => {
              const imageSrc =
                item.images && item.images.length > 0
                  ? item.images[0]
                  : "/logos/logo.png";

              return (
                <div key={item.id} className="cart-card">
                  <div className="cart-card-inner">
                    {/* IMAGE */}
                    <div className="product-image">
                      <Image
                        src={imageSrc}
                        alt={item.name}
                        width={180}
                        height={180}
                        className="object-contain"
                      />
                    </div>

                    {/* DETAILS */}
                    <div className="product-details">
                      <div>
                        <h2>{item.name}</h2>
                        <p className="product-category">
                          {item.category || "Premium Herbal Product"}
                        </p>

                        <div className="price-row">
                          <span className="price">₹{item.price}</span>
                          {item.oldPrice && (
                            <span className="old-price">₹{item.oldPrice}</span>
                          )}
                        </div>
                      </div>

                      {/* Bottom Controls */}
                      <div className="bottom-row">
                        {/* Quantity */}
                        <div className="qty-box">
                          <button
                            type="button"
                            className="qty-btn"
                            onClick={() => decreaseQuantity(item.id)}
                            aria-label={`Decrease quantity for ${item.name}`}
                          >
                            <Minus size={16} />
                          </button>

                          <div className="qty-number">{item.quantity}</div>

                          <button
                            type="button"
                            className="qty-btn"
                            onClick={() => increaseQuantity(item.id)}
                            aria-label={`Increase quantity for ${item.name}`}
                          >
                            <Plus size={16} />
                          </button>
                        </div>

                        {/* Total */}
                        <div className="total-box">
                          <span>Subtotal</span>
                          <h3>₹{item.price * item.quantity}</h3>
                        </div>

                        {/* Remove */}
                        <button
                          type="button"
                          className="remove-btn"
                          onClick={() => removeFromCart(item.id)}
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          <Trash2 size={16} />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE: SUMMARY */}
          <div className="summary-card">
            <h2>Order Summary</h2>

            <div className="summary-details">
              <div className="summary-row">
                <span>Items</span>
                <span>{totalItems}</span>
              </div>

              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹{totalPrice}</span>
              </div>

              <div className="summary-row">
                <span>Shipping</span>
                <span className="free-text">FREE</span>
              </div>

              <div className="summary-row">
                <span>GST / Taxes</span>
                <span>Included</span>
              </div>

              <div className="summary-row total">
                <span>Total Amount</span>
                <span>₹{grandTotal}</span>
              </div>
            </div>

            {/* BENEFITS */}
            <div className="benefits">
              <div className="benefit">
                <Truck size={18} />
                <span>Free Delivery Across India</span>
              </div>

              <div className="benefit">
                <ShieldCheck size={18} />
                <span>100% Secure Order Handling</span>
              </div>

              <div className="benefit">
                <BadgeCheck size={18} />
                <span>Authentic Herbal Formulations</span>
              </div>
            </div>

            {/* PAYMENT INSTRUCTIONS */}
            <div id="payment-instructions" className="payment-box">
              <div className="payment-title">
                <CreditCard size={20} />
                <h3>Payment Instructions</h3>
              </div>

              <p>
                1. Click <strong>Order on WhatsApp</strong> below to send your order details.
                <br /><br />
                2. Our clinical team will share payment QR / UPI info directly.
                <br /><br />
                3. Share your payment screenshot on WhatsApp to confirm delivery!
              </p>
            </div>

            {/* BUTTONS */}
            <a
              href={`https://wa.me/917037305542?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              <MessageCircle size={20} />
              <span>Order on WhatsApp</span>
            </a>

            <button
              type="button"
              className="checkout-btn"
              onClick={scrollToPayment}
            >
              <CreditCard size={18} />
              <span>View Payment Steps</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}