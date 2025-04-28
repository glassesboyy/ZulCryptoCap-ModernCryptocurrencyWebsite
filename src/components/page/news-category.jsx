"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

const categories = [
  { id: "all", label: "All News" },
  {
    id: "bitcoin",
    label: "Bitcoin",
    color: "from-orange-400/10 to-orange-600/10",
  },
  {
    id: "ethereum",
    label: "Ethereum",
    color: "from-blue-400/10 to-blue-600/10",
  },
  {
    id: "altcoin",
    label: "Altcoin",
    color: "from-green-400/10 to-green-600/10",
  },
  { id: "defi", label: "DeFi", color: "from-purple-400/10 to-purple-600/10" },
  { id: "nft", label: "NFT", color: "from-pink-400/10 to-pink-600/10" },
  {
    id: "exchange",
    label: "Exchange",
    color: "from-yellow-400/10 to-yellow-600/10",
  },
  {
    id: "regulations",
    label: "Regulations",
    color: "from-red-400/10 to-red-600/10",
  },
  {
    id: "market",
    label: "Market Analysis",
    color: "from-cyan-400/10 to-cyan-600/10",
  },
];

export function NewsCategory() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 xs:px-6">
        <div className="relative mb-12">
          <h2 className="relative text-center text-3xl xs:text-4xl sm:text-5xl font-bold text-white mb-3 xs:mb-4">
            Browse by Category
          </h2>
          <p className="relative text-center text-white/70 text-base xs:text-lg font-light">
            Filter news and articles based on your interests
          </p>
        </div>

        {/* Desktop Categories */}
        <div className="hidden md:flex justify-center gap-4 flex-wrap mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={cn(
                "relative px-6 py-2 rounded-full text-sm transition-all duration-300",
                "hover:bg-violet-500/20 hover:text-violet-300",
                selectedCategory === category.id
                  ? "text-violet-300 bg-violet-500/20"
                  : "text-white/70"
              )}
            >
              {selectedCategory === category.id && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-violet-700/20 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{category.label}</span>
            </button>
          ))}
        </div>

        {/* Mobile Dropdown */}
        <div className="md:hidden relative mb-8">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-4 py-3 rounded-xl bg-violet-950/30 text-white flex justify-between items-center"
          >
            <span>
              {categories.find((c) => c.id === selectedCategory)?.label}
            </span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path d="m6 9 6 6 6-6" />
            </motion.svg>
          </button>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute z-50 mt-2 w-full rounded-xl bg-violet-950/95 backdrop-blur-sm py-2 border border-violet-500/20"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "w-full px-4 py-2 text-left transition-colors",
                    selectedCategory === category.id
                      ? "text-violet-300 bg-violet-500/20"
                      : "text-white/70 hover:bg-violet-500/10 hover:text-violet-300"
                  )}
                >
                  {category.label}
                </button>
              ))}
            </motion.div>
          )}
        </div>

        {/* Category Description Card */}
        <motion.div
          layout
          className="bg-violet-950/20 rounded-2xl p-8 border border-violet-500/20"
        >
          <div className="text-center">
            <motion.p
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white/70"
            >
              {getDescriptionForCategory(selectedCategory)}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function getDescriptionForCategory(categoryId) {
  const descriptions = {
    all: "Stay updated with the latest news from across the entire cryptocurrency ecosystem.",
    bitcoin:
      "Follow Bitcoin's price movements, adoption trends, and technological developments.",
    ethereum:
      "Track Ethereum updates, DApp developments, and ecosystem growth.",
    altcoin:
      "Discover emerging cryptocurrencies and alternative blockchain projects.",
    defi: "Explore decentralized finance protocols, yields, and innovative financial products.",
    nft: "Keep up with NFT trends, collections, and marketplace developments.",
    exchange: "Monitor exchange updates, listings, and trading platform news.",
    regulations:
      "Stay informed about crypto regulations and policy changes worldwide.",
    market: "Access in-depth market analysis, trends, and trading insights.",
  };
  return descriptions[categoryId] || descriptions.all;
}
