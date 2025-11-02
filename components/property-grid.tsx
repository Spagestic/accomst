/** biome-ignore-all lint/style/noMagicNumbers: minor */
import { cheyenneProperties } from "../app/cheyenneProperties";
import { denverProperties } from "../app/denverProperties";
import { PropertyCard } from "./property-card";

const PropertyGrid = () => {
  // Show only 6 per section to match visual layout of main page sections.
  const cheyenneSubset = cheyenneProperties.slice(0, 6);
  const denverSubset = denverProperties.slice(0, 6);
  return (
    <main className="container pt-6 pb-12">
      <section className="mb-12">
        <h2 className="mb-6 font-semibold text-[22px] text-text-primary">
          Popular homes in Cheyenne
        </h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {cheyenneSubset.map((prop, index) => (
            <PropertyCard key={`cheyenne-${index as number}`} property={prop} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 font-semibold text-[22px] text-text-primary">
          Available in Denver this weekend
        </h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {denverSubset.map((prop, index) => (
            <PropertyCard key={`denver-${index as number}`} property={prop} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default PropertyGrid;
