/** biome-ignore-all lint/style/noMagicNumbers: minor*/
import {
  BarChart,
  Building,
  Building2,
  DollarSign,
  FileText,
  Handshake,
  HelpCircle,
  Leaf,
  MenuIcon,
  Mountain,
  PlugIcon,
  RotateCcw,
  Shield,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  NavGridCard,
  NavItemMobile,
  type NavItemType,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavLargeItem,
  NavSmallItem,
} from "@/components/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export const productLinks: NavItemType[] = [
  {
    title: "Hong Kong Island",
    href: "#",
    description: "Find properties in the heart of the city",
    icon: Building2,
    image: {
      src: "/hong_kong_island.png",
      alt: "Hong Kong Island",
    },
  },
  {
    title: "Kowloon",
    href: "#",
    description: "Discover vibrant properties in Kowloon",
    icon: Building,
    image: {
      src: "/kowloon.png",
      alt: "Kowloon",
    },
  },
  {
    title: "New Territories",
    href: "#",
    description: "Explore spacious properties in the New Territories",
    icon: Mountain,
    image: {
      src: "/new_territories.png",
      alt: "New Territories",
    },
  },
  {
    title: "Featured",
    href: "#",
    icon: DollarSign,
  },
  {
    title: "High Yield (4.5%+)",
    href: "#",
    icon: BarChart,
  },
  {
    title: "Prime MTR Access",
    href: "#",
    icon: PlugIcon,
  },
  {
    title: "Entry Level",
    href: "#",
    icon: DollarSign,
  },
];

export const companyLinks: NavItemType[] = [
  {
    title: "About Us",
    href: "#",
    description: "Learn more about our story and team",
    icon: Users,
  },
  {
    title: "Investment Guides",
    href: "#",
    description: "Learn about fractional ownership in HK",
    icon: Star,
  },
  {
    title: "Terms of Service",
    href: "#",
    description: "Understand how we operate",
    icon: FileText,
  },
  {
    title: "Privacy Policy",
    href: "#",
    description: "How we protect your information",
    icon: Shield,
  },
  {
    title: "Refund Policy",
    href: "#",
    description: "Details about refunds and cancellations",
    icon: RotateCcw,
  },
  {
    title: "Partnerships",
    href: "#",
    icon: Handshake,
    description: "Collaborate with us for mutual growth",
  },
  {
    title: "Blog",
    href: "#",
    icon: Leaf,
    description: "Insights, tutorials, and company news",
  },
  {
    title: "Help Center",
    href: "#",
    icon: HelpCircle,
    description: "Find answers to your questions",
  },
];

export default function Header4() {
  return (
    <div className="">
      <div
        aria-hidden="true"
        className={cn(
          "-z-10 absolute inset-0 size-full",
          "bg-[radial-gradient(color-mix(in_oklab,--theme(--color-foreground/.2)30%,transparent)_2px,transparent_2px)]",
          "bg-size-[12px_12px]"
        )}
      />

      <div className="sticky top-1/4 z-50 mx-auto h-14 w-full max-w-4xl rounded-lg border bg-background px-4">
        <div className="flex h-full items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link className="flex items-center font-semibold" href="/">
              <Image
                alt="Logo"
                className="aspect-square size-10"
                height={64}
                src={"/logo_light.png"}
                width={64}
              />
              <span className="ml-[-5] hidden text-gray-900 text-lg md:block">
                ccomst
              </span>
            </Link>
          </div>
          <DesktopMenu />

          <div className="flex items-center gap-2">
            <Button>Get Started</Button>
            <MoileNav />
          </div>
        </div>
      </div>
    </div>
  );
}

function DesktopMenu() {
  return (
    <NavigationMenu className="hidden lg:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Browse</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-full md:w-4xl md:grid-cols-[1fr_.30fr]">
              <ul className="grid grow gap-4 p-4 md:grid-cols-3 md:border-r">
                {productLinks.slice(0, 3).map((link) => (
                  <li key={link.title}>
                    <NavGridCard link={link} />
                  </li>
                ))}
              </ul>
              <ul className="space-y-1 p-4">
                {productLinks.slice(3).map((link) => (
                  <li key={link.title}>
                    <NavSmallItem
                      className="gap-x-1"
                      href={link.href}
                      item={link}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>{" "}
        <NavigationMenuItem>
          <NavigationMenuLink className="cursor-pointer">
            How it works
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Company</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-full md:w-4xl md:grid-cols-[1fr_.40fr]">
              <ul className="grid grow grid-cols-2 gap-4 p-4 md:border-r">
                {companyLinks.slice(0, 2).map((link) => (
                  <li key={link.title}>
                    <NavGridCard className="min-h-36" link={link} />
                  </li>
                ))}
                <div className="col-span-2 grid grid-cols-3 gap-x-4">
                  {companyLinks.slice(2, 5).map((link) => (
                    <li key={link.title}>
                      <NavLargeItem href={link.href} link={link} />
                    </li>
                  ))}
                </div>
              </ul>
              <ul className="space-y-2 p-4">
                {companyLinks.slice(5, 10).map((link) => (
                  <li key={link.title}>
                    <NavLargeItem href={link.href} link={link} />
                  </li>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function MoileNav() {
  const sections = [
    {
      id: "product",
      name: "Product",
      list: productLinks,
    },
    {
      id: "company",
      name: "Company",
      list: companyLinks,
    },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="rounded-full lg:hidden" size="icon" variant="ghost">
          <MenuIcon className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full gap-0 bg-background/95 backdrop-blur-lg supports-backdrop-filter:bg-background/80">
        <div className="flex h-14 items-center justify-end border-b px-4" />
        <div className="container grid gap-y-2 overflow-y-auto px-4 pt-5 pb-12">
          <Accordion collapsible type="single">
            {sections.map((section) => (
              <AccordionItem key={section.id} value={section.id}>
                <AccordionTrigger className="capitalize hover:no-underline">
                  {section.id}
                </AccordionTrigger>
                <AccordionContent className="space-y-1">
                  <ul className="grid gap-1">
                    {section.list.map((link) => (
                      <li key={link.title}>
                        <SheetClose asChild>
                          <NavItemMobile href={link.href} item={link} />
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SheetContent>
    </Sheet>
  );
}
