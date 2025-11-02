// types/property.ts
export type PropertyStatus =
  | "available"
  | "limited"
  | "sold-out"
  | "coming-soon";

export type Property = {
  id: string;
  imageUrl: string;
  images?: string[];
  isGuestFavorite?: boolean;
  type: string;
  location: string;
  city: string;
  state: string;
  rating: number;
  reviewCount: number;

  // Fractional ownership specific
  totalPrice: number;
  fractionSize: number; // e.g., 0.125 for 1/8, 0.25 for 1/4
  pricePerFraction: number;
  availableFractions: number;
  totalFractions: number;
  usageDaysPerYear: number;
  status: PropertyStatus;

  // Additional details
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  amenities?: string[];
  description?: string;
  url: string;
};
