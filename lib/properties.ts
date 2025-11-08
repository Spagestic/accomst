// lib/properties.ts
/** biome-ignore-all lint/style/noMagicNumbers: dealing with percentages */

import type { Property } from "@/types/property";

// Hong Kong Island Properties - Premium locations
export const getHongKongIslandProperties = (): Promise<Property[]> => {
  return Promise.resolve([
    {
      id: "hk-central-001",
      slug: "soho-luxury-apartment-central",
      propertyType: "residential",
      imageUrl:
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1457590305802743080/original/eab8960d-2cc0-4484-9db5-9e4e906a2ddd.jpeg?im_w=720",
      images: [
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1457590305802743080/original/eab8960d-2cc0-4484-9db5-9e4e906a2ddd.jpeg?im_w=720",
      ],
      status: "available",

      // Location
      location: {
        address: "88 Hollywood Road",
        district: "Central & Western",
        region: "Hong Kong Island",
        nearbyMTR: ["Central Station", "Sheung Wan Station"],
        proximityToMTR: 450,
      },

      // Financial
      financial: {
        totalPrice: 12_000_000, // HKD 12M
        pricePerSqft: 28_000, // HKD per sqft
        fractionSize: 0.125, // 1/8
        pricePerFraction: 1_500_000,
        minInvestment: 1_500_000,
        availableFractions: 3,
        totalFractions: 8,
        soldFractions: 5,
        reservedFractions: 0,
        projectedAnnualReturn: 5.2,
        projectedRentalYield: 3.8,
        managementFee: 1.5,
        platformFee: 2.0,
        maintenanceFeePerYear: 18_000,
        stampDutyRate: 4.25,
        estimatedAnnualPropertyTax: 8500,
      },

      // Usage Rights
      usageRights: {
        usageDaysPerYear: 45,
        bookingLeadTime: 14,
        peakSeasonMultiplier: 1.5,
        allowSublet: true,
        maxConsecutiveDays: 14,
      },

      // Property Details
      details: {
        bedrooms: 2,
        bathrooms: 1,
        sqft: 428, // Saleable area
        sqftGross: 580, // Gross area (typical HK ratio ~1.35x)
        yearBuilt: 2018,
        lastRenovated: 2023,
        furnishing: "furnished",
        balcony: false,
        view: "City View",
        orientation: "South-facing",
      },

      amenities: [
        "24-hour Security",
        "Gym",
        "Rooftop Garden",
        "Concierge Service",
        "High-speed WiFi",
      ],

      title: "Modern SoHo Apartment in Central",
      description:
        "Stylish 2-bedroom apartment in the heart of Central's SoHo district. Walking distance to MTR, surrounded by restaurants, bars, and shopping. Perfect for young professionals or investment.",
      highlights: [
        "Prime Central location",
        "Walking distance to MTR",
        "Vibrant SoHo neighborhood",
        "High rental demand",
      ],

      isGuestFavorite: true,
      rating: 4.8,
      reviewCount: 142,

      // Legal
      legal: {
        valuationReportUrl: "/documents/valuation-hk-central-001.pdf",
        propertyInspectionReportUrl: "/documents/inspection-hk-central-001.pdf",
      },

      investorTier: "public",
      kycRequired: true,
      accreditationRequired: false,

      listingDate: new Date("2025-09-15"),
      offeringStartDate: new Date("2025-10-01"),
      expectedClosingDate: new Date("2025-12-31"),

      url: "/property/hk-central-001",
      tags: ["prime-location", "high-yield", "mtr-access"],
      featured: true,
      createdAt: new Date("2025-09-01"),
      updatedAt: new Date("2025-11-02"),
    },
    {
      id: "hk-causeway-bay-001",
      slug: "modern-apartment-causeway-bay",
      propertyType: "residential",
      imageUrl:
        "https://a0.muscache.com/im/pictures/miso/Hosting-649386593530811748/original/f1290ca0-1cf3-48e1-ba6a-1c695d72dee2.jpeg?im_w=720",
      images: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-649386593530811748/original/f1290ca0-1cf3-48e1-ba6a-1c695d72dee2.jpeg?im_w=720",
      ],
      status: "limited",

      location: {
        address: "Leighton Road",
        district: "Wan Chai",
        region: "Hong Kong Island",
        nearbyMTR: ["Causeway Bay Station"],
        proximityToMTR: 280,
      },

      financial: {
        totalPrice: 15_600_000, // HKD 15.6M
        pricePerSqft: 26_000,
        fractionSize: 0.2, // 1/5
        pricePerFraction: 3_120_000,
        minInvestment: 3_120_000,
        availableFractions: 1,
        totalFractions: 5,
        soldFractions: 4,
        reservedFractions: 0,
        projectedAnnualReturn: 4.8,
        projectedRentalYield: 3.5,
        managementFee: 1.5,
        platformFee: 2.0,
        maintenanceFeePerYear: 24_000,
        stampDutyRate: 4.25,
        estimatedAnnualPropertyTax: 11_200,
      },

      usageRights: {
        usageDaysPerYear: 73,
        bookingLeadTime: 21,
        allowSublet: true,
        maxConsecutiveDays: 21,
      },

      details: {
        bedrooms: 2,
        bathrooms: 2,
        sqft: 600,
        sqftGross: 810,
        yearBuilt: 2020,
        furnishing: "furnished",
        parkingSpaces: 1,
        balcony: true,
        view: "Partial Victoria Harbour View",
        orientation: "North-facing",
      },

      amenities: [
        "Swimming Pool",
        "Gym",
        "24-hour Security",
        "Clubhouse",
        "Covered Parking",
        "Children's Playground",
      ],

      title: "Premium Apartment Near Times Square",
      description:
        "Spacious 2-bedroom with partial harbour view in Causeway Bay's premier shopping district. Minutes from Times Square and Causeway Bay MTR. Ideal for luxury living or high-end rental.",
      highlights: [
        "Causeway Bay shopping district",
        "Harbour glimpse",
        "1 parking space included",
        "Premium building facilities",
      ],

      isGuestFavorite: true,
      rating: 4.9,
      reviewCount: 187,

      legal: {
        valuationReportUrl: "/documents/valuation-hk-causeway-bay-001.pdf",
        propertyInspectionReportUrl:
          "/documents/inspection-hk-causeway-bay-001.pdf",
      },

      investorTier: "public",
      kycRequired: true,
      accreditationRequired: false,

      listingDate: new Date("2025-08-20"),
      offeringStartDate: new Date("2025-09-01"),
      expectedClosingDate: new Date("2025-11-30"),

      url: "/property/hk-causeway-bay-001",
      tags: ["harbour-view", "parking", "shopping-district"],
      featured: true,
      createdAt: new Date("2025-08-15"),
      updatedAt: new Date("2025-11-02"),
    },
    {
      id: "hk-mid-levels-001",
      slug: "luxury-mid-levels-residence",
      propertyType: "residential",
      imageUrl:
        "https://a0.muscache.com/im/pictures/e6b64e98-abf9-489e-91ce-6ae43948ff89.jpg?im_w=720",
      images: [
        "https://a0.muscache.com/im/pictures/e6b64e98-abf9-489e-91ce-6ae43948ff89.jpg?im_w=720",
      ],
      status: "available",

      location: {
        address: "Robinson Road",
        district: "Central & Western",
        region: "Hong Kong Island",
        nearbyMTR: ["Sheung Wan Station"],
        proximityToMTR: 800,
      },

      financial: {
        totalPrice: 28_800_000, // HKD 28.8M
        pricePerSqft: 32_000,
        fractionSize: 0.125, // 1/8
        pricePerFraction: 3_600_000,
        minInvestment: 3_600_000,
        availableFractions: 2,
        totalFractions: 8,
        soldFractions: 6,
        reservedFractions: 0,
        projectedAnnualReturn: 4.2,
        projectedRentalYield: 2.8,
        managementFee: 1.8,
        platformFee: 2.0,
        maintenanceFeePerYear: 36_000,
        stampDutyRate: 4.25,
        estimatedAnnualPropertyTax: 22_000,
      },

      usageRights: {
        usageDaysPerYear: 45,
        bookingLeadTime: 30,
        allowSublet: true,
        maxConsecutiveDays: 21,
      },

      details: {
        bedrooms: 3,
        bathrooms: 2,
        sqft: 900,
        sqftGross: 1215,
        yearBuilt: 2015,
        lastRenovated: 2024,
        furnishing: "furnished",
        parkingSpaces: 1,
        balcony: true,
        view: "Full Victoria Harbour View",
        orientation: "North-facing",
      },

      amenities: [
        "Infinity Pool",
        "Private Gym",
        "Wine Cellar",
        "24-hour Concierge",
        "Shuttle Bus Service",
        "Landscaped Gardens",
        "BBQ Area",
      ],

      title: "Prestigious Mid-Levels Residence",
      description:
        "Luxury 3-bedroom apartment in exclusive Mid-Levels with stunning harbour views. Premium finishes, private facilities, and tranquil setting while being close to Central business district.",
      highlights: [
        "Full harbour view",
        "Mid-Levels prestige address",
        "Premium building amenities",
        "Quiet residential area",
      ],

      isGuestFavorite: true,
      rating: 5.0,
      reviewCount: 96,

      legal: {
        valuationReportUrl: "/documents/valuation-hk-mid-levels-001.pdf",
        propertyInspectionReportUrl:
          "/documents/inspection-hk-mid-levels-001.pdf",
      },

      investorTier: "accredited",
      kycRequired: true,
      accreditationRequired: true,

      listingDate: new Date("2025-10-01"),
      offeringStartDate: new Date("2025-10-15"),
      expectedClosingDate: new Date("2026-01-31"),

      url: "/property/hk-mid-levels-001",
      tags: ["luxury", "harbour-view", "mid-levels", "high-end"],
      featured: true,
      createdAt: new Date("2025-09-25"),
      updatedAt: new Date("2025-11-02"),
    },
    {
      id: "hk-quarry-bay-001",
      slug: "taikoo-shing-family-home",
      propertyType: "residential",
      imageUrl:
        "https://a0.muscache.com/im/pictures/9d30fea2-0857-4717-8144-1c10fe86d371.jpg?im_w=720",
      images: [
        "https://a0.muscache.com/im/pictures/9d30fea2-0857-4717-8144-1c10fe86d371.jpg?im_w=720",
      ],
      status: "available",

      location: {
        address: "Taikoo Shing Road",
        district: "Eastern",
        region: "Hong Kong Island",
        nearbyMTR: ["Taikoo Station", "Quarry Bay Station"],
        proximityToMTR: 200,
      },

      financial: {
        totalPrice: 9_180_000, // HKD 9.18M
        pricePerSqft: 15_300, // Based on Taikoo Shing current market rate
        fractionSize: 0.167, // 1/6
        pricePerFraction: 1_530_000,
        minInvestment: 1_530_000,
        availableFractions: 3,
        totalFractions: 6,
        soldFractions: 3,
        reservedFractions: 0,
        projectedAnnualReturn: 5.5,
        projectedRentalYield: 4.2,
        managementFee: 1.2,
        platformFee: 2.0,
        maintenanceFeePerYear: 15_000,
        stampDutyRate: 3.75,
        estimatedAnnualPropertyTax: 6800,
      },

      usageRights: {
        usageDaysPerYear: 60,
        bookingLeadTime: 10,
        allowSublet: true,
        maxConsecutiveDays: 14,
      },

      details: {
        bedrooms: 2,
        bathrooms: 1,
        sqft: 600,
        sqftGross: 750,
        yearBuilt: 1985,
        lastRenovated: 2022,
        furnishing: "furnished",
        balcony: false,
        view: "City View",
        orientation: "East-facing",
      },

      amenities: [
        "Shopping Mall Connected",
        "Clubhouse",
        "Swimming Pool",
        "Tennis Courts",
        "Children's Playground",
        "Supermarket",
        "Restaurants",
      ],

      title: "Family-Friendly Taikoo Shing Apartment",
      description:
        "Well-maintained 2-bedroom in Hong Kong's most established residential community. Direct MTR access, comprehensive facilities, and strong rental demand make this ideal for families or investors.",
      highlights: [
        "Established community",
        "Direct MTR connection",
        "Comprehensive amenities",
        "Strong rental market",
      ],

      isGuestFavorite: false,
      rating: 4.7,
      reviewCount: 203,

      legal: {
        valuationReportUrl: "/documents/valuation-hk-quarry-bay-001.pdf",
        propertyInspectionReportUrl:
          "/documents/inspection-hk-quarry-bay-001.pdf",
      },

      investorTier: "public",
      kycRequired: true,
      accreditationRequired: false,

      listingDate: new Date("2025-09-10"),
      offeringStartDate: new Date("2025-09-20"),
      expectedClosingDate: new Date("2025-12-15"),

      url: "/property/hk-quarry-bay-001",
      tags: ["family-friendly", "established-estate", "mtr-connected"],
      featured: false,
      createdAt: new Date("2025-09-05"),
      updatedAt: new Date("2025-11-02"),
    },
  ]);
};

