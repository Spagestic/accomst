// components/property/PropertyDescription.tsx
import type { Property } from "@/types/property";

type PropertyDescriptionProps = {
  property: Property;
};

export function PropertyDescription({ property }: PropertyDescriptionProps) {
  return (
    <div className="border-border border-b py-6 md:py-8">
      <h3 className="mb-3 font-semibold text-text-primary text-xl md:mb-4 md:text-[22px]">
        About this property
      </h3>
      <p className="text-sm text-text-primary leading-relaxed md:text-base">
        {property.description}
      </p>
      {property.highlights && property.highlights.length > 0 && (
        <div className="mt-4 md:mt-6">
          <h4 className="mb-3 font-medium text-base text-text-primary md:text-lg">
            Key Highlights
          </h4>
          <ul className="space-y-2">
            {property.highlights.map((highlight, idx) => (
              <li
                className="flex items-start gap-2 text-sm text-text-primary md:text-base"
                key={idx as number}
              >
                <span className="mt-1 text-primary">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
