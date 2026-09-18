import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Unani Consultation",
  description: "Connect with Shifa Dawakhana for convenient online Unani consultation.",
};

export default function OnlineConsultLayout({ children }: { children: React.ReactNode }) {
  return children;
}
