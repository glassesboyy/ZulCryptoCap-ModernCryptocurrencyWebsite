import { IconArrowRight, IconNews } from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { getLatestNews } from "@/components/data/news-data";

const NewsImage = ({ imagePath }) => (
  <div className="w-full h-full rounded-xl overflow-hidden">
    <img
      src={imagePath}
      alt="Crypto News"
      className="w-full h-full object-cover transition-all duration-500 group-hover/bento:scale-110"
    />
  </div>
);

export function NewsSection({ showButton = true, maxItems = 7 }) {
  const newsItems = getLatestNews(maxItems).map((item) => ({
    title: item.title,
    description: item.description,
    header: <NewsImage imagePath={item.src} />,
    className:
      item.id === 1 || item.id === 7 ? "md:col-span-2" : "md:col-span-1",
    icon: <IconNews className="h-4 w-4 text-violet-400" />,
  }));

  return (
    <div id="news" className="w-full">
      <div className="w-full py-12 xs:py-16 sm:py-20 bg-black px-4 xs:px-6">
        <div className="max-w-7xl mx-auto mb-8 xs:mb-10 sm:mb-12">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-white mb-3 xs:mb-4">
            Latest Crypto News & Article
          </h2>
          <p className="text-base xs:text-lg font-light text-white/70">
            Stay informed with the latest cryptocurrency news and market trends,
            covering price changes, blockchain updates, and investor insights.
          </p>
        </div>

        <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem]">
          {newsItems.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
              icon={item.icon}
            />
          ))}
        </BentoGrid>

        {showButton && (
          <div className="mt-6 xs:mt-8 sm:mt-10 text-center">
            <button className="group px-4 xs:px-6 py-2 xs:py-3 bg-black underline uppercase text-sm xs:text-base text-white hover:text-violet-400 rounded-lg font-medium transition-colors inline-flex items-center gap-1 cursor-pointer">
              See All News & Article
              <IconArrowRight
                size={18}
                className="-rotate-45 transform transition-transform duration-300 group-hover:rotate-0"
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