// Kowloon Properties - Value and accessibility
export function getKowloonProperties(): Promise<Property[]> {
  return Promise.resolve([
    {
      id: "kln-tsim-sha-tsui-001",
      slug: "harbour-view-apartment-tst",
      propertyType: "residential",
      imageUrl:
        "https://a0.muscache.com/im/pictures/hosting/Hosting-39858390/original/08298a7f-ac3e-47bf-8623-dc60e8602148.jpeg?im_w=720",
      images: [
        "https://a0.muscache.com/im/pictures/hosting/Hosting-39858390/original/08298a7f-ac3e-47bf-8623-dc60e8602148.jpeg?im_w=720",
      ],
      status: "available",

      location: {
        address: "Austin Road West",
        district: "Yau Tsim Mong",
        region: "Kowloon",
        nearbyMTR: ["West Kowloon Station", "Austin Station"],
        proximityToMTR: 150,
      },

      financial: {
        totalPrice: 18_000_000, // HKD 18M
        pricePerSqft: 30_000,
        fractionSize: 0.2, // 1/5
        pricePerFraction: 3_600_000,
        minInvestment: 3_600_000,
        availableFractions: 2,
        totalFractions: 5,
        soldFractions: 3,
        reservedFractions: 0,
        projectedAnnualReturn: 5.0,
        projectedRentalYield: 3.6,
        managementFee: 1.6,
        platformFee: 2.0,
        maintenanceFeePerYear: 28_000,
        stampDutyRate: 4.25,
        estimatedAnnualPropertyTax: 13_500,
      },

      usageRights: {
        usageDaysPerYear: 73,
        bookingLeadTime: 14,
        allowSublet: true,
        maxConsecutiveDays: 21,
      },

      details: {
        bedrooms: 2,
        bathrooms: 2,
        sqft: 600,
        sqftGross: 810,
        yearBuilt: 2019,
        furnishing: "furnished",
        parkingSpaces: 1,
        balcony: true,
        view: "Victoria Harbour View",
        orientation: "South-facing",
      },

      amenities: [
        "Infinity Pool",
        "Sky Garden",
        "Gym",
        "Co-working Space",
        "24-hour Security",
        "Express Rail Link Access",
        "Shopping Mall",
      ],

      title: "Harbour View at West Kowloon",
      description:
        "Modern 2-bedroom with stunning harbour views next to Express Rail Link terminus. Perfect for professionals seeking connectivity to Greater Bay Area and premium urban living.",
      highlights: [
        "Harbour view",
        "Express Rail Link access",
        "New development",
        "Premium facilities",
      ],

      isGuestFavorite: true,
      rating: 4.9,
      reviewCount: 134,

      legal: {
        valuationReportUrl: "/documents/valuation-kln-tst-001.pdf",
        propertyInspectionReportUrl: "/documents/inspection-kln-tst-001.pdf",
      },

      investorTier: "public",
      kycRequired: true,
      accreditationRequired: false,

      listingDate: new Date("2025-09-05"),
      offeringStartDate: new Date("2025-09-15"),
      expectedClosingDate: new Date("2025-12-20"),

      url: "/property/kln-tsim-sha-tsui-001",
      tags: ["harbour-view", "new-development", "rail-link"],
      featured: true,
      createdAt: new Date("2025-09-01"),
      updatedAt: new Date("2025-11-02"),
    },
    {
      id: "kln-whampoa-001",
      slug: "whampoa-garden-affordable-home",
      propertyType: "residential",
      imageUrl:
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1462005201798613969/original/6aa767ca-a8fb-4c16-b109-b2509e67ebd1.jpeg?im_w=720",
      images: [
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1462005201798613969/original/6aa767ca-a8fb-4c16-b109-b2509e67ebd1.jpeg?im_w=720",
      ],
      status: "available",

      location: {
        address: "Tak Man Street",
        district: "Kowloon City",
        region: "Kowloon",
        nearbyMTR: ["Whampoa Station"],
        proximityToMTR: 100,
      },

      financial: {
        totalPrice: 7_470_000, // HKD 7.47M
        pricePerSqft: 12_450, // Based on Whampoa Garden market rate
        fractionSize: 0.125, // 1/8
        pricePerFraction: 933_750,
        minInvestment: 933_750,
        availableFractions: 4,
        totalFractions: 8,
        soldFractions: 4,
        reservedFractions: 0,
        projectedAnnualReturn: 6.0,
        projectedRentalYield: 4.5,
        managementFee: 1.0,
        platformFee: 2.0,
        maintenanceFeePerYear: 12_000,
        stampDutyRate: 3.0,
        estimatedAnnualPropertyTax: 5500,
      },

      usageRights: {
        usageDaysPerYear: 45,
        bookingLeadTime: 7,
        allowSublet: true,
        maxConsecutiveDays: 14,
      },

      details: {
        bedrooms: 2,
        bathrooms: 1,
        sqft: 600,
        sqftGross: 750,
        yearBuilt: 1991,
        lastRenovated: 2021,
        furnishing: "semi-furnished",
        balcony: true,
        view: "Estate View",
        orientation: "West-facing",
      },

      amenities: [
        "Shopping Mall",
        "Supermarket",
        "Restaurants",
        "MTR Connected",
        "Schools Nearby",
        "Wet Market",
        "Community Facilities",
      ],

      title: "Affordable Whampoa Garden Home",
      description:
        "Entry-level 2-bedroom in popular Whampoa Garden estate. Direct MTR access, comprehensive shopping facilities, and strong community make this perfect for first-time fractional ownership investors.",
      highlights: [
        "Entry-level pricing",
        "MTR connected",
        "Established community",
        "High rental yield",
      ],

      isGuestFavorite: false,
      rating: 4.6,
      reviewCount: 178,

      legal: {
        valuationReportUrl: "/documents/valuation-kln-whampoa-001.pdf",
        propertyInspectionReportUrl:
          "/documents/inspection-kln-whampoa-001.pdf",
      },

      investorTier: "public",
      kycRequired: true,
      accreditationRequired: false,

      listingDate: new Date("2025-10-01"),
      offeringStartDate: new Date("2025-10-10"),
      expectedClosingDate: new Date("2025-12-31"),

      url: "/property/kln-whampoa-001",
      tags: ["affordable", "entry-level", "high-yield"],
      featured: false,
      createdAt: new Date("2025-09-28"),
      updatedAt: new Date("2025-11-02"),
    },
    {
      id: "kln-kowloon-bay-001",
      slug: "telford-gardens-studio",
      propertyType: "residential",
      imageUrl:
        "https://a0.muscache.com/im/pictures/31baa78a-bf5e-4675-a05a-452c0dd47d34.jpg?im_w=720",
      images: [
        "https://a0.muscache.com/im/pictures/31baa78a-bf5e-4675-a05a-452c0dd47d34.jpg?im_w=720",
      ],
      status: "coming-soon",

      location: {
        address: "Wang Tau Hom",
        district: "Wong Tai Sin",
        region: "Kowloon",
        nearbyMTR: ["Kowloon Bay Station", "Diamond Hill Station"],
        proximityToMTR: 350,
      },

      financial: {
        totalPrice: 5_280_000, // HKD 5.28M
        pricePerSqft: 13_200,
        fractionSize: 0.167, // 1/6
        pricePerFraction: 880_000,
        minInvestment: 880_000,
        availableFractions: 6,
        totalFractions: 6,
        soldFractions: 0,
        reservedFractions: 0,
        projectedAnnualReturn: 6.5,
        projectedRentalYield: 5.0,
        managementFee: 1.0,
        platformFee: 2.0,
        maintenanceFeePerYear: 10_000,
        stampDutyRate: 3.0,
        estimatedAnnualPropertyTax: 4200,
      },

      usageRights: {
        usageDaysPerYear: 60,
        bookingLeadTime: 7,
        allowSublet: true,
        maxConsecutiveDays: 14,
      },

      details: {
        bedrooms: 1,
        bathrooms: 1,
        sqft: 400,
        sqftGross: 520,
        yearBuilt: 1988,
        lastRenovated: 2023,
        furnishing: "furnished",
        balcony: false,
        view: "Estate View",
        orientation: "East-facing",
      },

      amenities: [
        "Shopping Mall Connected",
        "Supermarket",
        "Community Club",
        "Gardens",
        "Bus Terminal",
      ],

      title: "Compact Studio in Telford Gardens",
      description:
        "Recently renovated 1-bedroom in well-connected Telford Gardens. Perfect for young professionals or investors seeking high rental yield in an established estate with good transport links.",
      highlights: [
        "Recently renovated",
        "High rental yield",
        "Good transport links",
        "Low entry price",
      ],

      isGuestFavorite: false,
      rating: 4.5,
      reviewCount: 89,

      legal: {
        valuationReportUrl: "/documents/valuation-kln-kowloon-bay-001.pdf",
        propertyInspectionReportUrl:
          "/documents/inspection-kln-kowloon-bay-001.pdf",
      },

      investorTier: "public",
      kycRequired: true,
      accreditationRequired: false,

      listingDate: new Date("2025-11-15"),
      offeringStartDate: new Date("2025-11-20"),
      expectedClosingDate: new Date("2026-01-31"),

      url: "/property/kln-kowloon-bay-001",
      tags: ["studio", "renovated", "high-yield", "affordable"],
      featured: false,
      createdAt: new Date("2025-11-01"),
      updatedAt: new Date("2025-11-02"),
    },
    {
      id: "kln-olympic-001",
      slug: "olympic-station-new-development",
      propertyType: "residential",
      imageUrl:
        "https://a0.muscache.com/im/pictures/miso/Hosting-18487415/original/a7634c68-88bd-48ef-afbf-de7b9314b263.jpeg?im_w=720",
      images: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-18487415/original/a7634c68-88bd-48ef-afbf-de7b9314b263.jpeg?im_w=720",
      ],
      status: "available",

      location: {
        address: "Tai Kok Tsui Road",
        district: "Yau Tsim Mong",
        region: "Kowloon",
        nearbyMTR: ["Olympic Station"],
        proximityToMTR: 180,
      },

      financial: {
        totalPrice: 12_600_000, // HKD 12.6M
        pricePerSqft: 21_000,
        fractionSize: 0.2, // 1/5
        pricePerFraction: 2_520_000,
        minInvestment: 2_520_000,
        availableFractions: 2,
        totalFractions: 5,
        soldFractions: 3,
        reservedFractions: 0,
        projectedAnnualReturn: 5.3,
        projectedRentalYield: 3.9,
        managementFee: 1.4,
        platformFee: 2.0,
        maintenanceFeePerYear: 21_000,
        stampDutyRate: 4.25,
        estimatedAnnualPropertyTax: 9500,
      },

      usageRights: {
        usageDaysPerYear: 73,
        bookingLeadTime: 14,
        allowSublet: true,
        maxConsecutiveDays: 21,
      },

      details: {
        bedrooms: 2,
        bathrooms: 2,
        sqft: 600,
        sqftGross: 780,
        yearBuilt: 2021,
        furnishing: "furnished",
        balcony: true,
        view: "City View",
        orientation: "South-facing",
      },

      amenities: [
        "Rooftop Pool",
        "Gym",
        "Co-working Space",
        "Party Room",
        "24-hour Security",
        "Smart Home System",
      ],

      title: "Brand New Olympic Station Apartment",
      description:
        "Modern 2-bedroom in prime Olympic location with smart home features. Close to West Kowloon Cultural District and excellent connectivity make this ideal for young professionals.",
      highlights: [
        "Brand new building",
        "Smart home equipped",
        "Near Cultural District",
        "Excellent MTR access",
      ],

      isGuestFavorite: true,
      rating: 4.8,
      reviewCount: 67,

      legal: {
        valuationReportUrl: "/documents/valuation-kln-olympic-001.pdf",
        propertyInspectionReportUrl:
          "/documents/inspection-kln-olympic-001.pdf",
      },

      investorTier: "public",
      kycRequired: true,
      accreditationRequired: false,

      listingDate: new Date("2025-09-20"),
      offeringStartDate: new Date("2025-10-01"),
      expectedClosingDate: new Date("2025-12-15"),

      url: "/property/kln-olympic-001",
      tags: ["new-development", "smart-home", "cultural-district"],
      featured: true,
      createdAt: new Date("2025-09-15"),
      updatedAt: new Date("2025-11-02"),
    },
  ]);
}

