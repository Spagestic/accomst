// components/property/PropertyDetails.tsx

import { Building2, Calendar, Home, Maximize } from "lucide-react";
import type { Property } from "@/types/property";

type PropertyDetailsProps = {
  property: Property;
};

export function PropertyDetails({ property }: PropertyDetailsProps) {
  return (
    <div className="border-border border-b pb-6 md:pb-8">
      <h2 className="mb-3 font-semibold text-text-primary text-xl md:mb-4 md:text-[22px]">
        {property.propertyType.charAt(0).toUpperCase() +
          property.propertyType.slice(1)}{" "}
        Property
      </h2>
      <div className="grid grid-cols-2 gap-3 text-sm text-text-primary md:flex md:items-center md:gap-4 md:text-base">
        <div className="flex items-center gap-2">
          <Home className="h-4 w-4 text-muted-foreground" />
          <span>
            {property.details.bedrooms} bedroom
            {property.details.bedrooms > 1 ? "s" : ""}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Building2 className="h-4 w-4 text-muted-foreground" />
          <span>
            {property.details.bathrooms} bathroom
            {property.details.bathrooms > 1 ? "s" : ""}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Maximize className="h-4 w-4 text-muted-foreground" />
          <span>{property.details.sqft.toLocaleString()} sq ft</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span>Built {property.details.yearBuilt}</span>
        </div>
      </div>
    </div>
  );
}
