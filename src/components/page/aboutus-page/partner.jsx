import { Marquee } from "@/components/ui/logo-marquee";
import Image from "next/image";

const partners = [
  {
    name: "Binance",
    url: "/partners/binance.svg",
  },
  {
    name: "Microsoft",
    url: "/partners/microsoft.svg",
  },
  {
    name: "CoinGecko",
    url: "/partners/coingecko.svg",
  },
  {
    name: "Tesla",
    url: "/partners/tesla.svg",
  },
  {
    name: "Google",
    url: "/partners/google.svg",
  },
  {
    name: "Nvidia",
    url: "/partners/nvidia.svg",
  },
  {
    name: "CryptoCom",
    url: "/partners/crypto-com.svg",
  },
  {
    name: "Bitmex",
    url: "/partners/bitmex.svg",
  },
  {
    name: "Alphabet",
    url: "/partners/alphabet.svg",
  },
  {
    name: "Meta",
    url: "/partners/meta.svg",
  },
  { name: "BlockchainGroup", url: "/partners/blockchain-group.svg" },
];

export function Partner() {
  return (
    <section className="py-16 sm:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 xs:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Partnerships & Collaborations
          </h2>
          <p className="text-white/70 text-base xs:text-lg font-light max-w-2xl mx-auto">
            We've built strong partnerships with leading companies in the
            blockchain and cryptocurrency space to provide you with the best
            trading experience.
          </p>
        </div>

        <div className="relative mt-12">
          {/* First row - left to right */}
          <Marquee className="[--duration:40s]" pauseOnHover>
            {partners.slice(0, 4).map((partner) => (
              <div
                key={partner.name}
                className="mx-8 flex flex-col items-center"
              >
                <Image
                  width={120}
                  height={40}
                  src={partner.url}
                  alt={partner.name}
                  className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 hover:grayscale-0"
                />
                <span className="mt-2 text-sm text-white/40">
                  {partner.type}
                </span>
              </div>
            ))}
          </Marquee>

          {/* Second row - right to left */}
          <Marquee className="mt-8 [--duration:40s]" reverse pauseOnHover>
            {partners.slice(4).map((partner) => (
              <div
                key={partner.name}
                className="mx-8 flex flex-col items-center"
              >
                <Image
                  width={120}
                  height={40}
                  src={partner.url}
                  alt={partner.name}
                  className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 hover:grayscale-0"
                />
                <span className="mt-2 text-sm text-white/40">
                  {partner.type}
                </span>
              </div>
            ))}
          </Marquee>

          {/* Gradient overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black" />
        </div>
      </div>
    </section>
  );
}
