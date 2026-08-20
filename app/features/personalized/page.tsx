import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  HeartPulse,
  MessageCircle,
  ShieldCheck,
  UserRound,
} from "lucide-react";

import Container from "@/components/common/Container";

export default function PersonalizedPage() {
  const points = [
    "Individual consultation based on your concerns",
    "Understanding your lifestyle and wellness needs",
    "Personalized discussion with our Unani Hakeem",
    "Traditional Unani approach tailored to the individual",
  ];

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
          pb-20
          pt-28
          text-white
          sm:px-6
          sm:pb-24
          sm:pt-32
          lg:pb-28
          lg:pt-36
        "
      >

        {/* Background glow */}

        <div
          className="
            pointer-events-none
            absolute
            -left-32
            top-10
            h-80
            w-80
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

          {/* Back */}

          <Link
            href="/"
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-medium
              text-white/70
              transition
              hover:text-white
            "
          >
            <ArrowLeft size={17} />
            Back to Home
          </Link>

          <div
            className="
              mt-10
              grid
              items-center
              gap-12
              lg:grid-cols-[1.15fr_0.85fr]
              lg:gap-20
            "
          >

            {/* ==========================================
                LEFT
            =========================================== */}

            <div>

              {/* Icon */}

              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-[22px]
                  bg-[#C9A227]
                  text-white
                  shadow-xl
                  shadow-black/10
                "
              >
                <HeartPulse
                  size={32}
                  strokeWidth={1.8}
                />
              </div>

              {/* Small title */}

              <p
                className="
                  mt-7
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#E5C64F]
                "
              >
                Personalized Care
              </p>

              {/* Main heading */}

              <h1
                className="
                  mt-4
                  max-w-3xl
                  text-4xl
                  font-bold
                  leading-[1.08]
                  tracking-tight
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Care That Starts
                <span className="block text-[#C9A227]">
                  With You
                </span>
              </h1>

              {/* Description */}

              <p
                className="
                  mt-6
                  max-w-2xl
                  text-base
                  leading-8
                  text-white/75
                  sm:text-lg
                "
              >
                Every person is different. Our consultation
                approach begins by understanding your
                individual concerns, lifestyle and wellness
                requirements.
              </p>

              {/* CTA */}

              <div
                className="
                  mt-8
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                "
              >

                <Link
                  href="/appointment"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-[#C9A227]
                    px-7
                    py-3.5
                    text-sm
                    font-bold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#D9B52F]
                    hover:shadow-xl
                  "
                >
                  Book Appointment
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/video-consultation"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-white/20
                    bg-white/10
                    px-7
                    py-3.5
                    text-sm
                    font-bold
                    text-white
                    backdrop-blur
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-white
                    hover:text-[#0B5D3B]
                  "
                >
                  <HeartPulse size={18} />
                  Video Consultation
                </Link>

              </div>

            </div>

            {/* ==========================================
                RIGHT FEATURE CARD
            =========================================== */}

            <div
              className="
                relative
                rounded-[32px]
                border
                border-white/10
                bg-white
                p-6
                text-[#083C2A]
                shadow-2xl
                sm:p-8
              "
            >

              {/* Top label */}

              <div className="flex items-center justify-between">

                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#F8F1DD]
                    text-[#C9A227]
                  "
                >
                  <UserRound size={24} />
                </div>

                <span
                  className="
                    rounded-full
                    bg-[#0B5D3B]/10
                    px-4
                    py-2
                    text-xs
                    font-bold
                    text-[#0B5D3B]
                  "
                >
                  Patient First
                </span>

              </div>

              <h2
                className="
                  mt-7
                  text-2xl
                  font-bold
                  sm:text-3xl
                "
              >
                Your Wellness,
                <span className="block text-[#0B5D3B]">
                  Your Journey
                </span>
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-gray-500
                "
              >
                Our goal is to understand your individual
                needs and provide thoughtful guidance based
                on your consultation.
              </p>

              {/* Points */}

              <div className="mt-7 space-y-4">

                {points.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3"
                  >

                    <CheckCircle2
                      size={20}
                      className="
                        mt-0.5
                        shrink-0
                        text-[#C9A227]
                      "
                    />

                    <p
                      className="
                        text-sm
                        leading-6
                        text-gray-600
                      "
                    >
                      {point}
                    </p>

                  </div>
                ))}

              </div>

              {/* Bottom line */}

              <div
                className="
                  mt-8
                  rounded-2xl
                  bg-[#F8F6F1]
                  p-4
                "
              >

                <div className="flex items-center gap-3">

                  <ShieldCheck
                    size={21}
                    className="text-[#0B5D3B]"
                  />

                  <p
                    className="
                      text-xs
                      font-medium
                      leading-5
                      text-gray-600
                    "
                  >
                    A consultation-focused approach
                    designed around understanding your
                    individual requirements.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </Container>
      </section>

      {/* =====================================================
          HOW PERSONALIZED CARE WORKS
      ===================================================== */}

      <section
        className="
          bg-white
          px-4
          py-16
          sm:px-6
          sm:py-20
          lg:py-24
        "
      >

        <Container>

          <div className="mx-auto max-w-3xl text-center">

            <span
              className="
                inline-flex
                rounded-full
                bg-[#C9A227]/10
                px-4
                py-2
                text-xs
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#C9A227]
              "
            >
              Our Approach
            </span>

            <h2
              className="
                mt-5
                text-3xl
                font-bold
                text-[#083C2A]
                sm:text-4xl
                lg:text-5xl
              "
            >
              Understanding Comes First
            </h2>

            <p
              className="
                mt-4
                text-sm
                leading-7
                text-gray-500
                sm:text-base
              "
            >
              A meaningful consultation starts with
              listening and understanding your individual
              concerns.
            </p>

          </div>

          {/* Steps */}

          <div
            className="
              mt-12
              grid
              gap-5
              md:grid-cols-3
            "
          >

            {/* Step 1 */}

            <div
              className="
                rounded-[28px]
                border
                border-gray-100
                bg-[#F8F6F1]
                p-7
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#0B5D3B]
                  text-lg
                  font-bold
                  text-white
                "
              >
                01
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#083C2A]">
                Understand
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                We begin by listening to your concerns and
                understanding what you would like help with.
              </p>

            </div>

            {/* Step 2 */}

            <div
              className="
                rounded-[28px]
                border
                border-gray-100
                bg-[#F8F6F1]
                p-7
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#C9A227]
                  text-lg
                  font-bold
                  text-white
                "
              >
                02
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#083C2A]">
                Discuss
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Your lifestyle, concerns and relevant
                information can be discussed during the
                consultation.
              </p>

            </div>

            {/* Step 3 */}

            <div
              className="
                rounded-[28px]
                border
                border-gray-100
                bg-[#F8F6F1]
                p-7
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#0B5D3B]
                  text-lg
                  font-bold
                  text-white
                "
              >
                03
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#083C2A]">
                Guide
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Our Hakeem can then discuss appropriate
                options and the next steps based on the
                consultation.
              </p>

            </div>

          </div>

        </Container>

      </section>

      {/* =====================================================
          PERSONALIZED CARE BENEFITS
      ===================================================== */}

      <section
        className="
          bg-[#F8F6F1]
          px-4
          py-16
          sm:px-6
          sm:py-20
          lg:py-24
        "
      >

        <Container>

          <div
            className="
              grid
              items-center
              gap-10
              lg:grid-cols-2
            "
          >

            {/* Left */}

            <div>

              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#C9A227]
                "
              >
                Personalized Experience
              </span>

              <h2
                className="
                  mt-4
                  text-3xl
                  font-bold
                  leading-tight
                  text-[#083C2A]
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Healthcare That
                <span className="text-[#0B5D3B]">
                  {" "}Listens
                </span>
              </h2>

              <p
                className="
                  mt-5
                  max-w-xl
                  text-sm
                  leading-7
                  text-gray-600
                  sm:text-base
                "
              >
                Instead of taking a one-size-fits-all
                approach, personalized consultation gives
                you an opportunity to discuss your specific
                concerns and circumstances.
              </p>

              <div className="mt-7 space-y-4">

                {[
                  "Your concerns are heard",
                  "Your individual requirements are discussed",
                  "Lifestyle factors can be considered",
                  "Next steps are explained clearly",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <div
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#0B5D3B]
                      "
                    >
                      <CheckCircle2
                        size={16}
                        className="text-white"
                      />
                    </div>

                    <span className="text-sm font-medium text-gray-700">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

            </div>

            {/* Right */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                bg-[#083C2A]
                p-7
                text-white
                shadow-xl
                sm:p-10
              "
            >

              <div
                className="
                  absolute
                  -right-20
                  -top-20
                  h-48
                  w-48
                  rounded-full
                  bg-[#C9A227]/15
                  blur-2xl
                "
              />

              <HeartPulse
                size={42}
                strokeWidth={1.5}
                className="relative text-[#C9A227]"
              />

              <h3
                className="
                  relative
                  mt-7
                  text-2xl
                  font-bold
                  sm:text-3xl
                "
              >
                Your concerns matter.
              </h3>

              <p
                className="
                  relative
                  mt-4
                  text-sm
                  leading-7
                  text-white/65
                  sm:text-base
                "
              >
                Take the first step towards a more
                personalized consultation experience with
                Shifa Dawakhana.
              </p>

              <div
                className="
                  relative
                  mt-8
                  flex
                  flex-col
                  gap-3
                "
              >

                <Link
                  href="/appointment"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-[#C9A227]
                    px-6
                    py-3.5
                    text-sm
                    font-bold
                    text-white
                    transition
                    hover:bg-[#D9B52F]
                  "
                >
                  <UserRound size={18} />
                  Book Clinic Appointment
                </Link>

                <a
                  href="https://wa.me/917017530506?text=Hello%20Shifa%20Dawakhana%2C%20I%20want%20to%20know%20more%20about%20personalized%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-white/15
                    bg-white/5
                    px-6
                    py-3.5
                    text-sm
                    font-bold
                    text-white
                    transition
                    hover:bg-white
                    hover:text-[#083C2A]
                  "
                >
                  <MessageCircle size={18} />
                  Ask on WhatsApp
                </a>

              </div>

            </div>

          </div>

        </Container>

      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        className="
          bg-[#0B5D3B]
          px-4
          py-16
          text-center
          sm:px-6
          sm:py-20
        "
      >

        <Container>

          <div className="mx-auto max-w-3xl">

            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#C9A227]
              "
            >
              Start Your Consultation
            </p>

            <h2
              className="
                mt-4
                text-3xl
                font-bold
                text-white
                sm:text-4xl
                lg:text-5xl
              "
            >
              Let&apos;s Understand
              <span className="text-[#C9A227]">
                {" "}Your Needs
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                text-sm
                leading-7
                text-white/65
                sm:text-base
              "
            >
              Book a consultation or contact our team to
              discuss your requirements.
            </p>

            <div
              className="
                mt-8
                flex
                flex-col
                justify-center
                gap-3
                sm:flex-row
              "
            >

              <Link
                href="/appointment"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#C9A227]
                  px-8
                  py-4
                  text-sm
                  font-bold
                  text-white
                  transition
                  hover:-translate-y-1
                  hover:bg-[#D9B52F]
                "
              >
                Book Appointment
                <ArrowRight size={18} />
              </Link>

              <a
                href="https://wa.me/917017530506?text=Hello%20Shifa%20Dawakhana%2C%20I%20would%20like%20to%20enquire%20about%20personalized%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  px-8
                  py-4
                  text-sm
                  font-bold
                  text-white
                  backdrop-blur
                  transition
                  hover:-translate-y-1
                  hover:bg-white
                  hover:text-[#0B5D3B]
                "
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>

            </div>

          </div>

        </Container>

      </section>

    </main>
  );
}