"use client";

export function OurMissionVision() {
  return (
    <section className="py-12 xs:py-16 sm:py-20 bg-black">
      <div className="container max-w-7xl mx-auto px-4 xs:px-6">
        <div className="text-center mb-8 xs:mb-10 sm:mb-12">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-white mb-3 xs:mb-4">
            Our Mission & Vision
          </h2>
          <p className="text-white/70 text-base xs:text-lg font-light max-w-2xl mx-auto">
            Building the future of digital asset trading and blockchain
            technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-8">
          {/* Mission Section */}
          <div className="bg-gradient-to-br from-violet-950/50 to-black p-6 xs:p-8 rounded-2xl border border-violet-900/20">
            <h3 className="text-2xl xs:text-3xl font-bold text-violet-400 mb-4">
              Our Mission
            </h3>
            <p className="text-white/70 text-base xs:text-lg font-light leading-relaxed">
              Providing real-time, accurate, and accessible crypto market data
              for all levels of investors — from beginners to professionals. We
              strive to empower individuals with the tools and knowledge needed
              to navigate the digital asset landscape confidently.
            </p>
          </div>

          {/* Vision Section */}
          <div className="bg-gradient-to-br from-violet-950/50 to-black p-6 xs:p-8 rounded-2xl border border-violet-900/20">
            <h3 className="text-2xl xs:text-3xl font-bold text-violet-400 mb-4">
              Our Vision
            </h3>
            <p className="text-white/70 text-base xs:text-lg font-light leading-relaxed">
              To become the leading reference platform in the digital asset and
              blockchain technology space across Southeast Asia and globally.
              Through innovation and reliability, we aim to shape the future of
              financial technology and digital investments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
