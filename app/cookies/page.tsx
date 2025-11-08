"use client";

import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 font-bold text-4xl tracking-tight">
            Cookies Policy
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: November 8, 2025
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">1. What Are Cookies?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Cookies are small text files stored on your device when you
                visit our website. They help us remember your preferences, keep
                you logged in, and understand how you use our platform to
                improve your experience.
              </p>
              <p>
                Similar technologies include web beacons, pixels, and local
                storage mechanisms that serve similar purposes.
              </p>
            </CardContent>
          </Card>

          {/* Types of Cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                2. Types of Cookies We Use
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div className="space-y-4">
                <div>
                  <h4 className="mb-2 font-semibold text-foreground">
                    Essential Cookies
                  </h4>
                  <p>
                    These cookies are necessary for the website to function
                    properly. They enable user authentication, security
                    features, and basic platform functionality. These cannot be
                    disabled without affecting site performance.
                  </p>
                  <ul className="ml-2 list-inside list-disc space-y-1">
                    <li>Session tokens for user authentication</li>
                    <li>CSRF protection tokens</li>
                    <li>Security and fraud prevention</li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold text-foreground">
                    Performance Cookies
                  </h4>
                  <p>
                    These cookies help us understand how users interact with our
                    platform by collecting anonymous usage data. This helps us
                    optimize performance and identify technical issues.
                  </p>
                  <ul className="ml-2 list-inside list-disc space-y-1">
                    <li>Page load times and errors</li>
                    <li>Feature usage patterns</li>
                    <li>Navigation flow analysis</li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold text-foreground">
                    Functional Cookies
                  </h4>
                  <p>
                    These cookies remember your preferences and choices to
                    enhance your experience, such as language preference, layout
                    preferences, and saved searches.
                  </p>
                  <ul className="ml-2 list-inside list-disc space-y-1">
                    <li>Language and regional preferences</li>
                    <li>UI preferences (light/dark mode)</li>
                    <li>Recently viewed properties</li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold text-foreground">
                    Marketing Cookies
                  </h4>
                  <p>
                    These cookies track your behavior to deliver personalized
                    advertisements and marketing messages. You can opt-out of
                    these cookies.
                  </p>
                  <ul className="ml-2 list-inside list-disc space-y-1">
                    <li>Targeted advertising</li>
                    <li>Campaign effectiveness tracking</li>
                    <li>User interest profiling</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Third-Party Cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">3. Third-Party Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                We work with third-party service providers who may set their own
                cookies:
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="mb-2 font-semibold text-foreground">
                    Google Analytics
                  </h4>
                  <p>
                    We use Google Analytics to track website traffic and user
                    behavior. Google may place cookies on your device. See{" "}
                    <a
                      className="text-primary hover:underline"
                      href="https://policies.google.com/privacy"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Google's Privacy Policy
                    </a>
                    .
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-foreground">
                    Authentication Providers
                  </h4>
                  <p>
                    Third-party authentication services (e.g., Google OAuth) may
                    set cookies for their services.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-foreground">
                    Payment Processors
                  </h4>
                  <p>
                    Payment processing services may set cookies for transaction
                    security and fraud prevention.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">4. How We Use Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <ul className="list-inside list-disc space-y-2">
                <li>To authenticate your identity and keep you logged in</li>
                <li>To remember your preferences and settings</li>
                <li>To understand how you use our platform</li>
                <li>To improve platform performance and user experience</li>
                <li>To detect and prevent fraud and security threats</li>
                <li>To deliver personalized content and recommendations</li>
                <li>To measure the effectiveness of marketing campaigns</li>
              </ul>
            </CardContent>
          </Card>

          {/* Cookie Duration */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">5. Cookie Duration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div className="space-y-3">
                <div>
                  <h4 className="mb-2 font-semibold text-foreground">
                    Session Cookies
                  </h4>
                  <p>
                    These cookies expire when you close your browser. They
                    include authentication tokens and temporary preferences.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-foreground">
                    Persistent Cookies
                  </h4>
                  <p>
                    These cookies remain on your device for a specified period
                    (typically 1 month to 2 years) and remember your preferences
                    across visits.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Your Cookie Choices */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">6. Your Cookie Choices</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>You have control over cookies on your device. You can:</p>
              <ul className="mt-3 list-inside list-disc space-y-2">
                <li>
                  <strong>Accept or reject cookies:</strong> When you first
                  visit, you can choose which types of cookies to accept through
                  our cookie consent banner.
                </li>
                <li>
                  <strong>Modify browser settings:</strong> Most browsers allow
                  you to refuse cookies or alert you when cookies are being
                  sent. Check your browser's help menu for instructions.
                </li>
                <li>
                  <strong>Opt out of tracking:</strong> Some browsers support
                  "Do Not Track" signals. We respect these signals for marketing
                  cookies.
                </li>
                <li>
                  <strong>Delete cookies:</strong> You can delete existing
                  cookies through your browser settings, though this may affect
                  your user experience.
                </li>
              </ul>
              <p className="mt-4 text-sm">
                <strong>Note:</strong> Disabling essential cookies may prevent
                you from using certain platform features.
              </p>
            </CardContent>
          </Card>

          {/* Cookie Banner */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                7. Cookie Consent Banner
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                When you first visit ACCOMST, you'll see a cookie consent
                banner. You can:
              </p>
              <ul className="mt-3 list-inside list-disc space-y-2">
                <li>
                  <strong>Accept All:</strong> Allow all types of cookies
                </li>
                <li>
                  <strong>Reject All:</strong> Only essential cookies will be
                  used
                </li>
                <li>
                  <strong>Customize:</strong> Choose which types of cookies to
                  allow
                </li>
              </ul>
              <p className="mt-4">
                You can change your cookie preferences at any time through your
                account settings.
              </p>
            </CardContent>
          </Card>

          {/* Tracking Technologies */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                8. Other Tracking Technologies
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>Beyond cookies, we may use:</p>
              <ul className="mt-3 list-inside list-disc space-y-2">
                <li>
                  <strong>Web Beacons:</strong> Small transparent images
                  embedded in pages to track page visits
                </li>
                <li>
                  <strong>Pixels:</strong> Code snippets that track user
                  interactions and conversions
                </li>
                <li>
                  <strong>Local Storage:</strong> Browser storage for user
                  preferences and data
                </li>
                <li>
                  <strong>Analytics Tags:</strong> Code to track user behavior
                  and platform performance
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                9. Data Security & Privacy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                All data collected through cookies is encrypted and stored
                securely. Personal information is never shared with third
                parties for marketing purposes without your explicit consent.
                For more details, see our{" "}
                <Link className="text-primary hover:underline" href="/privacy">
                  Privacy Policy
                </Link>
                .
              </p>
            </CardContent>
          </Card>

          {/* GDPR/PDPO Compliance */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">10. Legal Compliance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>Our cookie practices comply with:</p>
              <ul className="mt-3 list-inside list-disc space-y-2">
                <li>
                  <strong>Hong Kong PDPO:</strong> Personal Data (Privacy)
                  Ordinance
                </li>
                <li>
                  <strong>GDPR:</strong> General Data Protection Regulation (for
                  EU users)
                </li>
                <li>
                  <strong>ePrivacy Directive:</strong> Cookie consent
                  requirements
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Updates to Policy */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                11. Changes to This Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                We may update this Cookies Policy periodically. The "Last
                updated" date at the top indicates the most recent version. We
                will notify you of significant changes through the platform or
                email.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">12. Questions?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>If you have questions about our use of cookies:</p>
              <div className="space-y-2 rounded-lg bg-muted p-4">
                <p>
                  <strong>Email:</strong> privacy@accomst.com
                </p>
                <p>
                  <strong>Address:</strong> ACCOMST, Hong Kong
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
