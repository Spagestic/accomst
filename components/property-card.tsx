// components/property-card.tsx
/** biome-ignore-all lint/style/noMagicNumbers: percentages */
import { Bookmark, Star, Train, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatCurrency } from "@/lib/utils";
import type { Property } from "@/types/property";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";

export const PropertyCard = ({ property }: { property: Property }) => {
  const soldPercentage =
    (property.financial.soldFractions / property.financial.totalFractions) *
    100;

  // Format fraction as 1/8, 1/5, etc.
  const formatFraction = (decimal: number): string => {
    const denominator = Math.round(1 / decimal);
    return `1/${denominator}`;
  };

  const fractionDisplay = formatFraction(property.financial.fractionSize);

  // Get primary MTR station (first in array)
  const primaryMTR = property.location.nearbyMTR?.[0];

  return (
    <Link
      aria-label={`View ${property.title}`}
      className="group block"
      href={property.url}
    >
      <div className="relative">
        <div className="aspect-square overflow-hidden rounded-xl bg-gray-200">
          <Image
            alt={property.title}
            className="rounded-sm object-cover transition-transform duration-300 group-hover:scale-101"
            fill
            priority={false}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            src={property.imageUrl}
          />
        </div>

        {/* Status Badge - Top Right */}
        <div className="absolute top-3 right-3">
          <Badge variant={"secondary"}>
            {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
          </Badge>
        </div>

        {/* Featured Badge - Top Left */}
        {property.featured && (
          <div className="absolute top-3 left-3">
            <Badge
              className="bg-green-800 text-white dark:bg-green-600"
              variant={"secondary"}
            >
              Featured
            </Badge>
          </div>
        )}

        {/* Bookmark - Bottom Right */}
        <button
          aria-label="Save property"
          className="absolute right-3 bottom-3 rounded-full bg-background/90 p-2 shadow-sm backdrop-blur-sm transition-colors hover:bg-background"
          type="button"
        >
          <Bookmark
            className="h-4 w-4 text-foreground"
            fill={property.isGuestFavorite ? "currentColor" : "none"}
          />
        </button>
      </div>

      <div className="mt-3 space-y-2">
        {/* Title and Rating */}
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <h3 className="line-clamp-1 font-semibold text-[15px] text-foreground leading-tight">
              {property.title}
            </h3>
            <p className="mt-0.5 line-clamp-1 text-muted-foreground text-xs">
              {property.location.district}
            </p>
          </div>
          {property.rating && (
            <div className="flex shrink-0 items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-current text-foreground" />
              <span className="font-medium text-sm leading-tight">
                {property.rating.toFixed(1)}
              </span>
            </div>
          )}
        </div>

        {/* Property Details */}
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <span>
            {property.details.bedrooms} bed · {property.details.bathrooms} bath
          </span>
          <span>·</span>
          <span>{property.details.sqft} sq.ft</span>
        </div>

        {/* MTR and Location Info */}
        {primaryMTR && (
          <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
            <Train className="h-3.5 w-3.5" />
            <span>{primaryMTR}</span>
            {property.location.proximityToMTR && (
              <span className="text-muted-foreground/70">
                · {property.location.proximityToMTR}m
              </span>
            )}
          </div>
        )}

        {/* Investment Details */}
        <div className="space-y-1 pt-1">
          {/* Price per Fraction */}
          <div className="flex items-baseline justify-between">
            <div>
              <span className="font-semibold text-base text-foreground">
                {formatCurrency(property.financial.pricePerFraction)}
              </span>
              <span className="text-muted-foreground text-sm">
                {" "}
                / {fractionDisplay}
              </span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground text-xs">
              <TrendingUp className="h-3 w-3" />
              <span>{property.financial.projectedRentalYield}% yield</span>
            </div>
          </div>

          {/* Total Property Value */}
          <p className="text-muted-foreground text-xs">
            Total value: {formatCurrency(property.financial.totalPrice)}
          </p>

          {/* Availability Bar */}
          {property.status !== "sold-out" &&
            property.status !== "coming-soon" &&
            property.financial.soldFractions > 0 && (
              <div className="pt-1.5">
                <Progress className="h-1.5" value={soldPercentage} />
                <p className="mt-1.5 text-muted-foreground text-xs">
                  {property.financial.availableFractions} of{" "}
                  {property.financial.totalFractions} shares available
                </p>
              </div>
            )}

          {/* Coming Soon - Show Offering Date */}
          {property.status === "coming-soon" && (
            <p className="pt-1 text-muted-foreground text-xs">
              Available from{" "}
              {new Date(property.offeringStartDate).toLocaleDateString(
                "en-HK",
                {
                  month: "short",
                  day: "numeric",
                }
              )}
            </p>
          )}
        </div>

        {/* Tags */}
        {property.tags && property.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {property.tags.slice(0, 2).map((tag) => (
              <span
                className="inline-flex items-center rounded-md bg-secondary px-2 py-0.5 font-medium text-foreground text-xs"
                key={tag}
              >
                {tag.replace(/-/g, " ")}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};
