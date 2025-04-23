"use client";

import * as React from "react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { date: "2024-01-01", price: 40000 },
  { date: "2024-01-02", price: 41000 },
  { date: "2024-01-03", price: 43800 },
  { date: "2024-01-04", price: 42900 },
  { date: "2024-01-05", price: 44700 },
  { date: "2024-01-06", price: 43100 },
  { date: "2024-01-07", price: 45600 },
  { date: "2024-01-08", price: 44200 },
  { date: "2024-01-09", price: 42800 },
  { date: "2024-01-10", price: 46900 },
  { date: "2024-01-11", price: 45200 },
  { date: "2024-01-12", price: 47800 },
  { date: "2024-01-13", price: 46100 },
  { date: "2024-01-14", price: 44800 },
  { date: "2024-01-15", price: 48900 },
  { date: "2024-01-16", price: 47200 },
  { date: "2024-01-17", price: 45900 },
  { date: "2024-01-18", price: 49200 },
  { date: "2024-01-19", price: 47500 },
  { date: "2024-01-20", price: 46200 },
  { date: "2024-01-21", price: 48900 },
  { date: "2024-01-22", price: 47200 },
  { date: "2024-01-23", price: 45500 },
  { date: "2024-01-24", price: 43800 },
  { date: "2024-01-25", price: 46100 },
  { date: "2024-01-26", price: 44400 },
  { date: "2024-01-27", price: 47700 },
  { date: "2024-01-28", price: 46300 },
  { date: "2024-01-29", price: 48600 },
  { date: "2024-01-30", price: 45123 },
];

const chartConfig = {
  views: {
    label: "Price History",
  },
  price: {
    label: "Price",
    color: "hsl(265, 89%, 78%)",
  },
};

export function Component() {
  return (
    <Card className="bg-violet-950/20 border-violet-500/20">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b border-white/10 pb-4">
        <div className="flex flex-1 flex-col justify-center gap-1">
          <CardTitle className="text-white font-bold text-3xl">
            Price Chart
          </CardTitle>
          <CardDescription className="text-white/60">
            30 Day Price History
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full text-white/60"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} stroke="rgba(139, 92, 246, 0.1)" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
              stroke="rgba(255, 255, 255, 0.6)"
              tick={{ fill: "rgba(255, 255, 255, 0.6)" }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px] bg-black/90 border-white/10 text-white/90"
                  nameKey="price"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Line
              dataKey="price"
              type="linear"
              stroke="rgba(255, 255, 255, 255)"
              strokeWidth={2.5}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
