// components/property-grid.tsx
import { ArrowRight, House } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Property } from "@/types/property";
import { PropertyCard } from "./property-card";

type PropertySection = {
  id: string;
  title: string;
  description?: string;
  properties: Property[];
  maxItems?: number;
  viewAllUrl?: string;
  showCount?: boolean;
};

type PropertyGridProps = {
  sections: PropertySection[];
  className?: string;
  emptyStateMessage?: string;
};

const EmptyState = ({ message }: { message: string }) => (
  <div className="flex flex-col items-center justify-center px-4 py-16 text-center">
    <div className="mb-4 rounded-full bg-secondary p-6">
      <House />
    </div>
    <h3 className="mb-2 font-semibold text-foreground text-lg">
      No Properties Found
    </h3>
    <p className="max-w-md text-muted-foreground text-sm">{message}</p>
  </div>
);

const PropertyGrid = ({
  sections,
  className = "",
  emptyStateMessage = "We couldn't find any properties matching your criteria. Try adjusting your filters or check back soon for new listings.",
}: PropertyGridProps) => {
  // Check if all sections are empty
  const hasAnyProperties = sections.some(
    (section) => section.properties.length > 0
  );

  if (!hasAnyProperties) {
    return (
      <main className={cn("container pt-6 pb-12", className)}>
        <EmptyState message={emptyStateMessage} />
      </main>
    );
  }

  return (
    <main className={cn("container pt-6 pb-12", className)}>
      <div className="space-y-12">
        {sections.map((section) => {
          const displayProperties = section.maxItems
            ? section.properties.slice(0, section.maxItems)
            : section.properties;

          if (displayProperties.length === 0) {
            return null;
          }

          const hasMoreProperties =
            section.properties.length > displayProperties.length;
          const viewAllUrl =
            section.viewAllUrl || `/properties?section=${section.id}`;

          return (
            <section key={section.id}>
              {/* Section Header */}
              <div className="mb-6">
                <div className="mb-2 flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="mb-1 font-semibold text-2xl text-foreground">
                      {section.title}
                      {section.showCount !== false && (
                        <span className="ml-2 font-normal text-lg text-muted-foreground">
                          ({section.properties.length})
                        </span>
                      )}
                    </h2>
                    {section.description && (
                      <p className="max-w-2xl text-muted-foreground text-sm">
                        {section.description}
                      </p>
                    )}
                  </div>

                  {hasMoreProperties && (
                    <Link
                      className="btn btn--outline btn--sm flex shrink-0 items-center gap-1.5"
                      href={viewAllUrl}
                    >
                      <span>View all</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </div>
              </div>

              {/* Property Grid */}
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {displayProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>

              {/* Mobile "View All" Link */}
              {hasMoreProperties && (
                <div className="mt-6 sm:hidden">
                  <Link
                    className="flex items-center justify-center gap-2 font-medium text-primary text-sm hover:underline"
                    href={viewAllUrl}
                  >
                    <span>View all {section.properties.length} properties</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              )}
            </section>
          );
        })}
      </div>
    </main>
  );
};

export default PropertyGrid;
