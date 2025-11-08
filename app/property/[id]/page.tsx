/** biome-ignore-all lint/style/noMagicNumbers: <explanation> */
/** biome-ignore-all lint/style/useConsistentBuiltinInstantiation: <explanation> */
import {
  Car,
  Heart,
  MapPin,
  Share,
  Shield,
  Sparkles,
  Star,
  Tv,
  UtensilsCrossed,
  Wifi,
  Wind,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// Mock property data - in a real app this would come from a database
const mockProperties = [
  {
    id: "0",
    title: "Modern Downtown Apartment with City Views",
    location: "Cheyenne, Wyoming",
    rating: 5.0,
    reviewCount: 24,
    hostName: "Sarah",
    hostImage: "https://i.pravatar.cc/150?img=5",
    hostYears: 3,
    type: "Entire apartment",
    guests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 1,
    price: 201,
    images: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1457590305802743080/original/eab8960d-2cc0-4484-9db5-9e4e906a2ddd.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/miso/Hosting-649386593530811748/original/f1290ca0-1cf3-48e1-ba6a-1c695d72dee2.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/e6b64e98-abf9-489e-91ce-6ae43948ff89.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/9d30fea2-0857-4717-8144-1c10fe86d371.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/ce2db7ed-9dc2-447c-9275-15a19fa062ed.jpg?im_w=720",
    ],
    description:
      "Welcome to our beautiful downtown apartment! This modern space features stunning city views, high-end finishes, and all the amenities you need for a comfortable stay. Located in the heart of Cheyenne, you'll be within walking distance of restaurants, shops, and entertainment.",
    amenities: [
      { icon: Wifi, label: "Wifi" },
      { icon: Tv, label: "TV" },
      { icon: Wind, label: "Air conditioning" },
      { icon: UtensilsCrossed, label: "Kitchen" },
      { icon: Car, label: "Free parking" },
      { icon: Sparkles, label: "Washer" },
    ],
    isGuestFavorite: true,
  },
  {
    id: "1",
    title: "Cozy Family Home near Downtown",
    location: "Cheyenne, Wyoming",
    rating: 4.98,
    reviewCount: 42,
    hostName: "Michael",
    hostImage: "https://i.pravatar.cc/150?img=12",
    hostYears: 5,
    type: "Entire home",
    guests: 6,
    bedrooms: 3,
    beds: 4,
    bathrooms: 2,
    price: 274,
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-649386593530811748/original/f1290ca0-1cf3-48e1-ba6a-1c695d72dee2.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1457590305802743080/original/eab8960d-2cc0-4484-9db5-9e4e906a2ddd.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/e6b64e98-abf9-489e-91ce-6ae43948ff89.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/9d30fea2-0857-4717-8144-1c10fe86d371.jpg?im_w=720",
    ],
    description:
      "A warm and inviting family home perfect for your next getaway. This spacious property offers plenty of room for the whole family with modern amenities and a beautiful backyard. Close to all major attractions and local favorites.",
    amenities: [
      { icon: Wifi, label: "Wifi" },
      { icon: Tv, label: "TV" },
      { icon: Wind, label: "Air conditioning" },
      { icon: UtensilsCrossed, label: "Kitchen" },
      { icon: Car, label: "Free parking" },
      { icon: Sparkles, label: "Washer & Dryer" },
    ],
    isGuestFavorite: true,
  },
  // Add more mock properties as needed...
];

