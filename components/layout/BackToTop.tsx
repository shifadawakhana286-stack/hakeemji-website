"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () =>
      window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollTop}
      aria-label="Scroll back to top"
      className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-[999] flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-[#0B5D3B] text-white shadow-xl transition-all hover:scale-110 hover:bg-[#C9A227]"
    >
      <ChevronUp className="h-5 w-5 sm:h-6 sm:w-6" />
    </button>
  );
}