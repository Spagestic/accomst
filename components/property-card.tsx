import { Bookmark, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Property } from "../types/property";

export const PropertyCard = ({ property }: { property: Property }) => (
  <Link className="group block" href={property.url}>
    <div className="relative">
      <div className="aspect-square overflow-hidden rounded-xl">
        <Image
          alt={`${property.type} in ${property.location}`}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 16.6vw"
          src={property.imageUrl}
        />
      </div>
      {property.isGuestFavorite && (
        <div className="absolute top-3 right-3 rounded-md bg-background p-1 font-bold text-foreground text-xs shadow-sm">
          <Bookmark className="h-4 w-4 align-middle" />
        </div>
      )}
    </div>
    <div className="mt-3 text-text-primary">
      <div className="flex items-start justify-between">
        <h3 className="truncate pr-2 font-medium text-[15px] leading-tight">
          {property.location}
        </h3>
        <div className="flex shrink-0 items-center gap-1">
          <Star className="h-3.5 w-3.5 fill-current text-text-primary" />
          <span className="text-sm leading-tight">
            {property.rating.toFixed(property.rating % 1 === 0 ? 1 : 2)}
          </span>
        </div>
      </div>
      <p className="truncate text-muted-foreground text-sm leading-tight">
        {property.type}
      </p>
      <p className="mt-1.5 text-sm leading-tight">
        <span className="font-semibold">${property.price}</span> for 2 nights
      </p>
    </div>
  </Link>
);
