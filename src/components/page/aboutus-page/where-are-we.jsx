"use client";
import {
  IconBuilding,
  IconMap,
  IconUsers,
  IconWorld,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const locations = [
  {
    city: "Singapore",
    role: "Global Headquarters",
    description:
      "Our strategic hub in the heart of Asia's financial district, driving innovation and setting new standards in crypto trading. Singapore's robust regulatory framework and technological infrastructure provide the perfect foundation for our global operations.",
    details: [
      "Primary trading operations center",
      "Executive management office",
      "Strategic planning division",
      "Regional compliance hub",
    ],
    icon: IconBuilding,
    year: "2020",
  },
  {
    city: "Jakarta",
    role: "Tech Hub",
    description:
      "Leveraging Indonesia's dynamic tech talent pool, our Jakarta office spearheads platform development and technical innovation. This vibrant tech hub combines local expertise with global standards to create cutting-edge trading solutions.",
    details: [
      "Core development team",
      "Innovation lab",
      "UI/UX research center",
      "Infrastructure management",
    ],
    icon: IconMap,
    year: "2021",
  },
  {
    city: "Vietnam",
    role: "Regional Office",
    description:
      "Strategically positioned in one of Southeast Asia's fastest-growing crypto markets, our Vietnam office focuses on regional expansion and market adaptation. This location serves as a crucial bridge between traditional finance and crypto innovation.",
    details: [
      "Southeast Asian operations",
      "Market research team",
      "Local partnerships",
      "Community engagement",
    ],
    icon: IconWorld,
    year: "2022",
  },
  {
    city: "India",
    role: "Support Center",
    description:
      "Our state-of-the-art support center in India ensures round-the-clock assistance for our global user base. With a team of highly skilled professionals, we provide comprehensive support in multiple languages and across all time zones.",
    details: [
      "24/7 customer support",
      "Technical assistance",
      "Quality assurance",
      "Training facility",
    ],
    icon: IconUsers,
    year: "2023",
  },
];

export function WhereAreWe() {
  return (
    <section className="py-16 sm:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 xs:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Global Journey
          </h2>
          <p className="text-white/70 text-base xs:text-lg font-light max-w-2xl mx-auto">
            From our founding in Singapore to our expansion across Asia, we're
            building a network of excellence to serve traders worldwide.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white hidden md:block" />

          {/* Location cards */}
          <div className="space-y-12">
            {locations.map((location, idx) => (
              <motion.div
                key={location.city}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative flex flex-col md:flex-row gap-8 items-start"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-7 -translate-x-1/2 w-4 h-4 rounded-full bg-violet-400 border-4 border-black" />

                {/* Year tag */}
                <div className="flex items-center gap-4 md:w-32">
                  <location.icon className="w-8 h-8 text-white" />
                  <span className="text-violet-400 font-bold">
                    {location.year}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 bg-violet-950/20 rounded-2xl p-6 border border-violet-950">
                  <h3 className="text-3xl font-bold text-white mb-1">
                    {location.city}
                  </h3>
                  <p className="text-violet-400 font-base mb-4">
                    {location.role}
                  </p>
                  <p className="text-white/80 text-lg mb-6 font-light">
                    {location.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {location.details.map((detail, index) => (
                      <li
                        key={index}
                        className="flex items-center text-white/60 font-light"
                      >
                        <span className="w-1.5 h-1.5 bg-violet-400 rounded-full mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 p-8">
          {[
            { label: "Countries", value: "4+" },
            { label: "Team Members", value: "200+" },
            { label: "Years of Growth", value: "4" },
            { label: "Support Hours", value: "24/7" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-5xl font-bold text-violet-400">{stat.value}</p>
              <p className="text-white/60 text-xl mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
