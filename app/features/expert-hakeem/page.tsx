"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  ArrowLeft,
  ArrowRight,
  Award,
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  FileCheck2,
  GraduationCap,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

import Container from "@/components/common/Container";

const certificates = [
  {
    id: 1,
    title: "Advance Diploma in Cupping Therapy",
    institute: "Universal Institute of Healthcare Research & Training",
    category: "Cupping Therapy",
    year: "2022",
    detail: "50 Credit Hours • Clinical Training",
    image: "/certificates/cupping-diploma.jpg",
  },
  {
    id: 2,
    title: "Diploma in Naturopathy & Yogic Sciences",
    institute: "Paramedical Council",
    category: "Naturopathy & Yoga",
    year: "2021",
    detail: "Diploma / Certificate",
    image: "/certificates/naturopathy-diploma.jpg",
  },
  {
    id: 3,
    title: "Hi-Tech Fitness Leaders Workshop",
    institute: "Institute of DBIK Yoga & Clinic of AYUSH Paramedics",
    category: "Wellness",
    year: "2023",
    detail: "Professional Workshop Certificate",
    image: "/certificates/fitness-workshop.jpg",
  },
  {
    id: 4,
    title: "Facial Cupping Certificate",
    institute: "CupCure",
    category: "Cupping Therapy",
    year: "2023",
    detail: "Facial Cupping Training",
    image: "/certificates/facial-cupping.jpg",
  },
  {
    id: 5,
    title: "Cupping Therapy Training Certificate",
    institute: "CupCure",
    category: "Cupping Therapy",
    year: "2024",
    detail: "Professional Training Certificate",
    image: "/certificates/cupping-training.jpg",
  },
];

const timeline = [
  {
    year: "2021",
    title: "Diploma in Naturopathy & Yogic Sciences",
    institute: "Paramedical Council",
    description:
      "Completed foundational training in naturopathy and yoga therapies, focusing on natural health and wellness.",
  },
  {
    year: "2022",
    title: "Advance Diploma in Cupping Therapy",
    institute: "Universal Institute of Healthcare Research & Training",
    description:
      "Completed an advanced cupping therapy diploma with practical clinical experience and 50 credit hours.",
  },
  {
    year: "2023",
    title: "Facial Cupping Certificate",
    institute: "CupCure",
    description:
      "Certified in facial cupping techniques for skin health, facial rejuvenation, and wellness support.",
  },
  {
    year: "2023",
    title: "Hi-Tech Fitness Leaders Workshop",
    institute: "Institute of DBIK Yoga & Clinic of AYUSH Paramedics",
    description:
      "Attended a professional workshop focused on fitness leadership and holistic wellness education.",
  },
  {
    year: "2024",
    title: "Cupping Therapy Training Certificate",
    institute: "CupCure",
    description:
      "Received professional certification in advanced cupping therapy training and clinical practice.",
  },
];

