"use client";

import { Phone } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <aside aria-label="Quick contact options" className="floating-actions">
      {/* Phone */}
      <a
        href="tel:+917037305542"
        aria-label="Call Shifa Dawakhana"
        className="flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-blue-600 text-white shadow-[0_8px_20px_rgba(37,99,235,0.35)] transition-all duration-300 hover:scale-110"
      >
        <Phone className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.2} />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/shifa_dawakhana786"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Instagram"
        className="flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white shadow-[0_8px_20px_rgba(236,72,153,0.35)] transition-all duration-300 hover:scale-110"
      >
        <FaInstagram className="h-5 w-5 sm:h-6 sm:w-6" />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/917037305542?text=Hello%20Shifa%20Dawakhana,%20I%20want%20to%20know%20about%20your%20treatment."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-110"
      >
        <FaWhatsapp className="h-6 w-6 sm:h-7 sm:w-7" />
      </a>
    </aside>
  );
}