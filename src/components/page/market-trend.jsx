"use client";
import CoinCard from "../ui/coin-card";

export function MarketTrend() {
  const coins = [
    {
      logo: "/coin/bitcoin-cryptocurrency.svg",
      symbol: "BTC",
      name: "Bitcoin",
      price: "42,000.00",
      priceChange: 2.5,
      volume: 28456789012,
      marketCap: 800234567890,
      sparklineData: [
        41000, 42500, 42000, 43000, 41500, 42000, 43500, 42000, 42500, 43000,
        42000, 42000,
      ],
    },
    {
      logo: "/coin/ethereum-cryptocurrency.svg",
      symbol: "ETH",
      name: "Ethereum",
      price: "2,890.50",
      priceChange: -1.2,
      volume: 15678901234,
      marketCap: 345678901234,
      sparklineData: [
        2800, 2900, 2850, 2950, 2750, 2800, 2950, 2800, 2850, 2900, 2800, 2800,
      ],
    },
    {
      logo: "/coin/binance-coin-cryptocurrency.svg",
      symbol: "BNB",
      name: "Binance Coin",
      price: "312.75",
      priceChange: 3.8,
      volume: 4567890123,
      marketCap: 48901234567,
      sparklineData: [
        300, 320, 310, 330, 305, 310, 335, 310, 320, 330, 310, 310,
      ],
    },
    {
      logo: "/coin/tether-cryptocurrency.svg",
      symbol: "USDT",
      name: "Tether",
      price: "1.00",
      priceChange: 0.01,
      volume: 45678901234,
      marketCap: 83456789012,
      sparklineData: [
        1.0, 1.0, 1.0, 1.01, 0.99, 1.0, 1.0, 1.0, 1.0, 1.01, 1.0, 1.0,
      ],
    },
    {
      logo: "/coin/cardano-cryptocurrency.svg",
      symbol: "ADA",
      name: "Cardano",
      price: "0.58",
      priceChange: -2.1,
      volume: 2345678901,
      marketCap: 19012345678,
      sparklineData: [
        0.55, 0.6, 0.58, 0.62, 0.56, 0.58, 0.63, 0.58, 0.6, 0.62, 0.58, 0.58,
      ],
    },
    {
      logo: "/coin/filecoin-iou-cryptocurrency.svg",
      symbol: "FIL",
      name: "Filecoin",
      price: "4.85",
      priceChange: 2.3,
      volume: 2987654321,
      marketCap: 21345678901,
      sparklineData: [
        4.7, 4.9, 4.8, 5.0, 4.75, 4.85, 5.1, 4.85, 4.9, 5.0, 4.85, 4.85,
      ],
    },
    {
      logo: "/coin/dogecoin-cryptocurrency.svg",
      symbol: "DOGE",
      name: "Dogecoin",
      price: "0.085",
      priceChange: 4.5,
      volume: 1234567890,
      marketCap: 11234567890,
      sparklineData: [
        0.08, 0.09, 0.085, 0.095, 0.082, 0.085, 0.097, 0.085, 0.09, 0.095,
        0.085, 0.085,
      ],
    },
    {
      logo: "/coin/polkadot-cryptocurrency.svg",
      symbol: "DOT",
      name: "Polkadot",
      price: "7.23",
      priceChange: -0.8,
      volume: 890123456,
      marketCap: 8901234567,
      sparklineData: [
        7.0, 7.5, 7.2, 7.7, 7.1, 7.2, 7.8, 7.2, 7.5, 7.7, 7.2, 7.2,
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black px-4 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Market Trend</h2>
          <p className="text-white font-light">
            Track the latest trends and performance of top cryptocurrencies
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
