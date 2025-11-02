// components/property-grid.tsx
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Property } from "@/types/property";
import { PropertyCard } from "./property-card";

type PropertySection = {
  id: string;
  title: string;
  properties: Property[];
  maxItems?: number;
};

type PropertyGridProps = {
  sections: PropertySection[];
  className?: string;
};

const PropertyGrid = ({ sections, className = "" }: PropertyGridProps) => (
  <main className={cn("container pt-6 pb-12", className)}>
    {sections.map((section, sectionIndex) => {
      const displayProperties = section.maxItems
        ? section.properties.slice(0, section.maxItems)
        : section.properties;

      if (displayProperties.length === 0) {
        return null;
      }

      return (
        <section
          className={sectionIndex < sections.length - 1 ? "mb-12" : ""}
          key={section.id}
        >
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-semibold text-2xl text-foreground">
              {section.title}
            </h2>
            {section.properties.length > displayProperties.length && (
              <Link
                className="font-medium text-blue-600 text-sm hover:underline"
                href={`/properties?section=${section.id}`}
              >
                View all ({section.properties.length})
              </Link>
            )}
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {displayProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </section>
      );
    })}
  </main>
);

export default PropertyGrid;
