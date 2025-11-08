// components/property/InvestmentOverview.tsx

import { Calendar, DollarSign, PieChart, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { Property } from "@/types/property";

type InvestmentOverviewProps = {
  property: Property;
};

export function InvestmentOverview({ property }: InvestmentOverviewProps) {
  return (
    <div className="border-border border-b py-6 md:py-8">
      <h3 className="mb-4 font-semibold text-text-primary text-xl md:mb-6 md:text-[22px]">
        Investment Overview
      </h3>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <DollarSign className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-muted-foreground text-xs md:text-sm">
                Total Property Value
              </p>
              <p className="font-semibold text-base text-text-primary md:text-lg">
                HK${property.financial.totalPrice.toLocaleString()}
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10">
              <TrendingUp className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-muted-foreground text-xs md:text-sm">
                Projected Annual Return
              </p>
              <p className="font-semibold text-base text-text-primary md:text-lg">
                {property.financial.projectedAnnualReturn.toFixed(2)}%
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10">
              <PieChart className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-muted-foreground text-xs md:text-sm">
                Minimum Equity Stake
              </p>
              <p className="font-semibold text-base text-text-primary md:text-lg">
                {/** biome-ignore lint/style/noMagicNumbers: <explanation> */}
                {(property.financial.fractionSize * 100).toFixed(0)}%
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/10">
              <Calendar className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="text-muted-foreground text-xs md:text-sm">
                Rental Yield
              </p>
              <p className="font-semibold text-base text-text-primary md:text-lg">
                {property.financial.projectedRentalYield.toFixed(2)}%
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
