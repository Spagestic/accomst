"use client";

import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 font-bold text-4xl tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: November 8, 2025
          </p>
        </div>

        <div className="space-y-8">
          <section className="mb-8">
            <h2 className="mb-2 font-bold text-2xl">1. Introduction</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                ACCOMST ("we," "our," or "us") is committed to protecting your
                privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our
                website and use our platform.
              </p>
              <p>
                Please read this Privacy Policy carefully. If you do not agree
                with our policies and practices, please do not use our platform.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-2 font-bold text-2xl">
              2. Information We Collect
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <div className="space-y-3">
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">
                    Personal Information
                  </h3>
                  <p>
                    When you register, we collect: name, email address, phone
                    number, residential address, identification documents
                    (HKID/Passport), and financial information for KYC/AML
                    purposes.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">
                    Property Information
                  </h3>
                  <p>
                    Details about properties you're interested in, including
                    addresses, valuations, and transaction history.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">
                    Usage Data
                  </h3>
                  <p>
                    Information about how you interact with our platform,
                    including IP address, browser type, pages visited, and time
                    spent on features.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">
                    Cookies & Tracking
                  </h3>
                  <p>
                    We use cookies and similar technologies to enhance your
                    experience. See our{" "}
                    <Link
                      className="text-primary hover:underline"
                      href="/cookies"
                    >
                      Cookies Policy
                    </Link>{" "}
                    for details.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-2 font-bold text-2xl">
              3. How We Use Your Information
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <ul className="list-inside list-disc space-y-2">
                <li>To create and maintain your account</li>
                <li>To process transactions and send related information</li>
                <li>To perform KYC/AML compliance checks</li>
                <li>To send security alerts and administrative notices</li>
                <li>
                  To respond to your inquiries and provide customer support
                </li>
                <li>To improve our platform and develop new features</li>
                <li>
                  To comply with legal obligations and regulatory requirements
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-2 font-bold text-2xl">
              4. Data Protection & Security
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We implement comprehensive security measures including
                encryption, secure data storage, and access controls to protect
                your personal information. However, no method of transmission
                over the internet is 100% secure. We cannot guarantee absolute
                security.
              </p>
              <p>
                Your data is stored on Supabase's secure infrastructure and is
                protected in accordance with Hong Kong's Personal Data (Privacy)
                Ordinance (PDPO).
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-2 font-bold text-2xl">5. Data Retention</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We retain your personal information for as long as necessary to
                provide our services and comply with legal obligations.
                Generally, we retain data for 7 years after account termination
                for regulatory purposes, unless longer retention is required by
                law.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-2 font-bold text-2xl">6. Your Privacy Rights</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Under the Hong Kong PDPO, you have the right to:</p>
              <ul className="list-inside list-disc space-y-2">
                <li>Access your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Request a copy of your data in a portable format</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, contact our Data Protection Officer at
                privacy@accomst.com.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-2 font-bold text-2xl">7. Third-Party Sharing</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We do not sell your data. We only share information with trusted
                third parties necessary to provide our services:
              </p>
              <ul className="list-inside list-disc space-y-2">
                <li>Financial institutions for payment processing</li>
                <li>Regulatory authorities for compliance</li>
                <li>Professional advisors (lawyers, accountants)</li>
                <li>Service providers who assist in our operations</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-2 font-bold text-2xl">
              8. Changes to This Policy
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We may update this Privacy Policy to reflect changes in our
                practices or for other operational, legal, or regulatory
                reasons. We will notify you of material changes by email or
                through the platform.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-2 font-bold text-2xl">9. Contact Us</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                If you have questions about this Privacy Policy or our privacy
                practices:
              </p>
              <div className="space-y-2 rounded-lg bg-muted p-4">
                <p>
                  <strong>Email:</strong> privacy@accomst.com
                </p>
                <p>
                  <strong>Address:</strong> ACCOMST, Hong Kong
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
