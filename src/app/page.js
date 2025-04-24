import { Faq } from "@/components/page/faq";
import { Feature } from "@/components/page/feature";
import { Hero } from "@/components/page/hero";
import { MarketTrend } from "@/components/page/market-trend";
import { MarketUpdate } from "@/components/page/market-update";
import { NewsSection } from "@/components/page/news";
import { Tutorial } from "@/components/page/tutorial";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Feature />
      <MarketUpdate />
      <MarketTrend />
      <Tutorial />
      <Faq />
      <NewsSection />
    </main>
  );
}
