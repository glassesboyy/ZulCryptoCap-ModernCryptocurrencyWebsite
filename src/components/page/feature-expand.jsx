"use client";
import { featureData } from "@/components/data/feature-data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

export function FeatureExpand() {
  const [activeFeature, setActiveFeature] = useState(0);

  const getFeatureStyles = (feature, isActive) => {
    const baseStyles =
      "relative p-4 rounded-xl transition-all duration-300 flex flex-col items-center text-center";
    return cn(
      baseStyles,
      isActive
        ? "bg-violet-500/20 border border-violet-500/30"
        : "bg-white/5 hover:bg-white/10"
    );
  };

  const getIconStyles = (feature, isActive) => {
    const baseStyles = "w-16 h-16 mx-auto mb-3 z-10";
    return cn(baseStyles, isActive ? "text-violet-400" : "text-white/60");
  };

  const IconComponent = featureData[activeFeature].icon;

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
          {featureData.map((feature, idx) => {
            const FeatureIcon = feature.icon;
            return (
              <button
                key={feature.title}
                onClick={() => setActiveFeature(idx)}
                className={getFeatureStyles(feature, activeFeature === idx)}
              >
                <FeatureIcon
                  className={getIconStyles(feature, activeFeature === idx)}
                />
                <h3 className="text-lg font-medium text-white mb-1 z-10">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/60 z-10">{feature.subtitle}</p>
                {activeFeature === idx && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 border-2 border-violet-950 bg-violet-950/20 rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Feature Details Panel */}
        <motion.div
          key={activeFeature}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl p-8 border border-violet-950 bg-gradient-to-br from-violet-500/10 to-violet-900/20"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-6xl font-bold text-white mb-4">
                {featureData[activeFeature].title}
              </h3>
              <p className="text-xl text-white/80 mb-6 font-normal">
                {featureData[activeFeature].description}
              </p>
              <ul className="space-y-4">
                {featureData[activeFeature].details.map((detail, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 text-white/70 font-light"
                  >
                    <span className="w-2 h-2 mt-2 rounded-full bg-violet-400" />
                    <span>{detail}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-xl p-8 flex items-center justify-center bg-gradient-to-b from-violet-500/10 to-violet-900/20">
                <IconComponent className="w-32 h-32 text-violet-400" />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-violet-500/5 to-transparent blur-3xl -z-10" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
