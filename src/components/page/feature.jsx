"use client";
import {
  IconChartBar,
  IconExchange,
  IconShieldLock,
  IconWallet,
} from "@tabler/icons-react";
import CTASection from "../ui/cta-section";
import FeatureCard from "../ui/feature-card";

// Static feature data
const featureData = [
  {
    id: 1,
    icon: IconWallet,
    title: "Secure Wallet",
    description:
      "Store your crypto assets safely with our state-of-the-art digital wallet technology and advanced security measures.",
  },
  {
    id: 2,
    icon: IconChartBar,
    title: "Real-time Analytics",
    description:
      "Access detailed market analysis and real-time trading data to make informed investment decisions.",
  },
  {
    id: 3,
    icon: IconShieldLock,
    title: "Advanced Security",
    description:
      "Benefit from industry-leading security protocols and multi-factor authentication to protect your investments.",
  },
  {
    id: 4,
    icon: IconExchange,
    title: "Instant Trading",
    description:
      "Execute trades instantly with our high-performance trading engine and low latency infrastructure.",
  },
];

export const Feature = () => {
  return (
    <div
      id="feature"
      className="mx-auto py-12 xs:py-16 sm:py-20 md:py-24 bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-6">
        <div className="text-center mb-8 xs:mb-10 sm:mb-12">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-white mb-3 xs:mb-4">
            Our Featured Services
          </h2>
          <p className="text-white/70 text-base xs:text-lg font-light max-w-2xl mx-auto">
            Discover the powerful features that make our platform the preferred
            choice for crypto enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6">
          {featureData.map((feature) => (
            <FeatureCard
              key={feature.id}
              id={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        <CTASection />
      </div>
    </div>
  );
};
