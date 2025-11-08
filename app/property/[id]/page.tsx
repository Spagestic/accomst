// app/property/[id]/page.tsx
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { FractionalOwnershipCard } from "@/components/property/FractionalOwnershipCard";
import { InvestmentOverview } from "@/components/property/InvestmentOverview";
import { PropertyAmenities } from "@/components/property/PropertyAmenities";
import { PropertyDescription } from "@/components/property/PropertyDescription";
import { PropertyDetails } from "@/components/property/PropertyDetails";
import { PropertyGallery } from "@/components/property/PropertyGallery";
import { PropertyHeader } from "@/components/property/PropertyHeader";
import { PropertyLocation } from "@/components/property/PropertyLocation";
import { PropertyPageSkeleton } from "@/components/property/PropertyPageSkeleton";
import { getAllProperties } from "@/lib/properties";

export default function PropertyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Suspense fallback={<PropertyPageSkeleton />}>
      <PageContent params={params} />
    </Suspense>
  );
}

async function PageContent({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // Get properties from the properties.ts file
  const properties = await getAllProperties();
  const property = properties.find((p) => p.id === id);

  if (!property) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container px-4 py-6 md:px-6 md:py-8 lg:px-8">
        <PropertyHeader property={property} />

        <PropertyGallery images={property.images} title={property.title} />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
          {/* Left Column - Property Details */}
          <div className="space-y-0 lg:col-span-2">
            <PropertyDetails property={property} />
            <InvestmentOverview property={property} />
            <PropertyDescription property={property} />
            <PropertyAmenities property={property} />
            <PropertyLocation property={property} />
          </div>

          {/* Right Column - Investment Card */}
          <FractionalOwnershipCard property={property} />
        </div>
      </main>
    </div>
  );
}
