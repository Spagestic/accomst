// lib/properties.ts
import type { Property } from "@/types/property";

export const getCheyenneProperties = (): Promise<Property[]> => {
  return Promise.resolve([
    {
      id: "cheyenne-001",
      imageUrl:
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1457590305802743080/original/eab8960d-2cc0-4484-9db5-9e4e906a2ddd.jpeg?im_w=720",
      isGuestFavorite: true,
      type: "Apartment",
      location: "Cheyenne",
      city: "Cheyenne",
      state: "WY",
      rating: 5.0,
      reviewCount: 156,
      totalPrice: 400_000,
      fractionSize: 0.125, // 1/8
      pricePerFraction: 50_000,
      availableFractions: 3,
      totalFractions: 8,
      usageDaysPerYear: 45,
      status: "available",
      bedrooms: 2,
      bathrooms: 1,
      sqft: 1200,
      url: "/property/cheyenne-001",
    },
    {
      id: "cheyenne-002",
      imageUrl:
        "https://a0.muscache.com/im/pictures/miso/Hosting-649386593530811748/original/f1290ca0-1cf3-48e1-ba6a-1c695d72dee2.jpeg?im_w=720",
      isGuestFavorite: true,
      type: "Home",
      location: "Cheyenne",
      city: "Cheyenne",
      state: "WY",
      rating: 4.98,
      reviewCount: 189,
      totalPrice: 548_000,
      fractionSize: 0.25, // 1/4
      pricePerFraction: 137_000,
      availableFractions: 1,
      totalFractions: 4,
      usageDaysPerYear: 91,
      status: "limited",
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1800,
      url: "/property/cheyenne-002",
    },
    {
      id: "cheyenne-003",
      imageUrl:
        "https://a0.muscache.com/im/pictures/e6b64e98-abf9-489e-91ce-6ae43948ff89.jpg?im_w=720",
      isGuestFavorite: false,
      type: "Apartment",
      location: "Cheyenne",
      city: "Cheyenne",
      state: "WY",
      rating: 4.85,
      reviewCount: 142,
      totalPrice: 360_000,
      fractionSize: 0.167, // 1/6
      pricePerFraction: 60_000,
      availableFractions: 2,
      totalFractions: 6,
      usageDaysPerYear: 55,
      status: "available",
      bedrooms: 2,
      bathrooms: 1.5,
      sqft: 1100,
      url: "/property/cheyenne-003",
    },
    {
      id: "cheyenne-004",
      imageUrl:
        "https://a0.muscache.com/im/pictures/9d30fea2-0857-4717-8144-1c10fe86d371.jpg?im_w=720",
      isGuestFavorite: true,
      type: "Home",
      location: "Cheyenne",
      city: "Cheyenne",
      state: "WY",
      rating: 4.98,
      reviewCount: 174,
      totalPrice: 504_000,
      fractionSize: 0.2, // 1/5
      pricePerFraction: 100_800,
      availableFractions: 2,
      totalFractions: 5,
      usageDaysPerYear: 73,
      status: "available",
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1600,
      url: "/property/cheyenne-004",
    },
    {
      id: "cheyenne-005",
      imageUrl:
        "https://a0.muscache.com/im/pictures/ce2db7ed-9dc2-447c-9275-15a19fa062ed.jpg?im_w=720",
      isGuestFavorite: false,
      type: "Apartment",
      location: "Cheyenne",
      city: "Cheyenne",
      state: "WY",
      rating: 4.88,
      reviewCount: 167,
      totalPrice: 440_000,
      fractionSize: 0.167, // 1/6
      pricePerFraction: 73_333,
      availableFractions: 3,
      totalFractions: 6,
      usageDaysPerYear: 60,
      status: "available",
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1300,
      url: "/property/cheyenne-005",
    },
    {
      id: "cheyenne-006",
      imageUrl:
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI2Mzc5MTMwNjI1NTUzNDEzNQ%3D%3D/original/6b63b4fd-7090-4005-9aa5-b9392090ba4c.jpeg?im_w=720",
      isGuestFavorite: true,
      type: "Apartment",
      location: "Cheyenne",
      city: "Cheyenne",
      state: "WY",
      rating: 4.85,
      reviewCount: 138,
      totalPrice: 388_000,
      fractionSize: 0.125, // 1/8
      pricePerFraction: 48_500,
      availableFractions: 4,
      totalFractions: 8,
      usageDaysPerYear: 45,
      status: "available",
      bedrooms: 2,
      bathrooms: 1,
      sqft: 1050,
      url: "/property/cheyenne-006",
    },
    {
      id: "cheyenne-007",
      imageUrl:
        "https://a0.muscache.com/im/pictures/miso/Hosting-879895194217099173/original/af90c656-640f-49f1-920f-13a4e135a612.jpeg?im_w=720",
      isGuestFavorite: true,
      type: "Home",
      location: "Cheyenne",
      city: "Cheyenne",
      state: "WY",
      rating: 4.99,
      reviewCount: 201,
      totalPrice: 664_000,
      fractionSize: 0.2, // 1/5
      pricePerFraction: 132_800,
      availableFractions: 1,
      totalFractions: 5,
      usageDaysPerYear: 73,
      status: "limited",
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 1900,
      url: "/property/cheyenne-007",
    },
    {
      id: "cheyenne-008",
      imageUrl:
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NjUzOTY2OTUyMjkxMTY0NjMz/original/458c652c-ad20-4a50-951e-135cf0a57a01.jpeg?im_w=720",
      isGuestFavorite: true,
      type: "Home",
      location: "Cheyenne",
      city: "Cheyenne",
      state: "WY",
      rating: 4.92,
      reviewCount: 185,
      totalPrice: 712_000,
      fractionSize: 0.167, // 1/6
      pricePerFraction: 118_667,
      availableFractions: 2,
      totalFractions: 6,
      usageDaysPerYear: 60,
      status: "available",
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2100,
      url: "/property/cheyenne-008",
    },
  ]);
};

