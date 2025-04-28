"use client";
import { getTrendingNews } from "@/components/data/news-data";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";

export function TopTrendingNews() {
  const newsItems = getTrendingNews();

  const cards = newsItems.map((card, index) => (
    <Card
      key={card.id}
      card={{
        ...card,
        content: (
          <div className="bg-black/80 p-8 md:p-14 rounded-3xl border border-violet-500/20">
            <p className="text-white/90 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-violet-400">{card.title}</span>
              <br />
              {card.description}
            </p>
            <img
              src={card.src}
              alt={card.title}
              className="h-11/12 w-11/12 mx-auto object-contain mt-8 rounded-xl border border-violet-500/20"
            />
          </div>
        ),
      }}
      index={index}
    />
  ));

  return (
    <div className="w-full bg-black py-40">
      <div className="max-w-7xl mx-auto">
        <div className="relative max-w-2xl mr-auto">
          <h2 className="text-left relative text-3xl xs:text-4xl sm:text-5xl font-bold text-white mb-3 xs:mb-4">
            Top Trending News
          </h2>
          <p className="text-left relative text-white/70 text-base xs:text-lg font-light mb-8">
            Discover the hottest stories shaping the future of cryptocurrency
            and blockchain technology
          </p>
        </div>
        <Carousel items={cards} />
      </div>
    </div>
  );
}
