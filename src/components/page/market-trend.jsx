"use client";
import { getTopMovers } from "@/components/data/coin-data";
import CoinCard from "../ui/coin-card";

export function MarketTrend() {
  const coins = getTopMovers();

  return (
    <div className="w-full h-fit bg-black px-4 xs:px-6 py-12 xs:py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-8 xs:mb-10 sm:mb-12 text-left sm:text-right">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-white mb-3 xs:mb-4">
            Top Movers
          </h2>
          <p className="text-white/70 text-base xs:text-lg font-light">
            Discover the best performing cryptocurrencies in the market today
          </p>
        </div>

        {/* Grid of Coin Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6">
          {coins.map((coin, index) => (
            <CoinCard key={`coin-${index}`} {...coin} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MarketTrend;
