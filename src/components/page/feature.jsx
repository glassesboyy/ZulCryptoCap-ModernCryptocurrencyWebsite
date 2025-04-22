"use client";
import {
  IconChartBar,
  IconExchange,
  IconShieldLock,
  IconWallet,
} from "@tabler/icons-react";
import CTASection from "../ui/cta-section";
import FeatureCard from "../ui/feature-card";

export const Feature = () => {
  return (
    <div id="feature" className="mx-auto py-24 bg-black ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">
            Our Featured Services
          </h2>
          <p className="text-white font-light text-lg mx-auto">
            Discover the powerful features that make our platform the preferred
            choice for crypto enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={IconWallet}
            title="Secure Wallet"
            description="Store your crypto assets safely with our state-of-the-art digital wallet technology and advanced security measures."
          />
          <FeatureCard
            icon={IconChartBar}
            title="Real-time Analytics"
            description="Access detailed market analysis and real-time trading data to make informed investment decisions."
          />
          <FeatureCard
            icon={IconShieldLock}
            title="Advanced Security"
            description="Benefit from industry-leading security protocols and multi-factor authentication to protect your investments."
          />
          <FeatureCard
            icon={IconExchange}
            title="Instant Trading"
            description="Execute trades instantly with our high-performance trading engine and low latency infrastructure."
          />
        </div>

        <CTASection />
      </div>
    </div>
  );
};
