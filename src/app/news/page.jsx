import { AllNews } from "@/components/page/all-news";
import { HeroNews } from "@/components/page/hero-news";
import { Newsletter } from "@/components/page/newsletter";
import { TopTrendingNews } from "@/components/page/top-trending-news";

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-black">
      <HeroNews />
      <TopTrendingNews />
      <AllNews />
      <Newsletter />
    </main>
  );
}
