import Image from "next/image";
import Link from "next/link";
import { AuthButton } from "./auth/auth-button";

export default function Header() {
  return (
    <header className="relative z-20 flex items-center justify-between py-2">
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

      {/* Navigation */}
      <nav className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 hidden transform items-center space-x-2 md:flex">
        <Link
          className="rounded-full px-3 py-2 font-light text-[#37322f] text-xs transition-all duration-200 hover:bg-teal-50 hover:text-gray-900"
          href="#features"
        >
          Home
        </Link>
        <Link
          className="rounded-full px-3 py-2 font-light text-[#37322f] text-xs transition-all duration-200 hover:bg-teal-50 hover:text-gray-900"
          href="#pricing"
        >
          How it works
        </Link>
        <Link
          className="rounded-full px-3 py-2 font-light text-[#37322f] text-xs transition-all duration-200 hover:bg-teal-50 hover:text-gray-900"
          href="#faqs"
        >
          Contact Us
        </Link>
      </nav>

      <AuthButton />
    </header>
  );
}
