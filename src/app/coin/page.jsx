import { HeroMarket } from "@/components/page/market-page/hero-market";
import { MarketRecap } from "@/components/page/market-page/market-recap";

export default function CoinPage() {
  return (
    <main className="min-h-screen bg-black">
      <HeroMarket />
      <MarketRecap />
    </main>
  );
}
