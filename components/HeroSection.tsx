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
    <section className="relative mt-6 h-[84vh] overflow-hidden rounded-2xl sm:h-[64vh]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-4 max-w-5xl font-bold text-2xl text-white leading-tight md:text-5xl">
          Unlock Homeownership in Hong Kong
        </h1>
        <p className="mb-8 max-w-3xl text-white/90 text-xs md:text-lg">
          Buy your first stake, reduce your rent, and staircase to full
          ownership—fractional, flexible, and fair. Empowering renters to become
          owners, one share at a time.
        </p>

        {/* Search Form */}
        <div className="flex w-full max-w-3xl flex-col items-center gap-4 rounded-lg bg-white p-4 md:flex-row">
          <div className="w-full flex-1">
            <Label className="mb-1 block text-left text-gray-600 text-xs">
              Property Type
            </Label>
            <Select defaultValue="flat">
              <SelectTrigger className="w-full border-0 shadow-none">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="flat">Flat</SelectItem>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="village">Village House</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="w-full flex-1">
            <Label className="mb-1 block text-left text-gray-600 text-xs">
              Fractional Stake
            </Label>
            <Select defaultValue="1-5">
              <SelectTrigger className="w-full border-0 shadow-none">
                <SelectValue placeholder="Select stake" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-5">1-5%</SelectItem>
                <SelectItem value="5-10">5-10%</SelectItem>
                <SelectItem value="15-20">15-20%</SelectItem>
                <SelectItem value="20-25">20-25%</SelectItem>
                <SelectItem value="25-30">25-30%</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="w-full flex-1">
            <Label className="mb-1 block text-left text-gray-600 text-xs">
              District
            </Label>
            <Select defaultValue="kowloon">
              <SelectTrigger className="w-full border-0 shadow-none">
                <SelectValue placeholder="Select district" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kowloon">Kowloon</SelectItem>
                <SelectItem value="hk-island">Hong Kong Island</SelectItem>
                <SelectItem value="nt">New Territories</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button className="mt-5 h-10 bg-teal-800 px-6 text-white hover:bg-teal-900">
            <Search className="mr-2 h-4 w-4" />
            Find Opportunities
          </Button>
        </div>
      </div>
    </section>
  );
}
