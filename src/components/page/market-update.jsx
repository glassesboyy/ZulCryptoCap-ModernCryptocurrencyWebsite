"use client";
import { IconArrowRight } from "@tabler/icons-react";
import CoinTable from "../ui/table";

export function MarketUpdate() {
  const coinData = [
    {
      id: 1,
      logo: "/coin/bitcoin-cryptocurrency.svg",
      symbol: "BTC",
      name: "Bitcoin",
      price: "51,824.30",
      priceChange: 2.14,
      categories: ["All", "Defi", "Gaming"],
      sparklineData: [
        51200, 51500, 51300, 51900, 51700, 51824, 51600, 51400, 51500, 51824,
      ],
    },
    {
      id: 2,
      logo: "/coin/ethereum-cryptocurrency.svg",
      symbol: "ETH",
      name: "Ethereum",
      price: "3,012.45",
      priceChange: -2.51,
      categories: ["All", "Defi", "NFT", "Metaverse"],
      sparklineData: [
        3100, 3080, 3060, 3040, 3020, 3015, 3010, 3008, 3005, 3012,
      ],
    },
    {
      id: 3,
      logo: "/coin/binance-coin-cryptocurrency.svg",
      symbol: "BNB",
      name: "Binance Coin",
      price: "378.52",
      priceChange: 1.82,
      categories: ["All", "Defi", "Gaming"],
      sparklineData: [375, 376, 377, 378, 377, 378, 379, 378, 378, 379],
    },
    {
      id: 4,
      logo: "/coin/tether-cryptocurrency.svg",
      symbol: "USDT",
      name: "Tether",
      price: "1.00",
      priceChange: 0.01,
      categories: ["All", "Defi"],
      sparklineData: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
    },
    {
      id: 5,
      logo: "/coin/cardano-cryptocurrency.svg",
      symbol: "ADA",
      name: "Cardano",
      price: "0.59",
      priceChange: -3.42,
      categories: ["All", "NFT", "Gaming"],
      sparklineData: [0.62, 0.61, 0.6, 0.59, 0.6, 0.61, 0.59, 0.61, 0.58, 0.59],
    },
    {
      id: 6,
      logo: "/coin/filecoin-iou-cryptocurrency.svg",
      symbol: "FIL",
      name: "Filecoin",
      price: "7.82",
      priceChange: 4.23,
      categories: ["All", "Metaverse", "NFT"],
      sparklineData: [7.5, 7.55, 7.6, 7.7, 7.75, 7.78, 7.8, 7.81, 7.82, 7.82],
    },
    {
      id: 7,
      logo: "/coin/dogecoin-cryptocurrency.svg",
      symbol: "DOGE",
      name: "Dogecoin",
      price: "0.087",
      priceChange: -1.85,
      categories: ["All", "Gaming", "Metaverse"],
      sparklineData: [
        0.09, 0.089, 0.089, 0.088, 0.087, 0.087, 0.086, 0.088, 0.086, 0.088,
      ],
    },
    {
      id: 8,
      logo: "/coin/polkadot-cryptocurrency.svg",
      symbol: "DOT",
      name: "Polkadot",
      price: "7.52",
      priceChange: 1.89,
      categories: ["All", "Defi", "NFT"],
      sparklineData: [7.4, 7.42, 7.45, 7.48, 7.5, 7.51, 7.52, 7.52, 7.52, 7.52],
    },
  ];

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
        <CoinTable data={coinData} />

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
