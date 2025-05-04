"use client";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

const TableRecap = ({ title, data, link = "/coin" }) => {
  return (
    <div className="w-full bg-black/40 backdrop-blur-md border border-violet-900/30 rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg text-white font-medium">{title}</h3>
        <Link
          href={link}
          className="group flex items-center gap-1 text-sm text-violet-400 hover:text-violet-300 transition-colors"
        >
          See more coins
          <IconArrowRight
            size={16}
            className="transform transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-violet-300 text-sm border-b border-violet-900/30">
              <th className="text-left py-3 font-medium w-12">#</th>
              <th className="text-left font-medium">Name</th>
              <th className="text-right font-medium">Price</th>
              <th className="text-right pr-2 font-medium">24h</th>
            </tr>
          </thead>
          <tbody>
            {data.slice(0, 7).map((coin, index) => (
              <tr
                key={coin.symbol}
                className="border-b border-violet-900/10 hover:bg-violet-900/10 transition-colors"
              >
                <td className="py-3 text-white">{index + 1}</td>
                <td>
                  <div className="flex items-center gap-2">
                    <img src={coin.logo} alt={coin.name} className="w-6 h-6" />
                    <div>
                      <div className="text-white text-sm font-medium">
                        {coin.symbol}
                      </div>
                      <div className="text-violet-300 text-xs">{coin.name}</div>
                    </div>
                  </div>
                </td>
                <td className="text-right text-white text-sm">
                  ${coin.currentPrice}
                </td>
                <td
                  className={`text-right pr-2 text-sm ${
                    coin.priceChange >= 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {coin.priceChange >= 0 ? "+" : ""}
                  {coin.priceChange}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableRecap;
