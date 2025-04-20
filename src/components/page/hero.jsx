"use client";
import { Spotlight } from "../ui/spotlight-new";
import CTAButton from "../ui/cta-button";

export const Hero = () => {
  return (
    <div className="h-screen w-full flex md:items-center md:justify-center bg-black antialiased bg-grid-white relative overflow-hidden">
      <Spotlight />
      <div className="p-4 max-w-5xl md:max-w-3xl lg:max-w-5xl mx-auto relative z-10 w-full pt-32 md:pt-20">
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-100 to-violet-950/40">
          Start and Build <br className="block sm:hidden" />
          Your Crypto <br className="block sm:hidden" />
          Portfolio Here <br className="hidden sm:block" />
        </h1>
        <p className="mt-2 md:mt-4 font-light text-sm md:text-lg lg:text-lg text-white max-w-5xl text-center mx-auto px-4 md:px-8">
          Build your dream crypto portfolio and discover winning strategies to
          navigate the crypto world only at{" "}
          <span className="font-normal">ZulCryptoCap!</span>
        </p>
        {/* Add CTAButton with proper spacing */}
        <div className="mt-8 flex justify-center">
          <CTAButton />
        </div>
      </div>
    </div>
  );
};
