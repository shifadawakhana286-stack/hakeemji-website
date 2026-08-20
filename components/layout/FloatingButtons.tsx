"use client";

import { Phone } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-3">
      {/* Phone */}
      <a
        href="tel:+917037305542"
        aria-label="Call Shifa Dawakhana"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-[0_10px_25px_rgba(37,99,235,0.35)] transition-all duration-300 hover:scale-110"
      >
        <Phone size={25} strokeWidth={2.3} />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/shifa_dawakhana786"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white shadow-[0_10px_25px_rgba(236,72,153,0.35)] transition-all duration-300 hover:scale-110"
      >
        <FaInstagram size={29} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/917037305542?text=Hello%20Shifa%20Dawakhana,%20I%20want%20to%20know%20about%20your%20treatment."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="flex h-[62px] w-[62px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-110"
      >
        <FaWhatsapp size={34} />
      </a>
    </div>
  );
}