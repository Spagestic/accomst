// components/property/PropertyHeader.tsx
"use client";

import { Heart, Share, Shield, Star } from "lucide-react";
import type { Property } from "@/types/property";

type PropertyHeaderProps = {
  property: Property;
};

export function PropertyHeader({ property }: PropertyHeaderProps) {
  return (
    <div className="mb-4 md:mb-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div className="flex-1">
          <h1 className="mb-2 font-semibold text-2xl text-text-primary md:text-[26px]">
            {property.title}
          </h1>
          <div className="flex flex-wrap items-center gap-2 text-sm md:gap-4">
            {property.rating && (
              <>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-current text-text-primary" />
                  <span className="font-semibold">
                    {property.rating.toFixed(2)}
                  </span>
                  <span className="text-muted-foreground">
                    ({property.reviewCount} reviews)
                  </span>
                </div>
                <span className="text-muted-foreground">·</span>
              </>
            )}
            <button
              className="font-semibold text-text-primary underline"
              type="button"
            >
              {property.location.district}, {property.location.region}
            </button>
          </div>
        </div>
        <div className="flex items-center gap-3 md:gap-4">
          <button
            className="flex items-center gap-2 text-text-primary transition-colors hover:text-muted-foreground"
            type="button"
          >
            <Share className="h-4 w-4" />
            <span className="font-medium text-sm underline">Share</span>
          </button>
          <button
            className="flex items-center gap-2 text-text-primary transition-colors hover:text-muted-foreground"
            type="button"
          >
            <Heart className="h-4 w-4" />
            <span className="font-medium text-sm underline">Save</span>
          </button>
        </div>
      </div>
      {property.isGuestFavorite && (
        <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-secondary px-3 py-1.5">
          <Shield className="h-4 w-4 text-primary" />
          <span className="font-medium text-sm text-text-primary">
            Investor favorite
          </span>
          <span className="text-muted-foreground text-xs">
            One of the most sought-after properties on ACCOMST
          </span>
        </div>
      )}
    </div>
  );
}
