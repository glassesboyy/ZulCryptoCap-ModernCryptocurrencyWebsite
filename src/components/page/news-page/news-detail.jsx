"use client";

import { newsData } from "@/components/data/news-data";
import { ShareButtons } from "@/components/ui/share-buttons";
import { IconArrowLeft, IconEye, IconNews } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function NewsDetailClient({ id }) {
  const router = useRouter();
  const news = newsData.find((item) => item.id === id);

  if (!news) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">News not found</h1>
          <button
            onClick={() => router.push("/news#allnews")}
            className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300"
          >
            <IconArrowLeft size={20} />
            Back to News
          </button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatViews = (views) => {
    return new Intl.NumberFormat("en-US", {
      notation: "compact",
      compactDisplay: "short",
    }).format(views);
  };

  // Get related news based on categories
  const relatedNews = newsData
    .filter(
      (item) =>
        item.id !== id &&
        item.categories.some((cat) => news.categories.includes(cat))
    )
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="w-full h-[50vh] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
        <img
          src={news.imageUrl}
          alt={news.title}
          className="w-full h-full object-cover"
        />
        {/* Back Button */}
        <div className="absolute top-6 left-6 z-20">
          <button
            onClick={() => router.push("/news#allnews")}
            className="sticky inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black/50 backdrop-blur-sm border border-white/10 text-white hover:bg-violet-500/20 hover:border-violet-500/50 transition-all duration-300"
          >
            <IconArrowLeft size={20} />
            <span>Back to News</span>
          </button>
        </div>
      </div>

      <div className="w-full -mt-32 relative z-20 pb-10">
        <div className="max-w-4xl mx-auto px-4 xs:px-6">
          {/* Title & Meta */}
          <div className="mb-8">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              {news.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-violet-400">
                <img
                  src="/team/employee-example.jpg"
                  alt={news.author}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium">{news.author}</p>
                  <p className="text-white/60">
                    {formatDate(news.publishedAt)}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <IconEye size={18} />
                <span>{formatViews(news.views)} views</span>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {news.categories.map((category, index) => (
              <Link
                href={`/news?category=${category.toLowerCase()}`}
                key={index}
                className="px-4 py-1.5 text-sm rounded-full bg-violet-500/10 text-violet-400 hover:bg-violet-500/20 transition-colors"
              >
                {category}
              </Link>
            ))}
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none mb-12 text-justify">
            <p className="text-xl text-white/80 mb-8">{news.content}</p>
            <div className="my-8 p-6 bg-violet-950/20 rounded-xl">
              <p className="text-lg font-medium italic text-white/70">
                {news.highlight}
              </p>
            </div>
            <p className="text-white/80 text-xl">{news.contentExpand}</p>
          </div>

          {/* Source & Share */}
          <div className="flex flex-wrap justify-between items-center gap-4 py-6 border-t border-white/10">
            <a
              href={`https://${news.sourceName
                .toLowerCase()
                .replace(/\s+/g, "")}.com`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-violet-400 hover:text-violet-300"
            >
              <IconNews size={20} />
              <span>Source: {news.sourceName}</span>
            </a>
            <ShareButtons title={news.title} />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 py-6 border-t border-white/10">
            {news.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm rounded-lg bg-violet-950/40 text-violet-300"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Related News */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">Related News</h2>
            {relatedNews.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedNews.map((item) => (
                  <Link
                    key={item.id}
                    href={`/news/detail/${item.id}`}
                    className="group"
                  >
                    <div className="aspect-video overflow-hidden rounded-xl mb-4">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-violet-400 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/60 mt-2">
                      {formatDate(item.publishedAt)}
                    </p>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-10 bg-violet-950/20 rounded-xl">
                <p className="text-white/70">
                  No related news found for this topic.
                </p>
                <Link
                  href="/news#allnews"
                  className="mt-4 inline-flex items-center gap-2 text-violet-400 hover:text-violet-300"
                >
                  <IconArrowLeft size={16} />
                  <span>Browse all news</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
