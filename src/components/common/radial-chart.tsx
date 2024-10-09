"use client";

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";

export const description = "A radial chart with text";

const chartData = [
  { browser: "safari", seo: 100, fill: "var(--color-safari)" },
];

const chartConfig = {
  seo: {
    label: "SEO",
  },
  safari: {
    label: "Safari",
    color: "#06E18D",
  },
} satisfies ChartConfig;

export const RadialChart = ({ label }: { label: string }) => {
  return (
    <div className="  w-[120px] shrink-0">
      <div className=" border border-[#142E24] rounded-full w-[128px] flex items-center justify-center aspect-square">
        <ChartContainer
          config={chartConfig}
          className="aspect-square max-h-[120px] h-[120px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={360}
            innerRadius={60}
            outerRadius={50}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-black last:fill-black"
              polarRadius={[59, 55]}
            />
            <RadialBar dataKey="seo" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-white text-2xl font-semibold"
                        >
                          {chartData[0].seo.toLocaleString()}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </div>
      <p className="mt-4 w-full text-center">{label}</p>
    </div>
  );
};
