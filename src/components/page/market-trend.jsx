"use client";
import CoinCard from "../ui/coin-card";

export function MarketTrend() {
  const coins = [
    {
      logo: "/coin/bitcoin-cryptocurrency.svg",
      symbol: "BTC",
      name: "Bitcoin",
      price: "51,824.30",
      priceChange: 2.14,
      volume: 24156432109,
      marketCap: 1018456789012,
      sparklineData: [
        51200, 51500, 51300, 51900, 51700, 51824, 51600, 51400, 51500, 51824,
        51750, 51824,
      ],
    },
    {
      logo: "/coin/ethereum-cryptocurrency.svg",
      symbol: "ETH",
      name: "Ethereum",
      price: "3,012.45",
      priceChange: -2.51,
      volume: 12345678901,
      marketCap: 362123456789,
      sparklineData: [
        3100, 3080, 3060, 3040, 3020, 3015, 3010, 3008, 3005, 3012, 3010, 3012,
      ],
    },
    {
      logo: "/coin/binance-coin-cryptocurrency.svg",
      symbol: "BNB",
      name: "Binance Coin",
      price: "378.52",
      priceChange: 1.82,
      volume: 789456123,
      marketCap: 58234567890,
      sparklineData: [
        375, 376, 377, 378, 377, 378, 379, 378, 378, 379, 378, 378,
      ],
    },
    {
      logo: "/coin/tether-cryptocurrency.svg",
      symbol: "USDT",
      name: "Tether",
      price: "1.00",
      priceChange: 0.01,
      volume: 52145678901,
      marketCap: 95678901234,
      sparklineData: [
        1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0,
      ],
    },
    {
      logo: "/coin/cardano-cryptocurrency.svg",
      symbol: "ADA",
      name: "Cardano",
      price: "0.59",
      priceChange: -3.42,
      volume: 456789012,
      marketCap: 20789123456,
      sparklineData: [
        0.62, 0.61, 0.6, 0.59, 0.6, 0.61, 0.59, 0.61, 0.58, 0.59, 0.59, 0.56,
      ],
    },
    {
      logo: "/coin/filecoin-iou-cryptocurrency.svg",
      symbol: "FIL",
      name: "Filecoin",
      price: "7.82",
      priceChange: 4.23,
      volume: 345678901,
      marketCap: 3789123456,
      sparklineData: [
        7.5, 7.55, 7.6, 7.7, 7.75, 7.78, 7.8, 7.81, 7.82, 7.82, 7.82, 7.82,
      ],
    },
    {
      logo: "/coin/dogecoin-cryptocurrency.svg",
      symbol: "DOGE",
      name: "Dogecoin",
      price: "0.087",
      priceChange: -1.85,
      volume: 567890123,
      marketCap: 12345678901,
      sparklineData: [
        0.09, 0.089, 0.089, 0.088, 0.087, 0.087, 0.086, 0.088, 0.086, 0.088,
        0.087, 0.085,
      ],
    },
    {
      logo: "/coin/polkadot-cryptocurrency.svg",
      symbol: "DOT",
      name: "Polkadot",
      price: "7.52",
      priceChange: 1.89,
      volume: 234567890,
      marketCap: 9876543210,
      sparklineData: [
        7.4, 7.42, 7.45, 7.48, 7.5, 7.51, 7.52, 7.52, 7.52, 7.52, 7.52, 7.52,
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black px-4 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">Top Gainers</h2>
          <p className="text-white font-light text-lg">
            Discover the best performing cryptocurrencies in the market today
          </p>
        </div>

        {/* Grid of Coin Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coins.map((coin, index) => (
            <CoinCard key={`coin-${index}`} {...coin} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MarketTrend;
