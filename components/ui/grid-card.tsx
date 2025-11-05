/** biome-ignore-all lint/style/noMagicNumbers: MagicNumbers */
"use client";

import type React from "react";
import { useMemo } from "react";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

const DEFAULT_PATTERN_LENGTH = 5;
const RANDOM_X_RANGE = 4;
const RANDOM_X_MIN = 7;
const RANDOM_Y_RANGE = 6;
const RANDOM_Y_MIN = 1;

export function GridCard({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  const randomPattern = useMemo(
    () => getRandomPattern(DEFAULT_PATTERN_LENGTH),
    []
  );

  return (
    <div
      className={cn(
        "group relative isolate z-0 flex h-full flex-col justify-between overflow-hidden rounded-sm border bg-background px-5 py-4 transition-colors duration-75",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0">
        <div className="-inset-[25%] -skew-y-12 mask-[linear-gradient(225deg,black,transparent)] absolute">
          <GridPattern
            className="absolute inset-0 size-full translate-y-2 fill-border/50 stroke-border transition-transform duration-150 ease-out group-hover:translate-y-0"
            height={30}
            squares={randomPattern}
            width={30}
            x={0}
            y={0}
          />
        </div>
        <div
          className={cn(
            "-inset-[10%] absolute opacity-0 blur-[50px] transition-opacity duration-150 group-hover:opacity-10",
            "bg-[conic-gradient(#F35066_0deg,#F35066_117deg,#9071F9_180deg,#5182FC_240deg,#F35066_360deg)]"
          )}
        />
      </div>
      {children}
    </div>
  );
}

function getRandomPattern(length?: number): [x: number, y: number][] {
  const patternLength = length ?? DEFAULT_PATTERN_LENGTH;
  return Array.from({ length: patternLength }, () => [
    Math.floor(Math.random() * RANDOM_X_RANGE) + RANDOM_X_MIN,
    Math.floor(Math.random() * RANDOM_Y_RANGE) + RANDOM_Y_MIN,
  ]);
}
