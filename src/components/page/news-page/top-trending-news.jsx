"use client";
import { getTrendingNews } from "@/components/data/news-data";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";

export function TopTrendingNews() {
  const newsItems = getTrendingNews();

  const cards = newsItems.map((news, index) => (
    <Card
      key={news.id}
      card={{
        title: news.title,
        category: news.categories[0],
        categories: news.categories,
        imageUrl: news.imageUrl,
        src: news.imageUrl,
        content: (
          <div className="space-y-8">
            {/* Text Content Section */}
            <div className="bg-black/80 p-8 rounded-3xl border border-violet-500/20">
              <div className="flex flex-col gap-6">
                <div className="space-y-4">
                  {/* Categories and Date */}
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 text-sm text-violet-300 bg-violet-500/20 rounded-full">
                      {news.categories[0]}
                    </span>
                    <span className="text-white/60 text-sm">
                      {new Date(news.publishedAt).toLocaleDateString()}
                    </span>
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {news.title}
                  </h3>
                  <p className="text-white/80 text-base md:text-lg">
                    {news.description}
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <span className="text-white/60 text-sm">
                    By {news.author}
                  </span>
                  <span className="text-white/60 text-sm">•</span>
                  <span className="text-white/60 text-sm">
                    {news.sourceName}
                  </span>
                </div>

                {/* Full Content */}
                <p className="text-white/70 text-base md:text-lg">
                  {news.content}
                </p>
              </div>
            </div>

            {/* Image Section with separate border */}
            <div className="bg-violet-950/20 p-4 rounded-3xl border border-violet-500/20">
              <img
                src={news.imageUrl}
                alt={news.title}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        ),
      }}
      index={index}
    />
  ));

  return (
    <div className="w-full bg-black py-40">
      <div className="max-w-7xl mx-auto">
        <div className="relative max-w-2xl mr-auto mb-12">
          <h2 className="text-left relative text-3xl xs:text-4xl sm:text-5xl font-bold text-white mb-3 xs:mb-4">
            Top Trending News
          </h2>
          <p className="text-left relative text-white/70 text-base xs:text-lg font-light">
            Discover the hottest stories shaping the future of cryptocurrency
            and blockchain technology
          </p>
        </div>
        <Carousel items={cards} />
      </div>
    </div>
  );
}
