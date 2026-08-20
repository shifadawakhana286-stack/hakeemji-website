"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    concern: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // ==========================================
    // APNA WHATSAPP NUMBER YAHAN DALO
    // Country code ke saath, + ke bina
    // Example: 919876543210
    // ==========================================
    const whatsappNumber = "919876543210";

    const whatsappMessage = `
🩺 *SHIFA DAWAKHANA - APPOINTMENT REQUEST*

👤 *Patient Name:* ${formData.name}

📱 *Phone:* ${formData.phone}

📅 *Preferred Date:* ${formData.date}

⏰ *Preferred Time:* ${formData.time}

🩹 *Concern:* ${formData.concern}

📝 *Additional Message:*
${formData.message || "No additional message"}

Please confirm my appointment.

Thank you.
`;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#F8FAF7]">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#083C2A] px-6 py-20 md:py-28">
        {/* Background Glow */}
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#C9A227]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#0E6C42]/30 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <span className="mb-4 inline-block rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-5 py-2 text-sm font-medium tracking-wide text-[#E5C75A]">
            SHIFA DAWAKHANA
          </span>

          <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            Book Your{" "}
            <span className="text-[#C9A227]">Appointment</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
            Schedule a consultation with our experienced Hakeem.
            Fill in your details and send your appointment request directly
            through WhatsApp.
          </p>
        </div>
      </section>

      {/* ================= FORM SECTION ================= */}
      <section className="px-5 py-12 md:px-6 md:py-20">
        <div className="mx-auto max-w-4xl">

          <div className="overflow-hidden rounded-3xl border border-[#0B5D3B]/10 bg-white shadow-xl">

            {/* Form Header */}
            <div className="border-b border-gray-100 bg-[#F8FAF7] px-6 py-7 md:px-10">
              <h2 className="text-2xl font-bold text-[#083C2A] md:text-3xl">
                Appointment Details
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Please provide the following information to request your
                appointment.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-6 py-8 md:px-10">

              <div className="grid gap-6 md:grid-cols-2">

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-[#083C2A]"
                  >
                    Full Name *
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#0B5D3B] focus:ring-2 focus:ring-[#0B5D3B]/10"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-[#083C2A]"
                  >
                    Phone Number *
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#0B5D3B] focus:ring-2 focus:ring-[#0B5D3B]/10"
                  />
                </div>

                {/* Date */}
                <div>
                  <label
                    htmlFor="date"
                    className="mb-2 block text-sm font-semibold text-[#083C2A]"
                  >
                    Preferred Date *
                  </label>

                  <input
                    id="date"
                    name="date"
                    type="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#0B5D3B] focus:ring-2 focus:ring-[#0B5D3B]/10"
                  />
                </div>

                {/* Time */}
                <div>
                  <label
                    htmlFor="time"
                    className="mb-2 block text-sm font-semibold text-[#083C2A]"
                  >
                    Preferred Time *
                  </label>

                  <select
                    id="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#0B5D3B] focus:ring-2 focus:ring-[#0B5D3B]/10"
                  >
                    <option value="">Select a time</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                    <option value="5:00 PM">5:00 PM</option>
                    <option value="6:00 PM">6:00 PM</option>
                    <option value="7:00 PM">7:00 PM</option>
                    <option value="8:00 PM">8:00 PM</option>
                  </select>
                </div>

                {/* Concern */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="concern"
                    className="mb-2 block text-sm font-semibold text-[#083C2A]"
                  >
                    Reason for Consultation *
                  </label>

                  <select
                    id="concern"
                    name="concern"
                    required
                    value={formData.concern}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#0B5D3B] focus:ring-2 focus:ring-[#0B5D3B]/10"
                  >
                    <option value="">Select your concern</option>
                    <option value="General Consultation">
                      General Consultation
                    </option>
                    <option value="Joint Pain">Joint Pain</option>
                    <option value="Digestive Issues">
                      Digestive Issues
                    </option>
                    <option value="Skin Problem">Skin Problem</option>
                    <option value="Women Health">
                      Women Health
                    </option>
                    <option value="Men Health">
                      Men Health
                    </option>
                    <option value="PCOD / PCOS">
                      PCOD / PCOS
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-[#083C2A]"
                  >
                    Additional Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us anything else you'd like us to know..."
                    className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#0B5D3B] focus:ring-2 focus:ring-[#0B5D3B]/10"
                  />
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="mt-8 border-t border-gray-100 pt-7">

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#0B5D3B] px-6 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#083C2A] hover:shadow-xl"
                >
                  {/* WhatsApp Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.67-.51-.173-.007-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M20.52 3.449A11.815 11.815 0 0012.04 0C5.495 0 .164 5.33.161 11.876a11.83 11.83 0 001.585 5.94L.057 24l6.335-1.664a11.875 11.875 0 005.646 1.435h.005c6.542 0 11.875-5.33 11.878-11.876a11.85 11.85 0 00-3.401-8.446zM12.04 21.785h-.004a9.88 9.88 0 01-5.03-1.377l-.36-.214-3.76.987 1.004-3.667-.235-.376a9.87 9.87 0 01-1.516-5.262C2.142 6.421 6.58 1.985 12.04 1.985a9.85 9.85 0 017.011 2.906 9.86 9.86 0 012.902 7.019c-.003 5.455-4.44 9.875-9.913 9.875z" />
                  </svg>

                  <span>
                    Book Appointment on WhatsApp
                  </span>

                  <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>

                <p className="mt-4 text-center text-xs text-gray-400">
                  Your appointment request will open in WhatsApp for
                  confirmation.
                </p>
              </div>
            </form>
          </div>

          {/* Back Button */}
          <div className="mt-6 text-center">
            <Link
              href="/"
              className="text-sm font-medium text-[#0B5D3B] transition hover:text-[#C9A227]"
            >
              ← Back to Home
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}