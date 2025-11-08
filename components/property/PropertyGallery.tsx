// components/property/PropertyGallery.tsx
/** biome-ignore-all lint/style/noMagicNumbers: <explanation> */
"use client";

import Image from "next/image";

type PropertyGalleryProps = {
  images: string[];
  title: string;
};

export function PropertyGallery({ images, title }: PropertyGalleryProps) {
  return (
    <div className="mb-8 overflow-hidden rounded-xl md:mb-12">
      <div className="grid h-[300px] grid-cols-2 gap-2 md:h-[400px] md:grid-cols-4">
        <div className="relative col-span-2 row-span-2">
          <Image
            alt={title}
            className="object-cover"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            src={images[0]}
          />
        </div>
        {images.slice(1, 5).map((img, idx) => (
          <div className="relative hidden md:block" key={idx as number}>
            <Image
              alt={`${title} - Image ${idx + 2}`}
              className="object-cover"
              fill
              sizes="25vw"
              src={img}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
