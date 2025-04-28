import { HeroNews } from "@/components/page/hero-news";
import { NewsCategory } from "@/components/page/news-category";
import { TopTrendingNews } from "@/components/page/top-trending-news";

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-black">
      <HeroNews />
      <TopTrendingNews />
      <NewsCategory />
    </main>
  );
}
