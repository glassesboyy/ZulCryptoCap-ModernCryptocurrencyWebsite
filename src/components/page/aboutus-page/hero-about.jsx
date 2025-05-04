"use client";
import { Spotlight } from "../../ui/spotlight-new";

export const HeroAbout = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-black antialiased bg-grid-white overflow-hidden">
      <Spotlight />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full">
        <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-violet-950/50">
          About Us
        </h1>
        <p className="mt-4 font-light text-base xs:text-lg sm:text-xl md:text-2xl text-white max-w-3xl md:max-w-4xl lg:max-w-5xl text-center mx-auto px-4">
          Learn more about our platform, mission, and commitment to
          revolutionizing the cryptocurrency trading experience.
        </p>
      </div>
    </div>
  );
};
