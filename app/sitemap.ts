import type { MetadataRoute } from "next";

import { products } from "@/data/products";
import { services } from "@/data/services";
import { treatments } from "@/data/treatments";

const siteUrl = "https://shifadawakhana.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/shop",
    "/courses",
    "/contact",
    "/appointment",
    "/features/natural",
    "/features/fast-delivery",
    "/features/expert-hakeem",
    "/features/online-consult",
    "/features/personalized",
    "/features/trusted",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...products.map((product) => ({
      url: `${siteUrl}/shop/${product.id}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
      images: product.images,
    })),
    ...treatments.map((treatment) => ({
      url: `${siteUrl}/treatments/${treatment.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
      images: treatment.images,
    })),
    ...services.map((service) => ({
      url: `${siteUrl}/services/${service.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: [service.image],
    })),
  ];
}
