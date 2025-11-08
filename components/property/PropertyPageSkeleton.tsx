// components/property/PropertyPageSkeleton.tsx
"use client";

import { Skeleton } from "@/components/ui/skeleton";

const THUMBNAIL_COUNT = 4;
const DETAILS_COUNT = 4;
const INVESTMENT_CARDS_COUNT = 4;
const DESCRIPTION_LINES = 3;
const AMENITIES_COUNT = 6;
const CARD_DETAILS_COUNT = 3;

export function PropertyPageSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container px-4 py-6 md:px-6 md:py-8 lg:px-8">
        {/* Header Section */}
        <div className="mb-4 md:mb-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div className="flex-1">
              <Skeleton className="mb-2 h-8 w-3/4 md:h-[26px]" />
              <div className="flex flex-wrap items-center gap-2 text-sm md:gap-4">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-40" />
              </div>
            </div>
            <div className="flex gap-2">
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-10 w-10 rounded-full" />
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-8 md:mb-10">
          <div className="grid gap-2">
            {/* Main image */}
            <Skeleton className="h-96 w-full rounded-lg md:h-[500px]" />
            {/* Thumbnail images */}
            <div className="grid grid-cols-4 gap-2">
              {Array.from({ length: THUMBNAIL_COUNT }).map((_, index) => (
                <Skeleton
                  className="h-20 w-full rounded-md"
                  key={index as number}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
          {/* Left Column - Property Details */}
          <div className="space-y-8 lg:col-span-2">
            {/* Property Details Section */}
            <div className="space-y-4">
              <Skeleton className="h-6 w-40" />
              <div className="space-y-2">
                {Array.from({ length: DETAILS_COUNT }).map((_, index) => (
                  <div className="flex justify-between" key={index as number}>
                    <Skeleton className="h-4 w-1/3" />
                    <Skeleton className="h-4 w-1/4" />
                  </div>
                ))}
              </div>
            </div>

            {/* Investment Overview Section */}
            <div className="space-y-4">
              <Skeleton className="h-6 w-40" />
              <div className="grid grid-cols-2 gap-4">
                {Array.from({ length: INVESTMENT_CARDS_COUNT }).map(
                  (_, index) => (
                    <div
                      className="space-y-2 rounded-lg border p-4"
                      key={index as number}
                    >
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-6 w-3/4" />
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Description Section */}
            <div className="space-y-4">
              <Skeleton className="h-6 w-40" />
              <div className="space-y-2">
                {Array.from({ length: DESCRIPTION_LINES }).map((_, index) => (
                  <Skeleton className="h-4 w-full" key={index as number} />
                ))}
                <Skeleton className="h-4 w-2/3" />
              </div>
            </div>

            {/* Amenities Section */}
            <div className="space-y-4">
              <Skeleton className="h-6 w-40" />
              <div className="grid grid-cols-2 gap-3">
                {Array.from({ length: AMENITIES_COUNT }).map((_, index) => (
                  <Skeleton
                    className="h-8 w-full rounded-full"
                    key={index as number}
                  />
                ))}
              </div>
            </div>

            {/* Location Section */}
            <div className="space-y-4">
              <Skeleton className="h-6 w-40" />
              <Skeleton className="h-80 w-full rounded-lg" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          </div>

          {/* Right Column - Investment Card */}
          <div className="space-y-4">
            <div className="sticky top-4 space-y-4 rounded-lg border p-6">
              {/* Card Header */}
              <Skeleton className="h-6 w-3/4" />

              {/* Price Section */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-8 w-2/3" />
              </div>

              {/* Divider */}
              <Skeleton className="h-0.5 w-full" />

              {/* Investment Details */}
              <div className="space-y-3">
                {Array.from({ length: CARD_DETAILS_COUNT }).map((_, index) => (
                  <div className="flex justify-between" key={index as number}>
                    <Skeleton className="h-4 w-1/3" />
                    <Skeleton className="h-4 w-1/4" />
                  </div>
                ))}
              </div>

              {/* Button */}
              <Skeleton className="h-10 w-full rounded-md" />

              {/* Footer Text */}
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-4/5" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
