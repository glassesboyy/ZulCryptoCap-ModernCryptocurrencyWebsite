"use client";
import { IconArrowRight } from "@tabler/icons-react";
import CoinTable from "../ui/table";

export function MarketUpdate() {
  const coinData = [
    {
      logo: "/coin/bitcoin-cryptocurrency.svg",
      symbol: "BTC",
      name: "Bitcoin",
      price: "51,824.30",
      priceChange: 2.14,
      sparklineData: [
        51200, 51500, 51300, 51900, 51700, 51824, 51600, 51400, 51500, 51824,
      ],
    },
    {
      logo: "/coin/ethereum-cryptocurrency.svg",
      symbol: "ETH",
      name: "Ethereum",
      price: "3,012.45",
      priceChange: -2.51,
      sparklineData: [
        3100, 3080, 3060, 3040, 3020, 3015, 3010, 3008, 3005, 3012,
      ],
    },
    {
      logo: "/coin/binance-coin-cryptocurrency.svg",
      symbol: "BNB",
      name: "Binance Coin",
      price: "378.52",
      priceChange: 1.82,
      sparklineData: [375, 376, 377, 378, 377, 378, 379, 378, 378, 379],
    },
    {
      logo: "/coin/tether-cryptocurrency.svg",
      symbol: "USDT",
      name: "Tether",
      price: "1.00",
      priceChange: 0.01,
      sparklineData: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
    },
    {
      logo: "/coin/cardano-cryptocurrency.svg",
      symbol: "ADA",
      name: "Cardano",
      price: "0.59",
      priceChange: -3.42,
      sparklineData: [0.62, 0.61, 0.6, 0.59, 0.6, 0.61, 0.59, 0.61, 0.58, 0.59],
    },
    {
      logo: "/coin/filecoin-iou-cryptocurrency.svg",
      symbol: "FIL",
      name: "Filecoin",
      price: "7.82",
      priceChange: 4.23,
      sparklineData: [7.5, 7.55, 7.6, 7.7, 7.75, 7.78, 7.8, 7.81, 7.82, 7.82],
    },
    {
      logo: "/coin/dogecoin-cryptocurrency.svg",
      symbol: "DOGE",
      name: "Dogecoin",
      price: "0.087",
      priceChange: -1.85,
      sparklineData: [
        0.09, 0.089, 0.089, 0.088, 0.087, 0.087, 0.086, 0.088, 0.086, 0.088,
      ],
    },
    {
      logo: "/coin/polkadot-cryptocurrency.svg",
      symbol: "DOT",
      name: "Polkadot",
      price: "7.52",
      priceChange: 1.89,
      sparklineData: [7.4, 7.42, 7.45, 7.48, 7.5, 7.51, 7.52, 7.52, 7.52, 7.52],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black px-4 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">Market Update</h2>
          <p className="text-white font-light text-lg">
            Cryptocurrency market price updates in real-time
          </p>
        </div>

        {/* Coin Table */}
        <CoinTable data={coinData} />

        {/* See All Button */}
        <div className="mt-8">
          <button className="group px-6 py-3 bg-black underline uppercase text-white hover:text-violet-950 rounded-lg font-medium transition-colors inline-flex items-center gap-1 cursor-pointer">
            See All Coins
            <IconArrowRight
              size={20}
              className="-rotate-45 transform transition-transform duration-300  group-hover:rotate-0"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MarketUpdate;
