import { Faq } from "@/components/page/faq";
import { Feature } from "@/components/page/feature";
import { Hero } from "@/components/page/hero";
import { MainNavbar } from "@/components/page/main-navbar";
import { MarketTrend } from "@/components/page/market-trend";
import { MarketUpdate } from "@/components/page/market-update";
import { NewsSection } from "@/components/page/news";
import { Tutorial } from "@/components/page/tutorial";
import { Footer } from "@/components/page/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <MainNavbar />
      <Hero />
      <MarketTrend />
      <Feature />
      <MarketUpdate />
      <Tutorial />
      <Faq />
      <NewsSection />
      <Footer />
    </main>
  );
}
