"use client";
import CTAButton from "../ui/cta-button";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

const tutorialContent = [
  {
    title: "Create Your Wallet",
    description:
      "Start your crypto journey by setting up a secure digital wallet. We'll guide you through choosing the right wallet and implementing essential security measures to protect your digital assets.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <img
          src="/tutorial/tutor1.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="wallet setup"
        />
      </div>
    ),
  },
  {
    title: "Buy Your First Crypto",
    description:
      "Learn how to purchase cryptocurrency safely and efficiently. Understand the different payment methods, exchanges, and best practices for making your first crypto investment.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--indigo-500))] text-white">
        <img
          src="/tutorial/tutor2.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="buying crypto"
        />
      </div>
    ),
  },
  {
    title: "Trading Basics",
    description:
      "Master the fundamentals of crypto trading. We'll cover essential concepts like order types, reading charts, and understanding market indicators to help you make informed trading decisions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        <img
          src="/tutorial/tutor3.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="trading basics"
        />
      </div>
    ),
  },
];

export function Tutorial() {
  return (
    <section className="py-20 bg-black">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-white text-center mb-4">
          Start Your Crypto Journey
        </h2>
        <p className="text-white font-light text-lg text-center mb-3 max-w-4xl mx-auto">
          Follow our comprehensive step-by-step guide designed to help beginners
          navigate the exciting world of cryptocurrency. From wallet setup to
          trading strategies, we'll transform you from crypto-curious to
          crypto-confident.
        </p>
        <div className="mb-10 flex justify-center">
          <CTAButton buttonText="Connect to Wallet Now!" />
        </div>
        <StickyScroll content={tutorialContent} />
      </div>
    </section>
  );
}
