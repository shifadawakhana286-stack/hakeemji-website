"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShoppingBag, X, ArrowRight } from "lucide-react";
import { useCart } from "@/hooks/useCart";

export default function CartToast() {
  const { cartStatus, lastAddedItem, clearCartStatus, totalItems } = useCart();
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (cartStatus === "success" && lastAddedItem) {
      setVisible(true);

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        setVisible(false);
        clearCartStatus();
      }, 4500);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [cartStatus, lastAddedItem, clearCartStatus]);

  const handleClose = () => {
    setVisible(false);
    clearCartStatus();
  };

  if (!visible || !lastAddedItem) {
    return null;
  }

  const thumbImg =
    lastAddedItem.images && lastAddedItem.images.length > 0
      ? lastAddedItem.images[0]
      : "/logos/logo.png";

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-4 left-3 right-3 z-[9998] mx-auto max-w-md transition-all duration-300 ease-out sm:bottom-6 sm:left-auto sm:right-6"
      style={{
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
      }}
    >
      <div className="relative overflow-hidden rounded-2xl border border-[#0B5D3B]/20 bg-white p-4 shadow-[0_20px_50px_rgba(8,60,42,0.22)] backdrop-blur-md">
        {/* Top Progress bar indicator */}
        <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#0B5D3B] via-[#C9A227] to-[#0B5D3B]" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Dismiss notification"
          className="absolute top-2.5 right-2.5 flex h-7 w-7 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
        >
          <X size={16} />
        </button>

        <div className="flex items-center gap-3 pr-6">
          <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#F4F8F5] border border-[#0B5D3B]/10">
            <Image
              src={thumbImg}
              alt={lastAddedItem.name}
              width={48}
              height={48}
              className="h-full w-full object-contain p-1"
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#0B5D3B]">
              <CheckCircle2 size={15} className="text-[#0B5D3B] shrink-0" />
              <span>Added to Cart</span>
              <span className="text-gray-400 font-normal">({totalItems} items)</span>
            </div>
            <p className="truncate text-sm font-semibold text-gray-900 mt-0.5">
              {lastAddedItem.name}
            </p>
            <p className="text-xs font-bold text-[#C9A227]">
              ₹{lastAddedItem.price}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-3.5 flex items-center gap-2 pt-2 border-t border-gray-100">
          <button
            onClick={handleClose}
            className="flex-1 rounded-xl border border-gray-200 bg-gray-50 py-2.5 px-3 text-center text-xs font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            Continue
          </button>

          <Link
            href="/cart"
            onClick={handleClose}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#0B5D3B] py-2.5 px-3 text-center text-xs font-bold text-white shadow-sm transition hover:bg-[#08472E]"
          >
            <ShoppingBag size={14} />
            <span>View Cart</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}
