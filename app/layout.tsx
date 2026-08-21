import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";

import { LanguageProvider } from "@/context/LanguageContext";
import { CartProvider } from "@/context/CartContext";
import FloatingButtons from "@/components/layout/FloatingButtons";
import CartToast from "@/components/common/CartToast";

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
  title: "Shifa Dawakhana",
  description: "Authentic Unani Healthcare",
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
    <html lang="en">
      <body className={`${poppins.variable} ${playfair.variable}`}>
        <LanguageProvider>
          <CartProvider>
            {children}
            <CartToast />
          </CartProvider>
        </LanguageProvider>
        <FloatingButtons />
      </body>
    </html>
  );
}