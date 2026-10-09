"use client";

import Image from "next/image";
import { useState } from "react";

type ProductImageProps = {
  src: string;
  alt: string;
  fallback: string;
};

export default function ProductImage({
  src,
  alt,
  fallback,
}: ProductImageProps) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <span className="text-7xl">{fallback}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      className="object-contain p-8 transition duration-300 group-hover:scale-105"
      onError={() => setImageError(true)}
    />
  );
}