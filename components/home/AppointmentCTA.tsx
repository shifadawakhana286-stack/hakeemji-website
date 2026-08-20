import {
  MapPin,
  Phone,
  Clock,
  CalendarCheck,
} from "lucide-react";

import Link from "next/link";
import Container from "../common/Container";

export default function Appointment() {
  return (
    <section
      id="appointment"
      className="bg-[#0B5D3B] py-24 text-white"
    >
      <Container>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left */}
          <div>

            <span className="rounded-full bg-[#C9A227] px-5 py-2 text-black font-semibold">
              Book Appointment
            </span>

            <h2 className="mt-6 text-5xl font-bold leading-tight">
              Book Your
              <span className="text-[#C9A227]">
                {" "}Consultation
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-white/80">
              Consult our experienced Unani Hakeem
              for personalized treatment and natural
              healing solutions.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              {/* Call Now */}
              <a
                href="tel:+919876543210"
                className="rounded-full bg-white px-8 py-4 font-semibold text-[#0B5D3B] transition hover:scale-105"
              >
                Call Now
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917017530506?text=Hello%20Shifa%20Dawakhana%2C%20I%20want%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#C9A227] px-8 py-4 font-semibold text-white transition hover:scale-105"
              >
                WhatsApp
              </a>

            </div>

          </div>

          {/* Right - Clinic Information */}
          <div className="rounded-[30px] bg-white p-8 text-black shadow-2xl">

            <h3 className="mb-8 text-3xl font-bold text-[#0B5D3B]">
              Clinic Information
            </h3>

            <div className="space-y-6">

              {/* Address */}
              <div className="flex gap-4">

                <MapPin
                  className="shrink-0 text-[#C9A227]"
                />

                <div>
                  <h4 className="font-semibold">
                    Address
                  </h4>

                  <p className="text-gray-600">
                    123 Abu Bakr Road,
                    Meerut, Uttar Pradesh
                  </p>
                </div>

              </div>

              {/* Phone */}
              <div className="flex gap-4">

                <Phone
                  className="shrink-0 text-[#C9A227]"
                />

                <div>
                  <h4 className="font-semibold">
                    Phone
                  </h4>

                  <p className="text-gray-600">
                    +91 98765 43210
                  </p>
                </div>

              </div>

              {/* Timings */}
              <div className="flex gap-4">

                <Clock
                  className="shrink-0 text-[#C9A227]"
                />

                <div>
                  <h4 className="font-semibold">
                    Timings
                  </h4>

                  <p className="text-gray-600">
                    Mon - Sat
                    <br />
                    10:00 AM – 8:00 PM
                  </p>
                </div>

              </div>

            </div>

            {/* Book Appointment */}
            <Link
              href="/appointment"
              className="
                mt-10
                flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#C9A227]
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#0B5D3B]
                hover:shadow-lg
              "
            >
              <CalendarCheck size={20} />

              Book Appointment

              <span className="text-lg">
                →
              </span>
            </Link>

          </div>

        </div>

      </Container>
    </section>
  );
}