// Helper functions for filtering and calculations
export async function getAllProperties(): Promise<Property[]> {
  "use cache";
  const [hkIsland, kowloon] = await Promise.all([
    getHongKongIslandProperties(),
    getKowloonProperties(),
  ]);
  return [...hkIsland, ...kowloon];
}

export async function getPropertiesByStatus(
  status: Property["status"]
): Promise<Property[]> {
  const all = await getAllProperties();
  return all.filter((p) => p.status === status);
}

export async function getPropertiesByRegion(
  region: string
): Promise<Property[]> {
  const all = await getAllProperties();
  return all.filter((p) => p.location.region === region);
}

export async function getPropertiesByDistrict(
  district: string
): Promise<Property[]> {
  const all = await getAllProperties();
  return all.filter((p) => p.location.district === district);
}

export async function getPropertiesByFractionSize(
  minFraction: number,
  maxFraction: number
): Promise<Property[]> {
  const all = await getAllProperties();
  return all.filter(
    (p) =>
      p.financial.fractionSize >= minFraction &&
      p.financial.fractionSize <= maxFraction
  );
}

export async function getPropertiesByPriceRange(
  minPrice: number,
  maxPrice: number
): Promise<Property[]> {
  const all = await getAllProperties();
  return all.filter(
    (p) =>
      p.financial.pricePerFraction >= minPrice &&
      p.financial.pricePerFraction <= maxPrice
  );
}

