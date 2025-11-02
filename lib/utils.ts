// lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format currency
export function formatCurrency(amount: number, decimals = 0): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(amount);
}

// Convert decimal to fraction string (e.g., 0.125 -> "1/8")
export function formatFraction(decimal: number): string {
  // Common fractions for fractional ownership
  const fractions: Record<number, string> = {
    1: "1/1",
    0.5: "1/2",
    0.333: "1/3",
    0.25: "1/4",
    0.2: "1/5",
    0.167: "1/6",
    0.143: "1/7",
    0.125: "1/8",
    0.1: "1/10",
    0.0625: "1/16",
  };

  // Find closest match (with tolerance for floating point precision)
  const tolerance = 0.001;
  for (const [key, value] of Object.entries(fractions)) {
    if (Math.abs(Number(key) - decimal) < tolerance) {
      return value;
    }
  }

  // Fallback: convert to percentage
  return `${
    // biome-ignore lint/style/noMagicNumbers: dealing with percentage
    (decimal * 100).toFixed(1)
  }%`;
}

// Calculate usage days from fraction size
export function calculateUsageDays(
  fractionSize: number,
  baseYearDays = 365
): number {
  return Math.floor(fractionSize * baseYearDays);
}

// Get fraction denominator (e.g., 0.125 -> 8)
export function getFractionDenominator(decimal: number): number {
  const tolerance = 0.001;

  // biome-ignore lint/style/noMagicNumbers: checking denominators up to 16
  for (let denominator = 1; denominator <= 16; denominator += 1) {
    if (Math.abs(1 / denominator - decimal) < tolerance) {
      return denominator;
    }
  }

  return Math.round(1 / decimal);
}
