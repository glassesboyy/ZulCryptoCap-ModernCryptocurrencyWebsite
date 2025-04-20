import { Hero } from "@/components/page/hero";
import { MainNavbar } from "@/components/page/main-navbar";
import { MarketTrend } from "@/components/page/market-trend";
import { Feature } from "@/components/page/feature";

export default function Home() {
  return (
    <main className="min-h-screen">
      <MainNavbar />
      <Hero />
      <MarketTrend />
      <Feature />
    </main>
  );
}
