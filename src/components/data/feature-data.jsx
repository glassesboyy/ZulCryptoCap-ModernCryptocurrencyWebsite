import {
  IconAlertCircle,
  IconBookFilled,
  IconCalendar,
  IconChartPie,
  IconDatabase,
  IconNews,
  IconTrendingUp,
  IconWallet,
} from "@tabler/icons-react";

export const featureData = [
  {
    id: 1,
    icon: IconWallet,
    title: "Real-Time Price Updates",
    subtitle: "Stay updated with live market movements",
    shortDescription:
      "Track cryptocurrency prices with second-by-second updates, ensuring you never miss a market shift.",
    description:
      "Access live cryptocurrency data with real-time updates across thousands of coins and tokens.",
    longDescription:
      "Our platform offers continuous real-time price tracking for cryptocurrencies across all major exchanges. Instantly see price changes, volume, and market trends with ultra-low latency data delivery.",
    details: [
      "Real-time price feeds for over 10,000 cryptocurrencies",
      "Low-latency updates under 500ms",
      "Live market cap, volume, and circulating supply tracking",
      "Multi-exchange aggregation for accurate pricing",
      "Instant price alerts based on your custom triggers",
      "Price movement indicators (24h, 7d, 30d)",
      "Access to historical live tick data",
      "API support for custom real-time integrations",
    ],
    benefits: [
      "Always updated market prices",
      "Faster decision making",
      "Customizable alerts",
      "Supports thousands of assets",
    ],
    color: "blue",
    gradient: "from-blue-500/20 to-cyan-500/20",
    image: "/news/news1.jpg",
  },
  {
    id: 2,
    icon: IconTrendingUp,
    title: "Market Ranking",
    subtitle: "Discover top-performing cryptocurrencies",
    shortDescription:
      "View rankings based on market cap, volume, and performance metrics to find trending coins.",
    description:
      "Easily explore the best and worst performing cryptocurrencies through dynamic market rankings.",
    longDescription:
      "Our ranking system sorts cryptocurrencies by multiple factors including market cap, daily volume, and price performance. See trending tokens, biggest gainers, and emerging projects at a glance.",
    details: [
      "Market capitalization rankings",
      "Top gainers and losers by time frames",
      "Sector and category-based rankings",
      "Emerging and new coin spotlight",
      "Real-time leaderboard updates",
      "Customizable ranking filters",
      "DeFi, NFT, and Layer 2-specific rankings",
      "Data visualization with dynamic charts",
    ],
    benefits: [
      "Identify investment opportunities",
      "Stay ahead with trending data",
      "Customizable views",
      "Cover niche markets like DeFi and NFTs",
    ],
    color: "emerald",
    gradient: "from-emerald-500/20 to-green-500/20",
    image: "/news/news2.jpg",
  },
  {
    id: 3,
    icon: IconNews,
    title: "Crypto News Aggregator",
    subtitle: "Latest blockchain and crypto updates",
    shortDescription:
      "Stay informed with real-time news aggregation from top crypto media outlets.",
    description:
      "Get the latest crypto news, project updates, market analysis, and regulatory developments in one place.",
    longDescription:
      "Our news feed pulls updates from hundreds of trusted sources, providing you with curated, real-time crypto news. Filter by category such as DeFi, NFTs, regulations, or specific cryptocurrencies.",
    details: [
      "Aggregated news from 100+ verified sources",
      "Real-time news ticker",
      "Categorized by topic and asset",
      "Dedicated regulatory and project news sections",
      "Push notifications for major news",
      "Sentiment analysis tagging",
      "News impact score indicator",
      "Integration with major blog APIs (e.g., Medium, Substack)",
    ],
    benefits: [
      "Never miss major news",
      "Customizable filters",
      "Sentiment tagging for faster insights",
      "Follow specific projects easily",
    ],
    color: "orange",
    gradient: "from-orange-500/20 to-yellow-500/20",
    image: "/news/news3.jpg",
  },
  {
    id: 4,
    icon: IconChartPie,
    title: "Portfolio Tracking",
    subtitle: "Monitor your holdings easily",
    shortDescription:
      "Track your crypto investments' performance across multiple wallets and exchanges.",
    description:
      "Manage and monitor your cryptocurrency portfolio in one unified dashboard.",
    longDescription:
      "Sync your wallets or manually add your holdings to track your portfolio value, performance history, and asset distribution. Receive insights and analytics to optimize your crypto investments.",
    details: [
      "Manual and API portfolio tracking",
      "Profit/loss analysis",
      "Asset allocation charts",
      "Multi-currency support",
      "Performance over customizable periods",
      "Import/export portfolio data",
      "Anonymized tracking without KYC",
      "Risk exposure visualization",
    ],
    benefits: [
      "Complete investment overview",
      "Insightful analytics",
      "Track across wallets and exchanges",
      "Privacy-first design",
    ],
    color: "teal",
    gradient: "from-teal-500/20 to-cyan-500/20",
    image: "/news/news4.jpg",
  },
  {
    id: 5,
    icon: IconCalendar,
    title: "Crypto Events Calendar",
    subtitle: "Never miss an important crypto event",
    shortDescription:
      "Discover upcoming token launches, airdrops, hard forks, and major project milestones.",
    description:
      "Stay ahead of the curve with a detailed calendar of important crypto events worldwide.",
    longDescription:
      "Our events calendar highlights upcoming activities like token sales, conference dates, blockchain upgrades, and airdrop campaigns. Get notified before critical events affecting your favorite assets.",
    details: [
      "Upcoming ICOs, IDOs, and airdrops",
      "Blockchain upgrade schedules",
      "Developer and investor conferences",
      "Token burn and rebranding events",
      "Custom event watchlist",
      "Event impact predictions",
      "Push and email reminders",
      "Time zone auto-adjustment",
    ],
    benefits: [
      "Plan your trades smarter",
      "Early access to new projects",
      "Avoid missing critical updates",
      "Tailored reminders",
    ],
    color: "indigo",
    gradient: "from-indigo-500/20 to-purple-500/20",
    image: "/news/news5.jpg",
  },
  {
    id: 6,
    icon: IconAlertCircle,
    title: "Price Alerts",
    subtitle: "Instant notifications for price movements",
    shortDescription:
      "Set personalized alerts for any cryptocurrency based on price or percentage changes.",
    description:
      "Stay in control by receiving instant alerts for specific price thresholds, percentage changes, or volume spikes.",
    longDescription:
      "Customize alerts based on your strategies. Get notified immediately via email, app push, or SMS when a coin hits your set conditions, helping you seize opportunities or manage risks faster.",
    details: [
      "Customizable alert conditions (price, % change, volume)",
      "Multiple delivery methods (app, SMS, email)",
      "Unlimited alerts across thousands of assets",
      "Alert history and logs",
      "Auto-resetting triggered alerts",
      "High precision and low-latency notification",
      "Grouped alerts for portfolio assets",
      "Smart alerts based on historical patterns",
    ],
    benefits: [
      "Never miss price movements",
      "Fully customizable",
      "Supports advanced conditions",
      "Fastest notification speed",
    ],
    color: "rose",
    gradient: "from-rose-500/20 to-pink-500/20",
    image: "/news/news6.jpg",
  },
  {
    id: 7,
    icon: IconBookFilled,
    title: "Crypto Education Hub",
    subtitle: "Learn crypto from basics to advanced",
    shortDescription:
      "Access a library of articles, tutorials, and explainers to deepen your understanding of blockchain and cryptocurrencies.",
    description:
      "Empower yourself with free educational content covering trading strategies, blockchain technology, DeFi, NFTs, and more.",
    longDescription:
      "Our education hub features comprehensive guides, up-to-date tutorials, explainers, and glossary sections for both beginners and seasoned users. Stay ahead by mastering the crypto ecosystem with structured learning paths.",
    details: [
      "Beginner to advanced crypto guides",
      "Trading and investing strategies",
      "DeFi, NFT, and blockchain explainers",
      "Weekly updated content",
      "Interactive quizzes and certification",
      "Community Q&A forums",
      "Glossary of crypto terminologies",
      "Expert guest articles",
    ],
    benefits: [
      "Learn at your own pace",
      "Wide coverage from basics to pro topics",
      "Earn badges and certifications",
      "Stay updated with evolving trends",
    ],
    color: "yellow",
    gradient: "from-yellow-500/20 to-amber-500/20",
    image: "/news/news7.jpg",
  },
  {
    id: 8,
    icon: IconDatabase,
    title: "Historical Market Data",
    subtitle: "Analyze past market movements",
    shortDescription:
      "Access comprehensive historical data for cryptocurrencies to enhance your research and strategies.",
    description:
      "Retrieve price, volume, and market cap history to perform backtesting and trend analysis.",
    longDescription:
      "Dive into detailed historical datasets including open-high-low-close (OHLC) data, volume trends, and market cap changes over years. Perfect for analysts, researchers, and strategic traders.",
    details: [
      "OHLC data for all listed assets",
      "Daily, hourly, and minute-level historical records",
      "Downloadable CSV datasets",
      "API access for bulk data retrieval",
      "Compare multiple assets across time",
      "Historical events mapping on price charts",
      "DeFi and NFT market-specific data",
      "Advanced charting tools for visualization",
    ],
    benefits: [
      "Better strategy backtesting",
      "Comprehensive market research",
      "Access to rare datasets",
      "Download and analyze offline",
    ],
    color: "fuchsia",
    gradient: "from-fuchsia-500/20 to-pink-500/20",
    image: "/news/news1.jpg",
  },
];

export const getFeatureItems = (count, filterFn = null) => {
  let filteredFeatures = filterFn ? featureData.filter(filterFn) : featureData;
  return filteredFeatures.slice(0, count);
};

export const getFeatureById = (id) => {
  return featureData.find((feature) => feature.id === Number(id));
};
