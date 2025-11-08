// components/property/PropertyAmenities.tsx
/** biome-ignore-all lint/style/noMagicNumbers: <explanation> */
"use client";

import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Property } from "@/types/property";

type PropertyAmenitiesProps = {
  property: Property;
};

export function PropertyAmenities({ property }: PropertyAmenitiesProps) {
  return (
    <div className="border-border border-b py-6 md:py-8">
      <h3 className="mb-4 font-semibold text-text-primary text-xl md:mb-6 md:text-[22px]">
        Amenities
      </h3>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4">
        {property.amenities.slice(0, 8).map((amenity, idx) => (
          <div className="flex items-center gap-3" key={idx as number}>
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <span className="text-sm text-text-primary md:text-base">
              {amenity}
            </span>
          </div>
        ))}
      </div>
      {property.amenities.length > 8 && (
        <Button className="mt-4 md:mt-6" variant="outline">
          Show all {property.amenities.length} amenities
        </Button>
      )}
    </div>
  );
}
