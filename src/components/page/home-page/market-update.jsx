"use client";
import { getMarketUpdates } from "@/components/data/coin-data";
import { IconArrowRight } from "@tabler/icons-react";
import CoinTable from "../../ui/table";

export function MarketUpdate() {
  const coins = getMarketUpdates();

  return (
    <div
      id="market"
      className="w-full min-h-screen bg-black px-4 xs:px-6 py-12 xs:py-16 sm:py-20 md:py-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-8 xs:mb-10 sm:mb-12">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-white mb-3 xs:mb-4">
            Market Update
          </h2>
          <p className="text-white/70 text-base xs:text-lg font-light">
            Cryptocurrency market price updates in real-time
          </p>
        </div>

        {/* Coin Table */}
        <CoinTable data={coins} />

        {/* See All Button */}
        <div className="mt-6 xs:mt-8">
          <button className="group px-4 xs:px-6 py-2 xs:py-3 bg-black underline uppercase text-sm xs:text-base text-white hover:text-violet-400 rounded-lg font-medium transition-colors inline-flex items-center gap-1 cursor-pointer">
            See All Market Update
            <IconArrowRight
              size={16}
              className="-rotate-45 transform transition-transform duration-300 group-hover:rotate-0"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MarketUpdate;
