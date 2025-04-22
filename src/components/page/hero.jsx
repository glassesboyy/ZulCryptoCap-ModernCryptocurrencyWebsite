"use client";
import CTAButton from "../ui/cta-button";
import { Spotlight } from "../ui/spotlight-new";

export const Hero = () => {
  return (
    <div
      id="home"
      className="relative h-screen w-full flex items-center justify-center bg-black antialiased bg-grid-white overflow-hidden"
    >
      <Spotlight />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full">
        <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-violet-950/50">
          Start and Build <br className="block md:hidden" />
          Your Crypto <br className="block md:hidden" />
          Portfolio Here
        </h1>
        <p className="mt-4 font-light text-base xs:text-lg sm:text-xl md:text-2xl text-white max-w-3xl md:max-w-4xl lg:max-w-5xl text-center mx-auto px-4">
          Build your dream crypto portfolio and discover winning strategies to
          navigate the crypto world only at{" "}
          <span className="font-normal">ZulCryptoCap!</span>
        </p>
        <div className="mt-6 xs:mt-8 sm:mt-10 flex justify-center">
          <CTAButton
            buttonText="Connect to Wallet"
            className="text-sm xs:text-base sm:text-lg"
          />
        </div>
      </div>
    </div>
  );
};
