"use client";

import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MessageCircle,
  Phone,
  ShieldCheck,
  User,
  Video,
} from "lucide-react";
import { FormEvent, ReactNode, useState } from "react";

const Container = ({ children }: { children: ReactNode }) => (
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {children}
  </div>
);

export default function VideoConsultation() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [concern, setConcern] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [error, setError] = useState("");

  // Your clinic WhatsApp number
  const whatsappNumber = "91 70373 05542";

  const getTodayDate = () => {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");

    // -----------------------------
    // VALIDATION
    // -----------------------------

    if (!name.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!phone.trim()) {
      setError("Please enter your WhatsApp number.");
      return;
    }

    const cleanPhone = phone.replace(/\D/g, "");

    if (cleanPhone.length < 10) {
      setError("Please enter a valid WhatsApp number.");
      return;
    }

    if (!date) {
      setError("Please select your preferred date.");
      return;
    }

    if (!time) {
      setError("Please select your preferred time.");
      return;
    }

    if (!concern.trim()) {
      setError("Please describe your health concern.");
      return;
    }

    // -----------------------------
    // WHATSAPP MESSAGE
    // -----------------------------

    const whatsappMessage = `
Hello Shifa Dawakhana,

I would like to book a Video Consultation.

━━━━━━━━━━━━━━━━━━━━
VIDEO CONSULTATION
━━━━━━━━━━━━━━━━━━━━

Patient Name:
${name.trim()}

WhatsApp Number:
${phone.trim()}

Preferred Date:
${date}

Preferred Time:
${time}

Health Concern:
${concern.trim()}

Additional Information:
${additionalInfo.trim() || "Not provided"}

━━━━━━━━━━━━━━━━━━━━

Please confirm my video consultation.

Thank you.
Shifa Dawakhana
    `.trim();

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=` +
      encodeURIComponent(whatsappMessage);

    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#F8F6F1]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#0B5D3B]
          px-4
          pb-16
          pt-28
          text-white
          sm:px-6
          sm:pb-20
          sm:pt-32
          lg:pb-24
          lg:pt-36
        "
      >

        {/* Background Glow */}

        <div
          className="
            pointer-events-none
            absolute
            -left-32
            top-20
            h-72
            w-72
            rounded-full
            bg-[#C9A227]/10
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-32
            bottom-0
            h-96
            w-96
            rounded-full
            bg-white/5
            blur-3xl
          "
        />

        <Container>

          <div className="mx-auto max-w-4xl text-center">

            {/* Badge */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#C9A227]/40
                bg-[#C9A227]/10
                px-4
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#E5C64F]
                sm:px-5
                sm:text-sm
              "
            >
              <Video size={16} />
              Online Consultation
            </div>

            {/* Heading */}

            <h1
              className="
                mt-6
                text-4xl
                font-bold
                leading-tight
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              Consult From
              <span className="block text-[#C9A227]">
                Anywhere
              </span>
            </h1>

            {/* Description */}

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-sm
                leading-7
                text-white/75
                sm:text-base
                sm:leading-8
                lg:text-lg
              "
            >
              Connect with our experienced Unani Hakeem
              through a convenient video consultation from
              the comfort of your home.
            </p>

            {/* Benefits */}

            <div
              className="
                mt-8
                flex
                flex-wrap
                justify-center
                gap-x-6
                gap-y-3
                text-sm
                text-white/80
              "
            >

              <div className="flex items-center gap-2">
                <CheckCircle2
                  size={17}
                  className="text-[#C9A227]"
                />
                Personalized Guidance
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2
                  size={17}
                  className="text-[#C9A227]"
                />
                Convenient Online Care
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2
                  size={17}
                  className="text-[#C9A227]"
                />
                WhatsApp Confirmation
              </div>

            </div>

          </div>

        </Container>
      </section>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <section className="relative px-4 py-12 sm:px-6 sm:py-16 lg:py-20">

        <Container>

          <div
            className="
              grid
              gap-8
              lg:grid-cols-[1.4fr_0.7fr]
              lg:items-start
            "
          >

            {/* =================================================
                FORM
            ================================================= */}

            <div
              className="
                rounded-[28px]
                bg-white
                p-5
                shadow-xl
                sm:rounded-[32px]
                sm:p-8
                lg:p-10
              "
            >

              {/* Form Header */}

              <div className="flex items-start gap-4">

                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#0B5D3B]/10
                    text-[#0B5D3B]
                  "
                >
                  <Video size={23} />
                </div>

                <div>

                  <p
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-[#C9A227]
                    "
                  >
                    Video Consultation
                  </p>

                  <h2
                    className="
                      mt-1
                      text-2xl
                      font-bold
                      text-[#083C2A]
                      sm:text-3xl
                    "
                  >
                    Book Your Consultation
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Tell us a little about yourself and your
                    consultation requirement.
                  </p>

                </div>

              </div>

              {/* Form */}

              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >

                {/* ===============================
                    NAME + PHONE
                ================================ */}

                <div className="grid gap-5 md:grid-cols-2">

                  {/* Name */}

                  <div>

                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Full Name
                    </label>

                    <div
                      className="
                        flex
                        items-center
                        rounded-2xl
                        border
                        border-gray-200
                        bg-[#F8F6F1]
                        px-4
                        transition
                        focus-within:border-[#0B5D3B]
                        focus-within:bg-white
                      "
                    >
                      <User
                        size={18}
                        className="shrink-0 text-[#0B5D3B]"
                      />

                      <input
                        type="text"
                        value={name}
                        onChange={(event) =>
                          setName(event.target.value)
                        }
                        placeholder="Enter your full name"
                        className="
                          w-full
                          bg-transparent
                          px-3
                          py-3.5
                          text-sm
                          outline-none
                        "
                      />
                    </div>

                  </div>

                  {/* Phone */}

                  <div>

                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      WhatsApp Number
                    </label>

                    <div
                      className="
                        flex
                        items-center
                        rounded-2xl
                        border
                        border-gray-200
                        bg-[#F8F6F1]
                        px-4
                        transition
                        focus-within:border-[#0B5D3B]
                        focus-within:bg-white
                      "
                    >
                      <Phone
                        size={18}
                        className="shrink-0 text-[#0B5D3B]"
                      />

                      <input
                        type="tel"
                        inputMode="numeric"
                        value={phone}
                        onChange={(event) =>
                          setPhone(event.target.value)
                        }
                        placeholder="Enter WhatsApp number"
                        className="
                          w-full
                          bg-transparent
                          px-3
                          py-3.5
                          text-sm
                          outline-none
                        "
                      />
                    </div>

                  </div>

                </div>

                {/* ===============================
                    DATE + TIME
                ================================ */}

                <div className="grid gap-5 md:grid-cols-2">

                  {/* Date */}

                  <div>

                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Preferred Date
                    </label>

                    <div
                      className="
                        flex
                        items-center
                        rounded-2xl
                        border
                        border-gray-200
                        bg-[#F8F6F1]
                        px-4
                        transition
                        focus-within:border-[#0B5D3B]
                        focus-within:bg-white
                      "
                    >
                      <CalendarDays
                        size={18}
                        className="shrink-0 text-[#0B5D3B]"
                      />

                      <input
                        type="date"
                        min={getTodayDate()}
                        value={date}
                        onChange={(event) =>
                          setDate(event.target.value)
                        }
                        className="
                          w-full
                          bg-transparent
                          px-3
                          py-3.5
                          text-sm
                          outline-none
                        "
                      />
                    </div>

                  </div>

                  {/* Time */}

                  <div>

                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Preferred Time
                    </label>

                    <div
                      className="
                        flex
                        items-center
                        rounded-2xl
                        border
                        border-gray-200
                        bg-[#F8F6F1]
                        px-4
                        transition
                        focus-within:border-[#0B5D3B]
                        focus-within:bg-white
                      "
                    >
                      <Clock3
                        size={18}
                        className="shrink-0 text-[#0B5D3B]"
                      />

                      <input
                        type="time"
                        value={time}
                        onChange={(event) =>
                          setTime(event.target.value)
                        }
                        className="
                          w-full
                          bg-transparent
                          px-3
                          py-3.5
                          text-sm
                          outline-none
                        "
                      />
                    </div>

                  </div>

                </div>

                {/* ===============================
                    HEALTH CONCERN
                ================================ */}

                <div>

                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Health Concern
                  </label>

                  <textarea
                    value={concern}
                    onChange={(event) =>
                      setConcern(event.target.value)
                    }
                    placeholder="Please briefly describe your health concern..."
                    rows={4}
                    className="
                      w-full
                      resize-none
                      rounded-2xl
                      border
                      border-gray-200
                      bg-[#F8F6F1]
                      px-4
                      py-3.5
                      text-sm
                      leading-6
                      outline-none
                      transition
                      focus:border-[#0B5D3B]
                      focus:bg-white
                    "
                  />

                </div>

                {/* ===============================
                    ADDITIONAL INFORMATION
                ================================ */}

                <div>

                  <div className="mb-2 flex items-center justify-between">

                    <label className="text-sm font-semibold text-gray-700">
                      Additional Information
                    </label>

                    <span className="text-xs text-gray-400">
                      Optional
                    </span>

                  </div>

                  <textarea
                    value={additionalInfo}
                    onChange={(event) =>
                      setAdditionalInfo(event.target.value)
                    }
                    placeholder="Anything else you would like our Hakeem to know?"
                    rows={3}
                    className="
                      w-full
                      resize-none
                      rounded-2xl
                      border
                      border-gray-200
                      bg-[#F8F6F1]
                      px-4
                      py-3.5
                      text-sm
                      leading-6
                      outline-none
                      transition
                      focus:border-[#0B5D3B]
                      focus:bg-white
                    "
                  />

                </div>

                {/* ===============================
                    ERROR
                ================================ */}

                {error && (
                  <div
                    className="
                      rounded-2xl
                      border
                      border-red-200
                      bg-red-50
                      px-4
                      py-3
                      text-sm
                      font-medium
                      text-red-600
                    "
                  >
                    {error}
                  </div>
                )}

                {/* ===============================
                    SUBMIT
                ================================ */}

                <button
                  type="submit"
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-2xl
                    bg-[#0B5D3B]
                    px-5
                    py-4
                    text-sm
                    font-bold
                    text-white
                    shadow-lg
                    shadow-[#0B5D3B]/20
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#083C2A]
                    hover:shadow-xl
                    sm:text-base
                  "
                >
                  <MessageCircle size={20} />

                  Send Inquiry on WhatsApp

                  <ArrowRight size={19} />
                </button>

                <p className="text-center text-xs leading-5 text-gray-400">
                  Your request will open directly in WhatsApp
                  with all the details you entered.
                </p>

              </form>
            </div>

            {/* =================================================
                RIGHT INFORMATION
            ================================================= */}

            <div className="space-y-5">

              {/* How it works */}

              <div
                className="
                  rounded-[28px]
                  bg-[#0B5D3B]
                  p-6
                  text-white
                  shadow-xl
                  sm:rounded-[32px]
                  sm:p-8
                "
              >

                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#C9A227]/15
                      text-[#C9A227]
                    "
                  >
                    <Video size={22} />
                  </div>

                  <div>

                    <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A227]">
                      Simple Process
                    </p>

                    <h3 className="text-xl font-bold">
                      How It Works
                    </h3>

                  </div>

                </div>

                <div className="mt-7 space-y-6">

                  {/* Step 1 */}

                  <div className="flex gap-4">

                    <div
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#C9A227]
                        text-sm
                        font-bold
                        text-white
                      "
                    >
                      1
                    </div>

                    <div>
                      <h4 className="font-semibold">
                        Fill Your Details
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-white/60">
                        Tell us your name, preferred time and
                        health concern.
                      </p>
                    </div>

                  </div>

                  {/* Step 2 */}

                  <div className="flex gap-4">

                    <div
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#C9A227]
                        text-sm
                        font-bold
                        text-white
                      "
                    >
                      2
                    </div>

                    <div>
                      <h4 className="font-semibold">
                        Send WhatsApp Inquiry
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-white/60">
                        Your consultation details will be
                        prepared automatically.
                      </p>
                    </div>

                  </div>

                  {/* Step 3 */}

                  <div className="flex gap-4">

                    <div
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#C9A227]
                        text-sm
                        font-bold
                        text-white
                      "
                    >
                      3
                    </div>

                    <div>
                      <h4 className="font-semibold">
                        Get Confirmation
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-white/60">
                        Our team will confirm your consultation
                        timing through WhatsApp.
                      </p>
                    </div>

                  </div>

                </div>

              </div>

              {/* Benefits */}

              <div
                className="
                  rounded-[28px]
                  bg-white
                  p-6
                  shadow-xl
                  sm:rounded-[32px]
                  sm:p-8
                "
              >

                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#C9A227]/15
                      text-[#C9A227]
                    "
                  >
                    <ShieldCheck size={22} />
                  </div>

                  <div>

                    <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A227]">
                      Consultation
                    </p>

                    <h3 className="text-xl font-bold text-[#083C2A]">
                      Why Choose Us?
                    </h3>

                  </div>

                </div>

                <div className="mt-6 space-y-4">

                  <div className="flex gap-3">

                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-[#0B5D3B]"
                    />

                    <p className="text-sm leading-6 text-gray-600">
                      Personalized consultation based on
                      your individual concerns.
                    </p>

                  </div>

                  <div className="flex gap-3">

                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-[#0B5D3B]"
                    />

                    <p className="text-sm leading-6 text-gray-600">
                      Convenient consultation from the comfort
                      of your home.
                    </p>

                  </div>

                  <div className="flex gap-3">

                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-[#0B5D3B]"
                    />

                    <p className="text-sm leading-6 text-gray-600">
                      Direct WhatsApp communication for easy
                      appointment confirmation.
                    </p>

                  </div>

                </div>

              </div>

              {/* WhatsApp Contact */}

              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  "Hello Shifa Dawakhana, I am interested in a video consultation."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  justify-center
                  gap-3
                  rounded-[22px]
                  bg-[#C9A227]
                  px-5
                  py-4
                  text-sm
                  font-bold
                  text-white
                  shadow-lg
                  transition-all
                  hover:-translate-y-1
                  hover:bg-[#0B5D3B]
                "
              >
                <MessageCircle size={20} />

                Quick WhatsApp Inquiry
              </a>

            </div>

          </div>

        </Container>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16">

        <Container>

          <div
            className="
              mx-auto
              max-w-4xl
              rounded-[28px]
              bg-[#F8F6F1]
              p-6
              text-center
              sm:rounded-[32px]
              sm:p-10
              lg:p-12
            "
          >

            <div
              className="
                mx-auto
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-[#0B5D3B]
                text-white
              "
            >
              <Video size={25} />
            </div>

            <h2
              className="
                mt-5
                text-2xl
                font-bold
                text-[#083C2A]
                sm:text-3xl
              "
            >
              Prefer a Personal Consultation?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
              Send your inquiry today and our team will
              contact you on WhatsApp to confirm the
              consultation details.
            </p>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">

              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  "Hello Shifa Dawakhana, I want to enquire about a video consultation."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#0B5D3B]
                  px-7
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  transition
                  hover:bg-[#083C2A]
                "
              >
                <MessageCircle size={18} />
                Talk on WhatsApp
              </a>

            </div>

          </div>

        </Container>

      </section>

    </main>
  );
}