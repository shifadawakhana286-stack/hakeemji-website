"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  title: string;
}

export default function ProductGallery({
  images,
  title,
}: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="product-gallery">

      {/* Thumbnail Images */}
      <div className="gallery-thumbnails">
        {images.map((image, index) => (
          <button
            key={index}
            className={`thumbnail ${
              selectedImage === image ? "active" : ""
            }`}
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image}
              alt={`${title} ${index + 1}`}
              width={80}
              height={80}
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="gallery-main-image">
        <Image
          src={selectedImage}
          alt={title}
          width={600}
          height={600}
          priority
          className="main-product-image"
        />
      </div>

    </div>
  );
}