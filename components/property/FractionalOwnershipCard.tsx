// components/property/FractionalOwnershipCard.tsx
/** biome-ignore-all lint/style/noMagicNumbers: <explanation> */
"use client";

import { Info } from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Property } from "@/types/property";

type FractionalOwnershipCardProps = {
  property: Property;
};

export function FractionalOwnershipCard({
  property,
}: FractionalOwnershipCardProps) {
  const [selectedFractions, setSelectedFractions] = useState(1);

  const initialInvestment =
    property.financial.pricePerFraction * selectedFractions;
  const platformFee =
    initialInvestment * (property.financial.platformFee / 100);
  const stampDuty =
    initialInvestment * (property.financial.stampDutyRate / 100);
  const totalCost = initialInvestment + platformFee + stampDuty;

  const monthlyRent =
    (property.financial.totalPrice *
      (1 - property.financial.fractionSize * selectedFractions) *
      (property.financial.projectedRentalYield / 100)) /
    12;

  return (
    <div className="lg:col-span-1">
      <Card className="sticky top-4 p-4 shadow-lg md:top-24 md:p-6">
        <div className="">
          <div className="mb-2 flex items-baseline gap-2">
            <span className="font-semibold text-2xl text-text-primary md:text-[26px]">
              HK${property.financial.pricePerFraction.toLocaleString()}
            </span>
            <span className="text-muted-foreground text-sm md:text-base">
              per {(property.financial.fractionSize * 100).toFixed(0)}% stake
            </span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>
              {property.financial.soldFractions}/
              {property.financial.totalFractions} fractions sold
            </span>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full bg-primary transition-all"
              style={{
                width: `${(property.financial.soldFractions / property.financial.totalFractions) * 100}%`,
              }}
            />
          </div>
        </div>

        <div className="space-y-3 md:space-y-4">
          <div>
            <Label className="mb-2 block" htmlFor="equity-stake-select">
              Select equity stake
            </Label>
            <Select
              onValueChange={(value) => setSelectedFractions(Number(value))}
              value={selectedFractions.toString()}
            >
              <SelectTrigger className="w-full" id="equity-stake-select">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Array.from(
                  { length: property.financial.availableFractions },
                  (_, i) => i + 1
                ).map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} fraction{num > 1 ? "s" : ""} (
                    {(property.financial.fractionSize * num * 100).toFixed(1)}%
                    ownership)
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-lg bg-secondary p-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-primary md:text-base">
                Your equity stake
              </span>
              <span className="font-semibold text-base text-text-primary md:text-lg">
                {(
                  property.financial.fractionSize *
                  selectedFractions *
                  100
                ).toFixed(1)}
                %
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-primary md:text-base">
                Landlord retains
              </span>
              <span className="font-semibold text-base text-text-primary md:text-lg">
                {(
                  100 -
                  property.financial.fractionSize * selectedFractions * 100
                ).toFixed(1)}
                %
              </span>
            </div>
          </div>
        </div>

        <Button className="h-12 w-full bg-primary font-semibold text-base text-primary-foreground hover:bg-primary/90">
          Purchase Equity Stake
        </Button>

        <p className="text-center text-muted-foreground text-xs md:text-sm">
          Secure your ownership through our regulated SPV structure
        </p>

        <Accordion className="w-full" collapsible type="single">
          <AccordionItem value="cost-breakdown">
            <AccordionTrigger className="text-sm text-text-primary md:text-base">
              <span className="font-medium">Cost breakdown</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 text-sm md:space-y-3 md:text-base">
                <div className="flex justify-between text-text-primary">
                  <span>Initial investment</span>
                  <span>HK${initialInvestment.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-text-primary">
                  <div className="flex items-center gap-1">
                    <span>Platform fee</span>
                    <Info className="h-3 w-3 text-muted-foreground" />
                  </div>
                  <span>HK${platformFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-text-primary">
                  <div className="flex items-center gap-1">
                    <span>Stamp duty</span>
                    <Info className="h-3 w-3 text-muted-foreground" />
                  </div>
                  <span>HK${stampDuty.toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-border border-t pt-3 font-semibold text-text-primary">
                  <span>Total upfront</span>
                  <span>HK${totalCost.toLocaleString()}</span>
                </div>
                <div className="mt-4 rounded-lg bg-green-50 p-3 dark:bg-green-950/20">
                  <div className="flex justify-between text-green-700 dark:text-green-400">
                    <span className="font-medium">Your monthly rent</span>
                    <span className="font-semibold">
                      HK${monthlyRent.toLocaleString()}
                    </span>
                  </div>
                  <p className="mt-1 text-green-600 text-xs dark:text-green-500">
                    Only on landlord's{" "}
                    {(
                      100 -
                      property.financial.fractionSize * selectedFractions * 100
                    ).toFixed(1)}
                    % stake
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="space-y-2 rounded-lg bg-blue-50 p-3 md:p-4 dark:bg-blue-950/20">
          <p className="font-medium text-blue-900 text-sm dark:text-blue-100">
            Build to 100% ownership
          </p>
          <p className="text-blue-800 text-xs dark:text-blue-200">
            Purchase additional equity tranches anytime at current market value
          </p>
        </div>
      </Card>
    </div>
  );
}
