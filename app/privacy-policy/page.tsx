import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Shifa Dawakhana privacy policy and learn how we handle personal information shared through our website and services.",
};

const sections = [
  {
    title: "Information We Collect",
    paragraphs: [
      "We may collect information that you choose to share with us, including your name, phone number, email address, delivery address, appointment preferences, health concerns, and messages submitted through our website or communication channels.",
      "When you browse the website, limited technical information such as your browser, device, pages visited, and approximate usage details may also be collected by the website or its service providers to keep the site secure and improve the experience.",
    ],
  },
  {
    title: "How We Use Your Information",
    paragraphs: [
      "We use the information you provide to respond to enquiries, arrange appointments, process and deliver orders, provide customer support, communicate about your requests, and improve our products and services.",
      "We may also use information to prevent fraud, maintain website security, comply with applicable laws, and keep records necessary for our business operations. We do not use your health information to make an automated medical decision.",
    ],
  },
  {
    title: "Health Information",
    paragraphs: [
      "Please share only the health information needed for your enquiry or consultation. Information shared with us is used to support communication and service delivery, but website communication is not a substitute for an in-person medical evaluation or emergency care.",
      "For sensitive medical concerns, use a trusted and appropriate communication channel and avoid sharing information that is not necessary for your request.",
    ],
  },
  {
    title: "Sharing Information",
    paragraphs: [
      "We may share information with service providers who help us operate the website, communicate with customers, process orders, or deliver products. These providers should use the information only to perform the services requested.",
      "We may also disclose information when required by law, to protect our rights and users, or in connection with a business transfer. We do not sell your personal information.",
    ],
  },
  {
    title: "WhatsApp and External Services",
    paragraphs: [
      "Some appointment and support links may open WhatsApp or another external service. Once you leave our website, that service's own privacy policy and terms apply. Please review them before sharing personal or health information.",
      "The website may also contain links to maps, social media, payment, courier, or other third-party services. We are not responsible for the privacy practices of external websites.",
    ],
  },
  {
    title: "Cookies and Security",
    paragraphs: [
      "The website may use essential browser storage or cookies to support features such as shopping-cart functionality, preferences, security, and performance. You can manage cookies through your browser settings, although disabling them may affect some features.",
      "We use reasonable administrative and technical safeguards, but no website or electronic transmission can be guaranteed to be completely secure. Please contact us promptly if you believe your information has been accessed or used improperly.",
    ],
  },
  {
    title: "Retention and Your Choices",
    paragraphs: [
      "We keep personal information only for as long as reasonably necessary for the purpose it was collected, to provide services, resolve disputes, maintain business records, or meet legal requirements.",
      "You may contact us to ask about the personal information we hold about you, request a correction, or ask us to delete it where deletion is legally and operationally possible. We may need to verify your identity before completing a request.",
    ],
  },
  {
    title: "Children's Privacy",
    paragraphs: [
      "Our website is not directed at children. We do not knowingly collect personal information from children without appropriate consent. If you believe a child has provided us with personal information, please contact us so we can review and remove it where appropriate.",
    ],
  },
  {
    title: "Changes to This Policy",
    paragraphs: [
      "We may update this policy when our services, technology, or legal obligations change. The updated version will be posted on this page with a revised date. Please review this page periodically for the latest information.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#F8FAF7] pt-16 text-[#083C2A] sm:pt-[72px]">
      <section className="relative overflow-hidden bg-[#083C2A] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#C9A227]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#0E6C42]/30 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">
          <Link
            href="/"
            className="text-sm font-medium text-white/70 transition hover:text-white"
          >
            ← Back to Home
          </Link>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#E5C75A]">
            Legal
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
            We respect your privacy and aim to be clear about how information is
            handled when you use Shifa Dawakhana&apos;s website and services.
          </p>
          <p className="mt-6 text-sm text-white/60">Last updated: September 21, 2026</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="space-y-10 rounded-2xl border border-[#0B5D3B]/10 bg-white p-6 shadow-sm sm:p-10">
          <p className="text-base leading-8 text-gray-600">
            This Privacy Policy explains how Shifa Dawakhana (“we”, “us”, or
            “our”) collects, uses, shares, and protects information when you
            visit our website, contact us, book an appointment, or enquire
            about our medicines and services.
          </p>

          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-bold text-[#083C2A]">{section.title}</h2>
              <div className="mt-3 space-y-3 text-base leading-8 text-gray-600">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}

          <section className="border-t border-[#0B5D3B]/10 pt-8">
            <h2 className="text-2xl font-bold text-[#083C2A]">Contact Us</h2>
            <p className="mt-3 text-base leading-8 text-gray-600">
              For privacy questions or requests, contact Shifa Dawakhana at{" "}
              <a
                href="mailto:shifadawakhana286@gmail.com"
                className="font-semibold text-[#0B5D3B] underline decoration-[#C9A227] underline-offset-4"
              >
                shifadawakhana286@gmail.com
              </a>{" "}
              or call{" "}
              <a
                href="tel:+917037305542"
                className="font-semibold text-[#0B5D3B] underline decoration-[#C9A227] underline-offset-4"
              >
                +91 70373 05542
              </a>.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}