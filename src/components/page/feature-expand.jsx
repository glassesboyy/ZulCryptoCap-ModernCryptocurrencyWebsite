import {
  IconChartBar,
  IconExchange,
  IconShieldLock,
  IconWallet,
} from "@tabler/icons-react";

const detailedFeatures = [
  {
    icon: IconWallet,
    title: "Secure Wallet",
    description:
      "Experience unparalleled security for your digital assets with our military-grade wallet technology, designed by cybersecurity experts from leading financial institutions.",
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
  },
  {
    icon: IconChartBar,
    title: "Real-time Analytics",
    description:
      "Gain a competitive edge with our professional-grade analytics suite, powered by advanced machine learning algorithms and real-time market data from over 100 sources.",
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
  },
  {
    icon: IconShieldLock,
    title: "Advanced Security",
    description:
      "Rest easy knowing your investments are protected by the same security standards used by international banks, with multi-layered protection and continuous monitoring.",
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
  },
  {
    icon: IconExchange,
    title: "Instant Trading",
    description:
      "Execute trades at lightning speed with our next-generation trading engine, capable of processing over 100,000 transactions per second with minimal latency.",
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
  },
];

export function FeatureExpand() {
  return (
    <section className="py-16 sm:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 xs:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-white mb-4">
            Why Choose Our Platform
          </h2>
          <p className="text-white/70 text-base xs:text-lg font-light max-w-2xl mx-auto">
            Discover how our advanced features can elevate your trading
            experience
          </p>
        </div>

        <div className="space-y-16">
          {detailedFeatures.map((feature, idx) => (
            <div
              key={feature.title}
              className={`flex flex-col ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8 md:gap-12`}
            >
              <div className="w-full md:w-1/2">
                <div className="bg-white/5 rounded-2xl p-6 sm:p-8">
                  <feature.icon className="w-12 h-12 text-blue-500 mb-4" />
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 text-lg mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.details.map((detail, index) => (
                      <li
                        key={index}
                        className="flex items-center text-white/60"
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <feature.icon className="w-24 h-24 text-blue-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
