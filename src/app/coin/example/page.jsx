"use client";

import { Component as ChartLineInteractive } from "@/components/ui/chart-line-interactive";
import {
  IconStar,
  IconArrowUpRight,
  IconArrowDownRight,
  IconWorld,
  IconBrandTwitter,
  IconBrandReddit,
  IconBrandGithub,
  IconLink,
  IconCopy,
  IconInfoCircle,
  IconBrandDiscord,
  IconBrandTelegram,
  IconChartBar,
  IconBox,
  IconArrowLeft, // Add this import
} from "@tabler/icons-react";
import Link from "next/link";

// Example static data - in a real app this would come from an API
const coinData = {
  name: "Example Coin",
  symbol: "EXM",
  rank: "#127",
  logo: "/coin/bitcoin-cryptocurrency.svg",
  currentPrice: "12.45",
  priceChange: 5.67,
  marketCap: "234.5M",
  marketCapChange: 1.2,
  volume24h: "45.2M",
  volumeChange: -3.8,
  fdv: "345.2M",
  volMarketCap: 0.0325,
  circulatingSupply: {
    current: "145.5M",
    percent: 72.75,
  },
  maxSupply: "200M",
  totalSupply: "180M",
  stats: {
    ath: {
      price: "24.85",
      date: "Nov 10, 2023",
    },
    atl: {
      price: "0.95",
      date: "Mar 13, 2023",
    },
    range90d: {
      high: "18.45",
      low: "8.12",
    },
  },
  marketDominance: {
    share: "0.12",
    rank: "#127",
  },
  roi: {
    "24h": 5.67,
    "7d": -1.2,
    "30d": 15.7,
    "1y": 124.5,
  },
  links: {
    website: "https://example.coin",
    twitter: "https://twitter.com/examplecoin",
    reddit: "https://reddit.com/r/examplecoin",
    github: "https://github.com/examplecoin",
    explorer: "https://explorer.com/token/examplecoin",
  },
  contract: "0x1234567890abcdef1234567890abcdef12345678",
  tags: ["DeFi", "Web3", "Gaming", "NFT"],
  description:
    "Example Coin is a next-generation blockchain platform focused on scalability and interoperability. It provides innovative solutions for decentralized applications and digital asset management.",
  priceData: {
    tradingVolume: "123.4M",
    liquidityScore: "856",
    publicInterestScore: "7.8",
    pricePairs: [
      {
        exchange: "Binance",
        logo: "/markets/binance.svg",
        pair: "EXM/USDT",
        price: "12.47",
        volume: "45.2M",
      },
      {
        exchange: "Coinbase",
        logo: "/markets/coinbase.svg",
        pair: "EXM/USD",
        price: "12.44",
        volume: "32.1M",
      },
      {
        exchange: "KuCoin",
        logo: "/markets/kucoin.svg",
        pair: "EXM/USDT",
        price: "12.46",
        volume: "28.7M",
      },
      {
        exchange: "Kraken",
        logo: "/markets/kraken.svg",
        pair: "EXM/USD",
        price: "12.45",
        volume: "21.3M",
      },
      {
        exchange: "Huobi",
        logo: "/markets/huobi.svg",
        pair: "EXM/USDT",
        price: "12.48",
        volume: "19.8M",
      },
      {
        exchange: "Bybit",
        logo: "/markets/bybit.svg",
        pair: "EXM/USDT",
        price: "12.45",
        volume: "14.2M",
      },
    ],
  },
  performance: {
    periods: [
      { name: "1h", value: 0.5 },
      { name: "24h", value: 5.67 },
      { name: "7d", value: -1.2 },
      { name: "14d", value: 8.4 },
      { name: "30d", value: 15.7 },
      { name: "60d", value: 45.2 },
      { name: "90d", value: 78.3 },
      { name: "1y", value: 124.5 },
    ],
    compared: [
      { name: "Bitcoin", value: -2.1 },
      { name: "Ethereum", value: 1.5 },
      { name: "Total Market", value: -0.8 },
    ],
  },
};

