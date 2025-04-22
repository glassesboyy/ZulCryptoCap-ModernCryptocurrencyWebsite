"use client";

import { useState } from "react";

const faqs = [
  {
    id: "faq-1",
    question: "What is cryptocurrency?",
    answer:
      "Cryptocurrency is a digital or virtual form of currency that uses cryptography for security, making it difficult to counterfeit. It operates on blockchain technology, a decentralized network that records all transactions.",
  },
  {
    id: "faq-2",
    question: "How do I start investing in cryptocurrency?",
    answer:
      "To start investing, create an account on a reputable cryptocurrency exchange, verify your identity, deposit funds, and then you can buy various cryptocurrencies. It's important to research and understand the market before investing.",
  },
  {
    id: "faq-3",
    question: "What is blockchain technology?",
    answer:
      "Blockchain is a distributed ledger technology that records all transactions across a network of computers. It's transparent, secure, and decentralized, making it the foundation of cryptocurrencies.",
  },
  {
    id: "faq-4",
    question: "Is cryptocurrency safe to invest in?",
    answer:
      "Like any investment, cryptocurrency carries risks. The market can be volatile, but many investors include it in their portfolio. It's important to invest only what you can afford to lose and diversify your investments.",
  },
  {
    id: "faq-5",
    question: "What are crypto wallets?",
    answer:
      "Crypto wallets are digital tools that store your cryptocurrencies. They come in two main types: hot wallets (connected to the internet) and cold wallets (offline storage). They're essential for securing your digital assets.",
  },
  {
    id: "faq-6",
    question: "How do cryptocurrency transactions work?",
    answer:
      "Cryptocurrency transactions occur directly between users (peer-to-peer) and are verified by network nodes through cryptography. Each transaction is recorded on the blockchain, ensuring transparency and security.",
  },
  {
    id: "faq-7",
    question: "What is mining in cryptocurrency?",
    answer:
      "Mining is the process of verifying and adding cryptocurrency transactions to the blockchain ledger. Miners use powerful computers to solve complex mathematical problems, and in return, they receive cryptocurrency rewards.",
  },
  {
    id: "faq-8",
    question: "What affects cryptocurrency prices?",
    answer:
      "Cryptocurrency prices are influenced by various factors including market demand, regulatory news, technological developments, media coverage, and overall market sentiment. This can lead to significant price volatility.",
  },
];

const leftColumnFaqs = faqs.slice(0, 4);
const rightColumnFaqs = faqs.slice(4, 8);

export const Faq = () => {
  const [activeId, setActiveId] = useState(null);

  const handleClick = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  const renderFaqItem = (faq) => (
    <div
      key={faq.id}
      className="faq-item group rounded-md border border-violet-950/50 bg-gradient-to-tl from-violet-950/40 to-transparent hover:bg-violet-500/10 hover:border-violet-950 transition-all duration-500"
    >
      <button
        className="flex w-full items-center justify-between px-4 py-5 sm:p-6 transition-all duration-300"
        onClick={() => handleClick(faq.id)}
      >
        <span className="text-base md:text-xl lg:text-lg font-normal text-white">
          {faq.question}
        </span>
        <span className="ml-6 flex-shrink-0">
          <svg
            className={`h-6 w-6 text-violet-400 transition-all duration-500 ${
              activeId === faq.id ? "rotate-[360deg]" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.3}
              d={activeId === faq.id ? "M19 9l-7 7-7-7" : "M12 4v16m8-8H4"}
            />
          </svg>
        </span>
      </button>
      <div
        className={`px-4 pb-5 sm:px-6 sm:pb-6 overflow-hidden transition-all duration-300 ${
          activeId === faq.id ? "block" : "hidden"
        }`}
      >
        <p className="text-sm md:text-base lg:text-base text-white/70 font-light">
          {faq.answer}
        </p>
      </div>
    </div>
  );

  return (
    <div className="w-full py-8 md:py-20 lg:py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-2 text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">
            Common Questions About Crypto
          </h2>
          <p className="text-white font-light text-lg">
            Find clear answers to common questions about cryptocurrency,
            blockchain technology, and digital assets. All in one place.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <div className="flex-1 space-y-4">
            {leftColumnFaqs.map(renderFaqItem)}
          </div>
          <div className="flex-1 space-y-4">
            {rightColumnFaqs.map(renderFaqItem)}
          </div>
        </div>
      </div>
    </div>
  );
};
