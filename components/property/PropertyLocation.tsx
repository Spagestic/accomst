// components/property/PropertyLocation.tsx

import { MapPin, Train } from "lucide-react";
import type { Property } from "@/types/property";

type PropertyLocationProps = {
  property: Property;
};

export function PropertyLocation({ property }: PropertyLocationProps) {
  return (
    <div className="border-border border-t py-6 md:py-8">
      <h3 className="mb-3 font-semibold text-text-primary text-xl md:mb-4 md:text-[22px]">
        Location
      </h3>
      <div className="mb-4 flex items-start gap-2 text-text-primary md:mb-6">
        <MapPin className="mt-1 h-5 w-5 text-primary" />
        <div>
          <p className="font-medium">{property.location.address}</p>
          <p className="text-muted-foreground text-sm">
            {property.location.district}, {property.location.region}
          </p>
        </div>
      </div>
      {property.location.nearbyMTR &&
        property.location.nearbyMTR.length > 0 && (
          <div className="mb-4 md:mb-6">
            <div className="mb-2 flex items-center gap-2">
              <Train className="h-5 w-5 text-primary" />
              <span className="font-medium text-sm text-text-primary md:text-base">
                Nearby MTR Stations
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {property.location.nearbyMTR.map((station, idx) => (
                <span
                  className="rounded-full bg-secondary px-3 py-1 text-text-primary text-xs md:text-sm"
                  key={idx as number}
                >
                  {station}
                </span>
              ))}
            </div>
            {property.location.proximityToMTR && (
              <p className="mt-2 text-muted-foreground text-xs md:text-sm">
                {property.location.proximityToMTR}m walking distance
              </p>
            )}
          </div>
        )}
      <div className="flex h-[250px] items-center justify-center rounded-xl bg-secondary md:h-[400px]">
        <p className="text-muted-foreground text-sm md:text-base">
          Map integration coming soon
        </p>
      </div>
    </div>
  );
}
