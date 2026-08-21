import Link from "next/link";

import { Phone, Mail, MapPin } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

import Container from "../common/Container";

const quickLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Remedies",
    href: "#remedies",
  },
  {
    title: "Shop",
    href: "#shop",
  },
  {
    title: "Services",
    href: "#services",
  },
  {
    title: "Contact",
    href: "#appointment",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A3E2B] text-white">

      <Container>

        <div className="grid gap-8 sm:gap-10 md:gap-12 py-12 sm:py-16 md:py-20 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo */}

          <div className="min-w-0">

            <h2 className="text-2xl sm:text-3xl font-bold">

              <span className="text-white">
                Shifa
              </span>{" "}

              <span className="text-[#C9A227]">
                Dawakhana
              </span>

            </h2>

            <p className="mt-4 leading-7 text-sm sm:text-base text-white/70">

              Premium Unani healthcare with
              authentic herbal medicine and
              experienced Hakeem consultation.

            </p>

          </div>

          {/* Links */}

          <div>

            <h3 className="mb-4 sm:mb-6 text-lg sm:text-xl font-semibold">

              Quick Links

            </h3>

            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">

              {quickLinks.map((item)=>(
                <li key={item.title}>

                  <Link
                    href={item.href}
                    className="text-white/70 transition hover:text-[#C9A227] py-1 inline-block"
                  >
                    {item.title}
                  </Link>

                </li>
              ))}

            </ul>

          </div>

          {/* Contact */}

          <div className="min-w-0">

            <h3 className="mb-4 sm:mb-6 text-lg sm:text-xl font-semibold">

              Contact

            </h3>

            <div className="space-y-4 text-sm sm:text-base">

              <a href="tel:+919876543210" className="flex items-center gap-3 text-white/80 transition hover:text-[#C9A227]">

                <Phone className="text-[#C9A227] shrink-0" size={18} />

                <span>+91 98765 43210</span>

              </a>

              <a href="mailto:info@shifadawakhana.com" className="flex items-center gap-3 text-white/80 transition hover:text-[#C9A227] min-w-0">

                <Mail className="text-[#C9A227] shrink-0" size={18} />

                <span className="break-all">

                  info@shifadawakhana.com

                </span>

              </a>

              <div className="flex items-start gap-3 text-white/80">

                <MapPin className="text-[#C9A227] shrink-0 mt-1" size={18} />

                <span>

                  Meerut,
                  Uttar Pradesh

                </span>

              </div>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="mb-4 sm:mb-6 text-lg sm:text-xl font-semibold">

              Follow Us

            </h3>

            <div className="flex flex-wrap gap-3">

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#C9A227]"
                aria-label="Facebook"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="https://www.instagram.com/shifa_dawakhana786"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#C9A227]"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#C9A227]"
                aria-label="YouTube"
              >
                <FaYoutube size={18} />
              </a>

              <a
                href="https://wa.me/917037305542"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#25D366]"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={18} />
              </a>

            </div>

          </div>

        </div>

      </Container>

      {/* Bottom */}

      <div className="border-t border-white/10">

        <Container>

          <div className="flex flex-col items-center justify-between gap-3 py-6 text-center text-xs sm:text-sm text-white/60 md:flex-row md:text-left">

            <p>

              © 2026 Shifa Dawakhana.
              All Rights Reserved.

            </p>

            <p>

              Authentic Unani & Herbal Healthcare

            </p>

          </div>

        </Container>

      </div>

    </footer>
  );
}