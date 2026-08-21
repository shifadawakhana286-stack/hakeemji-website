"use client";

import "./Hakeem.css";

import Image from "next/image";
import Link from "next/link";

import {
  Clock3,
  Languages,
  MessageCircle,
  Star,
} from "lucide-react";

import Button from "../common/Button";
import Container from "../common/Container";

export default function Hakeem() {
  return (
    <section id="hakeem" className="hakeem">
      {/* Background */}
      <div className="hakeem-bg"></div>
      <div className="hakeem-glow-left"></div>
      <div className="hakeem-glow-right"></div>

      <Container>
        {/* Main Wrapper */}
        <div className="hakeem-wrapper">

          {/* Heading */}
          <div className="hakeem-heading">

            <div className="section-tag">
              <span></span>
              <p>OUR HAKEEM</p>
              <span></span>
            </div>

            <h2>
              Meet Our
              <span>Expert Hakeem</span>
            </h2>

            <p>
              Experience authentic Unani healthcare with personalized
              consultation, traditional herbal wisdom and decades of trusted
              clinical excellence.
            </p>

          </div>

          {/* Doctor Card */}
          <div className="doctor-card">

            <div className="doctor-image">
              <Image
                src="/doctor/hakeem.png"
                alt="Hakeem Hafiz Shadab"
                fill
                priority
                className="doctor-photo"
              />
            </div>

            <h3>Hakeem Hafiz Shadab</h3>

            <span className="doctor-designation">
              Chief Unani Specialist
            </span>

            <div className="doctor-rating">
              <Star
                size={18}
                fill="#C9A227"
                color="#C9A227"
              />

              <span>4.9 Rating</span>

              <small>(1200+ Reviews)</small>
            </div>

            <div className="doctor-info">

              <div>
                <Languages size={18} />
                <span>Hindi • Urdu • English</span>
              </div>

              <div>
                <Clock3 size={18} />
                <span>Mon – Sat | 10 AM – 6 PM</span>
              </div>

            </div>

            <div className="doctor-buttons">

              <Link href="/appointment">
                <Button className="doctor-btn">
                  Book Appointment
                </Button>
              </Link>

              <a
                href="https://wa.me/917037305542?text=Hello%20Hakeem%20Sahab,%20I%20want%20to%20consult%20regarding%20my%20treatment."
                target="_blank"
                rel="noopener noreferrer"
                className="doctor-outline-btn"
              >
                <MessageCircle size={18} />
                WhatsApp Consult
              </a>

            </div>

          </div>

        </div>
      </Container>

    </section>
  );
}