import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "./ui/label";

export default function HeroSection() {
  return (
    <section className="relative mt-6 h-[64vh] overflow-hidden rounded-2xl">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-8 max-w-3xl font-bold text-3xl text-white leading-tight md:text-5xl">
          Your Reliable Ally in
          <br />
          Worldwide Real Estate
        </h1>

        {/* Search Form */}
        <div className="flex w-full max-w-3xl flex-col items-center gap-4 rounded-lg bg-white p-4 md:flex-row">
          <div className="w-full flex-1">
            <Label className="mb-1 block text-left text-gray-600 text-xs">
              Type
            </Label>
            <Select defaultValue="duplex">
              <SelectTrigger className="w-full border-0 shadow-none">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="duplex">Duplex</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
                <SelectItem value="house">House</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="w-full flex-1">
            <Label className="mb-1 block text-left text-gray-600 text-xs">
              Price
            </Label>
            <Select defaultValue="price-range">
              <SelectTrigger className="w-full border-0 shadow-none">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-range">$201 - $317K</SelectItem>
                <SelectItem value="100-200">$100K - $200K</SelectItem>
                <SelectItem value="300-500">$300K - $500K</SelectItem>
                <SelectItem value="500+">$500K+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="w-full flex-1">
            <Label className="mb-1 block text-left text-gray-600 text-xs">
              Area
            </Label>
            <Select defaultValue="california">
              <SelectTrigger className="w-full border-0 shadow-none">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="california">California</SelectItem>
                <SelectItem value="new-york">New York</SelectItem>
                <SelectItem value="texas">Texas</SelectItem>
                <SelectItem value="florida">Florida</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button className="mt-5 h-10 bg-teal-800 px-6 text-white hover:bg-teal-900">
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
        </div>
      </div>
    </section>
  );
}
