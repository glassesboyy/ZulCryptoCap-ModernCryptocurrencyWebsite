import { AllNews } from "@/components/page/news-page/all-news";
import { HeroNews } from "@/components/page/news-page/hero-news";
import { Newsletter } from "@/components/page/news-page/newsletter";
import { TopTrendingNews } from "@/components/page/news-page/top-trending-news";

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
