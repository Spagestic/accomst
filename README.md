# ACCOMST – Fractional Home Equity Ownership Platform

## Unlocking Hong Kong's HK$3 Trillion in Trapped Residential Equity

ACCOMST is a rent-to-own staircasing platform that enables tenant-buyers to purchase initial equity stakes in homes and build ownership over time. Targeting Hong Kong's 'Generation Rent' crisis, we provide a transparent, regulated pathway to homeownership while unlocking capital for landlords through a simplified fractional ownership model.

---

## The Problem: Hong Kong's Housing Crisis

### Extreme Unaffordability

- Price-to-income ratio remained at **12.3 years** of income (end of 2024)—far above the "severely unaffordable" threshold
- Homeownership rate for households headed by individuals under 35 collapsed from **22.1% to 7.6%**
- Median monthly wage: **HK$20,500**

### The Rent Burden

- Hong Kong is the **most rent-burdened market in Asia-Pacific**
- Median rents consume **72% of median income** (2025 ULI report)
- This severely limits the ability to save for a traditional down payment

### Why Now? A Perfect Storm of Tailwinds

- **Policy Shift (Feb 2024):** All property cooling measures (BSD, SSD, NRSD) were abolished
- **Transaction Rebound:** Property transaction values rose to **HK$534 billion in 2024**
- **Strong Rental Yields:** Small-to-medium flats (Classes A & B) yield **3.2%-3.7%**, attracting landlord participation

---

## Our Solution: Rent-to-Own Staircasing

### Core Concept

Tenant-buyers purchase an **initial equity stake** (10-25%) in a home and build ownership incrementally. They pay a **reduced rent only on the portion of the property the landlord still owns**—not full market rent.

### Transparent Pricing (UK-Style Model)

- Monthly rent is calculated as a **percentage of the landlord's unsold equity**
- Target yield for landlords: **2.75% - 3.25%** (benchmarked against Hong Kong residential data)
- This proven formula is validated by the UK's Shared Ownership scheme

### Illustrative Example

```text
Property Value:       HK$7.0M
Tenant Buys:          20% stake (HK$1.4M)
Landlord Retains:     80% stake (HK$5.6M)

New Monthly Rent:     (HK$5.6M × 3.0%) ÷ 12 = HK$14,000
vs. Market Rent:      ~HK$17,500

Monthly Savings:      HK$3,500 (20% reduction)
```

### Staircasing to Full Ownership

Tenants can buy additional equity tranches (1-5% per tranche) at any time through the platform at **current market value**. Rent reduces pro-rata after each purchase.

### Secure & Phased Tech-Legal Framework

#### Phase 1: SPV & Digital Cap Table

- Each property held in a single-asset Special Purpose Vehicle (SPV)
- Ownership recorded on a digital cap table
- Bank-friendly, standard structure

#### Phase 2: Tokenised Securities (SFC Sandbox)

- Tokenised equity units on a permissioned blockchain
- Operating within SFC's regulatory sandbox for tokenised securities

---

## Global Validation & Hong Kong Edge

### What We Borrow From Proven Models

| Model                                    | Inspiration                                 | Our Adaptation                                       |
| ---------------------------------------- | ------------------------------------------- | ---------------------------------------------------- |
| **UK Shared Ownership**                  | Transparent "rent on unsold equity" formula | Adapted for Hong Kong rental market                  |
| **US (Divvy Homes)**                     | User-friendly auto-savings experience       | Enhanced: real equity from day one, not just credits |
| **Fractional Platforms (BrickX, RealT)** | Governance & secondary market liquidity     | Implementing for SFC Type 7 (ATS) license            |

### Our Hong Kong Differentiators

1. **Primary Residence Focus**

   - Unlike many fractional models targeting holiday homes, we focus on fundamental housing needs

2. **Hyper-Localised Economics**

   - Target yield pegged to **real-time Hong Kong rental data** (RVD/JLL)
   - Ensures model is attractive to local landlords

3. **Bank-Ready Collateral**

   - SPV structure & future tokenisation API designed for bank recognition
   - Tenant's accrued equity can be used as collateral for mortgages

4. **Clear Regulatory Path**
   - Aligned with SFC guidance on tokenised securities (Nov 2023 circulars)
   - Operating with **Type 1 (Dealing) & Type 4 (Advising)** licences

---

## Market Size & Unit Economics

### Total Addressable Market (TAM)

Total value of Hong Kong residential property transactions in 2024: **~HK$534 billion**

### Serviceable Available Market (SAM)

15% of secondary resale market + select primary sales: **~HK$80 billion**

### Serviceable Obtainable Market (SOM) – Year 1-2

Targeting 2.5% of SAM through agency & developer partnerships: **HK$2 billion** in on-platform transaction value

### Revenue Streams

1. **Transaction Fee:** 0.5% on initial fractional sale + each staircasing tranche
2. **Assets Under Management (AUM) Fee:** 0.2% annual fee on total managed equity (recurring)
3. **Ancillary Services:** Marketplace for valuation, insurance, mortgage brokerage

### Illustrative Year 2 Economics (HK$2B SOM)

| Revenue Stream           | Calculation                      | Amount       |
| ------------------------ | -------------------------------- | ------------ |
| Initial Transaction Fees | 0.5% × HK$2B                     | **HK$10.0M** |
| Staircasing Fees         | 0.5% × HK$400M (20% of value)    | **HK$2.0M**  |
| AUM Fee                  | 0.2% × HK$3B (cumulative assets) | **HK$6.0M**  |
| **Total Revenue**        |                                  | **~HK$18M**  |
| **Gross Margin Target**  | 75% SaaS model                   | **HK$13.5M** |

---

## Roadmap & Regulatory Path

### Key Milestones

**Q1 2026:** Launch 50-unit sandbox pilot with major landlord partner

- Finalise SPV structure
- Secure initial SFC Type 1 & 4 licences

**Q3 2026:** Full Land Registry & e-Stamping API integration

- Automated workflow for transactions

**Q1 2027:** Launch regulated secondary market (SFC Type 7)

- Reach HK$1.5B in tokenised equity

**Q4 2027:** Greater Bay Area expansion feasibility studies

### Regulatory & Compliance

#### Property Law

- Title held in dedicated HK SPV
- Occupancy governed by standard tenancy agreement
- All interests registered per Land Registration Ordinance

#### Securities Law

- Fractional interests treated as securities
- Operating under SFC **Type 1 (Dealing) & Type 4 (Advising)** licences
- Future Type 7 (Automated Trading Services) application

#### Tax Law

- Ad Valorem Stamp Duty (AVD) payable on each incremental equity purchase
- Automated through platform

### Strategic Partnerships

#### Distribution

- Interest in principle from major real estate agency for co-marketing pilot buildings
- Accelerates landlord onboarding

#### Fintech

- LOIs under discussion with two virtual banks for:
  - Escrow services
  - Mortgage top-ups for residents reaching 50-60% equity

---

## Tech Stack

This is a [Next.js](https://nextjs.org) web application built with:

- **Framework:** Next.js 14+ with App Router
- **Styling:** Tailwind CSS with custom UI components
- **Backend:** Supabase for database & authentication
- **Blockchain:** Permissioned blockchain for Phase 2 tokenisation

### Getting Started

First, run the development server:

```bash
bun dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the platform.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

---

## Contributing

We welcome contributions to ACCOMST. Please ensure all code follows our accessibility and code quality guidelines outlined in `AGENTS.md` and `biome.jsonc`.

## License

ACCOMST is proprietary software. All rights reserved.
