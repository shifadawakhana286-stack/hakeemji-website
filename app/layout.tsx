import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";

import { CartProvider } from "@/context/CartContext";
import FloatingButtons from "@/components/layout/FloatingButtons";
import CartToast from "@/components/common/CartToast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shifadawakhana.com"),
  title: {
    default: "Shifa Dawakhana | Authentic Unani Healthcare",
    template: "%s | Shifa Dawakhana",
  },
  description: "Authentic Unani healthcare, traditional treatments, and herbal medicines from Shifa Dawakhana in Meerut.",
  openGraph: {
    type: "website",
    siteName: "Shifa Dawakhana",
    title: "Shifa Dawakhana | Authentic Unani Healthcare",
    description: "Authentic Unani healthcare, traditional treatments, and herbal medicines from Shifa Dawakhana in Meerut.",
    images: [{ url: "/logos/logo.png", alt: "Shifa Dawakhana" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shifa Dawakhana | Authentic Unani Healthcare",
    description: "Authentic Unani healthcare, traditional treatments, and herbal medicines from Shifa Dawakhana in Meerut.",
    images: ["/logos/logo.png"],
  },
  alternates: { canonical: "/" },
  icons: {
    icon: "/logos/logo.png",
    shortcut: "/logos/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        suppressHydrationWarning
        className={`${poppins.variable} ${playfair.variable}`}
      >
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
          <CartToast />
        </CartProvider>
        <FloatingButtons />
        <BackToTop />
      </body>
    </html>
  );
}