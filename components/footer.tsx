import { ArrowUpRight, Facebook, Instagram, Twitter } from "lucide-react";
import { Suspense } from "react";

export function Footer() {
  const footerLinks = {
    Platform: [
      { name: "How It Works", href: "/#how-it-works" },
      { name: "Browse Properties", href: "/properties" },
      { name: "For Landlords", href: "/landlords" },
      { name: "For Renters", href: "/renters" },
      { name: "FAQ", href: "/faq" },
    ],
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Team", href: "/team" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
      { name: "Contact", href: "/contact" },
    ],
    Resources: [
      { name: "Blog", href: "/blog" },
      { name: "Market Insights", href: "/insights" },
      { name: "Legal & Compliance", href: "/legal" },
      { name: "Help Center", href: "/help" },
    ],
  };

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/accomst",
    },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/accomst" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/accomst" },
  ];

  return (
    <footer className="border-white/2 border-t bg-white/2">
      <div className="container-custom pt-16 pb-4 lg:pt-10">
        {/* Main Footer Content */}
        <div className="mb-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div>
              <h3 className="mb-4 font-bold text-2xl text-neutral-900">
                Accomst
              </h3>
              <p className="mb-6 text-neutral-600 leading-relaxed">
                The fractional home ownership platform for Hong Kong. Empowering
                renters to become owners, one share at a time. Unlock equity,
                reduce rent, and build your future.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-neutral-600 transition-all duration-200 hover:bg-neutral-100 hover:text-neutral-900"
                    href={social.href}
                    key={social.name}
                    rel="noopener"
                    target="_blank"
                  >
                    <social.icon size={18} />
                    <span className="sr-only">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-12">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h4 className="mb-4 font-semibold text-neutral-900">
                    {category}
                  </h4>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <a
                          className="group flex items-center text-neutral-600 transition-colors duration-200 hover:text-neutral-900"
                          href={link.href}
                        >
                          {link.name}
                          <ArrowUpRight
                            className="ml-1 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                            size={14}
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-center border-neutral-200 border-t pt-8">
          <div className="flex flex-col items-center space-y-2 text-center text-neutral-500 text-sm sm:flex-row sm:space-x-6 sm:space-y-0">
            <p>
              &copy; {<Suspense>{currentYear()}</Suspense>} Accomst. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              <a
                className="transition-colors hover:text-neutral-700"
                href="/privacy"
              >
                Privacy Policy
              </a>
              <a
                className="transition-colors hover:text-neutral-700"
                href="/terms"
              >
                Terms of Service
              </a>
              <a
                className="transition-colors hover:text-neutral-700"
                href="/cookies"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

async function currentYear() {
  "use cache";
  return await new Date().getFullYear();
}
