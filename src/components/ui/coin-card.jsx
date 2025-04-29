"use client";
import { IconArrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Sparklines, SparklinesLine } from "react-sparklines";

const CoinCard = ({
  id,
  logo,
  symbol,
  name,
  currentPrice,
  priceChange,
  volume24h,
  marketCap,
  sparklineData = [23, 21, 24, 20, 25, 22, 27, 24, 23, 25, 28, 26],
}) => {
  const isPositive = priceChange >= 0;

  const formatNumber = (value) => {
    // Handle string values that contain letters (like "1.02T" or "45.2B")
    if (typeof value === "string") {
      return value;
    }

    // Handle number values or convert string numbers to actual numbers
    const number = Number(value);
    if (isNaN(number)) {
      return "0";
    }

    return number.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  return (
    <Link href={`/coin/detail/${id}`}>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        className="group relative overflow-hidden rounded-2xl border border-violet-900/30 bg-black/40 p-6 backdrop-blur-md hover:border-white/20"
      >
        {/* Header section with logo and names */}
        <div className="flex items-start justify-between cursor-pointer">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-violet-900/20 p-2">
              <img src={logo} alt={symbol} className="h-full w-full" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{symbol}</h3>
              <span className="inline-flex items-center rounded-full bg-violet-900/30 px-2.5 py-0.5 text-xs font-medium text-violet-300">
                {name}
              </span>
            </div>
          </div>
          <IconArrowRight
            className="text-violet-500/50 -rotate-45 transform transition-transform duration-300 group-hover:rotate-0 group-hover:text-white/20"
            size={24}
            stroke={1.5}
          />
        </div>

        {/* Price section with sparkline */}
        <div className="mt-6 cursor-pointer">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-white">
              ${currentPrice}
            </span>
            <span
              className={`flex items-center text-sm font-medium ${
                isPositive ? "text-green-500" : "text-red-500"
              }`}
            >
              {isPositive ? "+" : ""}
              {priceChange}%
            </span>
          </div>

          {/* Sparkline chart */}
          <div className="mt-4 h-[60px]">
            <Sparklines data={sparklineData} width={200} height={60}>
              <SparklinesLine
                style={{
                  strokeWidth: 1.5,
                  stroke: isPositive ? "#22c55e" : "#ef4444",
                  fill: "none",
                  fillOpacity: "0.1",
                }}
              />
            </Sparklines>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-6 grid grid-cols-2 gap-4 pt-10 md:pt-6 lg:pt-4 cursor-pointer">
          <div>
            <p className="text-sm text-violet-300">Volume 24h</p>
            <p className="text-base font-semibold text-white">${volume24h}</p>
          </div>
          <div>
            <p className="text-sm text-violet-300">Market Cap</p>
            <p className="text-base font-semibold text-white">${marketCap}</p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default CoinCard;
