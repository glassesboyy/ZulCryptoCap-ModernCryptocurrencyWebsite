import { Feature } from "@/components/page/feature";
import { Hero } from "@/components/page/hero";
import { MainNavbar } from "@/components/page/main-navbar";
import { MarketTrend } from "@/components/page/market-trend";
import { MarketUpdate } from "@/components/page/market-update";
import { Tutorial } from "@/components/page/tutorial";

export default function Home() {
  return (
    <main className="min-h-screen">
      <MainNavbar />
      <Hero />
      <MarketTrend />
      <Feature />
      <MarketUpdate />
      <Tutorial />
    </main>
  );
}
