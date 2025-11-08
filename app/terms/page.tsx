"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 font-bold text-4xl tracking-tight">
            Terms and Conditions
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: November 8, 2025
          </p>
        </div>

        <div className="space-y-8">
          {/* Acceptance of Terms */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">1. Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                By accessing and using the ACCOMST platform, you accept and
                agree to be bound by the terms and provision of this agreement.
                If you do not agree to abide by the above, please do not use
                this service.
              </p>
            </CardContent>
          </Card>

          {/* Use License */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">2. Use License</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Permission is granted to temporarily download one copy of the
                materials (information or software) on ACCOMST's platform for
                personal, non-commercial transitory viewing only. This is the
                grant of a license, not a transfer of title, and under this
                license you may not:
              </p>
              <ul className="list-inside list-disc space-y-2">
                <li>Modify or copy the materials</li>
                <li>
                  Use the materials for any commercial purpose or for any public
                  display
                </li>
                <li>
                  Attempt to decompile or reverse engineer any software
                  contained on the platform
                </li>
                <li>
                  Remove any copyright or other proprietary notations from the
                  materials
                </li>
                <li>
                  Transfer the materials to another person or "mirror" the
                  materials on any other server
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* User Eligibility */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">3. User Eligibility</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                You must be at least 18 years old and a resident of Hong Kong to
                use this platform. You represent and warrant that:
              </p>
              <ul className="list-inside list-disc space-y-2">
                <li>
                  You have the legal capacity to enter into binding agreements
                </li>
                <li>All information you provide is accurate and truthful</li>
                <li>
                  You will comply with all applicable laws and regulations
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Account Registration */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                4. Account Registration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                You are responsible for maintaining the confidentiality of your
                account credentials and are responsible for all activities that
                occur under your account. You agree to:
              </p>
              <ul className="list-inside list-disc space-y-2">
                <li>Provide accurate and complete registration information</li>
                <li>Keep your password confidential and secure</li>
                <li>Notify us immediately of any unauthorized use</li>
                <li>
                  Accept responsibility for all activities under your account
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Investment Risks */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                5. Investment Risks & Disclaimer
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Fractional home ownership is an investment with inherent risks.
                Property values may fluctuate, and there is no guarantee of
                returns. By using our platform, you acknowledge:
              </p>
              <ul className="list-inside list-disc space-y-2">
                <li>You understand the risks of real estate investment</li>
                <li>You have conducted your own due diligence</li>
                <li>You are not relying solely on ACCOMST's recommendations</li>
                <li>Past performance does not guarantee future results</li>
                <li>You should seek independent financial and legal advice</li>
              </ul>
              <p className="mt-4 font-semibold">
                THIS IS NOT INVESTMENT ADVICE. ACCOMST IS NOT A LICENSED
                FINANCIAL ADVISOR.
              </p>
            </CardContent>
          </Card>

          {/* KYC/AML Compliance */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">6. KYC/AML Compliance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                To comply with Hong Kong regulatory requirements, we conduct
                Know-Your-Customer (KYC) and Anti-Money Laundering (AML) checks.
                You agree to provide required documentation and information for
                verification. Failure to complete these checks may result in
                account suspension or termination.
              </p>
            </CardContent>
          </Card>

          {/* Transaction Terms */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">7. Transaction Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div className="space-y-3">
                <div>
                  <h4 className="mb-2 font-semibold text-foreground">
                    Fees & Commissions
                  </h4>
                  <p>
                    Initial transaction fees are 0.5% of the purchase price.
                    Staircasing (additional equity purchases) also incurs 0.5%
                    fees. Annual Assets Under Management (AUM) fees are 0.2% of
                    total managed equity.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-foreground">
                    Payment Terms
                  </h4>
                  <p>
                    All payments must clear before transactions are executed.
                    ACCOMST is not responsible for delays caused by banking
                    delays.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-foreground">
                    Cancellation
                  </h4>
                  <p>
                    Transactions may be cancelled within 5 business days if
                    required by law, subject to applicable fees and penalties.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                8. Limitation of Liability
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                In no event shall ACCOMST be liable for any indirect,
                incidental, special, consequential, or punitive damages, or for
                loss of profits, revenue, data, or use, arising out of or in
                connection with the platform, even if advised of the possibility
                of such damages.
              </p>
              <p className="mt-4">
                The maximum liability of ACCOMST shall not exceed the amount
                paid by you in fees during the 12 months preceding the claim.
              </p>
            </CardContent>
          </Card>

          {/* User Conduct */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">9. User Conduct</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>You agree not to:</p>
              <ul className="list-inside list-disc space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Engage in fraudulent or deceptive practices</li>
                <li>Harass, abuse, or threaten other users</li>
                <li>Attempt to gain unauthorized access to the platform</li>
                <li>Transmit viruses, malware, or harmful code</li>
                <li>Interfere with platform operations</li>
              </ul>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                10. Intellectual Property Rights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                The platform, including all content, features, and
                functionality, is owned by ACCOMST, its licensors, or other
                providers of such material and is protected by intellectual
                property laws. You may not reproduce, distribute, or transmit
                any content without our permission.
              </p>
            </CardContent>
          </Card>

          {/* Indemnification */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">11. Indemnification</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                You agree to indemnify and hold harmless ACCOMST and its
                officers, directors, employees, and agents from any claims,
                damages, losses, liabilities, and expenses arising from your use
                of the platform or violation of these terms.
              </p>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">12. Termination</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                ACCOMST may terminate or suspend your account immediately,
                without prior notice or liability, if you violate these terms or
                for any other reason. Upon termination, your right to use the
                platform ceases immediately.
              </p>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">13. Governing Law</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                These Terms and Conditions are governed by and construed in
                accordance with the laws of Hong Kong, and you irrevocably
                submit to the exclusive jurisdiction of the courts of Hong Kong.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">14. Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                We reserve the right to modify these terms at any time. Changes
                will be effective immediately upon posting to the platform. Your
                continued use of the platform following any changes constitutes
                your acceptance of the new terms.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                15. Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>For questions about these Terms and Conditions:</p>
              <div className="space-y-2 rounded-lg bg-muted p-4">
                <p>
                  <strong>Email:</strong> legal@accomst.com
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
