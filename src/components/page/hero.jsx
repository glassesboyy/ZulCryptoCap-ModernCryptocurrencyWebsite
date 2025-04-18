"use client";
import { Spotlight } from "../ui/spotlight-new";

export const Hero = () => {
  return (
    <div className="h-screen w-full flex md:items-center md:justify-center bg-black antialiased bg-grid-white relative overflow-hidden">
      <Spotlight />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-100 to-black/5">
          Start and Build Your <br /> Crypto Portfolio Here
        </h1>
        <p className="mt-4 font-light text-xl text-white max-w-5xl text-center mx-auto">
          Build your dream crypto portfolio and discover winning strategies to
          navigate the crypto world only at ZulCryptoCap!
        </p>
      </div>
    </div>
  );
};
