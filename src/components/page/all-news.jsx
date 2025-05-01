"use client";
import { getCategories, newsData } from "@/components/data/news-data";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";
import {
  IconArrowLeft,
  IconArrowRight,
  IconNews,
  IconSearch,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const ITEMS_PER_PAGE = 12;

// Updated NewsImage component to handle any image format
const NewsImage = ({ imageUrl }) => (
  <div className="w-full h-full rounded-xl overflow-hidden">
    <img
      src={imageUrl} // Remove .jpg extension to support any image format
      alt="Crypto News"
      className="w-full h-full object-cover transition-all duration-500 group-hover/bento:scale-110"
    />
  </div>
);

export function AllNews() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const categories = getCategories();

  // Reference untuk section news category
  const newsCategoryRef = useRef(null);

  // Filter news based on category and search query
  const filteredNews = newsData.filter((news) => {
    const matchesCategory =
      selectedCategory === "all" ||
      news.categories.some(
        (cat) => cat.toLowerCase().replace(/\s+/g, "-") === selectedCategory
      );

    const matchesSearch =
      searchQuery === "" ||
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedNews = filteredNews.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Updated handlePageChange function
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    // Scroll ke section news category dengan smooth behavior
    newsCategoryRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Reset to first page when category changes
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  // Handle search input
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  return (
    <section
      id="allnews"
      ref={newsCategoryRef}
      className="w-full bg-black py-20"
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-6">
        <div className="relative mb-12">
          <h2 className="relative text-center text-3xl xs:text-4xl sm:text-5xl font-bold text-white mb-3 xs:mb-4">
            Discover News That Matters to You
          </h2>
          <p className="relative text-center text-white/70 text-base xs:text-lg font-light">
            Explore a wide range of topics, insights, and stories tailored to
            your interests
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="search news that matters to you here..."
              value={searchQuery}
              onChange={handleSearch}
              className={cn(
                "w-full px-12 py-3 rounded-xl",
                "bg-violet-950/30 border border-violet-500/20",
                "text-white placeholder:text-white/50",
                "focus:outline-none focus:border-violet-500/50",
                "transition-colors duration-200"
              )}
            />
            <IconSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-violet-400" />
          </div>
        </div>

        {/* Desktop Categories */}
        <div className="hidden md:flex justify-center gap-4 flex-wrap mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
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

        {/* News Grid */}
        <motion.div
          layout
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {filteredNews.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-white/70">
                No news found matching your search criteria.
              </p>
            </div>
          ) : (
            <>
              <BentoGrid className="grid-cols-1 md:grid-cols-3 auto-rows-[20rem]">
                {paginatedNews.map((news) => (
                  <BentoGridItem
                    key={news.id}
                    title={news.title}
                    description={news.description}
                    header={<NewsImage imageUrl={news.imageUrl} />}
                    className="md:col-span-1"
                    icon={<IconNews className="h-4 w-4 text-violet-400" />}
                    newsId={news.id}
                  />
                ))}
              </BentoGrid>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="mt-12 flex justify-center items-center gap-4">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={cn(
                      "p-2 rounded-lg border border-violet-500/20",
                      "transition-colors duration-300",
                      currentPage === 1
                        ? "text-white/30 border-white/10 cursor-not-allowed"
                        : "text-violet-400 hover:bg-violet-500/20"
                    )}
                  >
                    <IconArrowLeft className="w-5 h-5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {[...Array(totalPages)].map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => handlePageChange(idx + 1)}
                        className={cn(
                          "w-8 h-8 rounded-lg text-sm transition-colors duration-300",
                          currentPage === idx + 1
                            ? "bg-violet-500/20 text-violet-300 border border-violet-500/30"
                            : "text-white/70 hover:bg-violet-500/10 hover:text-violet-300"
                        )}
                      >
                        {idx + 1}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={cn(
                      "p-2 rounded-lg border border-violet-500/20",
                      "transition-colors duration-300",
                      currentPage === totalPages
                        ? "text-white/30 border-white/10 cursor-not-allowed"
                        : "text-violet-400 hover:bg-violet-500/20"
                    )}
                  >
                    <IconArrowRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}

// Move descriptions object outside component for better performance
const descriptions = {
  all: "Stay updated with the latest news from across the entire cryptocurrency ecosystem.",
  bitcoin:
    "Follow Bitcoin's price movements, adoption trends, and technological developments.",
  ethereum: "Track Ethereum updates, DApp developments, and ecosystem growth.",
  altcoin:
    "Discover emerging cryptocurrencies and alternative blockchain projects.",
  defi: "Explore decentralized finance protocols, yields, and innovative financial products.",
  nft: "Keep up with NFT trends, collections, and marketplace developments.",
  exchange: "Monitor exchange updates, listings, and trading platform news.",
  regulations:
    "Stay informed about crypto regulations and policy changes worldwide.",
  "market-analysis":
    "Access in-depth market analysis, trends, and trading insights.",
};

function getDescriptionForCategory(categoryId) {
  return descriptions[categoryId] || descriptions.all;
}
