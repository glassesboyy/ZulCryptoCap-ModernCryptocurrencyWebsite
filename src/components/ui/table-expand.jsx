"use client";
import {
  IconAdjustmentsHorizontal,
  IconChevronDown,
  IconChevronUp,
  IconSearch,
} from "@tabler/icons-react";
import { useState } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";

const TableExpand = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [displayCount, setDisplayCount] = useState(100);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Sort function
  const sortData = (data, key, direction) => {
    return [...data].sort((a, b) => {
      let aValue = a[key];
      let bValue = b[key];

      // Handle special cases for sorting
      if (key === "marketCap" || key === "volume24h") {
        aValue = parseFloat(a[key].replace(/[B|T|M]/g, ""));
        bValue = parseFloat(b[key].replace(/[B|T|M]/g, ""));
      }

      if (direction === "asc") {
        return aValue > bValue ? 1 : -1;
      }
      return aValue < bValue ? 1 : -1;
    });
  };

  // Handle sort click
  const handleSort = (key) => {
    const direction =
      sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
    setSortConfig({ key, direction });
  };

  // Filter data
  const filteredData = data.filter((coin) => {
    const matchesSearch =
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategories =
      selectedCategories.length === 0 ||
      coin.categories.some((cat) => selectedCategories.includes(cat));

    return matchesSearch && matchesCategories;
  });

  // Get sorted data
  const sortedData = sortConfig.key
    ? sortData(filteredData, sortConfig.key, sortConfig.direction)
    : filteredData;

  // Get unique categories
  const allCategories = [...new Set(data.flatMap((coin) => coin.categories))];

  return (
    <div className="w-full">
      <div className="flex flex-col gap-4 mb-6">
        {/* Search and Display Count */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="relative w-full sm:w-[300px]">
            <IconSearch
              className="absolute left-3 top-1/2 -translate-y-1/2 text-violet-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search coin"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-violet-900/20 border border-violet-900/30 rounded-lg text-white focus:outline-none focus:border-violet-500"
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <select
                value={displayCount}
                onChange={(e) => setDisplayCount(Number(e.target.value))}
                className="appearance-none pl-4 pr-10 py-2 bg-violet-900/20 border border-violet-900/30 rounded-lg text-white focus:outline-none focus:border-violet-500"
              >
                <option className="bg-violet-950" value={50}>
                  Show 50
                </option>
                <option className="bg-violet-950" value={100}>
                  Show 100
                </option>
                <option className="bg-violet-950" value={200}>
                  Show 200
                </option>
                <option className="bg-violet-950" value={data.length}>
                  Show All
                </option>
              </select>
              <IconChevronDown
                size={20}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-violet-400 pointer-events-none"
              />
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-violet-900/20 border border-violet-900/30 rounded-lg text-white hover:bg-violet-900/30 transition-colors"
            >
              <IconAdjustmentsHorizontal size={20} />
              Filters
            </button>
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="p-4 bg-violet-900/20 border border-violet-900/30 rounded-lg">
            <div>
              <h3 className="text-white mb-2">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {allCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategories(
                        selectedCategories.includes(category)
                          ? selectedCategories.filter((c) => c !== category)
                          : [...selectedCategories, category]
                      );
                    }}
                    className={`px-3 py-1 rounded-full text-sm ${
                      selectedCategories.includes(category)
                        ? "bg-violet-500 text-white"
                        : "bg-violet-900/20 text-violet-300"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Results count */}
        <div className="text-violet-300 mb-4">
          Showing {Math.min(sortedData.length, displayCount)} out of{" "}
          {sortedData.length} results
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-0">
            <thead>
              <tr className="text-violet-300 text-sm border-b border-violet-900/30">
                <th className="sticky left-0 bg-black text-left pl-4 py-4 font-medium">
                  #
                </th>
                <th className="sticky left-[60px] bg-black text-left font-medium min-w-[200px]">
                  Name
                </th>
                <th
                  className="text-right font-medium min-w-[100px] cursor-pointer hover:text-white"
                  onClick={() => handleSort("currentPrice")}
                >
                  <div className="flex items-center justify-end gap-1">
                    Price
                    {sortConfig.key === "currentPrice" ? (
                      sortConfig.direction === "asc" ? (
                        <IconChevronUp size={20} className="text-white" />
                      ) : (
                        <IconChevronDown size={20} className="text-white" />
                      )
                    ) : (
                      <IconChevronDown size={20} className="text-violet-400" />
                    )}
                  </div>
                </th>
                <th className="text-right font-medium min-w-[80px]">1h %</th>
                <th className="text-right font-medium min-w-[80px]">24h %</th>
                <th className="text-right font-medium min-w-[80px]">7d %</th>
                <th
                  className="text-right font-medium min-w-[120px] cursor-pointer hover:text-white"
                  onClick={() => handleSort("marketCap")}
                >
                  <div className="flex items-center justify-end gap-1">
                    Market Cap
                    {sortConfig.key === "marketCap" ? (
                      sortConfig.direction === "asc" ? (
                        <IconChevronUp size={20} className="text-white" />
                      ) : (
                        <IconChevronDown size={20} className="text-white" />
                      )
                    ) : (
                      <IconChevronDown size={20} className="text-violet-400" />
                    )}
                  </div>
                </th>
                <th
                  className="text-right font-medium min-w-[120px] cursor-pointer hover:text-white"
                  onClick={() => handleSort("volume24h")}
                >
                  <div className="flex items-center justify-end gap-1">
                    Volume (24h)
                    {sortConfig.key === "volume24h" ? (
                      sortConfig.direction === "asc" ? (
                        <IconChevronUp size={20} className="text-white" />
                      ) : (
                        <IconChevronDown size={20} className="text-white" />
                      )
                    ) : (
                      <IconChevronDown size={20} className="text-violet-400" />
                    )}
                  </div>
                </th>
                <th className="text-right font-medium min-w-[150px]">
                  Circulating Supply
                </th>
                <th className="text-center font-medium px-4 min-w-[200px]">
                  Last 7 Days
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedData.slice(0, displayCount).map((coin, index) => (
                <tr
                  key={coin.id}
                  className="bg-black/40 backdrop-blur-md border-b border-violet-900/30 hover:bg-violet-900/10 transition-colors"
                >
                  <td className="sticky left-0 bg-black/40 pl-4 py-4 text-white">
                    {index + 1}
                  </td>
                  <td className="sticky left-[60px] bg-black/40">
                    <div className="flex items-center gap-3">
                      <img
                        src={coin.logo}
                        alt={coin.name}
                        className="w-8 h-8"
                      />
                      <div>
                        <div className="text-white font-medium">
                          {coin.symbol}
                        </div>
                        <div className="text-violet-300 text-sm">
                          {coin.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-right text-white">
                    ${coin.currentPrice}
                  </td>
                  <td
                    className={`text-right ${
                      coin.performance.periods[0].value >= 0
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {coin.performance.periods[0].value >= 0 ? "+" : ""}
                    {coin.performance.periods[0].value}%
                  </td>
                  <td
                    className={`text-right ${
                      coin.priceChange >= 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {coin.priceChange >= 0 ? "+" : ""}
                    {coin.priceChange}%
                  </td>
                  <td
                    className={`text-right ${
                      coin.performance.periods[2].value >= 0
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {coin.performance.periods[2].value >= 0 ? "+" : ""}
                    {coin.performance.periods[2].value}%
                  </td>
                  <td className="text-right text-white">${coin.marketCap}</td>
                  <td className="text-right text-white">${coin.volume24h}</td>
                  <td className="text-right text-white">
                    {coin.circulatingSupply.current}
                    <span className="text-violet-400 ml-1">{coin.symbol}</span>
                  </td>
                  <td className="px-4">
                    <div className="h-[40px] w-full">
                      <Sparklines
                        data={coin.sparklineData}
                        width={200}
                        height={40}
                      >
                        <SparklinesLine
                          style={{
                            strokeWidth: 1,
                            stroke:
                              coin.priceChange >= 0 ? "#22c55e" : "#ef4444",
                            fill: coin.priceChange >= 0 ? "#22c55e" : "#ef4444",
                          }}
                        />
                      </Sparklines>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableExpand;
