"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Search,
  CalendarCheck,
  ShoppingCart,
} from "lucide-react";

import Container from "@/components/common/Container";
import SearchModal from "@/components/search/SearchModal";
import LanguageSwitcher from "./LanguageSwitcher";
import { useCart } from "@/hooks/useCart";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const { totalItems } = useCart();

  const navItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/#about" },
    { title: "Hakeem", href: "/#hakim" },
    { title: "Courses", href: "/courses" },
    { title: "Shop", href: "/shop" },
    { title: "Services", href: "/#services" },
    { title: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <header
        className="
          fixed
          top-0
          left-0
          right-0
          z-50
          border-b
          border-gray-200/60
          bg-white/90
          backdrop-blur-xl
          transition-all
          duration-300
        "
      >
        <Container>
          <nav className="flex h-16 sm:h-[72px] items-center justify-between gap-3">

            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/logos/logo.png"
                alt="Shifa Dawakhana"
                width={180}
                height={42}
                priority
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden items-center gap-7 font-medium lg:flex">
              {navItems.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="
                      relative
                      font-medium
                      text-gray-700
                      transition-all
                      duration-300
                      after:absolute
                      after:left-0
                      after:-bottom-2
                      after:h-[2px]
                      after:w-0
                      after:bg-[#C9A227]
                      after:transition-all
                      hover:text-[#0B5D3B]
                      hover:after:w-full
                    "
                  >
                    {item.title}
                  </Link>
                </li>
              ))}

              {/* Book Appointment */}
              <li>
                <Link
                  href="/appointment"
                  className="
                    flex
                    items-center
                    gap-2
                    font-semibold
                    text-[#0B5D3B]
                    transition
                    hover:text-[#C9A227]
                  "
                >
                  <CalendarCheck
                    size={18}
                    className="text-[#C9A227]"
                  />
                  Book
                </Link>
              </li>
            </ul>

            {/* Desktop Right Side Controls */}
            <div className="hidden items-center gap-3 lg:flex">
              {/* Language */}
              <LanguageSwitcher />

              {/* Cart */}
              <Link
                href="/cart"
                aria-label={`Shopping cart with ${totalItems} items`}
                className="
                  relative
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-gray-200
                  bg-white
                  transition-all
                  duration-300
                  hover:border-[#0B5D3B]
                  hover:bg-[#0B5D3B]
                  hover:text-white
                "
              >
                <ShoppingCart size={18} />

                {totalItems > 0 && (
                  <span
                    className="
                      absolute
                      -right-1
                      -top-1
                      flex
                      h-5
                      min-w-[20px]
                      px-1
                      items-center
                      justify-center
                      rounded-full
                      bg-[#C9A227]
                      text-[10px]
                      font-bold
                      text-white
                      shadow-sm
                    "
                  >
                    {totalItems}
                  </span>
                )}
              </Link>

              {/* Search */}
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="Open search"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-gray-200
                  bg-white
                  transition-all
                  duration-300
                  hover:border-[#0B5D3B]
                  hover:bg-[#0B5D3B]
                  hover:text-white
                "
              >
                <Search size={18} />
              </button>
            </div>

            {/* Mobile Header Quick Actions */}
            <div className="flex items-center gap-1.5 lg:hidden">
              {/* Mobile Search Button */}
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="Open search"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  text-gray-700
                  transition
                  hover:bg-gray-100
                "
              >
                <Search size={20} />
              </button>

              {/* Mobile Cart Button with Live Badge */}
              <Link
                href="/cart"
                aria-label={`Shopping cart (${totalItems} items)`}
                className="
                  relative
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  text-gray-700
                  transition
                  hover:bg-gray-100
                "
              >
                <ShoppingCart size={20} />

                {totalItems > 0 && (
                  <span
                    className="
                      absolute
                      top-1
                      right-1
                      flex
                      h-4
                      min-w-[16px]
                      px-1
                      items-center
                      justify-center
                      rounded-full
                      bg-[#0B5D3B]
                      text-[9px]
                      font-bold
                      text-white
                    "
                  >
                    {totalItems}
                  </span>
                )}
              </Link>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setOpen(!open)}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  text-gray-800
                  transition
                  hover:bg-gray-100
                "
                aria-label="Toggle mobile menu"
                aria-expanded={open}
              >
                {open ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>
        </Container>

        {/* Mobile Navigation Drawer */}
        {open && (
          <div className="border-t border-gray-100 bg-white/95 backdrop-blur-xl shadow-2xl lg:hidden">
            <Container>
              <div className="flex flex-col py-4 gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="
                      flex
                      items-center
                      justify-between
                      rounded-xl
                      px-4
                      py-3
                      text-base
                      font-semibold
                      text-gray-700
                      transition
                      hover:bg-[#F3F8F5]
                      hover:text-[#0B5D3B]
                    "
                  >
                    <span>{item.title}</span>
                    <span className="text-gray-400 text-xs">→</span>
                  </Link>
                ))}

                {/* Mobile Book Appointment Action */}
                <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2.5">
                  <Link
                    href="/appointment"
                    onClick={() => setOpen(false)}
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-[#0B5D3B]
                      py-3.5
                      px-4
                      text-center
                      text-sm
                      font-bold
                      text-white
                      shadow-md
                      transition
                      hover:bg-[#08472E]
                    "
                  >
                    <CalendarCheck size={18} />
                    <span>Book Appointment</span>
                  </Link>

                  <div className="flex items-center justify-between px-2 pt-2 text-xs text-gray-500">
                    <span>Language</span>
                    <LanguageSwitcher />
                  </div>
                </div>
              </div>
            </Container>
          </div>
        )}
      </header>

      {/* Search Modal */}
      <SearchModal
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </>
  );
}