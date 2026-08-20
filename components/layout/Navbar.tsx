"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Search,
  Moon,
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
          border-white/10
          bg-white/80
          backdrop-blur-xl
          transition-all
          duration-500
        "
      >
        <Container>
          <nav className="flex h-[72px] items-center justify-between">

            {/* Logo */}

            <Link href="/" className="flex items-center">
              <Image
                src="/logos/logo.png"
                alt="Shifa Dawakhana"
                width={200}
                height={46}
              />
            </Link>

            {/* Desktop Menu */}

            <ul className="hidden items-center gap-8 font-medium lg:flex">
              {navItems.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    target={
                      item.title === "Courses" ? "_blank" : undefined
                    }
                    rel={
                      item.title === "Courses"
                        ? "noopener noreferrer"
                        : undefined
                    }
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
                    transition
                    hover:text-[#0B5D3B]
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

            {/* Right Side */}

            <div className="hidden items-center gap-4 lg:flex">

              {/* Language */}

              <LanguageSwitcher />

              {/* Cart */}

              <Link
                href="/cart"
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
                  hover:border-[#C9A227]
                  hover:bg-[#C9A227]
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
                      w-5
                      items-center
                      justify-center
                      rounded-full
                      bg-red-500
                      text-[10px]
                      font-bold
                      text-white
                    "
                  >
                    {totalItems}
                  </span>
                )}
              </Link>

              {/* Search */}

              <button
                onClick={() => setSearchOpen(true)}
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
                  hover:border-[#C9A227]
                  hover:bg-[#C9A227]
                  hover:text-white
                "
              >
                <Search size={18} />
              </button>

              {/* Dark Mode */}

              <button
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
                  hover:border-[#C9A227]
                  hover:bg-[#C9A227]
                  hover:text-white
                "
              >
                <Moon size={18} />
              </button>
            </div>

            {/* Mobile Menu Button */}

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </nav>
        </Container>

        {/* Mobile Menu */}

        {open && (
          <div className="border-t bg-white lg:hidden">
            <Container>
              <div className="flex flex-col py-4">

                {navItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    target={
                      item.title === "Courses" ? "_blank" : undefined
                    }
                    rel={
                      item.title === "Courses"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    onClick={() => setOpen(false)}
                    className="
                      border-b
                      py-3
                      text-gray-700
                      transition
                      hover:text-[#0B5D3B]
                    "
                  >
                    {item.title}
                  </Link>
                ))}

                {/* Cart */}

                <Link
                  href="/cart"
                  onClick={() => setOpen(false)}
                  className="
                    mt-4
                    flex
                    items-center
                    gap-2
                    py-2
                    text-gray-700
                    transition
                    hover:text-[#0B5D3B]
                  "
                >
                  <ShoppingCart size={18} />

                  Cart ({totalItems})
                </Link>

                {/* Book Appointment */}

                <Link
                  href="/appointment"
                  onClick={() => setOpen(false)}
                  className="
                    mt-4
                    flex
                    items-center
                    gap-2
                    font-medium
                    text-[#0B5D3B]
                  "
                >
                  <CalendarCheck size={18} />

                  Book Appointment
                </Link>
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