"use client";
import { cn } from "@/lib/utils";
import {
  IconChartBar,
  IconExchange,
  IconShieldLock,
  IconWallet,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useState } from "react";

const detailedFeatures = [
  {
    icon: IconWallet,
    title: "Secure Wallet",
    subtitle: "Enterprise-grade security for your assets",
    description:
      "Experience unparalleled security for your digital assets with our military-grade wallet technology.",
    details: [
      "Multi-signature security protocols requiring multiple approvals for large transactions",
      "Enterprise-grade cold storage solution with geographical distribution",
      "24/7 real-time monitoring with instant SMS and email alerts for all account activities",
      "Automated daily backups with encrypted off-site storage and instant recovery options",
      "Regular security audits by top blockchain security firms",
      "Up to $100M insurance coverage for digital assets",
      "Customizable spending limits and withdrawal whitelisting",
      "Zero-trust architecture with hardware security modules (HSM)",
    ],
    color: "violet",
    gradient: "from-violet-500/20 to-fuchsia-500/20",
  },
  {
    icon: IconChartBar,
    title: "Real-time Analytics",
    subtitle: "Data-driven trading decisions",
    description:
      "Gain a competitive edge with our professional-grade analytics suite powered by AI.",
    details: [
      "Advanced TradingView integration with custom indicator support",
      "AI-powered market sentiment analysis from social media and news sources",
      "Fully customizable dashboard with over 50 technical indicators",
      "Historical data analysis going back to the inception of each cryptocurrency",
      "Real-time order book visualization and depth analysis",
      "Cross-exchange arbitrage opportunity detection",
      "Customizable price alerts with multiple trigger conditions",
      "Portfolio performance analytics with tax reporting features",
    ],
    color: "blue",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: IconShieldLock,
    title: "Advanced Security",
    subtitle: "Bank-grade protection protocols",
    description:
      "Rest easy knowing your investments are protected by international banking standards.",
    details: [
      "Industry-leading two-factor authentication with hardware key support (YubiKey)",
      "Advanced biometric verification including facial recognition and fingerprint scanning",
      "24/7 security operations center with automated threat detection",
      "Comprehensive insurance coverage up to $100M through Lloyd's of London",
      "Anti-phishing protection with AI-powered fraud detection",
      "IP address whitelisting and suspicious activity detection",
      "Regular penetration testing by certified security experts",
      "Secure API endpoints with robust encryption protocols",
    ],
    color: "emerald",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: IconExchange,
    title: "Instant Trading",
    subtitle: "Lightning-fast execution",
    description:
      "Execute trades at unprecedented speeds with our next-generation trading engine.",
    details: [
      "Sub-millisecond order execution with high-frequency trading capability",
      "Smart order routing across multiple liquidity providers",
      "Advanced order types including OCO, trailing stops, and scaled orders",
      "Custom automated trading strategies with visual strategy builder",
      "Direct market access to over 100 exchanges worldwide",
      "Real-time trade execution reports and analytics",
      "Zero-fee maker orders and volume-based fee discounts",
      "Cross-margin trading with up to 100x leverage on select pairs",
    ],
    color: "orange",
    gradient: "from-orange-500/20 to-amber-500/20",
  },
];

export function FeatureExpand() {
  const [activeFeature, setActiveFeature] = useState(0);

  const getFeatureStyles = (feature, isActive) => {
    const baseStyles =
      "relative p-4 rounded-xl transition-all duration-300 flex flex-col items-center text-center";
    const colorStyles = {
      violet: "bg-violet-500/20 border border-violet-500/30",
      blue: "bg-blue-500/20 border border-blue-500/30",
      emerald: "bg-emerald-500/20 border border-emerald-500/30",
      orange: "bg-orange-500/20 border border-orange-500/30",
    };
    const inactiveStyles = "bg-white/5 hover:bg-white/10";

    return cn(
      baseStyles,
      isActive ? colorStyles[feature.color] : inactiveStyles
    );
  };

  const getIconStyles = (feature, isActive) => {
    const baseStyles = "w-16 h-16 mx-auto mb-3";
    const colorStyles = {
      violet: "text-violet-400",
      blue: "text-blue-400",
      emerald: "text-emerald-400",
      orange: "text-orange-400",
    };
    const inactiveStyles = "text-white/60";

    return cn(
      baseStyles,
      isActive ? colorStyles[feature.color] : inactiveStyles
    );
  };

  const getDotStyles = (feature) => {
    const baseStyles = "w-2 h-2 mt-2 rounded-full";
    const colorStyles = {
      violet: "bg-violet-400",
      blue: "bg-blue-400",
      emerald: "bg-emerald-400",
      orange: "bg-orange-400",
    };

    return cn(baseStyles, colorStyles[feature.color]);
  };

  return (
    <section className="py-16 sm:py-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 xs:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-white mb-4">
            Platform Features
          </h2>
          <p className="text-white/70 text-base xs:text-lg font-light max-w-2xl mx-auto">
            Discover how our advanced features can elevate your trading
            experience
          </p>
        </div>

        {/* Feature Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {detailedFeatures.map((feature, idx) => (
            <button
              key={feature.title}
              onClick={() => setActiveFeature(idx)}
              className={getFeatureStyles(feature, activeFeature === idx)}
            >
              <feature.icon
                className={getIconStyles(feature, activeFeature === idx)}
              />
              <h3 className="text-lg font-medium text-white mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-white/60">{feature.subtitle}</p>
              {activeFeature === idx && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 border-2 border-current rounded-xl"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Feature Details Panel */}
        <motion.div
          key={activeFeature}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={cn(
            "rounded-2xl p-8 border border-white/10 bg-gradient-to-br",
            detailedFeatures[activeFeature].gradient
          )}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-6xl font-bold text-white mb-4">
                {detailedFeatures[activeFeature].title}
              </h3>
              <p className="text-xl text-white/80 mb-6 font-normal">
                {detailedFeatures[activeFeature].description}
              </p>
              <ul className="space-y-4">
                {detailedFeatures[activeFeature].details.map((detail, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 text-white/70 font-light"
                  >
                    <span
                      className={getDotStyles(detailedFeatures[activeFeature])}
                    />
                    <span>{detail}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div
                className={cn(
                  "aspect-square rounded-xl p-8 flex items-center justify-center bg-gradient-to-b",
                  detailedFeatures[activeFeature].gradient
                )}
              >
                {(() => {
                  const IconComponent = detailedFeatures[activeFeature].icon;
                  return (
                    <IconComponent
                      className={getIconStyles(
                        detailedFeatures[activeFeature],
                        true
                      )}
                    />
                  );
                })()}
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-3xl -z-10" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
