"use client";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";

const newsData = [
  {
    id: 1,
    category: "Market Analysis",
    title: "Bitcoin ETF Approval Sparks Historic Rally",
    src: "/news/news1.jpg",
    description:
      "Major financial institutions rush to offer Bitcoin investment products as market capitalization surges past $2 trillion. Analysts predict this could open floodgates for institutional investment in digital assets.",
  },
  {
    id: 2,
    category: "Technology",
    title: "Revolutionary Layer-2 Solution Promises Zero Gas Fees",
    src: "/news/news2.jpg",
    description:
      "Early testing shows transaction speeds rivaling traditional payment networks, potentially solving one of crypto's biggest adoption hurdles with completely gas-free transactions while maintaining Ethereum's security guarantees.",
  },
  {
    id: 3,
    category: "Trading",
    title: "AI-Powered Trading Platform Launch",
    src: "/news/news3.jpg",
    description:
      "Revolutionary platform combines machine learning algorithms with real-time market data to provide unprecedented trading insights and automated strategies for both retail and institutional investors.",
  },
  {
    id: 4,
    category: "Gaming",
    title: "NFT Gaming Ecosystem Expansion",
    src: "/news/news4.jpg",
    description:
      "Major gaming studios announce blockchain integration as play-to-earn model revolutionizes gaming industry. New partnerships promise enhanced player experiences with true digital asset ownership.",
  },
  {
    id: 5,
    category: "Regulation",
    title: "Global Crypto Regulatory Framework",
    src: "/news/news5.jpg",
    description:
      "International regulators collaborate on comprehensive crypto framework, aiming to establish clear guidelines while fostering innovation. Major economies signal support for regulated digital asset markets.",
  },
  {
    id: 6,
    category: "DeFi",
    title: "DeFi 2.0 Protocols Transform Finance",
    src: "/news/news6.jpg",
    description:
      "Next-generation DeFi protocols introduce revolutionary yield strategies and enhanced security measures. Total Value Locked reaches new all-time highs as institutional adoption accelerates.",
  },
  {
    id: 7,
    category: "Innovation",
    title: "Web3 Infrastructure Breakthrough",
    src: "/news/news7.jpg",
    description:
      "Groundbreaking developments in Web3 infrastructure promise seamless blockchain interactions. New scaling solutions and cross-chain protocols enable mainstream adoption of decentralized applications.",
  },
];

export function TopTrendingNews() {
  const cards = newsData.map((card, index) => (
    <Card
      key={card.id}
      card={{
        ...card,
        content: (
          <div className="bg-black/80 p-8 md:p-14 rounded-3xl border border-violet-500/20">
            <p className="text-white/90 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-violet-400">{card.title}</span>
              <br />
              {card.description}
            </p>
            <img
              src={card.src}
              alt={card.title}
              className="h-11/12 w-11/12 mx-auto object-contain mt-8 rounded-xl border border-violet-500/20"
            />
          </div>
        ),
      }}
      index={index}
    />
  ));

  return (
    <div className="w-full bg-black py-40">
      <div className="max-w-7xl mx-auto">
        <div className="relative max-w-2xl mr-auto">
          <h2 className="text-left relative text-3xl xs:text-4xl sm:text-5xl font-bold text-white mb-3 xs:mb-4">
            Top Trending News
          </h2>
          <p className="text-left relative text-white/70 text-base xs:text-lg font-light mb-8">
            Discover the hottest stories shaping the future of cryptocurrency
            and blockchain technology
          </p>
        </div>
        <Carousel items={cards} />
      </div>
    </div>
  );
}
