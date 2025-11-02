// types/property.ts

export type PropertyStatus =
  | "available"
  | "limited"
  | "sold-out"
  | "coming-soon"
  | "under-review"
  | "delisted";

export type PropertyType =
  | "residential"
  | "commercial"
  | "mixed-use"
  | "retail"
  | "industrial";

export type LegalStructure =
  | "spv" // Special Purpose Vehicle
  | "trust"
  | "direct-ownership";

export type InvestorTier =
  | "public" // Open to all
  | "accredited" // Accredited investors only
  | "institutional"; // Institutional only

export type Location = {
  address: string;
  district: string; // e.g., Central, Wan Chai, Tsim Sha Tsui
  region: string; // Hong Kong Island, Kowloon, New Territories
  latitude?: number;
  longitude?: number;
  nearbyMTR?: string[]; // Nearby MTR stations
  proximityToMTR?: number; // Distance in meters
};

export type FinancialDetails = {
  // Purchase details
  totalPrice: number; // Total property value in HKD
  pricePerSqft: number;
  fractionSize: number; // e.g., 0.125 for 1/8, 0.25 for 1/4
  pricePerFraction: number;
  minInvestment: number; // Minimum investment amount
  maxInvestment?: number; // Maximum per investor (anti-concentration)

  // Availability
  availableFractions: number;
  totalFractions: number;
  soldFractions: number;
  reservedFractions: number; // Temporarily held during checkout

  // Returns & Costs
  projectedAnnualReturn: number; // Percentage
  projectedRentalYield: number; // Percentage
  managementFee: number; // Annual percentage
  platformFee: number; // One-time percentage on purchase
  maintenanceFeePerYear: number; // HKD per fraction

  // Tax considerations
  stampDutyRate: number; // HK stamp duty percentage
  estimatedAnnualPropertyTax: number;
};

export type UsageRights = {
  usageDaysPerYear: number; // Days per fraction per year
  bookingLeadTime: number; // Days notice required
  peakSeasonMultiplier?: number; // Usage day cost during peak
  blackoutDates?: Date[]; // Dates unavailable for usage
  allowSublet: boolean; // Can owners rent out their usage days
  maxConsecutiveDays: number; // Max days per booking
};

export type PropertyDetails = {
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  sqftGross?: number; // Saleable vs gross area (important in HK)
  floors?: number;
  yearBuilt: number;
  lastRenovated?: number;
  furnishing: "furnished" | "semi-furnished" | "unfurnished";
  parkingSpaces?: number;
  balcony: boolean;
  view?: string; // e.g., "Victoria Harbour", "Mountain"
  orientation?: string; // e.g., "South-facing"
};

export type LegalDocuments = {
  listingPermitUrl?: string;
  valuationReportUrl: string;
  titleDeedUrl?: string;
  spvDocumentsUrl?: string;
  propertyInspectionReportUrl: string;
  epcCertificateUrl?: string; // Energy Performance Certificate
  occupancyPermitUrl?: string;
  buildingWarrantyUrl?: string;
};

export type SPVDetails = {
  spvName: string;
  spvRegistrationNumber: string;
  legalStructure: LegalStructure;
  registrationDate: Date;
  trusteeInfo?: {
    name: string;
    license: string;
  };
};

export type PropertyPerformance = {
  currentOccupancyRate: number; // Percentage
  averageMonthlyRental?: number;
  totalRentalIncome?: number; // Historical
  maintenanceCosts?: number; // Historical
  netOperatingIncome?: number; // NOI
  capRate?: number; // Capitalization rate
  historicalAppreciation?: number; // Percentage per year
};

export type RiskFactors = {
  liquidityScore: number; // 1-10 scale
  volatilityRating: "low" | "medium" | "high";
  marketCondition: "bullish" | "neutral" | "bearish";
  regulatoryRisks?: string[];
  propertyConditionRisks?: string[];
};

export type Property = {
  // Core identification
  id: string;
  slug: string; // URL-friendly identifier
  propertyType: PropertyType;
  status: PropertyStatus;

  // Media
  imageUrl: string; // Primary/featured image
  images: string[]; // Gallery
  floorPlanUrl?: string;
  virtualTourUrl?: string;
  videoUrl?: string;

  // Location
  location: Location;

  // Legacy flat location fields (for backward compatibility)
  city?: string;
  state?: string;

  // Financial
  financial: FinancialDetails;

  // Usage rights (for fractional ownership)
  usageRights: UsageRights;

  // Property details
  details: PropertyDetails;
  amenities: string[]; // e.g., ["Pool", "Gym", "24hr Security", "Club House"]
  buildingAmenities?: string[]; // Building-level amenities separate from unit

  // Description & Marketing
  title: string; // Marketing title
  description: string;
  highlights?: string[]; // Key selling points

  // Social proof
  isGuestFavorite?: boolean;
  rating?: number;
  reviewCount?: number;
  views?: number; // Platform analytics

  // Legal & Documentation
  legal: LegalDocuments;
  spv?: SPVDetails;

  // Performance & Analytics
  performance?: PropertyPerformance;
  risks?: RiskFactors;

  // Investment constraints
  investorTier: InvestorTier;
  minInvestorAge?: number;
  kycRequired: boolean;
  accreditationRequired: boolean;

  // Dates
  listingDate: Date;
  offeringStartDate: Date;
  offeringEndDate?: Date;
  expectedClosingDate?: Date;

  // Links
  url: string; // Property page URL
  marketplaceUrl?: string; // Secondary market URL

  // Metadata
  tags?: string[]; // e.g., ["waterfront", "new-development", "high-yield"]
  featured?: boolean; // Featured listing
  createdAt: Date;
  updatedAt: Date;

  // Blockchain (if tokenized)
  isTokenized?: boolean;
  tokenContractAddress?: string;
  tokenStandard?: string; // e.g., "ERC-721", "ERC-1155"
  blockchainNetwork?: string; // e.g., "Ethereum", "Solana"
};

// Additional supporting types

export type PropertyInvestment = {
  propertyId: string;
  investorId: string;
  fractionsOwned: number;
  investmentAmount: number;
  purchaseDate: Date;
  tokenIds?: string[]; // If using NFTs
  status: "active" | "pending" | "cancelled" | "exited";
};

export type PropertyTransaction = {
  id: string;
  propertyId: string;
  fromInvestorId?: string; // null for primary sales
  toInvestorId: string;
  fractions: number;
  pricePerFraction: number;
  totalAmount: number;
  transactionType: "primary-sale" | "secondary-market" | "exit";
  transactionDate: Date;
  platformFee: number;
  status: "pending" | "completed" | "failed" | "refunded";
};
