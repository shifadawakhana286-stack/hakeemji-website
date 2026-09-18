import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, CalendarCheck, CheckCircle2, Clock3, MessageCircle, ShieldCheck } from "lucide-react";

import { services } from "@/data/services";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.title,
      description: service.description,
      images: [{ url: service.image, alt: service.title }],
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;
  const relatedServices = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);
  const whatsappMessage = encodeURIComponent(
    `Hello Shifa Dawakhana, I would like to know more about ${service.title}.`
  );

  return (
    <main className="min-h-screen bg-[#F8F6F1] pt-16 text-[#083C2A] sm:pt-[72px]">
      <section className="relative overflow-hidden bg-[#083C2A] px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#C9A227]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#0B5D3B]/70 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
          <div>
            <Link href="/#services" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-white">
              <ArrowLeft size={17} />
              Back to Services
            </Link>

            <div className="mt-9 inline-flex items-center gap-3 rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10 px-4 py-2 text-sm font-semibold text-[#E5C64F]">
              <Icon size={18} />
              Traditional Unani Service
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              {service.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/appointment" className="inline-flex items-center gap-2 rounded-full bg-[#C9A227] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#D9B52F]">
                <CalendarCheck size={18} />
                Book Appointment
              </Link>
              <a href={`https://wa.me/917037305542?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-[#083C2A]">
                <MessageCircle size={18} />
                Ask on WhatsApp
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-2xl">
            <Image src={service.image} alt={service.title} width={900} height={650} priority className="h-[280px] w-full object-cover sm:h-[380px]" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#083C2A]/90 to-transparent p-6 pt-20">
              <div className="flex items-center gap-2 text-sm font-semibold text-white/90">
                <Clock3 size={17} className="text-[#E5C64F]" />
                {service.duration}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.2fr_.8fr] lg:px-8">
        <div className="space-y-5">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C9A227]">About the service</p>
          <h2 className="text-3xl font-bold text-[#083C2A] sm:text-4xl">A considered approach to your visit</h2>
          {service.fullDescription.map((paragraph) => (
            <p key={paragraph} className="text-base leading-8 text-gray-600">{paragraph}</p>
          ))}
        </div>

        <aside className="rounded-3xl border border-[#0B5D3B]/10 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-3">
            <Clock3 className="text-[#C9A227]" size={22} />
            <h2 className="text-xl font-bold text-[#083C2A]">Session details</h2>
          </div>
          <p className="mt-4 leading-7 text-gray-600">{service.duration}</p>
          <Link href="/appointment" className="mt-6 inline-flex items-center gap-2 font-semibold text-[#0B5D3B] hover:text-[#C9A227]">
            Request a consultation <ArrowRight size={18} />
          </Link>
        </aside>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-[#F8F6F1] p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-[#C9A227]" size={23} />
              <h2 className="text-2xl font-bold text-[#083C2A]">What you can expect</h2>
            </div>
            <ul className="mt-6 space-y-4">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3 leading-7 text-gray-600">
                  <CheckCircle2 className="mt-1 shrink-0 text-[#0B5D3B]" size={18} />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-[#083C2A] p-6 text-white sm:p-8">
            <div className="flex items-center gap-3">
              <ArrowRight className="text-[#C9A227]" size={23} />
              <h2 className="text-2xl font-bold">How the process works</h2>
            </div>
            <ol className="mt-6 space-y-5">
              {service.process.map((step, index) => (
                <li key={step} className="flex gap-4 text-white/75">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C9A227] text-sm font-bold text-white">{index + 1}</span>
                  <span className="leading-7">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-[#C9A227]" size={23} />
            <h2 className="text-2xl font-bold text-[#083C2A]">Who it may suit</h2>
          </div>
          <ul className="mt-6 space-y-4">
            {service.suitableFor.map((item) => (
              <li key={item} className="flex gap-3 leading-7 text-gray-600">
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A227]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-[#C9A227]/30 bg-[#FFFDF5] p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-[#083C2A]">Before you book</h2>
          <ul className="mt-6 space-y-4">
            {service.precautions.map((precaution) => (
              <li key={precaution} className="flex gap-3 leading-7 text-gray-600">
                <ShieldCheck className="mt-1 shrink-0 text-[#C9A227]" size={18} />
                {precaution}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#F8F6F1] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C9A227]">Explore more</p>
              <h2 className="mt-2 text-3xl font-bold text-[#083C2A]">Related services</h2>
            </div>
            <Link href="/#services" className="inline-flex items-center gap-2 font-semibold text-[#0B5D3B] hover:text-[#C9A227]">
              Back to Services <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {relatedServices.map((relatedService) => {
              const RelatedIcon = relatedService.icon;
              return (
                <Link key={relatedService.slug} href={`/services/${relatedService.slug}`} className="group rounded-3xl border border-gray-100 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
                  <RelatedIcon className="text-[#C9A227]" size={28} />
                  <h3 className="mt-5 text-xl font-bold text-[#083C2A]">{relatedService.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600">{relatedService.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0B5D3B] group-hover:text-[#C9A227]">Learn More <ArrowRight size={16} /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
