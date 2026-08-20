import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  Award,
  BadgeCheck,
  CheckCircle2,
  FileCheck2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Container from "@/components/common/Container";

const certificates = [
  {
    image: "/certificates/cupping-diploma.jpg",
    title: "Advance Diploma in Cupping Therapy",
    issuer: "Universal Institute of Healthcare Research & Training",
    detail: "50 Credit Hours • Clinical Training",
    category: "Cupping Therapy",
    rotation: "none",
  },
  {
    image: "/certificates/naturopathy-diploma.jpg",
    title: "Diploma in Naturopathy & Yogic Sciences",
    issuer: "Paramedical Council",
    detail: "Diploma / Certificate",
    category: "Naturopathy & Yoga",
    rotation: "none",
  },
  {
    image: "/certificates/fitness-workshop.jpg",
    title: "Hi-Tech Fitness Leaders Workshop",
    issuer: "Institute of DBIK Yoga & Clinic of AYUSH Paramedics",
    detail: "Workshop Certificate",
    category: "Wellness",
    rotation: "none",
  },
  {
    image: "/certificates/facial-cupping.jpg",
    title: "Facial Cupping Certificate",
    issuer: "CupCure",
    detail: "Facial Cupping Training",
    category: "Cupping Therapy",
    rotation: "180",
  },
  {
    image: "/certificates/authorized-letter.jpg",
    title: "Authorized Letter",
    issuer: "SK Pharma",
    detail: "Authorized Product Purchase & Sale",
    category: "Authorization",
    rotation: "none",
  },
  {
    image: "/certificates/cupping-training.jpg",
    title: "Cupping Therapy Training Certificate",
    issuer: "CupCure",
    detail: "Cupping Therapy Training",
    category: "Cupping Therapy",
    rotation: "180",
  },
];

const trustPoints = [
  {
    icon: Award,
    title: "Documented Training",
    description:
      "Professional training and educational credentials are presented transparently for visitors to review.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Credentials",
    description:
      "Important certificates and supporting documents are displayed rather than relying only on marketing claims.",
  },
  {
    icon: BadgeCheck,
    title: "Specialized Experience",
    description:
      "The displayed documents include training related to cupping therapy, naturopathy, yoga and wellness.",
  },
  {
    icon: FileCheck2,
    title: "Supporting Documentation",
    description:
      "Selected authorization and certification documents are available for greater transparency.",
  },
];

