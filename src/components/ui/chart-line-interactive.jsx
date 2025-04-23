"use client";

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

const generateHourlyData = () => {
  const data = [];
  const now = new Date();
  // Generate data for the last 7 days (168 hours)
  for (let i = 167; i >= 0; i--) {
    const date = new Date(now.getTime() - i * 60 * 60 * 1000);

    const basePrice = 45000;
    const trend = Math.sin(i / 24) * 2000;
    const random = (Math.random() - 0.5) * 10000;
    const price = Math.round(basePrice + trend + random);

    data.push({
      date: date.toISOString(),
      price: price,
    });
  }
  return data;
};

const chartData = generateHourlyData();

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
            7 Days Hourly Price History
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
              minTickGap={60}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
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
                    return new Date(value).toLocaleString("en-US", {
                      month: "short",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                    });
                  }}
                />
              }
            />
            <Line
              dataKey="price"
              type="linear"
              stroke="rgba(255, 255, 255, 255)"
              strokeWidth={1}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
