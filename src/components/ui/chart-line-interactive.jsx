"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

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
import { useMemo } from "react";

// Move data generation outside component to make it stable
const generateStaticData = () => {
  const data = [];
  const baseDate = new Date("2024-01-01").getTime();

  for (let i = 0; i < 168; i++) {
    // 7 days * 24 hours
    const date = new Date(baseDate + i * 60 * 60 * 1000);

    // Use deterministic calculation instead of random
    const basePrice = 45000;
    const trend = Math.sin(i / 24) * 2000;
    const variation = (Math.abs(((i * 157) % 100) - 50) / 50) * 100000;
    const price = Math.round(basePrice + trend + variation);

    data.push({
      date: date.toISOString(),
      price: price,
    });
  }
  return data;
};

const formatPrice = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(price);
};

const staticChartData = generateStaticData();

const chartConfig = {
  views: {
    label: "Price/Time",
  },
  price: {
    label: "Price",
    color: "hsl(265, 89%, 78%)",
  },
};

export function Component() {
  // Use useMemo to keep data consistent across renders
  const chartData = useMemo(() => staticChartData, []);

  return (
    <Card className="bg-violet-950/20 border-violet-500/20 backdrop-blur-sm">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b border-white/10 pb-4">
        <div className="flex flex-1 flex-col justify-center gap-1">
          <CardTitle className="text-white font-bold text-3xl flex items-center gap-2">
            <svg
              className="w-8 h-8 text-violet-400"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" />
            </svg>
            Price Analytics
          </CardTitle>
          <CardDescription className="text-white/60">
            7 Days Price History (Static Data)
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[300px] w-full text-white/60"
        >
          <LineChart
            data={chartData}
            margin={{
              left: 24,
              right: 24,
              top: 12,
              bottom: 12,
            }}
          >
            <CartesianGrid
              vertical={false}
              horizontal={true}
              stroke="rgba(139, 92, 246, 0.1)"
              strokeDasharray="3 3"
            />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={12}
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
              tick={{ fill: "rgba(255, 255, 255, 0.6)", fontSize: 12 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={12}
              tickFormatter={(value) => formatPrice(value)}
              stroke="rgba(255, 255, 255, 0.6)"
              tick={{ fill: "rgba(255, 255, 255, 0.6)", fontSize: 12 }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[200px] bg-black/90 border-violet-500/20 text-white  backdrop-blur-lg shadow-lg rounded-lg p-3"
                  nameKey="price"
                  valueFormatter={(value) => formatPrice(value)}
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleString("en-US", {
                      weekday: "short",
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
              type="monotone"
              stroke="rgba(139, 92, 246, 1)"
              strokeWidth={2}
              dot={false}
              fill="url(#colorGradient)"
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