export default function TrustedPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F1]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#0B5D3B] px-4 pb-20 pt-28 text-white sm:px-6 sm:pb-24 sm:pt-32 lg:pb-28">

        {/* Background decoration */}

        <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#C9A227]/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-white/5 blur-3xl" />

        <Container>

          {/* Back */}

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-white"
          >
            <ArrowLeft size={17} />
            Back to Home
          </Link>

          <div className="mx-auto mt-12 max-w-4xl text-center">

            {/* Icon */}

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-[#C9A227] text-white shadow-xl">
              <ShieldCheck size={34} strokeWidth={1.8} />
            </div>

            <p className="mt-7 text-xs font-bold uppercase tracking-[0.22em] text-[#E5C64F]">
              Trust • Credentials • Transparency
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Trusted Care,
              <span className="block text-[#C9A227]">
                Backed by Credentials
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Explore selected training certificates, professional
              credentials and supporting documents associated with
              our wellness and therapeutic practice.
            </p>

          </div>

        </Container>
      </section>

      {/* =====================================================
          TRUST INTRO
      ===================================================== */}

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:py-24">

        <Container>

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

            {/* Left */}

            <div>

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                Why Choose Us
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-[#083C2A] sm:text-4xl lg:text-5xl">
                Trust Should Be
                <span className="block text-[#0B5D3B]">
                  Visible & Transparent
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
                We believe patients and clients should be able
                to understand the background behind the services
                they choose. That is why selected educational,
                training and supporting documents are presented
                here for transparency.
              </p>

              <div className="mt-7 flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C9A227]/10 text-[#C9A227]">
                  <Sparkles size={20} />
                </div>

                <p className="text-sm font-semibold text-[#083C2A]">
                  Experience • Training • Transparency
                </p>

              </div>

            </div>

            {/* Right */}

            <div className="grid gap-4 sm:grid-cols-2">

              {trustPoints.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-[26px] border border-gray-100 bg-[#F8F6F1] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#C9A227] shadow-sm transition group-hover:bg-[#0B5D3B] group-hover:text-white">
                      <Icon size={23} />
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-[#083C2A]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-500">
                      {item.description}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </Container>
      </section>

      {/* =====================================================
          CREDENTIALS
      ===================================================== */}

      <section className="bg-[#F8F6F1] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">

        <Container>

          {/* Heading */}

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex rounded-full bg-[#C9A227]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#C9A227]">
              Certificates & Documents
            </span>

            <h2 className="mt-5 text-3xl font-bold text-[#083C2A] sm:text-4xl lg:text-5xl">
              Our Credentials
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-500 sm:text-base">
              A selection of certificates and supporting documents
              available for visitors to view.
            </p>

          </div>

          {/* Certificate Grid */}

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {certificates.map((certificate) => (
              <article
                key={certificate.title}
                className="group overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >

                {/* Image */}

                <div className="relative aspect-[3/4] overflow-hidden bg-[#F3F0E8]">

  <Image
    src={certificate.image}
    alt={certificate.title}
    fill
    className={`
  object-contain
  transition-transform
  duration-700
  ${
    certificate.rotation === 180
      ? "rotate-180"
      : ""
  }
`}
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  />

  {/* Category */}

  <div className="absolute left-4 top-4 z-10 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#0B5D3B] shadow-lg">
    {certificate.category}
  </div>

</div>

                {/* Content */}

                <div className="p-6">

                  <div className="flex items-start gap-3">

                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#C9A227]/10 text-[#C9A227]">
                      <Award size={18} />
                    </div>

                    <div>

                      <h3 className="text-lg font-bold leading-6 text-[#083C2A]">
                        {certificate.title}
                      </h3>

                    </div>

                  </div>

                  <p className="mt-4 text-sm font-medium text-[#0B5D3B]">
                    {certificate.issuer}
                  </p>

                  <p className="mt-2 text-xs leading-5 text-gray-500">
                    {certificate.detail}
                  </p>

                </div>

              </article>
            ))}

          </div>

        </Container>
      </section>

      {/* =====================================================
          FEATURED CREDENTIAL
      ===================================================== */}

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:py-24">

        <Container>

          <div className="grid overflow-hidden rounded-[32px] bg-[#083C2A] lg:grid-cols-2">

            {/* Image */}

            <div className="relative min-h-[300px] sm:min-h-[420px] lg:min-h-[540px]">

              <Image
                src="/certificates/cupping-diploma.jpg"
                alt="Advance Diploma in Cupping Therapy certificate"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#083C2A]/60 to-transparent" />

              <div className="absolute bottom-6 left-6 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#0B5D3B] shadow-lg">
                Featured Credential
              </div>

            </div>

            {/* Content */}

            <div className="flex flex-col justify-center p-7 text-white sm:p-10 lg:p-14">

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                Highlighted Training
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
                Advance Diploma in
                <span className="block text-[#C9A227]">
                  Cupping Therapy
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/65 sm:text-base">
                The displayed certificate records completion of
                coursework and clinical training in Cupping
                Therapy with a total of 50 Credit Hours.
              </p>

              <div className="mt-7 space-y-4">

                <div className="flex items-center gap-3">

                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-[#C9A227]"
                  />

                  <span className="text-sm text-white/80">
                    Coursework & clinical training
                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-[#C9A227]"
                  />

                  <span className="text-sm text-white/80">
                    50 Credit Hours mentioned on certificate
                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-[#C9A227]"
                  />

                  <span className="text-sm text-white/80">
                    Certificate available for viewing
                  </span>

                </div>

              </div>

            </div>

          </div>

        </Container>
      </section>

      {/* =====================================================
          AUTHORIZATION
      ===================================================== */}

      <section className="bg-[#F8F6F1] px-4 py-16 sm:px-6 sm:py-20">

        <Container>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">

            {/* Text */}

            <div>

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                Supporting Documentation
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-[#083C2A] sm:text-4xl">
                Product Authorization
                <span className="block text-[#0B5D3B]">
                  Documentation
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
                Alongside training certificates, we also display
                supporting documentation relating to product
                purchase and sale authorization.
              </p>

              <div className="mt-7 flex items-start gap-3 rounded-2xl bg-white p-5 shadow-sm">

                <ShieldCheck
                  size={22}
                  className="mt-0.5 shrink-0 text-[#C9A227]"
                />

                <p className="text-sm leading-6 text-gray-600">
                  The authorization document shown here is
                  presented as supporting documentation and
                  should be viewed in its original context.
                </p>

              </div>

            </div>

            {/* Document */}

            <div className="overflow-hidden rounded-[28px] border border-gray-200 bg-white p-3 shadow-xl">

              <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-gray-100">

                <Image
                  src="/certificates/authorized-letter.jpg"
                  alt="SK Pharma authorization letter"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

              </div>

            </div>

          </div>

        </Container>
      </section>

      {/* =====================================================
          TRANSPARENCY NOTE
      ===================================================== */}

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">

        <Container>

          <div className="mx-auto max-w-4xl rounded-[30px] border border-[#C9A227]/20 bg-[#F8F6F1] p-7 text-center sm:p-10">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#C9A227]/10 text-[#C9A227]">
              <FileCheck2 size={23} />
            </div>

            <h2 className="mt-5 text-2xl font-bold text-[#083C2A] sm:text-3xl">
              Transparency Matters
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              Certificates and documents displayed on this page
              are provided as supporting information. They do
              not by themselves constitute a guarantee of any
              particular medical outcome or treatment result.
            </p>

          </div>

        </Container>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="bg-[#0B5D3B] px-4 py-16 text-center text-white sm:px-6 sm:py-20">

        <Container>

          <div className="mx-auto max-w-3xl">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#C9A227]">
              <ShieldCheck size={27} />
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">
              Shifa Dawakhana
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Questions About Our
              <span className="text-[#C9A227]">
                {" "}Services?
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
              Explore our services or get in touch with our team
              for more information.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                href="/appointment"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A227] px-8 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#D9B52F]"
              >
                Book Consultation
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-white hover:text-[#0B5D3B]"
              >
                Explore Shifa Dawakhana
              </Link>

            </div>

          </div>

        </Container>

      </section>

    </main>
  );
}