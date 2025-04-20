"use client";
import CTAButton from "./cta-button";

const ArrowIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="opacity-90"
  >
    <path
      d="M5 12H19M19 12L12 5M19 12L12 19"
      stroke="url(#paint0_linear_arrow)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_arrow"
        x1="5"
        y1="5"
        x2="19"
        y2="19"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8B5CF6" />
        <stop offset="1" stopColor="#3B82F6" />
      </linearGradient>
    </defs>
  </svg>
);

const CTASection = () => {
  return (
    <div className="relative mt-24 rounded-2xl border border-violet-900/30 bg-black/40 p-12 backdrop-blur-md overflow-hidden">
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-900/30 to-transparent" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          New to Cryptocurrency? We've Got You Covered.
        </h2>
        <p className="text-lg text-white/70 mb-4 max-w-3xl">
          Curious about crypto but not sure where to start? We’ll break down
          what cryptocurrencies are, how they work, and why owning some today
          could be one of the smartest moves you’ll make. Let’s dive in and take
          your first step into the future of finance.
        </p>

        <CTAButton buttonText="Learn & Explore Now" icon={ArrowIcon} />
      </div>
    </div>
  );
};

export default CTASection;
