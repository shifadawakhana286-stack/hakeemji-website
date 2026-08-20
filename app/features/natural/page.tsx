import "./natural.css";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  CheckCircle,
  Leaf,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function NaturalPage() {
  return (
    <main className="natural-page">

      {/* ================= HERO ================= */}

      <section className="natural-hero">

        <div className="natural-bg"></div>

        <div className="natural-glow-left"></div>
        <div className="natural-glow-right"></div>

        <div className="natural-container">

          {/* LEFT */}

          <div className="natural-left">

            <div className="natural-breadcrumb">

              <Link href="/">Home</Link>

              <span>/</span>

              <Link href="/">Features</Link>

              <span>/</span>

              <strong>100% Natural</strong>

            </div>

            <div className="natural-badge">

              <Leaf size={18} />

              <span>100% Natural Healing</span>

            </div>

            <h1>

              Experience The Power Of

              <span> Pure Herbal </span>

              Unani Medicine

            </h1>

            <p>

              Every formulation at Al Shifa Dawakhana is prepared
              using carefully selected herbs and authentic Unani
              principles, delivering safe and natural healing.

            </p>

            <div className="natural-buttons">

              <Link
                href="/appointment"
                target="_blank"
                className="btn-natural"
              >

                Book Appointment

              </Link>

              <Link
                href="/shop"
                target="_blank"
                className="btn-outline-natural"
              >

                Explore Medicines

              </Link>

            </div>

            <div className="natural-features">

              <div>

                <CheckCircle size={18} />

                Chemical Free

              </div>

              <div>

                <ShieldCheck size={18} />

                Safe Formulations

              </div>

              <div>

                <Sparkles size={18} />

                Authentic Herbs

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="natural-right">

            <div className="natural-image-frame">

              <Image
                src="/features/natural-hero.png"
                alt="Natural Herbs"
                width={550}
                height={650}
                priority
                className="natural-image"
              />

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}