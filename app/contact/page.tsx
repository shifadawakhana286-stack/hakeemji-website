import Link from "next/link";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Shifa Dawakhana",
  description: "Contact Shifa Dawakhana in Meerut for Unani healthcare, medicines, and consultations.",
};

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 70373 05542",
    href: "tel:+917037305542",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "shifadawakhana286@gmail.com",
    href: "mailto:shifadawakhana286@gmail.com",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Meerut, Uttar Pradesh",
    href: "https://www.google.com/maps/place/Meerut,+Uttar+Pradesh/@28.9872622,77.6989603,12z/data=!3m1!4b1!4m6!3m5!1s0x390c64f457b66325:0x42faa83387a6be5e!8m2!3d28.9844618!4d77.7064137!16zL20vMDI1Zmo3?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F8FAF7] pt-16 text-[#083C2A] sm:pt-[72px]">
      <section className="relative overflow-hidden bg-[#083C2A] px-4 py-16 sm:px-6 lg:px-8">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#C9A227]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#0E6C42]/30 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#E5C75A]">
              Contact Us
            </div>

            <Link
              href="/"
              className="rounded-full bg-[#C9A227] px-6 py-3 text-sm font-semibold text-[#083C2A] transition hover:bg-[#d9b647]"

            >
              ← Back to Home
            </Link>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                We’re here to help with your health and wellness needs.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
                Reach out for appointment bookings, product inquiries, consultations,
                and personalized Unani guidance from Shifa Dawakhana.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/appointment"
                  className="rounded-full bg-[#C9A227] px-6 py-3 text-sm font-semibold text-[#083C2A] transition hover:bg-[#d9b647]"
                >
                  Book Appointment
                </Link>
                <a
                  href="https://wa.me/917037305542?text=Hello%20Shifa%20Dawakhana%2C%20I%20need%20help%20with%20my%20health%20concern."
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#C9A227] px-6 py-3 text-sm font-semibold text-[#083C2A] transition hover:bg-[#d9b647]"

                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h2 className="text-xl font-semibold text-white">Quick Contact</h2>
              <div className="mt-5 space-y-4">
                {contactCards.map(({ icon: Icon, title, value, href, external }) => (
                  <a
                    key={title}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition hover:bg-white/10"
                  >
                    <span className="mt-0.5 rounded-full bg-[#C9A227]/15 p-2 text-[#E5C75A]">
                      <Icon size={18} />
                    </span>
                    <span>
                      <span className="block text-sm text-white/70">{title}</span>
                      <span className="mt-1 block text-base font-medium text-white">{value}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-[#0B5D3B]/10 bg-white p-6 shadow-sm">
            <div className="mb-4 inline-flex rounded-full bg-[#0B5D3B]/10 p-3 text-[#0B5D3B]">
              <Phone size={22} />
            </div>
            <h3 className="text-xl font-semibold">Speak to our team</h3>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Call us directly for quick support, medicine enquiries, and consultation guidance.
            </p>
          </div>

          <div className="rounded-3xl border border-[#0B5D3B]/10 bg-white p-6 shadow-sm">
            <div className="mb-4 inline-flex rounded-full bg-[#0B5D3B]/10 p-3 text-[#0B5D3B]">
              <MessageCircle size={22} />
            </div>
            <h3 className="text-xl font-semibold">Chat on WhatsApp</h3>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Prefer instant messaging? Our team is available on WhatsApp for quick answers and orders.
            </p>
          </div>

          <div className="rounded-3xl border border-[#0B5D3B]/10 bg-white p-6 shadow-sm">
            <div className="mb-4 inline-flex rounded-full bg-[#0B5D3B]/10 p-3 text-[#0B5D3B]">
              <MapPin size={22} />
            </div>
            <h3 className="text-xl font-semibold">Visit Shifa Dawakhana</h3>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Explore our authentic Unani healthcare center in Meerut, Uttar Pradesh.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
