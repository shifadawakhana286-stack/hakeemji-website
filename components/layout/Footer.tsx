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

        <div className="grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo */}

          <div>

            <h2 className="text-3xl font-bold">

              <span className="text-white">
                Shifa
              </span>{" "}

              <span className="text-[#C9A227]">
                Dawakhana
              </span>

            </h2>

            <p className="mt-5 leading-8 text-white/70">

              Premium Unani healthcare with
              authentic herbal medicine and
              experienced Hakeem consultation.

            </p>

          </div>

          {/* Links */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">

              Quick Links

            </h3>

            <ul className="space-y-4">

              {quickLinks.map((item)=>(
                <li key={item.title}>

                  <Link
                    href={item.href}
                    className="text-white/70 transition hover:text-[#C9A227]"
                  >
                    {item.title}
                  </Link>

                </li>
              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">

              Contact

            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">

                <Phone className="text-[#C9A227]" />

                <span>+91 98765 43210</span>

              </div>

              <div className="flex gap-3">

                <Mail className="text-[#C9A227]" />

                <span>

                  info@shifadawakhana.com

                </span>

              </div>

              <div className="flex gap-3">

                <MapPin className="text-[#C9A227]" />

                <span>

                  Meerut,
                  Uttar Pradesh

                </span>

              </div>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">

              Follow Us

            </h3>

           <div className="flex gap-4">

  <a
    href="#"
    className="rounded-full bg-white/10 p-3 transition hover:bg-[#C9A227]"
    aria-label="Facebook"
  >
    <FaFacebookF size={20} />
  </a>

  <a
    href="#"
    className="rounded-full bg-white/10 p-3 transition hover:bg-[#C9A227]"
    aria-label="Instagram"
  >
    <FaInstagram size={20} />
  </a>

  <a
    href="#"
    className="rounded-full bg-white/10 p-3 transition hover:bg-[#C9A227]"
    aria-label="YouTube"
  >
    <FaYoutube size={20} />
  </a>

  <a
    href="https://wa.me/917017530506"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full bg-white/10 p-3 transition hover:bg-[#25D366]"
    aria-label="WhatsApp"
  >
    <FaWhatsapp size={20} />
  </a>

</div>

          </div>

        </div>

      </Container>

      {/* Bottom */}

      <div className="border-t border-white/10">

        <Container>

          <div className="flex flex-col items-center justify-between gap-4 py-6 text-sm text-white/60 md:flex-row">

            <p>

              © 2026 Shifa Dawakhana.
              All Rights Reserved.

            </p>

            <p>

              Designed with ❤️ using Next.js

            </p>

          </div>

        </Container>

      </div>

    </footer>
  );
}