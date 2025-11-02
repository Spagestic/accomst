// components/property-card.tsx
import { Bookmark, Calendar, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn, formatCurrency, formatFraction } from "@/lib/utils";
import type { Property } from "@/types/property";

const StatusBadge = ({ status }: { status: Property["status"] }) => {
  const variants = {
    available: "bg-green-100 text-green-800",
    limited: "bg-yellow-100 text-yellow-800",
    "sold-out": "bg-red-100 text-red-800",
    "coming-soon": "bg-blue-100 text-blue-800",
  };

  const labels = {
    available: "Available",
    limited: "Limited",
    "sold-out": "Sold Out",
    "coming-soon": "Coming Soon",
  };

  return (
    <div
      className={cn(
        "absolute top-3 left-3 rounded-md px-2 py-1 font-semibold text-xs shadow-sm",
        variants[status]
      )}
    >
      {labels[status]}
    </div>
  );
};

export const PropertyCard = ({ property }: { property: Property }) => {
  const availabilityPercentage =
    // biome-ignore lint/style/noMagicNumbers: dealing with percentages
    (property.availableFractions / property.totalFractions) * 100;
  const fractionDisplay = formatFraction(property.fractionSize);

  return (
    <Link
      aria-label={`View ${property.type} in ${property.location}`}
      className="group block"
      href={property.url}
    >
      <div className="relative">
        <div className="aspect-square overflow-hidden rounded-xl bg-gray-100">
          <Image
            alt={`${property.type} in ${property.location}`}
            className="object-cover transition-transform duration-300 group-hover:scale-101"
            fill
            priority={false}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            src={property.imageUrl}
          />
        </div>

        <StatusBadge status={property.status} />

        <div className="absolute top-3 right-3 rounded-md bg-background/90 p-1.5 shadow-sm backdrop-blur-sm">
          <Bookmark
            className="h-4 w-4 text-foreground"
            fill={property.isGuestFavorite ? "currentColor" : "none"}
          />
        </div>
      </div>

      <div className="mt-3 space-y-1.5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="truncate font-semibold text-[15px] text-foreground leading-tight">
            {property.location}
          </h3>
          <div className="flex shrink-0 items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-current text-foreground" />
            <span className="font-medium text-sm leading-tight">
              {property.rating.toFixed(1)}
            </span>
            <span className="text-muted-foreground text-xs">
              ({property.reviewCount})
            </span>
          </div>
        </div>

        <p className="truncate text-muted-foreground text-sm">
          {property.type} · {property.bedrooms} bed · {property.bathrooms} bath
        </p>

        <div className="flex items-center gap-3 text-muted-foreground text-xs">
          <div className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" />
            <span>{fractionDisplay} share</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            <span>{property.usageDaysPerYear} days/year</span>
          </div>
        </div>

        <div className="pt-1">
          <p className="text-sm">
            <span className="font-semibold text-foreground">
              {formatCurrency(property.pricePerFraction)}
            </span>
            <span className="text-muted-foreground"> / {fractionDisplay}</span>
          </p>

          {property.status !== "sold-out" &&
            property.availableFractions < property.totalFractions && (
              <div className="mt-2">
                <div className="h-1 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-blue-600 transition-all"
                    style={{ width: `${availabilityPercentage}%` }}
                  />
                </div>
                <p className="mt-1 text-muted-foreground text-xs">
                  {property.availableFractions} of {property.totalFractions}{" "}
                  shares available
                </p>
              </div>
            )}
        </div>
      </div>
    </Link>
  );
};
