"use client";

import {
  IconArrowLeft,
  IconChartBar,
  IconExchange,
  IconShieldLock,
  IconWallet,
} from "@tabler/icons-react";
import Link from "next/link";
import { use } from "react";

const featureDetails = {
  1: {
    icon: IconWallet,
    title: "Secure Wallet",
    description:
      "Store your crypto assets safely with our state-of-the-art digital wallet technology and advanced security measures.",
    longDescription:
      "Our secure wallet employs military-grade encryption and multi-signature technology to ensure your digital assets remain protected. With features like biometric authentication, hardware wallet integration, and real-time monitoring, you can rest assured that your cryptocurrencies are safe from unauthorized access.",
    benefits: [
      "Multi-layer security protocol",
      "24/7 monitoring system",
      "Instant access to your funds",
      "Multiple currency support",
    ],
  },
  2: {
    icon: IconChartBar,
    title: "Real-time Analytics",
    description:
      "Access detailed market analysis and real-time trading data to make informed investment decisions.",
    longDescription:
      "Our advanced analytics platform provides comprehensive market insights, price movements, and trading patterns in real-time. With customizable charts, technical indicators, and market sentiment analysis, you'll have all the tools needed to make informed trading decisions.",
    benefits: [
      "Live market data updates",
      "Advanced technical analysis tools",
      "Customizable dashboard",
      "Historical data access",
    ],
  },
  3: {
    icon: IconShieldLock,
    title: "Advanced Security",
    description:
      "Benefit from industry-leading security protocols and multi-factor authentication to protect your investments.",
    longDescription:
      "Our platform implements cutting-edge security measures including multi-factor authentication, cold storage solutions, and regular security audits to ensure your assets are protected against all types of threats. We maintain the highest standards of cybersecurity to give you peace of mind.",
    benefits: [
      "Multi-factor authentication",
      "Cold storage solution",
      "Regular security audits",
      "Insurance coverage",
    ],
  },
  4: {
    icon: IconExchange,
    title: "Instant Trading",
    description:
      "Execute trades instantly with our high-performance trading engine and low latency infrastructure.",
    longDescription:
      "Experience lightning-fast trade execution with our state-of-the-art trading engine. Our platform ensures minimal latency and maximum reliability, allowing you to capitalize on market opportunities instantly. With support for multiple order types and advanced trading features, you'll never miss a trading opportunity.",
    benefits: [
      "Low latency execution",
      "Multiple order types",
      "Advanced trading features",
      "High liquidity pools",
    ],
  },
};

export default function FeatureDetail({ params }) {
  const { id } = use(params);

  const feature = featureDetails[id];
  const Icon = feature.icon;

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/#feature"
          className="inline-flex items-center text-violet-400 hover:text-white mb-8"
        >
          <IconArrowLeft className="mr-2" />
          Back to Features
        </Link>

        <div className="space-y-8">
          <div className="flex items-center space-x-4">
            <div className="h-16 w-16 rounded-full bg-violet-900/20 p-2 flex items-center justify-center">
              <Icon className="h-8 w-8 text-violet-400" />
            </div>
            <h1 className="text-4xl font-bold">{feature.title}</h1>
          </div>

          <p className="text-xl text-white/70">{feature.description}</p>

          <div className="bg-violet-900/20 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">Detailed Overview</h2>
            <p className="text-white/80">{feature.longDescription}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Key Benefits</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {feature.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-violet-400 rounded-full"></div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
