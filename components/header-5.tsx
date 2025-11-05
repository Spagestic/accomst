/** biome-ignore-all lint/style/noMagicNumbers: navigation slicing*/
"use client";
import {
  BarChart,
  Building,
  Building2,
  DollarSign,
  FileText,
  Handshake,
  HelpCircle,
  Leaf,
  Mountain,
  PlugIcon,
  RotateCcw,
  Shield,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MenuToggleIcon } from "@/components/menu-toggle-icon";
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
import { Button, buttonVariants } from "@/components/ui/button";
import { useScroll } from "@/hooks/use-scroll";
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

export function Header5() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);

  React.useEffect(() => {
    if (open) {
      // Disable scroll
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scroll
      document.body.style.overflow = "";
    }

    // Cleanup when component unmounts (important for Next.js)
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 mx-auto w-full max-w-8xl border-transparent border-b md:rounded-md md:border md:transition-all md:ease-out",
        {
          "border-border bg-background/95 backdrop-blur-lg supports-backdrop-filter:bg-background/50 md:top-4 md:max-w-7xl md:shadow":
            scrolled && !open,
          "bg-background/90": open,
        }
      )}
    >
      <nav
        className={cn(
          "flex h-14 w-full items-center justify-between px-4 ease-out md:h-12 md:transition-all md:ease-out",
          {
            "md:px-2": scrolled,
          }
        )}
      >
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
        <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 hidden transform items-center gap-2 md:flex">
          <NavigationMenu scrolled={scrolled}>
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
              </NavigationMenuItem>
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
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="outline">
            <Link href="/auth/login">Login</Link>
          </Button>
          <Button>
            <Link href="/auth/sign-up">Get Started</Link>
          </Button>
        </div>
        <div className="absolute right-4 md:hidden">
          <Button onClick={() => setOpen(!open)} size="icon" variant="outline">
            <MenuToggleIcon className="size-5" duration={300} open={open} />
          </Button>
        </div>
      </nav>

      <div
        className={cn(
          "fixed top-14 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-y bg-background/90 md:hidden",
          open ? "block" : "hidden"
        )}
      >
        <div
          className={cn(
            "data-[slot=open]:zoom-in-95 data-[slot=closed]:zoom-out-95 ease-out data-[slot=closed]:animate-out data-[slot=open]:animate-in",
            "flex h-full w-full flex-col justify-between gap-y-2 overflow-y-auto p-4"
          )}
          data-slot={open ? "open" : "closed"}
        >
          <div className="grid gap-y-2">
            <Accordion collapsible type="single">
              <AccordionItem value="browse">
                <AccordionTrigger className="capitalize hover:no-underline">
                  Browse
                </AccordionTrigger>
                <AccordionContent className="space-y-1">
                  <ul className="grid gap-1">
                    {productLinks.map((link) => (
                      <li key={link.title}>
                        <NavItemMobile href={link.href} item={link} />
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="how-it-works">
                <Link
                  className={buttonVariants({
                    variant: "ghost",
                    className: "w-full justify-start",
                  })}
                  href="#"
                >
                  How it works
                </Link>
              </AccordionItem>
              <AccordionItem value="company">
                <AccordionTrigger className="capitalize hover:no-underline">
                  Company
                </AccordionTrigger>
                <AccordionContent className="space-y-1">
                  <ul className="grid gap-1">
                    {companyLinks.map((link) => (
                      <li key={link.title}>
                        <NavItemMobile href={link.href} item={link} />
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="flex flex-col gap-2">
            <Button asChild>
              <Link href="/auth/login">Login</Link>
            </Button>
            <Button asChild className="w-full">
              <Link href="/auth/sign-up">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