export async function getPropertiesNearMTR(
  maxDistance = 500
): Promise<Property[]> {
  const all = await getAllProperties();
  return all.filter(
    (p) => p.location.proximityToMTR && p.location.proximityToMTR <= maxDistance
  );
}

export async function getPropertiesByYield(
  minYield: number
): Promise<Property[]> {
  const all = await getAllProperties();
  return all.filter((p) => p.financial.projectedRentalYield >= minYield);
}

export async function getFeaturedProperties(): Promise<Property[]> {
  const all = await getAllProperties();
  return all.filter((p) => p.featured === true);
}

export async function getPropertiesByInvestorTier(
  tier: Property["investorTier"]
): Promise<Property[]> {
  const all = await getAllProperties();
  return all.filter((p) => p.investorTier === tier);
}

// Investment calculation helpers
export function calculateMonthlyReturn(property: Property): number {
  return (
    (property.financial.pricePerFraction *
      property.financial.projectedAnnualReturn) /
    100 /
    12
  );
}

export function calculateAnnualMaintenance(property: Property): number {
  return property.financial.maintenanceFeePerYear;
}

export function calculateTotalUpfrontCost(
  property: Property,
  fractions = 1
): number {
  const purchasePrice = property.financial.pricePerFraction * fractions;
  const platformFee = (purchasePrice * property.financial.platformFee) / 100;
  const stampDuty = (purchasePrice * property.financial.stampDutyRate) / 100;
  return purchasePrice + platformFee + stampDuty;
}

export function calculateNetAnnualReturn(
  property: Property,
  fractions = 1
): number {
  const grossReturn =
    (property.financial.pricePerFraction *
      property.financial.projectedAnnualReturn *
      fractions) /
    100;
  const managementFee =
    (property.financial.pricePerFraction *
      property.financial.managementFee *
      fractions) /
    100;
  const maintenance = property.financial.maintenanceFeePerYear * fractions;
  const propertyTax =
    (property.financial.estimatedAnnualPropertyTax * fractions) /
    property.financial.totalFractions;

  return grossReturn - managementFee - maintenance - propertyTax;
}
