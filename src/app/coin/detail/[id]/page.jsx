"use client";

import { Component as ChartLineInteractive } from "@/components/ui/chart-line-interactive";
import {
  IconArrowLeft,
  IconBox,
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandReddit,
  IconBrandTelegram,
  IconBrandTwitter,
  IconChartBar,
  IconCopy,
  IconInfoCircle,
  IconLink,
  IconWorld,
} from "@tabler/icons-react";
import Link from "next/link";
import { use } from "react";

const coinDatabase = {
  1: {
    name: "Bitcoin",
    symbol: "BTC",
    rank: "#1",
    logo: "/coin/bitcoin-cryptocurrency.svg",
    currentPrice: "51,824.30",
    priceChange: 2.14,
    marketCap: "1.02T",
    marketCapChange: 1.2,
    volume24h: "45.2B",
    volumeChange: -3.8,
    fdv: "1.1T",
    volMarketCap: 0.0442,
    circulatingSupply: {
      current: "19.6M",
      percent: 93.33,
    },
    maxSupply: "21M",
    totalSupply: "21M",
    links: {
      website: "https://bitcoin.org",
      twitter: "https://twitter.com/bitcoin",
      discord: "https://discord.gg/bitcoin",
      telegram: "https://t.me/bitcoin",
      reddit: "https://reddit.com/r/bitcoin",
      github: "https://github.com/bitcoin",
      explorer: "https://blockchain.info",
      whitepaper: "https://bitcoin.org/bitcoin.pdf",
    },
    contract: "Native Coin",
    chainName: "Bitcoin",
    tags: ["Layer 1", "Store of Value", "PoW", "Digital Gold"],
    description:
      "Bitcoin is the first decentralized cryptocurrency. It was created in 2009 by an anonymous person or group known as Satoshi Nakamoto. Bitcoin uses peer-to-peer technology to operate with no central authority or banks.",
    stats: {
      ath: { price: "69,045", date: "Nov 10, 2021" },
      atl: { price: "67.81", date: "Jul 06, 2013" },
      range90d: { high: "52,945", low: "38,510" },
    },
    marketDominance: { share: "51.2", rank: "#1" },
    roi: {
      "24h": 2.14,
      "7d": 5.32,
      "30d": 12.8,
      "1y": 64.5,
    },
    performance: {
      periods: [
        { name: "1h", value: 0.2 },
        { name: "24h", value: 2.14 },
        { name: "7d", value: 5.32 },
        { name: "14d", value: 8.9 },
        { name: "30d", value: 12.8 },
        { name: "60d", value: 25.4 },
        { name: "90d", value: 35.7 },
        { name: "1y", value: 64.5 },
      ],
      compared: [
        { name: "Ethereum", value: 1.2 },
        { name: "BNB", value: -0.8 },
        { name: "Total Market", value: 0.5 },
      ],
    },
    priceData: {
      tradingVolume: "45.2B",
      liquidityScore: "982",
      publicInterestScore: "9.8",
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
  },
  2: {
    name: "Ethereum",
    symbol: "ETH",
    rank: "#2",
    logo: "/coin/ethereum-cryptocurrency.svg",
    currentPrice: "3,012.45",
    priceChange: -2.51,
    marketCap: "390.5B",
    marketCapChange: 1.1,
    volume24h: "22.8B",
    volumeChange: -2.5,
    fdv: "390.5B",
    volMarketCap: 0.0584,
    circulatingSupply: {
      current: "120.1M",
      percent: 100,
    },
    maxSupply: "∞",
    totalSupply: "120.1M",
    links: {
      website: "https://ethereum.org",
      twitter: "https://twitter.com/ethereum",
      discord: "https://discord.gg/ethereum",
      telegram: "https://t.me/ethereum",
      reddit: "https://reddit.com/r/ethereum",
      github: "https://github.com/ethereum",
      explorer: "https://etherscan.io",
      whitepaper: "https://ethereum.org/en/whitepaper/",
    },
    contract: "Native Coin",
    chainName: "Ethereum",
    tags: ["Layer 1", "Smart Contracts", "DeFi", "PoS"],
    description:
      "Ethereum is a decentralized platform that enables smart contracts and decentralized applications (dApps) to be built and operated without any downtime, fraud, control, or interference.",
    stats: {
      ath: { price: "4,878", date: "Nov 10, 2021" },
      atl: { price: "0.432979", date: "Oct 20, 2015" },
      range90d: { high: "3,580", low: "2,650" },
    },
    marketDominance: { share: "18.3", rank: "#2" },
    roi: {
      "24h": 1.85,
      "7d": 4.92,
      "30d": 9.6,
      "1y": 41.2,
    },
    performance: {
      periods: [
        { name: "1h", value: 0.1 },
        { name: "24h", value: 1.85 },
        { name: "7d", value: 4.92 },
        { name: "14d", value: 7.4 },
        { name: "30d", value: 9.6 },
        { name: "60d", value: 20.7 },
        { name: "90d", value: 28.5 },
        { name: "1y", value: 41.2 },
      ],
      compared: [
        { name: "Bitcoin", value: 2.14 },
        { name: "BNB", value: -0.5 },
        { name: "Total Market", value: 0.5 },
      ],
    },
    priceData: {
      tradingVolume: "22.8B",
      liquidityScore: "954",
      publicInterestScore: "9.1",
      pricePairs: [
        {
          exchange: "Binance",
          logo: "/markets/binance.svg",
          pair: "ETH/USDT",
          price: "3,246.78",
          volume: "8.1B",
        },
        {
          exchange: "Coinbase",
          logo: "/markets/coinbase.svg",
          pair: "ETH/USD",
          price: "3,243.59",
          volume: "5.4B",
        },
        {
          exchange: "KuCoin",
          logo: "/markets/kucoin.svg",
          pair: "ETH/USDT",
          price: "3,245.90",
          volume: "3.9B",
        },
        {
          exchange: "Kraken",
          logo: "/markets/kraken.svg",
          pair: "ETH/USD",
          price: "3,244.87",
          volume: "2.7B",
        },
        {
          exchange: "Huobi",
          logo: "/markets/huobi.svg",
          pair: "ETH/USDT",
          price: "3,247.12",
          volume: "2.2B",
        },
        {
          exchange: "Bybit",
          logo: "/markets/bybit.svg",
          pair: "ETH/USDT",
          price: "3,246.55",
          volume: "1.6B",
        },
      ],
    },
  },
  3: {
    name: "BNB",
    symbol: "BNB",
    rank: "#3",
    logo: "/coin/binance-coin-cryptocurrency.svg",
    currentPrice: "378.52",
    priceChange: 1.82,
    marketCap: "89.6B",
    marketCapChange: -0.6,
    volume24h: "1.2B",
    volumeChange: -4.1,
    fdv: "89.6B",
    volMarketCap: 0.0134,
    circulatingSupply: {
      current: "153.8M",
      percent: 100,
    },
    maxSupply: "200M",
    totalSupply: "153.8M",
    links: {
      website: "https://www.binance.com/en/bnb",
      twitter: "https://twitter.com/binance",
      discord: "https://discord.gg/binance",
      telegram: "https://t.me/binanceexchange",
      reddit: "https://reddit.com/r/binance",
      github: "https://github.com/binance-chain",
      explorer: "https://bscscan.com",
      whitepaper:
        "https://www.binance.com/resources/ico/Binance_WhitePaper_en.pdf",
    },
    contract: "BNB Smart Chain",
    chainName: "BNB Chain",
    tags: ["Layer 1", "Exchange Token", "PoSA", "DeFi"],
    description:
      "BNB is the native cryptocurrency of the Binance ecosystem. It powers the BNB Chain and is used for trading fee discounts, payments, and smart contract operations within the Binance network.",
    stats: {
      ath: { price: "686.31", date: "May 10, 2021" },
      atl: { price: "0.09611", date: "Aug 01, 2017" },
      range90d: { high: "598.74", low: "498.62" },
    },
    marketDominance: { share: "3.9", rank: "#3" },
    roi: {
      "24h": -0.85,
      "7d": 1.9,
      "30d": 3.6,
      "1y": 12.4,
    },
    performance: {
      periods: [
        { name: "1h", value: -0.1 },
        { name: "24h", value: -0.85 },
        { name: "7d", value: 1.9 },
        { name: "14d", value: 2.7 },
        { name: "30d", value: 3.6 },
        { name: "60d", value: 7.2 },
        { name: "90d", value: 10.5 },
        { name: "1y", value: 12.4 },
      ],
      compared: [
        { name: "Bitcoin", value: 2.14 },
        { name: "Ethereum", value: 1.85 },
        { name: "Total Market", value: 0.5 },
      ],
    },
    priceData: {
      tradingVolume: "1.2B",
      liquidityScore: "867",
      publicInterestScore: "8.2",
      pricePairs: [
        {
          exchange: "Binance",
          logo: "/markets/binance.svg",
          pair: "BNB/USDT",
          price: "582.67",
          volume: "610M",
        },
        {
          exchange: "Coinbase",
          logo: "/markets/coinbase.svg",
          pair: "BNB/USD",
          price: "581.90",
          volume: "180M",
        },
        {
          exchange: "KuCoin",
          logo: "/markets/kucoin.svg",
          pair: "BNB/USDT",
          price: "582.45",
          volume: "130M",
        },
        {
          exchange: "Kraken",
          logo: "/markets/kraken.svg",
          pair: "BNB/USD",
          price: "582.10",
          volume: "110M",
        },
        {
          exchange: "Huobi",
          logo: "/markets/huobi.svg",
          pair: "BNB/USDT",
          price: "551.12",
          volume: "120M",
        },
        {
          exchange: "Bybit",
          logo: "/markets/bybit.svg",
          pair: "BNB/USDT",
          price: "582.68",
          volume: "85M",
        },
      ],
    },
  },
  4: {
    name: "Tether",
    symbol: "USDT",
    rank: "#4",
    logo: "/coin/tether-cryptocurrency.svg",
    currentPrice: "1.00",
    priceChange: 0.01,
    marketCap: "110.3B",
    marketCapChange: 0.05,
    volume24h: "78.6B",
    volumeChange: 1.9,
    fdv: "110.3B",
    volMarketCap: 0.7126,
    circulatingSupply: {
      current: "110.3B",
      percent: 100,
    },
    maxSupply: "Unlimited",
    totalSupply: "110.3B",
    links: {
      website: "https://tether.to",
      twitter: "https://twitter.com/Tether_to",
      discord: "https://discord.com/invite/tether",
      telegram: "https://t.me/Tether_announcement",
      reddit: "https://reddit.com/r/Tether",
      github: "https://github.com/TetherTo",
      explorer:
        "https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7",
      whitepaper:
        "https://tether.to/wp-content/uploads/2016/06/TetherWhitePaper.pdf",
    },
    contract: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    chainName: "Ethereum",
    tags: ["Stablecoin", "Fiat-backed", "US Dollar", "Payments"],
    description:
      "USDT (Tether) is a fiat-collateralized stablecoin that is pegged to the US Dollar. It provides a stable digital asset alternative for crypto traders and investors and is widely used for trading, remittance, and payments.",
    stats: {
      ath: { price: "1.11", date: "Jul 24, 2018" },
      atl: { price: "0.568", date: "Oct 15, 2018" },
      range90d: { high: "1.02", low: "0.98" },
    },
    marketDominance: { share: "4.2", rank: "#4" },
    roi: {
      "24h": 0.01,
      "7d": 0.01,
      "30d": 0.0,
      "1y": 0.03,
    },
    performance: {
      periods: [
        { name: "1h", value: 0.0 },
        { name: "24h", value: 0.01 },
        { name: "7d", value: 0.01 },
        { name: "14d", value: 0.01 },
        { name: "30d", value: 0.0 },
        { name: "60d", value: 0.01 },
        { name: "90d", value: 0.0 },
        { name: "1y", value: 0.03 },
      ],
      compared: [
        { name: "Bitcoin", value: 2.14 },
        { name: "Ethereum", value: 1.85 },
        { name: "Total Market", value: 0.5 },
      ],
    },
    priceData: {
      tradingVolume: "78.6B",
      liquidityScore: "999",
      publicInterestScore: "7.9",
      pricePairs: [
        {
          exchange: "Binance",
          logo: "/markets/binance.svg",
          pair: "USDT/USDC",
          price: "1.00",
          volume: "18.4B",
        },
        {
          exchange: "Coinbase",
          logo: "/markets/coinbase.svg",
          pair: "USDT/USD",
          price: "1.00",
          volume: "14.7B",
        },
        {
          exchange: "Kraken",
          logo: "/markets/kraken.svg",
          pair: "USDT/EUR",
          price: "0.93",
          volume: "12.1B",
        },
        {
          exchange: "KuCoin",
          logo: "/markets/kucoin.svg",
          pair: "USDT/USDC",
          price: "1.00",
          volume: "10.2B",
        },
        {
          exchange: "Huobi",
          logo: "/markets/huobi.svg",
          pair: "USDT/HKD",
          price: "7.82",
          volume: "8.5B",
        },
        {
          exchange: "Bybit",
          logo: "/markets/bybit.svg",
          pair: "USDT/JPY",
          price: "150.9",
          volume: "7.3B",
        },
      ],
    },
  },
  5: {
    name: "Cardano",
    symbol: "ADA",
    rank: "#5",
    logo: "/coin/cardano-cryptocurrency.svg",
    currentPrice: "0.59",
    priceChange: -3.42,
    marketCap: "21.6B",
    marketCapChange: 2.1,
    volume24h: "850M",
    volumeChange: 4.3,
    fdv: "27.5B",
    volMarketCap: 0.0394,
    circulatingSupply: {
      current: "35.3B",
      percent: 78.4,
    },
    maxSupply: "45B",
    totalSupply: "45B",
    links: {
      website: "https://cardano.org",
      twitter: "https://twitter.com/Cardano_CF",
      discord: "https://discord.gg/cardano",
      telegram: "https://t.me/Cardano",
      reddit: "https://reddit.com/r/cardano",
      github: "https://github.com/input-output-hk/cardano-node",
      explorer: "https://cardanoscan.io",
      whitepaper: "https://whycardano.com/",
    },
    contract: "Native Coin",
    chainName: "Cardano",
    tags: ["Layer 1", "Smart Contracts", "PoS", "Academic Research"],
    description:
      "Cardano is a proof-of-stake blockchain platform that aims to be the most environmentally sustainable blockchain. Developed through peer-reviewed research and evidence-based methods, Cardano offers a secure and scalable infrastructure for decentralized applications and smart contracts.",
    stats: {
      ath: { price: "3.10", date: "Sep 02, 2021" },
      atl: { price: "0.017", date: "Oct 01, 2017" },
      range90d: { high: "0.693", low: "0.486" },
    },
    marketDominance: { share: "1.3", rank: "#5" },
    roi: {
      "24h": 1.83,
      "7d": 4.52,
      "30d": 9.75,
      "1y": 18.4,
    },
    performance: {
      periods: [
        { name: "1h", value: 0.11 },
        { name: "24h", value: 1.83 },
        { name: "7d", value: 4.52 },
        { name: "14d", value: 6.31 },
        { name: "30d", value: 9.75 },
        { name: "60d", value: 14.3 },
        { name: "90d", value: 19.6 },
        { name: "1y", value: 18.4 },
      ],
      compared: [
        { name: "Ethereum", value: 1.2 },
        { name: "BNB", value: -0.8 },
        { name: "Total Market", value: 0.5 },
      ],
    },
    priceData: {
      tradingVolume: "850M",
      liquidityScore: "762",
      publicInterestScore: "8.4",
      pricePairs: [
        {
          exchange: "Binance",
          logo: "/markets/binance.svg",
          pair: "ADA/USDT",
          price: "0.612",
          volume: "220M",
        },
        {
          exchange: "Coinbase",
          logo: "/markets/coinbase.svg",
          pair: "ADA/USD",
          price: "0.611",
          volume: "185M",
        },
        {
          exchange: "Kraken",
          logo: "/markets/kraken.svg",
          pair: "ADA/EUR",
          price: "0.572",
          volume: "145M",
        },
        {
          exchange: "KuCoin",
          logo: "/markets/kucoin.svg",
          pair: "ADA/USDT",
          price: "0.613",
          volume: "120M",
        },
        {
          exchange: "Huobi",
          logo: "/markets/huobi.svg",
          pair: "ADA/USDT",
          price: "0.610",
          volume: "95M",
        },
        {
          exchange: "Bybit",
          logo: "/markets/bybit.svg",
          pair: "ADA/USDT",
          price: "0.612",
          volume: "85M",
        },
      ],
    },
  },
  6: {
    name: "Filecoin",
    symbol: "FIL",
    rank: "#26",
    logo: "/coin/filecoin-iou-cryptocurrency.svg",
    currentPrice: "7.82",
    priceChange: 4.23,
    marketCap: "2.8B",
    marketCapChange: 1.9,
    volume24h: "280M",
    volumeChange: 3.4,
    fdv: "5.6B",
    volMarketCap: 0.1,
    circulatingSupply: {
      current: "498.8M",
      percent: 50.1,
    },
    maxSupply: "1B",
    totalSupply: "1B",
    links: {
      website: "https://filecoin.io",
      twitter: "https://twitter.com/Filecoin",
      discord: "https://discord.gg/filecoin",
      telegram: "https://t.me/Filecoin_Official",
      reddit: "https://reddit.com/r/filecoin",
      github: "https://github.com/filecoin-project",
      explorer: "https://filfox.info",
      whitepaper: "https://filecoin.io/filecoin.pdf",
    },
    contract: "Native Coin",
    chainName: "Filecoin",
    tags: ["Storage", "IPFS", "Layer 1", "Decentralized Cloud"],
    description:
      "Filecoin is a decentralized storage network designed to store humanity’s most important information. It allows users to rent out spare storage space and earn FIL tokens in return.",
    stats: {
      ath: { price: "236.84", date: "Apr 01, 2021" },
      atl: { price: "2.64", date: "Dec 16, 2022" },
      range90d: { high: "7.02", low: "4.28" },
    },
    marketDominance: { share: "0.16", rank: "#26" },
    roi: {
      "24h": 2.25,
      "7d": 5.2,
      "30d": 10.6,
      "1y": 42.8,
    },
    performance: {
      periods: [
        { name: "1h", value: 0.18 },
        { name: "24h", value: 2.25 },
        { name: "7d", value: 5.2 },
        { name: "14d", value: 6.7 },
        { name: "30d", value: 10.6 },
        { name: "60d", value: 18.1 },
        { name: "90d", value: 22.5 },
        { name: "1y", value: 42.8 },
      ],
      compared: [
        { name: "Bitcoin", value: 2.1 },
        { name: "Ethereum", value: 1.3 },
        { name: "Total Market", value: 0.6 },
      ],
    },
    priceData: {
      tradingVolume: "280M",
      liquidityScore: "724",
      publicInterestScore: "7.9",
      pricePairs: [
        {
          exchange: "Binance",
          logo: "/markets/binance.svg",
          pair: "FIL/USDT",
          price: "5.62",
          volume: "95M",
        },
        {
          exchange: "Coinbase",
          logo: "/markets/coinbase.svg",
          pair: "FIL/USD",
          price: "5.61",
          volume: "70M",
        },
        {
          exchange: "Kraken",
          logo: "/markets/kraken.svg",
          pair: "FIL/EUR",
          price: "5.23",
          volume: "45M",
        },
        {
          exchange: "KuCoin",
          logo: "/markets/kucoin.svg",
          pair: "FIL/USDT",
          price: "5.63",
          volume: "30M",
        },
        {
          exchange: "Huobi",
          logo: "/markets/huobi.svg",
          pair: "FIL/USDT",
          price: "5.60",
          volume: "22M",
        },
        {
          exchange: "Bybit",
          logo: "/markets/bybit.svg",
          pair: "FIL/USDT",
          price: "5.62",
          volume: "18M",
        },
      ],
    },
  },
  7: {
    name: "Dogecoin",
    symbol: "DOGE",
    rank: "#9",
    logo: "/coin/dogecoin-cryptocurrency.svg",
    currentPrice: "0.087",
    priceChange: -1.85,
    marketCap: "21.2B",
    marketCapChange: -1.5,
    volume24h: "1.3B",
    volumeChange: -2.8,
    fdv: "21.2B",
    volMarketCap: 0.0613,
    circulatingSupply: {
      current: "142.8B",
      percent: 100,
    },
    maxSupply: "∞",
    totalSupply: "∞",
    links: {
      website: "https://dogecoin.com",
      twitter: "https://twitter.com/dogecoin",
      discord: "https://discord.gg/dogecoin",
      telegram: "https://t.me/dogecoin",
      reddit: "https://reddit.com/r/dogecoin",
      github: "https://github.com/dogecoin/dogecoin",
      explorer: "https://dogechain.info",
      whitepaper: "https://dogecoin.com/dogepaper.pdf",
    },
    contract: "Native Coin",
    chainName: "Dogecoin",
    tags: ["Meme", "Payment", "PoW", "Community"],
    description:
      "Dogecoin is an open-source peer-to-peer digital currency, favored by Shiba Inus worldwide. It was introduced as a 'joke currency' but quickly developed its own community and use cases.",
    stats: {
      ath: { price: "0.7376", date: "May 08, 2021" },
      atl: { price: "0.0000869", date: "May 07, 2015" },
      range90d: { high: "0.195", low: "0.112" },
    },
    marketDominance: { share: "1.2", rank: "#9" },
    roi: {
      "24h": -0.9,
      "7d": 3.5,
      "30d": 6.7,
      "1y": 48.9,
    },
    performance: {
      periods: [
        { name: "1h", value: -0.1 },
        { name: "24h", value: -0.9 },
        { name: "7d", value: 3.5 },
        { name: "14d", value: 4.8 },
        { name: "30d", value: 6.7 },
        { name: "60d", value: 12.4 },
        { name: "90d", value: 18.6 },
        { name: "1y", value: 48.9 },
      ],
      compared: [
        { name: "Bitcoin", value: 2.1 },
        { name: "Ethereum", value: 1.3 },
        { name: "Total Market", value: 0.6 },
      ],
    },
    priceData: {
      tradingVolume: "1.3B",
      liquidityScore: "895",
      publicInterestScore: "9.3",
      pricePairs: [
        {
          exchange: "Binance",
          logo: "/markets/binance.svg",
          pair: "DOGE/USDT",
          price: "0.148",
          volume: "420M",
        },
        {
          exchange: "Coinbase",
          logo: "/markets/coinbase.svg",
          pair: "DOGE/USD",
          price: "0.147",
          volume: "290M",
        },
        {
          exchange: "Kraken",
          logo: "/markets/kraken.svg",
          pair: "DOGE/EUR",
          price: "0.139",
          volume: "180M",
        },
        {
          exchange: "KuCoin",
          logo: "/markets/kucoin.svg",
          pair: "DOGE/USDT",
          price: "0.149",
          volume: "160M",
        },
        {
          exchange: "Huobi",
          logo: "/markets/huobi.svg",
          pair: "DOGE/USDT",
          price: "0.147",
          volume: "140M",
        },
        {
          exchange: "Bybit",
          logo: "/markets/bybit.svg",
          pair: "DOGE/USDT",
          price: "0.148",
          volume: "110M",
        },
      ],
    },
  },
  8: {
    name: "Polkadot",
    symbol: "DOT",
    rank: "#13",
    logo: "/coin/polkadot-cryptocurrency.svg",
    currentPrice: "7.52",
    priceChange: 1.89,
    marketCap: "8.3B",
    marketCapChange: 1.1,
    volume24h: "350M",
    volumeChange: 2.5,
    fdv: "9.8B",
    volMarketCap: 0.0421,
    circulatingSupply: {
      current: "1.34B",
      percent: 85.3,
    },
    maxSupply: "1.57B",
    totalSupply: "1.57B",
    links: {
      website: "https://polkadot.network",
      twitter: "https://twitter.com/Polkadot",
      discord: "https://discord.gg/polkadot",
      telegram: "https://t.me/PolkadotOfficial",
      reddit: "https://reddit.com/r/dot",
      github: "https://github.com/paritytech/polkadot",
      explorer: "https://polkadot.subscan.io",
      whitepaper: "https://polkadot.network/Polkadot-lightpaper.pdf",
    },
    contract: "Native Coin",
    chainName: "Polkadot",
    tags: ["Layer 0", "Interoperability", "Parachains", "Relay Chain"],
    description:
      "Polkadot enables cross-blockchain transfers of any type of data or asset, not just tokens, making a wide range of blockchains interoperable with each other.",
    stats: {
      ath: { price: "54.98", date: "Nov 04, 2021" },
      atl: { price: "2.69", date: "Aug 20, 2020" },
      range90d: { high: "7.08", low: "5.11" },
    },
    marketDominance: { share: "0.47", rank: "#13" },
    roi: {
      "24h": 1.6,
      "7d": 3.4,
      "30d": 8.9,
      "1y": 29.5,
    },
    performance: {
      periods: [
        { name: "1h", value: 0.12 },
        { name: "24h", value: 1.6 },
        { name: "7d", value: 3.4 },
        { name: "14d", value: 5.5 },
        { name: "30d", value: 8.9 },
        { name: "60d", value: 15.3 },
        { name: "90d", value: 22.1 },
        { name: "1y", value: 29.5 },
      ],
      compared: [
        { name: "Bitcoin", value: 2.1 },
        { name: "Ethereum", value: 1.3 },
        { name: "Total Market", value: 0.6 },
      ],
    },
    priceData: {
      tradingVolume: "350M",
      liquidityScore: "801",
      publicInterestScore: "8.7",
      pricePairs: [
        {
          exchange: "Binance",
          logo: "/markets/binance.svg",
          pair: "DOT/USDT",
          price: "6.17",
          volume: "105M",
        },
        {
          exchange: "Coinbase",
          logo: "/markets/coinbase.svg",
          pair: "DOT/USD",
          price: "6.16",
          volume: "90M",
        },
        {
          exchange: "Kraken",
          logo: "/markets/kraken.svg",
          pair: "DOT/EUR",
          price: "5.78",
          volume: "70M",
        },
        {
          exchange: "KuCoin",
          logo: "/markets/kucoin.svg",
          pair: "DOT/USDT",
          price: "6.18",
          volume: "45M",
        },
        {
          exchange: "Huobi",
          logo: "/markets/huobi.svg",
          pair: "DOT/USDT",
          price: "6.15",
          volume: "30M",
        },
        {
          exchange: "Bybit",
          logo: "/markets/bybit.svg",
          pair: "DOT/USDT",
          price: "6.17",
          volume: "25M",
        },
      ],
    },
  },
};

const DetailCoinPage = ({ params }) => {
  const actualParams = use(params);
  const coinId = parseInt(actualParams.id);
  const coinData = coinDatabase[coinId];

  if (!coinData) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-white mb-4">Coin not found</h1>
          <Link
            href="/#market"
            className="inline-flex items-center gap-2 px-4 py-2 text-white/80 hover:text-white bg-violet-950/20 hover:bg-violet-900/30 rounded-lg transition-colors border border-violet-500/20"
          >
            <IconArrowLeft className="w-5 h-5" />
            <span>Back to Market</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto p-4 xs:p-6 sm:p-8 md:p-10">
        {/* Header with Back Button */}
        <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center gap-4 mb-6 md:mb-8">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src={coinData.logo}
                alt={coinData.name}
                className="w-12 h-12 xs:w-16 xs:h-16 md:w-20 md:h-20"
              />
              <span className="absolute -top-2 -right-2 px-2 py-1 bg-violet-900/50 border border-violet-500/20 rounded-md text-[10px] xs:text-xs text-white/70">
                {coinData.rank}
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2 xs:gap-3">
                <h1 className="text-xl xs:text-2xl md:text-3xl font-bold text-white">
                  {coinData.name}
                </h1>
                <span className="text-white/60 text-sm xs:text-md">
                  {coinData.symbol}
                </span>
              </div>
              <div className="mt-1 flex items-center gap-2 xs:gap-3">
                <span className="text-xl xs:text-2xl md:text-3xl font-bold text-white">
                  ${coinData.currentPrice}
                </span>
                <span
                  className={`flex items-center ${
                    coinData.priceChange >= 0
                      ? "text-emerald-400"
                      : "text-red-400"
                  } text-lg`}
                >
                  {coinData.priceChange >= 0 ? "+" : ""}
                  {coinData.priceChange}%
                </span>
              </div>
            </div>
          </div>

          <Link
            href="/#market"
            className="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 text-sm xs:text-base text-white/80 hover:text-white bg-violet-950/20 hover:bg-violet-900/30 rounded-lg transition-colors border border-violet-500/20"
          >
            <IconArrowLeft className="w-4 h-4 xs:w-5 xs:h-5" />
            <span>Back to Market</span>
          </Link>
        </div>

        {/* Quick Links & Contract */}
        <div className="mb-6 md:mb-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Quick Links Card */}
          <div className="bg-violet-950/20 backdrop-blur-md p-6 xs:p-4 rounded-lg border border-violet-500/20">
            <div className="flex flex-col xs:flex-row xs:items-center justify-between mb-4">
              <h3 className="text-white font-bold text-sm xs:text-base">
                Links & Social
              </h3>
              <span className="text-white/40 text-xs xs:text-sm">
                Official channels
              </span>
            </div>
            <div className="flex flex-wrap gap-2 xs:gap-3">
              {coinData.links &&
                Object.entries(coinData.links).map(([key, url]) => {
                  const icons = {
                    website: IconWorld,
                    twitter: IconBrandTwitter,
                    discord: IconBrandDiscord,
                    telegram: IconBrandTelegram,
                    reddit: IconBrandReddit,
                    github: IconBrandGithub,
                    explorer: IconChartBar,
                    whitepaper: IconBox,
                  };
                  const Icon = icons[key];
                  return (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer flex items-center gap-2 px-3 xs:px-4 py-1.5 xs:py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
                    >
                      <Icon className="w-4 h-4 xs:w-5 xs:h-5 text-white/60 group-hover:text-white/90" />
                      <span className="text-sm xs:text-base text-white/80 group-hover:text-white capitalize">
                        {key}
                      </span>
                    </a>
                  );
                })}
            </div>
          </div>

          {/* Contract Info Card */}
          <div className="bg-violet-950/20 backdrop-blur-md p-6 xs:p-4 rounded-lg border border-violet-500/20">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <h3 className="text-white font-bold">Smart Contract</h3>
                <IconInfoCircle
                  className="w-4 h-4 text-white/40 cursor-help"
                  title="Verified Contract Address"
                />
              </div>
              <div className="flex items-center gap-2">
                {coinData.links?.explorer && (
                  <a
                    href={`${coinData.links.explorer}/address/${coinData.contract}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white/90 transition-colors"
                  >
                    <IconLink className="w-5 h-5" />
                  </a>
                )}
                <button
                  onClick={() =>
                    navigator.clipboard.writeText(coinData.contract)
                  }
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
            {coinData.tags?.map((tag) => (
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
        <div className="mb-6 md:mb-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Price Pairs */}
          <div className="lg:col-span-2 bg-violet-950/20 backdrop-blur-md p-6 xs:p-4 rounded-lg border border-violet-500/20">
            <h3 className="text-white font-bold mb-4">Markets</h3>
            <div className="overflow-x-auto -mx-3 xs:-mx-4">
              <div className="min-w-[600px] px-3 xs:px-4">
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
                    {coinData.priceData?.pricePairs.map((pair, idx) => (
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
            </div>
            <div className="mt-4 pt-4">
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
          <div className="bg-violet-950/20 backdrop-blur-md p-6 xs:p-4 rounded-lg border border-violet-500/20">
            <h3 className="text-white font-bold mb-4">Performance</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                {coinData.performance?.periods.map((period) => (
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
                {coinData.performance?.compared.map((item) => (
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
        <div className="grid grid-cols-2 xs:grid-cols-2 md:grid-cols-4 gap-3 xs:gap-4 mb-6 md:mb-8">
          <div className="bg-violet-950/20 backdrop-blur-md p-4 rounded-lg border border-violet-500/20">
            <p className="text-white/60 text-sm mb-1">Market Cap</p>
            <p className="text-xl font-bold text-white">
              ${coinData.marketCap}
            </p>
            <p
              className={`${
                coinData.marketCapChange >= 0
                  ? "text-emerald-400"
                  : "text-red-400"
              } text-sm mt-1`}
            >
              {coinData.marketCapChange >= 0 ? "+" : ""}
              {coinData.marketCapChange}%
            </p>
          </div>
          <div className="bg-violet-950/20 backdrop-blur-md p-4 rounded-lg border border-violet-500/20">
            <p className="text-white/60 text-sm mb-1">24h Volume</p>
            <p className="text-xl font-bold text-white">
              ${coinData.volume24h}
            </p>
            <p
              className={`${
                coinData.volumeChange >= 0 ? "text-emerald-400" : "text-red-400"
              } text-sm mt-1`}
            >
              {coinData.volumeChange >= 0 ? "+" : ""}
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

        {/* Price Chart */}
        <div className="mb-6 md:mb-8">
          <ChartLineInteractive />
        </div>

        {/* Supply Information */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3 xs:gap-4 mb-6 md:mb-8">
          <div className="bg-violet-950/20 backdrop-blur-md p-4 rounded-lg border border-violet-500/20">
            <div className="flex justify-between items-start mb-2">
              <p className="text-white/70">Circulating Supply</p>
              <span className="text-white/60 text-sm">
                {coinData.circulatingSupply.percent}%
              </span>
            </div>
            <p className="text-xl font-bold text-white">
              {coinData.circulatingSupply.current} {coinData.symbol}
            </p>
            <div className="w-full bg-violet-900/30 rounded-full h-2 mt-2">
              <div
                className="bg-violet-500 h-2 rounded-full"
                style={{
                  width: `${coinData.circulatingSupply.percent}%`,
                }}
              ></div>
            </div>
          </div>
          <div className="bg-violet-950/20 backdrop-blur-md p-4 rounded-lg border border-violet-500/20">
            <p className="text-white/70 mb-2">Max Supply</p>
            <p className="text-xl font-bold text-white">
              {coinData.maxSupply} {coinData.symbol}
            </p>
          </div>
          <div className="bg-violet-950/20 backdrop-blur-md p-4 rounded-lg border border-violet-500/20">
            <p className="text-white/70 mb-2">Total Supply</p>
            <p className="text-xl font-bold text-white">
              {coinData.totalSupply} {coinData.symbol}
            </p>
          </div>
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4">
          {/* Price Statistics */}
          <div className="bg-violet-950/20 backdrop-blur-md p-4 rounded-lg border border-violet-500/20">
            <h3 className="text-white font-bold text-lg mb-3">
              Price Statistics
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-white/60">All Time High</span>
                <span className="text-white font-medium">
                  ${coinData.stats?.ath.price}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">All Time Low</span>
                <span className="text-white font-medium">
                  ${coinData.stats?.atl.price}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">90d High</span>
                <span className="text-white font-medium">
                  ${coinData.stats?.range90d.high}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">90d Low</span>
                <span className="text-white font-medium">
                  ${coinData.stats?.range90d.low}
                </span>
              </div>
            </div>
          </div>

          {/* Market Dominance */}
          <div className="bg-violet-950/20 backdrop-blur-md p-4 rounded-lg border border-violet-500/20">
            <h3 className="text-white font-bold text-lg mb-3">
              Market Dominance
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-white/60">Market Share</span>
                <span className="text-white font-medium">
                  {coinData.marketDominance?.share}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Rank</span>
                <span className="text-white font-medium">
                  {coinData.marketDominance?.rank}
                </span>
              </div>
            </div>
          </div>

          {/* ROI */}
          <div className="bg-violet-950/20 backdrop-blur-md p-4 rounded-lg border border-violet-500/20">
            <h3 className="text-white font-bold text-lg mb-3">ROI</h3>
            <div className="space-y-2">
              {Object.entries(coinData.roi || {}).map(([period, value]) => (
                <div key={period} className="flex justify-between">
                  <span className="text-white/60">{period}</span>
                  <span
                    className={value >= 0 ? "text-emerald-400" : "text-red-400"}
                  >
                    {value >= 0 ? "+" : ""}
                    {value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCoinPage;
