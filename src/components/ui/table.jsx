"use client";
import { IconSearch } from "@tabler/icons-react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { useState } from "react";

const categories = ["All", "Metaverse", "Gaming", "Defi", "NFT"];

const CoinTable = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((coin) => {
    const matchesCategory =
      activeCategory === "All" || coin.categories.includes(activeCategory);
    const matchesSearch =
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full">
      {/* Categories and Search */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 w-full">
        <div className="flex flex-wrap gap-2 sm:gap-3 w-full sm:w-auto">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-violet-950 text-white hover:bg-violet-900/30 transition-colors cursor-pointer outline-none flex-grow sm:flex-grow-0 ${
                activeCategory === category
                  ? "bg-violet-900/30 border-violet-500"
                  : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="relative w-full sm:w-auto">
          <IconSearch
            className="absolute left-3 top-1/2 -translate-y-1/2 text-violet-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search coin"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-[200px] pl-10 pr-4 py-2 bg-violet-900/20 border border-violet-900/30 rounded-lg text-white focus:outline-none focus:border-violet-500"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto overflow-y-hidden">
        <table className="w-full border-separate border-spacing-0">
          <thead>
            <tr className="text-violet-300 text-sm border-b border-violet-900/30">
              <th className="text-left pl-4 py-4 font-medium">NO</th>
              <th className="text-left font-medium">NAME</th>
              <th className="hidden sm:table-cell text-center font-medium">
                LAST PRICE
              </th>
              <th className="hidden sm:table-cell text-center font-medium">
                24H CHANGE
              </th>
              <th className="text-center font-medium">MARKET STATS</th>
              <th className="text-center pr-4 font-medium">TRADE</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((coin, index) => (
              <tr
                key={coin.symbol}
                className="bg-black/40 backdrop-blur-md border-b border-violet-900/30 hover:bg-violet-900/10 transition-colors"
              >
                <td className="pl-4 py-4 text-white">{index + 1}</td>
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <img src={coin.logo} alt={coin.name} className="w-8 h-8" />
                    <div>
                      <div className="text-white font-medium">
                        {coin.symbol}
                      </div>
                      <div className="text-violet-300 text-sm hidden xs:block">
                        {coin.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="hidden sm:table-cell text-center text-white">
                  ${coin.price}
                </td>
                <td
                  className={`hidden sm:table-cell text-center ${
                    coin.priceChange >= 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {coin.priceChange >= 0 ? "+" : ""}
                  {coin.priceChange}%
                </td>
                <td className="px-4">
                  <div className="h-[40px] md:h-[100px] w-full">
                    <Sparklines
                      data={coin.sparklineData}
                      width={100}
                      height={30}
                    >
                      <SparklinesLine
                        style={{
                          strokeWidth: 1,
                          stroke: coin.priceChange >= 0 ? "#22c55e" : "#ef4444",
                          fill: coin.priceChange >= 0 ? "#22c55e" : "#ef4444",
                        }}
                      />
                    </Sparklines>
                  </div>
                </td>
                <td className="pr-4">
                  <div className="flex justify-center">
                    <button className="px-3 sm:px-4 py-2 bg-black border border-violet-950 hover:bg-violet-900/30 text-white rounded-sm text-xs sm:text-sm font-medium transition-colors cursor-pointer">
                      Trade
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoinTable;
