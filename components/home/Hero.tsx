"use client";

import "./Hero.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import {
  CheckCircle,
  ChevronDown,
  Leaf,
  ShieldPlus,
  Truck,
} from "lucide-react";

import Button from "../common/Button";
import Container from "../common/Container";

const heroImages = [
  "/hero/hero-image.png",
  "/hero/hero-image2.png",
  "/hero/hero-image3.png",
  "/hero/hero-image4.png",
];

export default function Hero() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">

      {/* Background */}
      <div className="hero-bg"></div>

      <div className="hero-glow-left"></div>

      <div className="hero-glow-right"></div>

      <Leaf
        size={70}
        className="hero-leaf hero-leaf-top"
      />

      <Leaf
        size={90}
        className="hero-leaf hero-leaf-bottom"
      />

      <Container>

        <div className="hero-grid">

          {/* ================= LEFT ================= */}

          <div className="hero-left">

            <div className="trust-badge">

              <Leaf
                size={18}
                className="trust-icon"
              />

              <span>
                Trusted Since 1985
              </span>

            </div>

            <h1 className="hero-title">

              Healing Through

              <br />

              <span>
                Authentic Unani
              </span>

              <br />

              Medicine

            </h1>

            <p className="hero-description">

              Shifa Dawakhana – Premium Unani healthcare in
              Meerut. Experience natural healing with experienced
              Hakeem and trusted herbal medicines.

            </p>

            <div className="hero-buttons">

              <Link
                href="/appointment"
                target="_blank"
              >
                <Button className="hero-btn-primary">
                  Book Appointment
                </Button>
              </Link>

              <Link
                href="/shop"
                target="_blank"
              >
                <Button
                  variant="outline"
                  className="hero-btn-outline"
                >
                  Shop Medicines
                </Button>
              </Link>

            </div>

            <div className="hero-features">

              <div className="hero-feature">

                <CheckCircle
                  size={20}
                  className="feature-icon"
                />

                <span>
                  100% Natural
                </span>

              </div>

              <div className="hero-feature">

                <ShieldPlus
                  size={20}
                  className="feature-icon"
                />

                <span>
                  Expert Hakeem
                </span>

              </div>

              <div className="hero-feature">

                <Truck
                  size={20}
                  className="feature-icon"
                />

                <span>
                  Fast Delivery
                </span>

              </div>

            </div>

          </div>


          {/* ================= RIGHT ================= */}

          <div className="hero-right">

            {/* Premium Image Frame */}

            <div className="hero-image-wrapper">

              {/* Gold Corner Decoration */}

              <div className="frame-corner frame-top-left"></div>

              <div className="frame-corner frame-top-right"></div>

              <div className="frame-corner frame-bottom-left"></div>

              <div className="frame-corner frame-bottom-right"></div>


              {/* ================= IMAGE SLIDER ================= */}

              <div className="hero-image-slider">

                {/* Image 1 */}

                <Image
                  src="/hero/hero-image.png"
                  alt="Shifa Dawakhana"
                  width={520}
                  height={650}
                  priority
                  sizes="520px"
                  className={`hero-image hero-slide ${
                    activeImage === 0 ? "active" : ""
                  }`}
                />


                {/* Image 2 */}

                <Image
                  src="/hero/hero-image2.png"
                  alt="Shifa Dawakhana"
                  width={520}
                  height={650}
                  sizes="520px"
                  className={`hero-image hero-slide ${
                    activeImage === 1 ? "active" : ""
                  }`}
                />


                {/* Image 3 */}

                <Image
                  src="/hero/hero-image3.png"
                  alt="Shifa Dawakhana"
                  width={520}
                  height={650}
                  sizes="520px"
                  className={`hero-image hero-slide ${
                    activeImage === 2 ? "active" : ""
                  }`}
                />


                {/* Image 4 */}

                <Image
                  src="/hero/hero-image4.png"
                  alt="Shifa Dawakhana"
                  width={520}
                  height={650}
                  sizes="520px"
                  className={`hero-image hero-slide ${
                    activeImage === 3 ? "active" : ""
                  }`}
                />

              </div>

            </div>


            {/* Floating Leaf */}

            <div className="floating-leaf">

              <Leaf
                size={34}
                className="floating-leaf-icon"
              />

            </div>

          </div>

        </div>

      </Container>


      {/* Bottom Gradient */}

      <div className="hero-bottom-gradient"></div>


      {/* Bottom Glow */}

      <div className="hero-bottom-glow"></div>


      {/* Scroll Indicator */}

      <div className="scroll-indicator">

        <span className="scroll-text">
          Scroll
        </span>

        <div className="scroll-mouse">

          <div className="scroll-dot"></div>

        </div>

        <ChevronDown
          size={18}
          className="scroll-arrow"
        />

      </div>

    </section>
  );
}