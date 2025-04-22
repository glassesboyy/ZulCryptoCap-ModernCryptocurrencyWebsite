"use client";
import { IconArrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="relative overflow-hidden rounded-xl xs:rounded-2xl border border-violet-900/30 bg-black/40 p-4 xs:p-5 sm:p-6 backdrop-blur-md hover:border-white/20 cursor-pointer h-full flex flex-col"
    >
      <div className="flex flex-col flex-grow">
        <div className="flex mb-4 xs:mb-6">
          <div className="h-16 w-16 xs:h-20 xs:w-20 sm:h-24 sm:w-24 rounded-full bg-violet-900/20 p-2 flex items-center justify-center">
            <Icon className="h-10 w-10 xs:h-12 xs:w-12 sm:h-16 sm:w-16 text-violet-400" />
          </div>
        </div>

        <div className="space-y-2 xs:space-y-3">
          <h3 className="text-xl xs:text-2xl font-bold text-white">{title}</h3>
          <p className="text-white/70 text-xs xs:text-sm">{description}</p>
        </div>
      </div>

      <div className="mt-4 xs:mt-6 flex justify-end">
        <button className="group inline-flex items-center gap-1 text-sm xs:text-base text-violet-400 hover:text-white transition-all duration-300 cursor-pointer">
          Learn More
          <IconArrowRight
            size={14}
            className="-rotate-45 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-0"
          />
        </button>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
