export interface NavItem {
  id: number;
  name: string;
  href: string;
}

export const navLinks: NavItem[] = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "About",
    href: "/about",
  },
  {
    id: 3,
    name: "Hakeem",
    href: "/hakeem",
  },
  {
    id: 4,
    name: "Remedies",
    href: "/remedies",
  },
  {
    id: 5,
    name: "Shop",
    href: "/shop",
  },
  {
    id: 6,
    name: "Services",
    href: "/services",
  },
  {
    id: 7,
    name: "Contact",
    href: "/contact",
  },
];