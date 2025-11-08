// components/property/PropertyGallery.tsx
/** biome-ignore-all lint/style/noMagicNumbers: <explanation> */
"use client";

import Image from "next/image";

type PropertyGalleryProps = {
  images: string[];
  title: string;
};

export function PropertyGallery({ images, title }: PropertyGalleryProps) {
  if (images.length === 0) {
    return null;
  }

  if (images.length === 1) {
    return (
      <div className="mb-8 overflow-hidden rounded-xl md:mb-12">
        <div className="relative h-[300px] md:h-[400px]">
          <Image
            alt={title}
            className="object-cover"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 100vw"
            src={images[0]}
          />
        </div>
      </div>
    );
  }

  if (images.length === 2) {
    return (
      <div className="mb-8 overflow-hidden rounded-xl md:mb-12">
        <div className="grid h-[300px] grid-cols-2 gap-2 md:h-[400px]">
          <div className="relative">
            <Image
              alt={title}
              className="object-cover"
              fill
              sizes="50vw"
              src={images[0]}
            />
          </div>
          <div className="relative">
            <Image
              alt={`${title} - Image 2`}
              className="object-cover"
              fill
              sizes="50vw"
              src={images[1]}
            />
          </div>
        </div>
      </div>
    );
  }

  if (images.length === 3) {
    return (
      <div className="mb-8 overflow-hidden rounded-xl md:mb-12">
        <div className="grid h-[300px] grid-cols-2 gap-2 md:h-[400px]">
          <div className="relative row-span-2">
            <Image
              alt={title}
              className="object-cover"
              fill
              sizes="50vw"
              src={images[0]}
            />
          </div>
          <div className="relative">
            <Image
              alt={`${title} - Image 2`}
              className="object-cover"
              fill
              sizes="50vw"
              src={images[1]}
            />
          </div>
          <div className="relative">
            <Image
              alt={`${title} - Image 3`}
              className="object-cover"
              fill
              sizes="50vw"
              src={images[2]}
            />
          </div>
        </div>
      </div>
    );
  }

  // For 4+ images, use the grid layout
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
