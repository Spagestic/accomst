"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MenuToggleIcon } from "@/components/menu-toggle-icon";
import { Button, buttonVariants } from "@/components/ui/button";
import { useScroll } from "@/components/use-scroll";
import { cn } from "@/lib/utils";

export function Header2() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);

  const links = [
    {
      label: "Browse",
      href: "#",
    },
    {
      label: "How it works",
      href: "#",
    },
    {
      label: "About",
      href: "#",
    },
  ];

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
        "sticky top-0 z-50 mx-auto w-full max-w-7xl border-transparent border-b md:rounded-md md:border md:transition-all md:ease-out",
        {
          "border-border bg-background/95 backdrop-blur-lg supports-backdrop-filter:bg-background/50 md:top-4 md:max-w-5xl md:shadow":
            scrolled && !open,
          "bg-background/90": open,
        }
      )}
    >
      <nav
        className={cn(
          "flex h-14 w-full items-center justify-between px-4 md:h-12 md:transition-all md:ease-out",
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
        <div className="hidden items-center gap-2 md:flex">
          {links.map((link, i) => (
            <a
              className={buttonVariants({ variant: "ghost" })}
              href={link.href}
              key={i as number}
            >
              {link.label}
            </a>
          ))}
          <Button variant="outline">
            <Link href="/auth/login">Login</Link>
          </Button>
          <Button>
            <Link href="/auth/sign-up">Get Started</Link>
          </Button>
        </div>
        <Button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          size="icon"
          variant="outline"
        >
          <MenuToggleIcon className="size-5" duration={300} open={open} />
        </Button>
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
            "flex h-full w-full flex-col justify-between gap-y-2 p-4"
          )}
          data-slot={open ? "open" : "closed"}
        >
          <div className="grid gap-y-2">
            {links.map((link) => (
              <Link
                className={buttonVariants({
                  variant: "ghost",
                  className: "justify-start",
                })}
                href={link.href}
                key={link.label}
              >
                {link.label}
              </Link>
            ))}
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
