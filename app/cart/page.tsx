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

  const whatsappMessage = encodeURIComponent(

`🌿 *SHIFA DAWAKHANA*

I would like to place an order.

----------------------------

${cart.map(item =>

`• ${item.name}

Qty : ${item.quantity}

Price : ₹${item.price}

`).join("\n")}

----------------------------

Total Items : ${totalItems}

Grand Total : ₹${grandTotal}

I have completed the payment.

I will attach my payment screenshot.

Please confirm my order.

Thank You.`

);

  if (cart.length === 0) {

    return (

<section className="cart-page empty-cart">

<div className="empty-box">

<ShoppingBag size={80}/>

<h1>Your Cart is Empty</h1>

<p>

Looks like you haven't added any herbal medicines yet.

</p>

<Link
href="/#shop"
className="empty-btn"
>

Continue Shopping

</Link>

</div>

</section>

);

}

return(

<section className="cart-page">

<div className="cart-container">

<Link
href="/#shop"
className="back-btn"
>

<ArrowLeft size={18}/>

Continue Shopping

</Link>

<div className="cart-header">

<div className="cart-title">

<h1>

Shopping Cart

</h1>

<p>

{totalItems} Item(s) in your cart

</p>

</div>

<button

className="clear-cart-btn"

onClick={clearCart}

>

Clear Cart

</button>

</div>

<div className="cart-grid">

{/* LEFT */}

<div className="cart-products">

        {cart.map((item) => (

          <div
            key={item.id}
            className="cart-card"
          >

            <div className="cart-card-inner">

              {/* IMAGE */}

              <div className="product-image">

                <Image
                  src={item.images[0]}
                  alt={item.name}
                  width={220}
                  height={220}
                />

              </div>

              {/* DETAILS */}

              <div className="product-details">

                <div>

                  <h2>
                    {item.name}
                  </h2>

                  <p className="product-category">
                    Premium Herbal Medicine
                  </p>

                  <div className="price-row">

                    <span className="price">
                      ₹{item.price}
                    </span>

                    {item.oldPrice && (

                      <span className="old-price">
                        ₹{item.oldPrice}
                      </span>

                    )}

                  </div>

                </div>

                {/* Bottom */}

                <div className="bottom-row">

                  {/* Quantity */}

                  <div className="qty-box">

                    <button
                      className="qty-btn"
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                    >

                      <Minus size={18}/>

                    </button>

                    <div className="qty-number">

                      {item.quantity}

                    </div>

                    <button
                      className="qty-btn"
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                    >

                      <Plus size={18}/>

                    </button>

                  </div>

                  {/* Total */}

                  <div className="total-box">

                    <span>

                      Total

                    </span>

                    <h3>

                      ₹{item.price * item.quantity}

                    </h3>

                  </div>

                  {/* Remove */}

                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                  >

                    <Trash2 size={18}/>

                    Remove

                  </button>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* RIGHT SIDE */}

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
            <span className="free-text">
              FREE
            </span>
          </div>

          <div className="summary-row">
            <span>GST</span>
            <span>Included</span>
          </div>

          <div className="summary-row total">

            <span>Total</span>

            <span>₹{grandTotal}</span>

          </div>

        </div>

        {/* BENEFITS */}

        <div className="benefits">

          <div className="benefit">

            <Truck size={20} />

            <span>
              Free Delivery Across India
            </span>

          </div>

          <div className="benefit">

            <ShieldCheck size={20} />

            <span>
              100% Secure Checkout
            </span>

          </div>

          <div className="benefit">

            <BadgeCheck size={20} />

            <span>
              Authentic Herbal Medicines
            </span>

          </div>

        </div>

        {/* PAYMENT */}

        <div className="payment-box">

          <div className="payment-title">

            <CreditCard size={22} />

            <h3>
              Payment Instructions
            </h3>

          </div>

          <p>

            Please complete your payment first.

            <br /><br />

            After successful payment, take a screenshot
            of the payment confirmation.

            <br /><br />

            Click the WhatsApp button below and attach
            the payment screenshot before sending
            your order.

          </p>

        </div>

        {/* BUTTONS */}

        <button className="checkout-btn">

          <CreditCard size={20} />

          Proceed to Payment

        </button>

        <a

          href={`https://wa.me/917037305542?text=${whatsappMessage}`}

          target="_blank"

          rel="noopener noreferrer"

          className="whatsapp-btn"

        >

          <MessageCircle size={22}/>

          Order on WhatsApp

        </a>

        <button

          className="clear-cart-btn"

          onClick={clearCart}

        >

          Clear Cart

        </button>

      </div>

    </div>

  </div>

</section>

);

}