// Default property for IDs not in mock data
const getPropertyById = (id: string) => {
  const property = mockProperties.find((p) => p.id === id);
  if (property) {
    return property;
  }

  // Return a default property for any other ID
  return {
    id,
    title: "Beautiful Apartment in Cheyenne",
    location: "Cheyenne, Wyoming",
    rating: 4.85,
    reviewCount: 18,
    hostName: "John",
    hostImage: "https://i.pravatar.cc/150?img=8",
    hostYears: 2,
    type: "Entire apartment",
    guests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 1,
    price: 180,
    images: [
      "https://a0.muscache.com/im/pictures/e6b64e98-abf9-489e-91ce-6ae43948ff89.jpg?im_w=1200",
      "https://a0.muscache.com/im/pictures/9d30fea2-0857-4717-8144-1c10fe86d371.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/ce2db7ed-9dc2-447c-9275-15a19fa062ed.jpg?im_w=720",
    ],
    description:
      "Enjoy your stay in this comfortable apartment located in a prime location. Perfect for travelers looking for a home away from home with all the modern conveniences you need.",
    amenities: [
      { icon: Wifi, label: "Wifi" },
      { icon: Tv, label: "TV" },
      { icon: Wind, label: "Air conditioning" },
      { icon: UtensilsCrossed, label: "Kitchen" },
    ],
    isGuestFavorite: false,
  };
};

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = getPropertyById(id);

  return (
    <div className="min-h-screen bg-background px-4 py-12">
      <main className="container py-6">
        {/* Title Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="mb-2 font-semibold text-[26px] text-text-primary">
                {property.title}
              </h1>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-current text-text-primary" />
                  <span className="font-semibold">
                    {property.rating.toFixed(2)}
                  </span>
                  <span className="text-muted-foreground">
                    ({property.reviewCount} reviews)
                  </span>
                </div>
                <span className="text-muted-foreground">·</span>
                <button
                  className="font-semibold text-text-primary underline"
                  type="button"
                >
                  {property.location}
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                className="flex items-center gap-2 text-text-primary transition-colors hover:text-muted-foreground"
                type="button"
              >
                <Share className="h-4 w-4" />
                <span className="font-medium text-sm underline">Share</span>
              </button>
              <button
                className="flex items-center gap-2 text-text-primary transition-colors hover:text-muted-foreground"
                type="button"
              >
                <Heart className="h-4 w-4" />
                <span className="font-medium text-sm underline">Save</span>
              </button>
            </div>
          </div>
          {property.isGuestFavorite && (
            <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-secondary px-3 py-1.5">
              <Shield className="h-4 w-4 text-primary" />
              <span className="font-medium text-sm text-text-primary">
                Guest favorite
              </span>
              <span className="text-muted-foreground text-xs">
                One of the most loved homes on Airbnb
              </span>
            </div>
          )}
        </div>

        {/* Image Gallery */}
        <div className="mb-12 overflow-hidden rounded-xl">
          <div className="grid h-[400px] grid-cols-4 gap-2">
            <div className="relative col-span-2 row-span-2">
              <Image
                alt={property.title}
                className="object-cover"
                fill
                priority
                sizes="50vw"
                src={property.images[0]}
              />
            </div>
            {property.images.slice(1, 5).map((img, idx) => (
              <div className="relative" key={idx as number}>
                <Image
                  alt={`${property.title} - Image ${idx + 2}`}
                  className="object-cover"
                  fill
                  sizes="25vw"
                  src={img}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Left Column - Property Details */}
          <div className="lg:col-span-2">
            {/* Property Info */}
            <div className="border-border border-b pb-8">
              <h2 className="mb-2 font-semibold text-[22px] text-text-primary">
                {property.type} hosted by {property.hostName}
              </h2>
              <div className="flex items-center gap-2 text-text-primary">
                <span>{property.guests} guests</span>
                <span>·</span>
                <span>
                  {property.bedrooms} bedroom{property.bedrooms > 1 ? "s" : ""}
                </span>
                <span>·</span>
                <span>
                  {property.beds} bed{property.beds > 1 ? "s" : ""}
                </span>
                <span>·</span>
                <span>
                  {property.bathrooms} bathroom
                  {property.bathrooms > 1 ? "s" : ""}
                </span>
              </div>
            </div>

            {/* Host Info */}
            <div className="border-border border-b py-8">
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    alt={property.hostName}
                    className="object-cover"
                    fill
                    src={property.hostImage}
                  />
                </div>
                <div>
                  <p className="font-semibold text-text-primary">
                    Hosted by {property.hostName}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {property.hostYears} years hosting
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="border-border border-b py-8">
              <p className="text-text-primary leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Amenities */}
            <div className="border-border border-b py-8">
              <h3 className="mb-6 font-semibold text-[22px] text-text-primary">
                What this place offers
              </h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {property.amenities.map((amenity, idx) => (
                  <div className="flex items-center gap-4" key={idx as number}>
                    <amenity.icon className="h-6 w-6 text-text-primary" />
                    <span className="text-text-primary">{amenity.label}</span>
                  </div>
                ))}
              </div>
              <Button className="mt-6" variant="outline">
                Show all amenities
              </Button>
            </div>

            {/* Reviews */}
            <div className="py-8">
              <div className="mb-6 flex items-center gap-2">
                <Star className="h-5 w-5 fill-current text-text-primary" />
                <h3 className="font-semibold text-[22px] text-text-primary">
                  {property.rating.toFixed(2)} · {property.reviewCount} reviews
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {[
                  {
                    name: "Emily",
                    date: "November 2024",
                    rating: 5.0,
                    comment:
                      "Amazing stay! The place was exactly as described and {property.hostName} was a wonderful host. Highly recommend!",
                  },
                  {
                    name: "David",
                    date: "October 2024",
                    rating: 5.0,
                    comment:
                      "Perfect location and beautiful apartment. We had everything we needed for a comfortable stay.",
                  },
                ].map((review, idx) => (
                  <div key={idx as number}>
                    <div className="mb-3 flex items-center gap-3">
                      <div className="relative h-10 w-10 overflow-hidden rounded-full bg-secondary">
                        <Image
                          alt={review.name}
                          className="object-cover"
                          fill
                          src={`https://i.pravatar.cc/150?img=${idx + 20}`}
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-text-primary">
                          {review.name}
                        </p>
                        <p className="text-muted-foreground text-xs">
                          {review.date}
                        </p>
                      </div>
                    </div>
                    <div className="mb-2 flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          className="h-3 w-3 fill-current text-text-primary"
                          key={i as number}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-text-primary leading-relaxed">
                      {review.comment}
                    </p>
                  </div>
                ))}
              </div>
              <Button className="mt-6" variant="outline">
                Show all {property.reviewCount} reviews
              </Button>
            </div>

            {/* Location */}
            <div className="border-border border-t py-8">
              <h3 className="mb-4 font-semibold text-[22px] text-text-primary">
                Where you'll be
              </h3>
              <div className="mb-6 flex items-center gap-2 text-text-primary">
                <MapPin className="h-5 w-5" />
                <span className="font-medium">{property.location}</span>
              </div>
              <div className="flex h-[400px] items-center justify-center rounded-xl bg-secondary">
                <p className="text-muted-foreground">Map placeholder</p>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-xl border border-border p-6 shadow-lg">
              <div className="mb-6 flex items-baseline gap-1">
                <span className="font-semibold text-[22px] text-text-primary">
                  ${property.price}
                </span>
                <span className="text-text-primary"> for 2 nights</span>
              </div>

              <div className="mb-4 rounded-lg border border-border">
                <div className="grid grid-cols-2 border-border border-b">
                  <div className="border-border border-r p-3">
                    <label className="mb-1 block font-semibold text-text-primary text-xs">
                      CHECK-IN
                    </label>
                    <input
                      className="w-full border-none bg-transparent text-sm text-text-primary outline-none"
                      placeholder="Add date"
                      type="date"
                    />
                  </div>
                  <div className="p-3">
                    <label className="mb-1 block font-semibold text-text-primary text-xs">
                      CHECKOUT
                    </label>
                    <input
                      className="w-full border-none bg-transparent text-sm text-text-primary outline-none"
                      placeholder="Add date"
                      type="date"
                    />
                  </div>
                </div>
                <div className="p-3">
                  <label className="mb-1 block font-semibold text-text-primary text-xs">
                    GUESTS
                  </label>
                  <select className="w-full border-none bg-transparent text-sm text-text-primary outline-none">
                    <option>1 guest</option>
                    <option>2 guests</option>
                    <option>3 guests</option>
                    <option>4 guests</option>
                  </select>
                </div>
              </div>

              <Button className="mb-4 h-12 w-full bg-primary font-semibold text-base text-primary-foreground hover:bg-primary/90">
                Reserve
              </Button>

              <p className="mb-6 text-center text-muted-foreground text-sm">
                You won't be charged yet
              </p>

              <div className="space-y-3 border-border border-t pt-6">
                <div className="flex justify-between text-text-primary">
                  <span className="underline">
                    ${property.price} x 2 nights
                  </span>
                  <span>${property.price * 2}</span>
                </div>
                <div className="flex justify-between text-text-primary">
                  <span className="underline">Cleaning fee</span>
                  <span>$50</span>
                </div>
                <div className="flex justify-between text-text-primary">
                  <span className="underline">Service fee</span>
                  <span>$71</span>
                </div>
                <div className="flex justify-between border-border border-t pt-3 font-semibold text-text-primary">
                  <span>Total</span>
                  <span>${property.price * 2 + 50 + 71}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
