import PropertyGrid from "@/components/property-grid";
import { getCheyenneProperties, getDenverProperties } from "@/lib/properties";

export default async function Home() {
  return (
    <div className="min-h-screen bg-background px-4">
      <div className="pt-20">
        <PropertyGrid
          sections={[
            {
              id: "cheyenne",
              title: "Cheyenne Properties",
              properties: await getCheyenneProperties(),
            },
            {
              id: "denver",
              title: "Denver Properties",
              properties: await getDenverProperties(),
            },
          ]}
        />
      </div>
    </div>
  );
}
