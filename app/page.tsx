// app/page.tsx (or wherever you're using the grid)
/** biome-ignore-all lint/style/noMagicNumbers: minor */
import { Footer } from "@/components/footer";
import HeroSection from "@/components/HeroSection";
import { Header5 } from "@/components/header-5";
import PropertyGrid from "@/components/property-grid";
import {
  getFeaturedProperties,
  getHongKongIslandProperties,
  getKowloonProperties,
  getPropertiesByYield,
  getPropertiesNearMTR,
} from "@/lib/properties";

export default async function HomePage() {
  const [featured, hkIsland, kowloon, highYield, mtrAccess] = await Promise.all(
    [
      getFeaturedProperties(),
      getHongKongIslandProperties(),
      getKowloonProperties(),
      getPropertiesByYield(4.5), // Properties with 4.5%+ yield
      getPropertiesNearMTR(300), // Within 300m of MTR
    ]
  );

  const sections = [
    {
      id: "featured",
      title: "Featured Opportunities",
      description:
        "Hand-picked premium properties with exceptional location and returns",
      properties: featured,
      maxItems: 4,
      viewAllUrl: "/properties?filter=featured",
      showCount: false,
    },
    {
      id: "high-yield",
      title: "High Yield Investments",
      description:
        "Properties offering 4.5%+ projected rental yield for income-focused investors",
      properties: highYield,
      maxItems: 4,
      viewAllUrl: "/properties?filter=high-yield",
    },
    {
      id: "mtr-access",
      title: "Prime MTR Access",
      description:
        "Properties within 300 meters of MTR stations for maximum convenience",
      properties: mtrAccess,
      maxItems: 8,
      viewAllUrl: "/properties?filter=mtr-access",
    },
    {
      id: "hong-kong-island",
      title: "Hong Kong Island",
      description:
        "Premium properties in Central, Causeway Bay, and other sought-after Island districts",
      properties: hkIsland,
      maxItems: 8,
      viewAllUrl: "/properties?region=hong-kong-island",
    },
    {
      id: "kowloon",
      title: "Kowloon Properties",
      description:
        "Value opportunities in Tsim Sha Tsui, Olympic, and emerging Kowloon districts",
      properties: kowloon,
      maxItems: 8,
      viewAllUrl: "/properties?region=kowloon",
    },
  ];

  return (
    <div className="min-h-screen bg-background p-4">
      <Header5 />
      <HeroSection />
      <PropertyGrid
        emptyStateMessage="We're constantly adding new investment opportunities. Check back soon or sign up for notifications."
        sections={sections}
      />
      <Footer />
    </div>
  );
}
