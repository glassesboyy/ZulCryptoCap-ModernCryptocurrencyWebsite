import { IconArrowRight, IconNews } from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

export function NewsSection() {
  return (
    <div id="news" className="w-full ">
      <div className="w-full py-16 bg-black">
        <div className="max-w-7xl mx-auto mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">
            Latest Crypto News & Article
          </h2>
          <p className="text-lg font-light  text-white">
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

        <div className="mt-8 text-center">
          <button className="group px-6 py-3 bg-black underline uppercase text-white hover:text-violet-950 rounded-lg font-medium transition-colors inline-flex items-center gap-1 cursor-pointer">
            See All News & Article
            <IconArrowRight
              size={20}
              className="-rotate-45 transform transition-transform duration-300 group-hover:rotate-0"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

const NewsImage = ({ imagePath }) => (
  <div className="w-full h-full rounded-xl overflow-hidden">
    <img
      src={imagePath}
      alt="Crypto News"
      className="w-full h-full object-cover transition-all duration-500 group-hover/bento:scale-110"
    />
  </div>
);

const newsItems = [
  {
    title: "Bitcoin Surpasses $100K",
    description:
      "Bitcoin's remarkable surge past $100,000 marks a significant milestone, driven by increasing institutional adoption and growing mainstream acceptance. Major corporations and investment firms continue to add BTC to their portfolios.",
    header: <NewsImage imagePath="/news/news1.jpg" />,
    className: "md:col-span-2",
    icon: <IconNews className="h-4 w-4 text-violet-400" />,
  },
  {
    title: "DeFi Total Value Locked Soars",
    description:
      "DeFi ecosystem reaches new heights with $100B TVL as improved security and yield opportunities attract global investors.",
    header: <NewsImage imagePath="/news/news2.jpg" />,
    className: "md:col-span-1",
    icon: <IconNews className="h-4 w-4 text-violet-400" />,
  },
  {
    title: "ETH 2.0 Upgrade Impact",
    description:
      "Ethereum's shift to PoS reduces energy use by 99.95%, bringing better scalability and lower transaction fees.",
    header: <NewsImage imagePath="/news/news3.jpg" />,
    className: "md:col-span-1",
    icon: <IconNews className="h-4 w-4 text-violet-400" />,
  },
  {
    title: "NFT Gaming Revolution",
    description:
      "Play-to-earn games transform gaming industry as major studios embrace blockchain and NFT technology.",
    header: <NewsImage imagePath="/news/news4.jpg" />,
    className: "md:col-span-1",
    icon: <IconNews className="h-4 w-4 text-violet-400" />,
  },
  {
    title: "Crypto Regulation Updates",
    description:
      "New regulatory frameworks emerge worldwide, balancing investor protection with crypto innovation.",
    header: <NewsImage imagePath="/news/news5.jpg" />,
    className: "md:col-span-1",
    icon: <IconNews className="h-4 w-4 text-violet-400" />,
  },
  {
    title: "Web3 Innovation Wave",
    description:
      "Decentralized apps hit 10M daily users as Web3 platforms revolutionize digital interactions.",
    header: <NewsImage imagePath="/news/news6.jpg" />,
    className: "md:col-span-1",
    icon: <IconNews className="h-4 w-4 text-violet-400" />,
  },
  {
    title: "Future of Digital Finance",
    description:
      "Central banks worldwide accelerate CBDC development as cryptocurrency adoption transforms traditional finance. The integration of blockchain technology in mainstream banking promises to revolutionize payment systems and cross-border transactions.",
    header: <NewsImage imagePath="/news/news7.jpg" />,
    className: "md:col-span-2",
    icon: <IconNews className="h-4 w-4 text-violet-400" />,
  },
];
