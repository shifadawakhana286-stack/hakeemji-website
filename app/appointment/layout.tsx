import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description: "Request a consultation with the Shifa Dawakhana Unani Hakeem through WhatsApp.",
};

export default function AppointmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
