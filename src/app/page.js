import { Faq } from "@/components/page/home-page/faq";
import { Feature } from "@/components/page/home-page/feature";
import { Hero } from "@/components/page/home-page/hero";
import { MarketTrend } from "@/components/page/home-page/market-trend";
import { MarketUpdate } from "@/components/page/home-page/market-update";
import { NewsSection } from "@/components/page/home-page/news";
import { Tutorial } from "@/components/page/home-page/tutorial";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Feature />
      <MarketUpdate />
      <MarketTrend />
      <Tutorial />
      <Faq />
      <NewsSection maxItems={7} showButton={true} />
    </main>
  );
}
