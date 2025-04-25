"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const teamProfiles = [
  {
    quote:
      "Leading innovation in cryptocurrency trading with a focus on security and user experience.",
    name: "Alex Chen",
    designation: "CEO & Founder | Ex-Binance",
    src: "/team/team1.jpg", // Update with actual image path
  },
  {
    quote:
      "Building robust infrastructure to ensure seamless and secure trading experiences.",
    name: "Sarah Wilson",
    designation: "CTO | Ex-Google",
    src: "/team/team2.jpg", // Update with actual image path
  },
  {
    quote:
      "Analyzing market trends to provide our users with the best trading opportunities.",
    name: "Michael Zhang",
    designation: "Head of Research | Ex-Goldman Sachs",
    src: "/team/team3.jpg", // Update with actual image path
  },
  {
    quote:
      "Ensuring compliance and security in all aspects of our platform operations.",
    name: "Emma Rodriguez",
    designation: "Head of Security | Ex-Coinbase",
    src: "/team/team4.jpg", // Update with actual image path
  },
];

export function WhoAreWe() {
  return (
    <section className="py-12 xs:py-16 sm:py-20 bg-black">
      <div className="container max-w-7xl mx-auto px-4 xs:px-6">
        <div className="text-center mb-8 xs:mb-10 sm:mb-12">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-white mb-3 xs:mb-4">
            Who We Are
          </h2>
          <p className="text-white/70 font-light text-base xs:text-lg max-w-2xl mx-auto">
            Meet our dedicated team of experts who are passionate about
            revolutionizing the crypto trading experience.
          </p>
        </div>

        <div className="mt-8">
          <AnimatedTestimonials testimonials={teamProfiles} autoplay={true} />
        </div>
      </div>
    </section>
  );
}
