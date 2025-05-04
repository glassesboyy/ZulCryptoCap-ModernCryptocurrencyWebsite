"use client";
import { getCoinItems } from "@/components/data/coin-data";
import TableRecap from "@/components/ui/table-recap";

export function MarketRecap() {
  // Get data and sort for different categories
  const allCoins = getCoinItems(20);

  const trending = [...allCoins].sort(
    (a, b) =>
      b.volume24h.replace(/[B|M]/g, "") - a.volume24h.replace(/[B|M]/g, "")
  );

  const gainers = [...allCoins].sort((a, b) => b.priceChange - a.priceChange);

  const losers = [...allCoins].sort((a, b) => a.priceChange - b.priceChange);

  const mostVisited = [...allCoins].sort(
    (a, b) =>
      b.marketCap.replace(/[B|T]/g, "") - a.marketCap.replace(/[B|T]/g, "")
  );

  const hotPairs = [...allCoins].sort(
    (a, b) => b.volumeChange - a.volumeChange
  );

  return (
    <div className="w-full bg-black px-4 xs:px-6 py-12 xs:py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl xs:text-4xl font-bold text-white mb-8">
          Market Recap
        </h2>

        {/* Changed grid-cols-3 to grid-cols-2 for xl breakpoint */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TableRecap title="Trending" data={trending} link="/coin/trending" />
          <TableRecap
            title="Biggest Gainers"
            data={gainers}
            link="/coin/gainers"
          />
          <TableRecap
            title="Biggest Losers"
            data={losers}
            link="/coin/losers"
          />
          <TableRecap
            title="Most Visited"
            data={mostVisited}
            link="/coin/popular"
          />
          <TableRecap
            title="Hot DEX Pairs"
            data={hotPairs}
            link="/coin/hot-pairs"
          />
        </div>
      </div>
    </div>
  );
}

export default MarketRecap;
