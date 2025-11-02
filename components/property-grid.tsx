/** biome-ignore-all lint/style/noMagicNumbers: minor */
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Property = {
  imageUrl: string;
  isGuestFavorite: boolean;
  type: string;
  location: string;
  rating: number;
  price: number;
  url: string;
};

const cheyenneProperties: Property[] = [
  {
    imageUrl:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1457590305802743080/original/eab8960d-2cc0-4484-9db5-9e4e906a2ddd.jpeg?im_w=720",
    isGuestFavorite: true,
    type: "Apartment",
    location: "Cheyenne",
    rating: 5.0,
    price: 201,
    url: "#",
  },
  {
    imageUrl:
      "https://a0.muscache.com/im/pictures/miso/Hosting-649386593530811748/original/f1290ca0-1cf3-48e1-ba6a-1c695d72dee2.jpeg?im_w=720",
    isGuestFavorite: true,
    type: "Home",
    location: "Cheyenne",
    rating: 4.98,
    price: 274,
    url: "#",
  },
  {
    imageUrl:
      "https://a0.muscache.com/im/pictures/e6b64e98-abf9-489e-91ce-6ae43948ff89.jpg?im_w=720",
    isGuestFavorite: false,
    type: "Apartment",
    location: "Cheyenne",
    rating: 4.85,
    price: 180,
    url: "#",
  },
  {
    imageUrl:
      "https://a0.muscache.com/im/pictures/9d30fea2-0857-4717-8144-1c10fe86d371.jpg?im_w=720",
    isGuestFavorite: true,
    type: "Home",
    location: "Cheyenne",
    rating: 4.98,
    price: 252,
    url: "#",
  },
  {
    imageUrl:
      "https://a0.muscache.com/im/pictures/ce2db7ed-9dc2-447c-9275-15a19fa062ed.jpg?im_w=720",
    isGuestFavorite: false,
    type: "Apartment",
    location: "Cheyenne",
    rating: 4.88,
    price: 220,
    url: "#",
  },
  {
    imageUrl:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI2Mzc5MTMwNjI1NTUzNDEzNQ%3D%3D/original/6b63b4fd-7090-4005-9aa5-b9392090ba4c.jpeg?im_w=720",
    isGuestFavorite: true,
    type: "Apartment",
    location: "Cheyenne",
    rating: 4.85,
    price: 194,
    url: "#",
  },
  {
    imageUrl:
      "https://a0.muscache.com/im/pictures/miso/Hosting-879895194217099173/original/af90c656-640f-49f1-920f-13a4e135a612.jpeg?im_w=720",
    isGuestFavorite: true,
    type: "Home",
    location: "Cheyenne",
    rating: 4.99,
    price: 331,
    url: "#",
  },
  {
    imageUrl:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NjUzOTY2OTUyMjkxMTY0NjMz/original/458c652c-ad20-4a50-951e-135cf0a57a01.jpeg?im_w=720",
    isGuestFavorite: true,
    type: "Home",
    location: "Cheyenne",
    rating: 4.92,
    price: 355,
    url: "#",
  },
];

const denverProperties: Property[] = [
  {
    imageUrl:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-39858390/original/08298a7f-ac3e-47bf-8623-dc60e8602148.jpeg?im_w=720",
    isGuestFavorite: true,
    type: "Home",
    location: "Aurora",
    rating: 4.94,
    price: 194,
    url: "#",
  },
  {
    imageUrl:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1462005201798613969/original/6aa767ca-a8fb-4c16-b109-b2509e67ebd1.jpeg?im_w=720",
    isGuestFavorite: true,
    type: "Room",
    location: "Aurora",
    rating: 4.8,
    price: 131,
    url: "#",
  },
  {
    imageUrl:
      "https://a0.muscache.com/im/pictures/31baa78a-bf5e-4675-a05a-452c0dd47d34.jpg?im_w=720",
    isGuestFavorite: true,
    type: "Guest suite",
    location: "Denver",
    rating: 4.87,
    price: 236,
    url: "#",
  },
  {
    imageUrl:
      "https://a0.muscache.com/im/pictures/miso/Hosting-18487415/original/a7634c68-88bd-48ef-afbf-de7b9314b263.jpeg?im_w=720",
    isGuestFavorite: true,
    type: "Guesthouse",
    location: "Commerce City",
    rating: 4.85,
    price: 212,
    url: "#",
  },
  {
    imageUrl:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA5NDE2MjIzMjIzMDM4ODkxOA%3D%3D/original/6cd5d51f-c372-4b22-94e5-d03580f35fe8.jpeg?im_w=720",
    isGuestFavorite: true,
    type: "Guesthouse",
    location: "Denver",
    rating: 4.98,
    price: 352,
    url: "#",
  },
  {
    imageUrl:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1474075563276728919/original/59dd30ba-ab2e-4d0a-8236-0b2e01343512.jpeg?im_w=720",
    isGuestFavorite: false,
    type: "Room",
    location: "Aurora",
    rating: 5.0,
    price: 140,
    url: "#",
  },
  {
    imageUrl:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1364105352811206129/original/139f61a9-aba0-4e16-b4bd-b6c1b7d92a84.jpeg?im_w=720",
    isGuestFavorite: true,
    type: "Room",
    location: "Denver",
    rating: 4.93,
    price: 132,
    url: "#",
  },
  {
    imageUrl:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1168934309470548943/original/4cef2080-8f45-40a8-a1c6-371de17b4188.jpeg?im_w=720",
    isGuestFavorite: true,
    type: "Room",
    location: "Commerce City",
    rating: 5.0,
    price: 167,
    url: "#",
  },
];

const PropertyCard = ({ property }: { property: Property }) => (
  <Link className="group block" href={property.url}>
    <div className="relative">
      <div className="aspect-square overflow-hidden rounded-xl">
        <Image
          alt={`${property.type} in ${property.location}`}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 16.6vw"
          src={property.imageUrl}
        />
      </div>
      {property.isGuestFavorite && (
        <div className="absolute top-3 left-3 rounded-md bg-background px-2 py-1 font-bold text-foreground text-xs shadow-sm">
          Guest favorite
        </div>
      )}
    </div>
    <div className="mt-3 text-text-primary">
      <div className="flex items-start justify-between">
        <h3 className="truncate pr-2 font-medium text-[15px] leading-tight">
          {property.location}
        </h3>
        <div className="flex shrink-0 items-center gap-1">
          <Star className="h-3.5 w-3.5 fill-current text-text-primary" />
          <span className="text-sm leading-tight">
            {property.rating.toFixed(property.rating % 1 === 0 ? 1 : 2)}
          </span>
        </div>
      </div>
      <p className="truncate text-muted-foreground text-sm leading-tight">
        {property.type}
      </p>
      <p className="mt-1.5 text-sm leading-tight">
        <span className="font-semibold">${property.price}</span> for 2 nights
      </p>
    </div>
  </Link>
);

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