const ExamplePage = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto p-10">
        {/* Header with Back Button */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src={coinData.logo}
                alt={coinData.name}
                className="w-16 h-16 md:w-20 md:h-20"
              />
              <span className="absolute -top-2 -right-2 px-2 py-1 bg-violet-900/50 border border-violet-500/20 rounded-md text-xs text-white/70">
                {coinData.rank}
              </span>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl md:text-3xl font-bold text-white">
                  {coinData.name}
                </h1>
                <span className="text-white/60 text-md">{coinData.symbol}</span>
                <button className="p-1.5 hover:bg-violet-900/30 rounded-full transition-colors">
                  <IconStar className="w-5 h-5 text-white/40" stroke={1.5} />
                </button>
              </div>
              <div className="mt-1 flex items-center gap-3">
                <span className="text-2xl md:text-3xl font-bold text-white">
                  ${coinData.currentPrice}
                </span>
                <span
                  className={`flex items-center ${
                    coinData.priceChange >= 0
                      ? "text-emerald-400"
                      : "text-red-400"
                  } text-lg`}
                >
                  {coinData.priceChange >= 0 ? (
                    <IconArrowUpRight className="w-5 h-5" stroke={2} />
                  ) : (
                    <IconArrowDownRight className="w-5 h-5" stroke={2} />
                  )}
                  {Math.abs(coinData.priceChange)}%
                </span>
              </div>
            </div>
          </div>

          {/* Back Button - Moved here */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 text-white/80 hover:text-white bg-violet-950/20 hover:bg-violet-900/30 rounded-lg transition-colors border border-violet-500/20"
          >
            <IconArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Quick Links & Contract */}
        <div className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-violet-950/20 backdrop-blur-md p-4 rounded-lg border border-violet-500/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-bold">Links & Social</h3>
              <span className="text-white/40 text-sm">Official channels</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={coinData.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
              >
                <IconWorld className="w-5 h-5 text-white/60 group-hover:text-white/90" />
                <span className="text-white/80 group-hover:text-white">
                  Website
                </span>
              </a>
              <a
                href={coinData.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
              >
                <IconBrandTwitter className="w-5 h-5 text-white/60 group-hover:text-white/90" />
                <span className="text-white/80 group-hover:text-white">
                  Twitter
                </span>
              </a>
              <a
                href={coinData.links.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
              >
                <IconBrandDiscord className="w-5 h-5 text-white/60 group-hover:text-white/90" />
                <span className="text-white/80 group-hover:text-white">
                  Discord
                </span>
              </a>
              <a
                href={coinData.links.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
              >
                <IconBrandTelegram className="w-5 h-5 text-white/60 group-hover:text-white/90" />
                <span className="text-white/80 group-hover:text-white">
                  Telegram
                </span>
              </a>
              <a
                href={coinData.links.reddit}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
              >
                <IconBrandReddit className="w-5 h-5 text-white/60 group-hover:text-white/90" />
                <span className="text-white/80 group-hover:text-white">
                  Reddit
                </span>
              </a>
              <a
                href={coinData.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
              >
                <IconBrandGithub className="w-5 h-5 text-white/60 group-hover:text-white/90" />
                <span className="text-white/80 group-hover:text-white">
                  GitHub
                </span>
              </a>
              <a
                href={coinData.links.explorer}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
              >
                <IconChartBar className="w-5 h-5 text-white/60 group-hover:text-white/90" />
                <span className="text-white/80 group-hover:text-white">
                  Explorer
                </span>
              </a>
              <a
                href={coinData.links.whitepaper}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
              >
                <IconBox className="w-5 h-5 text-white/60 group-hover:text-white/90" />
                <span className="text-white/80 group-hover:text-white">
                  Whitepaper
                </span>
              </a>
            </div>
          </div>

          <div className="bg-violet-950/20 backdrop-blur-md p-4 rounded-lg border border-violet-500/20">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <h3 className="text-white font-bold">Smart Contract</h3>
                <IconInfoCircle
                  className="w-4 h-4 text-white/40 cursor-help"
                  title="Verified Contract Address"
                />
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={`${coinData.links.explorer}/address/${coinData.contract}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white/90 transition-colors"
                >
                  <IconLink className="w-5 h-5" />
                </a>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(coinData.contract);
                    // You might want to add a toast notification here
                  }}
                  className="text-white/60 hover:text-white/90 transition-colors"
                  title="Copy to clipboard"
                >
                  <IconCopy className="w-5 h-5" />
                </button>
              </div>
            </div>
            <p className="text-white/60 text-sm font-mono break-all">
              {coinData.contract}
            </p>
            <div className="mt-2 flex items-center gap-2">
              <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full">
                Verified
              </span>
              <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                {coinData.chainName || "Ethereum"}
              </span>
            </div>
          </div>
        </div>

        {/* Tags & Description */}
        <div className="mb-8 bg-violet-950/20 backdrop-blur-md p-4 rounded-lg border border-violet-500/20">
          <div className="flex flex-wrap gap-2 mb-4">
            {coinData.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/5 rounded-full text-sm text-white/80"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-white/70 leading-relaxed">
            {coinData.description}
          </p>
        </div>

        {/* Trading Info */}
        <div className="mb-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Price Pairs */}
          <div className="lg:col-span-2 bg-violet-950/20 backdrop-blur-md p-4 rounded-lg border border-violet-500/20">
            <h3 className="text-white font-bold mb-4">Markets</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-white/60 text-sm border-b border-white/10">
                    <th className="text-left py-2">Exchange</th>
                    <th className="text-left py-2">Pair</th>
                    <th className="text-right py-2">Price</th>
                    <th className="text-right py-2">Volume</th>
                  </tr>
                </thead>
                <tbody>
                  {coinData.priceData.pricePairs.map((pair, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-white/5 text-white hover:bg-white/5 transition-colors"
                    >
                      <td className="py-3">
                        <div className="flex items-center gap-2">
                          <img
                            src={pair.logo}
                            alt={pair.exchange}
                            className="w-6 h-6"
                          />
                          <span>{pair.exchange}</span>
                        </div>
                      </td>
                      <td className="py-3">
                        <span className="text-white/80">{pair.pair}</span>
                      </td>
                      <td className="text-right py-3">
                        <span className="font-medium">${pair.price}</span>
                      </td>
                      <td className="text-right py-3">
                        <span className="text-white/80">${pair.volume}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="flex justify-between items-center">
                <span className="text-white/60 text-sm">
                  Showing top {coinData.priceData.pricePairs.length} markets
                </span>
                <button className="px-4 py-2 text-sm text-white/80 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                  View All Markets
                </button>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="bg-violet-950/20 backdrop-blur-md p-4 rounded-lg border border-violet-500/20">
            <h3 className="text-white font-bold mb-4">Performance</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                {coinData.performance.periods.map((period) => (
                  <div key={period.name} className="p-2 bg-white/5 rounded-lg">
                    <p className="text-white/60 text-xs mb-1">{period.name}</p>
                    <p
                      className={`text-sm font-medium ${
                        period.value >= 0 ? "text-emerald-400" : "text-red-400"
                      }`}
                    >
                      {period.value >= 0 ? "+" : ""}
                      {period.value}%
                    </p>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-white/60 text-sm mb-2">Compared to:</p>
                {coinData.performance.compared.map((item) => (
                  <div
                    key={item.name}
                    className="flex justify-between py-2 border-b border-white/10"
                  >
                    <span className="text-white/80">{item.name}</span>
                    <span
                      className={
                        item.value >= 0 ? "text-emerald-400" : "text-red-400"
                      }
                    >
                      {item.value >= 0 ? "+" : ""}
                      {item.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-violet-950/20 backdrop-blur-md p-4 rounded-lg border border-violet-500/20">
            <p className="text-white/60 text-sm mb-1">Market Cap</p>
            <p className="text-xl font-bold text-white">
              ${coinData.marketCap}
            </p>
            <p className="text-emerald-400 text-sm mt-1">
              +{coinData.marketCapChange}%
            </p>
          </div>
          <div className="bg-violet-950/20 backdrop-blur-md p-4 rounded-lg border border-violet-500/20">
            <p className="text-white/60 text-sm mb-1">24h Volume</p>
            <p className="text-xl font-bold text-white">
              ${coinData.volume24h}
            </p>
            <p className="text-red-400 text-sm mt-1">
              {coinData.volumeChange}%
            </p>
          </div>
          <div className="bg-violet-950/20 backdrop-blur-md p-4 rounded-lg border border-violet-500/20">
            <p className="text-white/60 text-sm mb-1">FDV</p>
            <p className="text-xl font-bold text-white">${coinData.fdv}</p>
          </div>
          <div className="bg-violet-950/20 backdrop-blur-md p-4 rounded-lg border border-violet-500/20">
            <p className="text-white/60 text-sm mb-1">Vol/MCap</p>
            <p className="text-xl font-bold text-white">
              {coinData.volMarketCap}
            </p>
          </div>
        </div>

        {/* Price Chart Section */}
        <div className="mb-8 bg-violet-950/20 backdrop-blur-md p-4 rounded-lg border border-violet-500/20">
          <ChartLineInteractive />
        </div>

        {/* Supply Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-violet-950/20 backdrop-blur-md p-4 rounded-lg border border-violet-500/20">
            <div className="flex justify-between items-start mb-2">
              <p className="text-white/70">Circulating Supply</p>
              <span className="text-white/60 text-sm">
                {coinData.circulatingSupply.percent}%
              </span>
            </div>
            <p className="text-xl font-bold text-white">
              {coinData.circulatingSupply.current} BTC
            </p>
            <div className="w-full bg-violet-900/30 rounded-full h-2 mt-2">
              <div
                className="bg-violet-500 h-2 rounded-full"
                style={{ width: `${coinData.circulatingSupply.percent}%` }}
              ></div>
            </div>
          </div>
          <div className="bg-violet-950/20 backdrop-blur-md p-4 rounded-lg border border-violet-500/20">
            <p className="text-white/70 mb-2">Max Supply</p>
            <p className="text-xl font-bold text-white">
              {coinData.maxSupply} BTC
            </p>
          </div>
          <div className="bg-violet-950/20 backdrop-blur-md p-4 rounded-lg border border-violet-500/20">
            <p className="text-white/70 mb-2">Total Supply</p>
            <p className="text-xl font-bold text-white">
              {coinData.totalSupply} BTC
            </p>
          </div>
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-violet-950/20 backdrop-blur-md p-4 rounded-lg border border-violet-500/20">
            <h3 className="text-white font-bold text-lg mb-3">
              Price Statistics
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-white/60">All Time High</span>
                <span className="text-white font-medium">
                  ${coinData.stats.ath.price}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">All Time Low</span>
                <span className="text-white font-medium">
                  ${coinData.stats.atl.price}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">90d High</span>
                <span className="text-white font-medium">
                  ${coinData.stats.range90d.high}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">90d Low</span>
                <span className="text-white font-medium">
                  ${coinData.stats.range90d.low}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-violet-950/20 backdrop-blur-md p-4 rounded-lg border border-violet-500/20">
            <h3 className="text-white font-bold text-lg mb-3">
              Market Dominance
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-white/60">Market Share</span>
                <span className="text-white font-medium">
                  {coinData.marketDominance.share}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Rank</span>
                <span className="text-white font-medium">
                  {coinData.marketDominance.rank}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-violet-950/20 backdrop-blur-md p-4 rounded-lg border border-violet-500/20">
            <h3 className="text-white font-bold text-lg mb-3">ROI</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-white/60">24h</span>
                <span className="text-emerald-400">{coinData.roi["24h"]}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">7d</span>
                <span className="text-red-400">{coinData.roi["7d"]}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">30d</span>
                <span className="text-emerald-400">{coinData.roi["30d"]}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">1y</span>
                <span className="text-emerald-400">{coinData.roi["1y"]}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamplePage;
