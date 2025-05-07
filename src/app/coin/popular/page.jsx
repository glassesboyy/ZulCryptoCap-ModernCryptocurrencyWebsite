import { getCoinItems } from "@/components/data/coin-data";
import TableExpand from "@/components/ui/table-expand";

export default function PopularPage() {
  const allCoins = getCoinItems(100);
  const popular = [...allCoins].sort(
    (a, b) =>
      b.marketCap.replace(/[B|T]/g, "") - a.marketCap.replace(/[B|T]/g, "")
  );

  return (
    <main className="min-h-screen bg-black px-4 xs:px-6 py-12 xs:py-16">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/coin#marketrecap"
          className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 mb-6 transition-colors"
        >
          <IconArrowLeft size={20} />
          <span>Back to Market Recap</span>
        </Link>
        <div className="mb-8">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-white mb-3 xs:mb-4">
            Most Visited
          </h1>
          <p className="text-white/70 text-base xs:text-lg font-light">
            Most popular cryptocurrencies by market capitalization
          </p>
        </div>
        <TableExpand data={popular} />
      </div>
    </main>
  );
}