export default function ExpertHakeemPage() {
  const [selectedCertificate, setSelectedCertificate] =
    useState<number | null>(null);

  const selected =
    selectedCertificate !== null
      ? certificates[selectedCertificate]
      : null;

  const nextCertificate = () => {
    if (selectedCertificate === null) return;

    setSelectedCertificate(
      (selectedCertificate + 1) % certificates.length
    );
  };

  const previousCertificate = () => {
    if (selectedCertificate === null) return;

    setSelectedCertificate(
      selectedCertificate === 0
        ? certificates.length - 1
        : selectedCertificate - 1
    );
  };

  return (
    <main className="min-h-screen bg-[#F8F6F1] text-[#083C2A]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#083C2A] text-white">

        {/* Background glow */}

        <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#C9A227]/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-white/5 blur-3xl" />

        <Container>

          <div className="relative grid min-h-[720px] items-center gap-12 py-28 lg:grid-cols-[1.05fr_.95fr] lg:py-32">

            {/* LEFT */}

            <div className="order-2 lg:order-1">

              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/60 transition hover:text-white"
              >
                <ArrowLeft size={17} />
                Back to Home
              </Link>

              <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#E4C548]">
                <BadgeCheck size={15} />
                Professional Credentials
              </div>

              <h1 className="mt-7 text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                Hakeem
                <span className="block text-[#C9A227]">
                  Mohd Shadab
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Explore documented professional training and
                credentials in Cupping Therapy, Naturopathy &
                Yogic Sciences, Facial Cupping and wellness
                education.
              </p>

              {/* Credential pills */}

              <div className="mt-8 flex flex-wrap gap-3">

                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                  Cupping Therapy
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                  Naturopathy & Yoga
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                  Facial Cupping
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                  Wellness Training
                </span>

              </div>

              {/* CTA */}

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">

                <Link
                  href="/appointment"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A227] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:bg-[#D8B52D]"
                >
                  Book Consultation
                  <ArrowRight size={18} />
                </Link>

                <a
                  href="https://wa.me/917017530506?text=Hello%20Shifa%20Dawakhana%2C%20I%20would%20like%20to%20know%20more%20about%20the%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#083C2A]"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>

              </div>

            </div>

            {/* RIGHT */}

            <div className="order-1 flex justify-center lg:order-2">

              <div className="relative w-full max-w-[500px]">

                {/* Decorative frame */}

                <div className="absolute -inset-4 rounded-[42px] border border-[#C9A227]/20" />

                <div className="absolute -inset-8 rounded-[55px] border border-white/5" />

                {/* Image */}

                <div className="relative overflow-hidden rounded-[34px] border border-[#C9A227]/30 bg-[#0B5D3B] p-3 shadow-2xl">

                  <div className="relative aspect-[4/5] overflow-hidden rounded-[27px]">

                    <Image
                      src="/doctor/hakeem.png"
                      alt="Hakeem Mohd Shadab"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 1024px) 90vw, 500px"
                    />

                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#083C2A] via-[#083C2A]/30 to-transparent" />

                    <div className="absolute bottom-6 left-6 right-6">

                      <div className="flex items-center gap-2 text-sm font-semibold text-white">

                        <ShieldCheck
                          size={18}
                          className="text-[#C9A227]"
                        />

                        Credentials available for review

                      </div>

                    </div>

                  </div>

                </div>

                {/* Floating credential */}

                <div className="absolute -bottom-6 -left-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-2xl sm:-left-8">

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#C9A227]/10 text-[#C9A227]">
                      <Award size={21} />
                    </div>

                    <div>

                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                        Documented
                      </p>

                      <p className="text-sm font-bold text-[#083C2A]">
                        5 Training Credentials
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </Container>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="bg-white px-4 py-20 sm:px-6 lg:py-24">

        <Container>

          <div className="mx-auto max-w-4xl text-center">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">
              About The Professional
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-[#083C2A] sm:text-4xl lg:text-5xl">
              A Profile Built Around
              <span className="block text-[#0B5D3B]">
                Continuous Learning
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-sm leading-8 text-gray-600 sm:text-base">
              This profile presents selected educational and
              training credentials documented through certificates
              and supporting documents. The focus is on transparent
              presentation of the training completed in wellness,
              naturopathy, yoga and cupping-related disciplines.
            </p>

          </div>

          {/* Highlight cards */}

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <CredentialHighlight
              icon={<GraduationCap size={22} />}
              number="01"
              title="Naturopathy"
              text="Diploma in Naturopathy & Yogic Sciences."
            />

            <CredentialHighlight
              icon={<Award size={22} />}
              number="02"
              title="Cupping"
              text="Advance Diploma with 50 Credit Hours."
            />

            <CredentialHighlight
              icon={<Sparkles size={22} />}
              number="03"
              title="Facial Cupping"
              text="Documented Facial Cupping training."
            />

            <CredentialHighlight
              icon={<ShieldCheck size={22} />}
              number="04"
              title="Wellness"
              text="Professional wellness and fitness workshop."
            />

          </div>

        </Container>
      </section>

      {/* =====================================================
          QUALIFICATIONS
      ===================================================== */}

      <section className="bg-[#F8F6F1] px-4 py-20 sm:px-6 lg:py-24">

        <Container>

          <SectionHeading
            eyebrow="Documented Qualifications"
            title="Training & Credentials"
            description="Qualifications and training shown below are based on the certificates and documents available for presentation."
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-2">

            {certificates.map((certificate, index) => (

              <button
                key={certificate.id}
                onClick={() =>
                  setSelectedCertificate(index)
                }
                className="group flex w-full items-start gap-5 rounded-[28px] border border-gray-200 bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A227]/40 hover:shadow-xl"
              >

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#C9A227]/10 text-[#C9A227] transition group-hover:bg-[#0B5D3B] group-hover:text-white">

                  <Award size={25} />

                </div>

                <div className="min-w-0 flex-1">

                  <div className="flex flex-wrap items-center gap-2">

                    <span className="rounded-full bg-[#F8F6F1] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0B5D3B]">
                      {certificate.category}
                    </span>

                    <span className="text-xs font-semibold text-gray-400">
                      {certificate.year}
                    </span>

                  </div>

                  <h3 className="mt-3 text-lg font-bold leading-6 text-[#083C2A] sm:text-xl">
                    {certificate.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium leading-6 text-[#0B5D3B]">
                    {certificate.institute}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {certificate.detail}
                  </p>

                </div>

                <ArrowRight
                  size={20}
                  className="mt-2 shrink-0 text-gray-300 transition group-hover:translate-x-1 group-hover:text-[#C9A227]"
                />

              </button>

            ))}

          </div>

        </Container>
      </section>

      {/* =====================================================
          PROFESSIONAL JOURNEY
      ===================================================== */}

      <section className="bg-[#083C2A] px-4 py-20 text-white sm:px-6 lg:py-24">

        <Container>

          <SectionHeading
            dark
            eyebrow="Documented Journey"
            title="Learning Milestones"
            description="A chronological view of the training credentials represented by the available documents."
          />

          <div className="mx-auto mt-14 max-w-4xl">

            {timeline.map((item, index) => (

              <div
                key={`${item.year}-${item.title}`}
                className="relative flex gap-5 pb-12 last:pb-0 sm:gap-8"
              >

                {/* line */}

                {index !== timeline.length - 1 && (
                  <div className="absolute left-[22px] top-12 h-[calc(100%-30px)] w-px bg-white/10 sm:left-[27px]" />
                )}

                {/* dot */}

                <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C9A227]/40 bg-[#0B5D3B] text-[#C9A227] shadow-lg sm:h-14 sm:w-14">

                  <CheckCircle2 size={20} />

                </div>

                {/* content */}

                <div className="flex-1 rounded-[24px] border border-white/10 bg-white/[0.04] p-5 sm:p-7">

                  <div className="flex flex-wrap items-center justify-between gap-3">

                    <span className="rounded-full bg-[#C9A227]/10 px-3 py-1.5 text-xs font-bold text-[#E5C64F]">
                      {item.year}
                    </span>

                    <CalendarDays
                      size={17}
                      className="text-white/30"
                    />

                  </div>

                  <h3 className="mt-4 text-xl font-bold sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-[#C9A227]">
                    {item.institute}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-white/60">
                    {item.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </Container>
      </section>

      {/* =====================================================
          CERTIFICATE GALLERY
      ===================================================== */}

      <section className="bg-white px-4 py-20 sm:px-6 lg:py-24">

        <Container>

          <SectionHeading
            eyebrow="Credentials Gallery"
            title="View The Certificates"
            description="Tap any certificate to view the original document in a larger format."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {certificates.map((certificate, index) => (

              <button
                key={certificate.id}
                onClick={() =>
                  setSelectedCertificate(index)
                }
                className="group overflow-hidden rounded-[30px] border border-gray-100 bg-[#F8F6F1] text-left shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="relative aspect-[3/4] overflow-hidden bg-[#F1EEE6]">

                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    fill
                    className="object-contain p-2 transition duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur">

                    <div>

                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#C9A227]">
                        {certificate.year}
                      </p>

                      <p className="mt-1 line-clamp-1 text-sm font-bold text-[#083C2A]">
                        {certificate.title}
                      </p>

                    </div>

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0B5D3B] text-white">
                      <ArrowRight size={16} />
                    </div>

                  </div>

                </div>

              </button>

            ))}

          </div>

        </Container>
      </section>

      {/* =====================================================
          SUPPORTING DOCUMENT
      ===================================================== */}

      <section className="bg-[#F8F6F1] px-4 py-20 sm:px-6 lg:py-24">

        <Container>

          <div className="grid gap-10 overflow-hidden rounded-[35px] bg-[#0B5D3B] lg:grid-cols-2 lg:items-center">

            <div className="p-7 sm:p-10 lg:p-14">

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                Supporting Document
              </span>

              <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
                SK Pharma
                <span className="block text-[#C9A227]">
                  Authorization Letter
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base">
                This document is displayed separately from the
                professional qualification certificates as a
                supporting authorization document.
              </p>

              <div className="mt-7 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5">

                <FileCheck2
                  size={21}
                  className="mt-0.5 shrink-0 text-[#C9A227]"
                />

                <p className="text-sm leading-6 text-white/60">
                  The document is presented for transparency and
                  should be understood according to the wording
                  and scope stated on the original document.
                </p>

              </div>

            </div>

            <button
              onClick={() => {
                const index = certificates.findIndex(
                  (item) => item.id === 5
                );

                if (index !== -1) {
                  setSelectedCertificate(index);
                }
              }}
              className="group relative min-h-[350px] overflow-hidden bg-[#062F21] lg:min-h-[500px]"
            >

              <Image
                 src="/certificates/authorized-letter.jpg"
                alt="SK Pharma authorization letter"
                fill
                className="object-contain p-5 transition duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div className="absolute bottom-5 left-5 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-[#0B5D3B] shadow-xl">
                View Document
              </div>

            </button>

          </div>

        </Container>
      </section>

      {/* =====================================================
          TRANSPARENCY
      ===================================================== */}

      <section className="bg-white px-4 py-16 sm:px-6">

        <Container>

          <div className="mx-auto max-w-4xl rounded-[30px] border border-[#C9A227]/20 bg-[#F8F6F1] p-7 text-center sm:p-10">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#C9A227]/10 text-[#C9A227]">
              <ShieldCheck size={27} />
            </div>

            <h2 className="mt-5 text-2xl font-bold text-[#083C2A] sm:text-3xl">
              Credentials With Transparency
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              The information presented on this page is based
              on the certificates and supporting documents
              available for display. It is intended to provide
              transparent information about documented training
              and credentials.
            </p>

          </div>

        </Container>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="bg-[#083C2A] px-4 py-20 text-center text-white sm:px-6">

        <Container>

          <div className="mx-auto max-w-3xl">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#C9A227]">
              <MessageCircle size={25} />
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">
              Shifa Dawakhana
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Ready to Speak With Us?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
              Book a consultation or contact us directly to
              discuss your requirements.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                href="/appointment"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A227] px-8 py-4 text-sm font-bold transition hover:-translate-y-1 hover:bg-[#D9B52F]"
              >
                Book Consultation
                <ArrowRight size={18} />
              </Link>

              <a
                href="https://wa.me/917017530506?text=Hello%20Shifa%20Dawakhana%2C%20I%20would%20like%20to%20book%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-bold transition hover:-translate-y-1 hover:bg-white hover:text-[#083C2A]"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>

            </div>

          </div>

        </Container>

      </section>

      {/* =====================================================
          CERTIFICATE LIGHTBOX
      ===================================================== */}

      {selected && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-3 backdrop-blur-md sm:p-6"
          onClick={() => setSelectedCertificate(null)}
        >

          {/* Close */}
<button
  type="button"
  onPointerDown={(event) => {
    event.stopPropagation();
    event.preventDefault();
    setSelectedCertificate(null);
  }}
  className="
    absolute
    right-4
    top-4
    z-50
    flex
    h-11
    w-11
    items-center
    justify-center
    rounded-full
    bg-white
    text-[#083C2A]
    shadow-xl
    transition-all
    duration-200
    hover:scale-110
    active:scale-95
    touch-manipulation
    sm:right-7
    sm:top-7
  "
  aria-label="Close certificate"
>
  <X size={21} />
</button>

{/* Previous */}
<button
  type="button"
  onPointerDown={(event) => {
    event.stopPropagation();
    event.preventDefault();
    previousCertificate();
  }}
  className="
    pointer-events-auto
    absolute
    left-3
    top-1/2
    z-50
    flex
    h-12
    w-12
    -translate-y-1/2
    touch-manipulation
    items-center
    justify-center
    rounded-full
    bg-white
    text-[#083C2A]
    shadow-2xl
    transition-all
    duration-200
    hover:scale-110
    active:scale-95
    sm:left-7
  "
  aria-label="Previous certificate"
>
  <ChevronLeft size={24} />
</button>

{/* Next */}
<button
  type="button"
  onPointerDown={(event) => {
    event.stopPropagation();
    event.preventDefault();
    nextCertificate();
  }}
  className="
    pointer-events-auto
    absolute
    right-3
    top-1/2
    z-50
    flex
    h-12
    w-12
    -translate-y-1/2
    touch-manipulation
    items-center
    justify-center
    rounded-full
    bg-white
    text-[#083C2A]
    shadow-2xl
    transition-all
    duration-200
    hover:scale-110
    active:scale-95
    sm:right-7
  "
  aria-label="Next certificate"
>
  <ChevronRight size={24} />
</button>

{/* Certificate */}
<div
  onClick={(event) => event.stopPropagation()}
  className="relative flex h-[88vh] w-full max-w-5xl flex-col items-center justify-center"
>

            <div className="relative h-[75vh] w-full">

              <Image
                src={selected.image}
                alt={selected.title}
                fill
                className="object-contain"
                sizes="100vw"
              />

            </div>

            <div className="absolute bottom-0 left-1/2 w-[90%] -translate-x-1/2 rounded-2xl bg-white/95 px-5 py-4 text-center shadow-2xl backdrop-blur sm:w-auto sm:min-w-[420px]">

              <p className="text-xs font-bold uppercase tracking-wider text-[#C9A227]">
                {selected.year} • {selected.category}
              </p>

              <h3 className="mt-1 text-sm font-bold text-[#083C2A] sm:text-base">
                {selected.title}
              </h3>

            </div>

          </div>

        </div>
      )}

    </main>
  );
}

/* ============================================================
   SMALL COMPONENTS
============================================================ */

function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">

      <span
        className={`text-xs font-bold uppercase tracking-[0.2em] ${
          dark ? "text-[#C9A227]" : "text-[#C9A227]"
        }`}
      >
        {eyebrow}
      </span>

      <h2
        className={`mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-[#083C2A]"
        }`}
      >
        {title}
      </h2>

      <p
        className={`mx-auto mt-5 max-w-2xl text-sm leading-7 sm:text-base ${
          dark ? "text-white/55" : "text-gray-500"
        }`}
      >
        {description}
      </p>

    </div>
  );
}

function CredentialHighlight({
  icon,
  number,
  title,
  text,
}: {
  icon: React.ReactNode;
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="group rounded-[26px] border border-gray-100 bg-[#F8F6F1] p-6 transition duration-300 hover:-translate-y-1 hover:bg-[#0B5D3B] hover:shadow-xl">

      <div className="flex items-center justify-between">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#C9A227] shadow-sm transition group-hover:bg-[#C9A227] group-hover:text-white">
          {icon}
        </div>

        <span className="text-xs font-bold text-gray-300 group-hover:text-white/30">
          {number}
        </span>

      </div>

      <h3 className="mt-5 text-lg font-bold text-[#083C2A] transition group-hover:text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-500 transition group-hover:text-white/60">
        {text}
      </p>

    </div>
  );
}