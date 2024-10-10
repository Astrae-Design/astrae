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

export const RadialChartMobile = ({ label }: { label: string }) => {
  return (
    <div className=" w-[140px] items-center flex flex-col shrink-0">
      <div className=" border border-[#142E24] rounded-full w-[84px] flex items-center justify-center aspect-square">
        <ChartContainer
          config={chartConfig}
          className="aspect-square max-h-[80px] h-[80px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={360}
            innerRadius={40}
            outerRadius={30}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-black last:fill-black"
              polarRadius={[30, 34]}
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
                          className="fill-white text-base font-medium flex-nowrap text-nowrap text-center w-full"
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