export function getDenverProperties(): Promise<Property[]> {
  return Promise.resolve([
    {
      id: "denver-001",
      imageUrl:
        "https://a0.muscache.com/im/pictures/hosting/Hosting-39858390/original/08298a7f-ac3e-47bf-8623-dc60e8602148.jpeg?im_w=720",
      isGuestFavorite: true,
      type: "Home",
      location: "Aurora",
      city: "Denver",
      state: "CO",
      rating: 4.94,
      reviewCount: 167,
      totalPrice: 388_000,
      fractionSize: 0.125, // 1/8
      pricePerFraction: 48_500,
      availableFractions: 3,
      totalFractions: 8,
      usageDaysPerYear: 45,
      status: "available",
      bedrooms: 2,
      bathrooms: 1.5,
      sqft: 1300,
      url: "/property/denver-001",
    },
    {
      id: "denver-002",
      imageUrl:
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1462005201798613969/original/6aa767ca-a8fb-4c16-b109-b2509e67ebd1.jpeg?im_w=720",
      isGuestFavorite: true,
      type: "Room",
      location: "Aurora",
      city: "Denver",
      state: "CO",
      rating: 4.8,
      reviewCount: 128,
      totalPrice: 262_000,
      fractionSize: 0.167, // 1/6
      pricePerFraction: 43_667,
      availableFractions: 4,
      totalFractions: 6,
      usageDaysPerYear: 55,
      status: "available",
      bedrooms: 1,
      bathrooms: 1,
      sqft: 600,
      url: "/property/denver-002",
    },
    {
      id: "denver-003",
      imageUrl:
        "https://a0.muscache.com/im/pictures/31baa78a-bf5e-4675-a05a-452c0dd47d34.jpg?im_w=720",
      isGuestFavorite: true,
      type: "Guest suite",
      location: "Denver",
      city: "Denver",
      state: "CO",
      rating: 4.87,
      reviewCount: 154,
      totalPrice: 472_000,
      fractionSize: 0.2, // 1/5
      pricePerFraction: 94_400,
      availableFractions: 2,
      totalFractions: 5,
      usageDaysPerYear: 73,
      status: "available",
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1400,
      url: "/property/denver-003",
    },
    {
      id: "denver-004",
      imageUrl:
        "https://a0.muscache.com/im/pictures/miso/Hosting-18487415/original/a7634c68-88bd-48ef-afbf-de7b9314b263.jpeg?im_w=720",
      isGuestFavorite: true,
      type: "Guesthouse",
      location: "Commerce City",
      city: "Denver",
      state: "CO",
      rating: 4.85,
      reviewCount: 141,
      totalPrice: 424_000,
      fractionSize: 0.125, // 1/8
      pricePerFraction: 53_000,
      availableFractions: 2,
      totalFractions: 8,
      usageDaysPerYear: 45,
      status: "available",
      bedrooms: 2,
      bathrooms: 1.5,
      sqft: 1200,
      url: "/property/denver-004",
    },
    {
      id: "denver-005",
      imageUrl:
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA5NDE2MjIzMjIzMDM4ODkxOA%3D%3D/original/6cd5d51f-c372-4b22-94e5-d03580f35fe8.jpeg?im_w=720",
      isGuestFavorite: true,
      type: "Guesthouse",
      location: "Denver",
      city: "Denver",
      state: "CO",
      rating: 4.98,
      reviewCount: 192,
      totalPrice: 704_000,
      fractionSize: 0.167, // 1/6
      pricePerFraction: 117_333,
      availableFractions: 1,
      totalFractions: 6,
      usageDaysPerYear: 60,
      status: "limited",
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 1800,
      url: "/property/denver-005",
    },
    {
      id: "denver-006",
      imageUrl:
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1474075563276728919/original/59dd30ba-ab2e-4d0a-8236-0b2e01343512.jpeg?im_w=720",
      isGuestFavorite: false,
      type: "Room",
      location: "Aurora",
      city: "Denver",
      state: "CO",
      rating: 5.0,
      reviewCount: 135,
      totalPrice: 280_000,
      fractionSize: 0.2, // 1/5
      pricePerFraction: 56_000,
      availableFractions: 3,
      totalFractions: 5,
      usageDaysPerYear: 73,
      status: "available",
      bedrooms: 1,
      bathrooms: 1,
      sqft: 700,
      url: "/property/denver-006",
    },
    {
      id: "denver-007",
      imageUrl:
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1364105352811206129/original/139f61a9-aba0-4e16-b4bd-b6c1b7d92a84.jpeg?im_w=720",
      isGuestFavorite: true,
      type: "Room",
      location: "Denver",
      city: "Denver",
      state: "CO",
      rating: 4.93,
      reviewCount: 147,
      totalPrice: 264_000,
      fractionSize: 0.167, // 1/6
      pricePerFraction: 44_000,
      availableFractions: 4,
      totalFractions: 6,
      usageDaysPerYear: 55,
      status: "available",
      bedrooms: 1,
      bathrooms: 1,
      sqft: 650,
      url: "/property/denver-007",
    },
    {
      id: "denver-008",
      imageUrl:
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1168934309470548943/original/4cef2080-8f45-40a8-a1c6-371de17b4188.jpeg?im_w=720",
      isGuestFavorite: true,
      type: "Room",
      location: "Commerce City",
      city: "Denver",
      state: "CO",
      rating: 5.0,
      reviewCount: 163,
      totalPrice: 334_000,
      fractionSize: 0.125, // 1/8
      pricePerFraction: 41_750,
      availableFractions: 5,
      totalFractions: 8,
      usageDaysPerYear: 45,
      status: "available",
      bedrooms: 1,
      bathrooms: 1,
      sqft: 750,
      url: "/property/denver-008",
    },
  ]);
}

// Helper functions for filtering and calculations
export async function getPropertiesByStatus(
  status: Property["status"]
): Promise<Property[]> {
  const all = [
    ...(await getCheyenneProperties()),
    ...(await getDenverProperties()),
  ];
  return all.filter((p) => p.status === status);
}

export async function getPropertiesByFractionSize(
  minFraction: number,
  maxFraction: number
): Promise<Property[]> {
  const all = [
    ...(await getCheyenneProperties()),
    ...(await getDenverProperties()),
  ];
  return all.filter(
    (p) => p.fractionSize >= minFraction && p.fractionSize <= maxFraction
  );
}

export async function getPropertiesByPriceRange(
  minPrice: number,
  maxPrice: number
): Promise<Property[]> {
  const all = [
    ...(await getCheyenneProperties()),
    ...(await getDenverProperties()),
  ];
  return all.filter(
    (p) => p.pricePerFraction >= minPrice && p.pricePerFraction <= maxPrice
  );
}
