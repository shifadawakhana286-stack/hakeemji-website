import "./Features.css";

import Link from "next/link";

import {
  UserRound,
  Video,
  Truck,
  Users,
  ShoppingBag,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: ShoppingBag,
    title: "Shop Medicines",
    description: "Explore authentic Unani medicines and herbal products.",
    href: "/shop",
  },
  {
    icon: GraduationCap,
    title: "Unani Courses",
    description: "Learn about Unani medicine, wellness, and traditional healing.",
    href: "/courses",
  },
  {
    icon: UserRound,
    title: "Expert Hakeem",
    description: "Experienced professionals providing trusted consultation.",
    href: "/features/expert-hakeem",
  },
  {
    icon: Video,
    title: "Online Consult",
    description: "Consult experienced Hakeems from anywhere in India.",
    href: "/features/online-consult",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Medicines delivered safely and quickly to your doorstep.",
    href: "/features/fast-delivery",
  },
  {
    icon: Users,
    title: "Trusted",
    description: "Thousands of satisfied patients have trusted Al Shifa.",
    href: "/features/trusted",
  },
];


export default function Features() {
  return (
    <section className="features">

      <div className="features-container">

        <div className="features-heading">

          <span className="features-subtitle">
            Why Choose Al Shifa
          </span>

          <h2>
            Trusted Unani Healthcare
          </h2>

          <p>
            Experience authentic Unani healing with experienced
            Hakeems, natural medicines, and patient-first care.
          </p>

        </div>

        <div className="features-grid">

          {features.map((item, index) => {

            const Icon = item.icon;

            return (
              <Link
                href={item.href}
                key={index}
                className="feature-card"
              >

                <div className="feature-icon">
                  <Icon size={34} />
                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

                <div className="feature-link">
                  Learn More
                  <ArrowRight size={18} />
                </div>

              </Link>
            );

          })}

        </div>

      </div>

    </section>
  );
}