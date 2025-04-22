import { cn } from "@/lib/utils";
import { IconArrowRight } from "@tabler/icons-react";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-3 xs:gap-4 md:auto-rows-[16rem] lg:auto-rows-[18rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}) => {
  return (
    <div
      className={cn(
        "group/bento relative overflow-hidden rounded-xl xs:rounded-2xl border border-violet-900/30 bg-black/40 backdrop-blur-md p-3 xs:p-4 transition duration-300 hover:border-white/20 hover:bg-violet-500/10 cursor-pointer",
        className
      )}
    >
      <div className="h-32 xs:h-1/2 w-full overflow-hidden rounded-lg xs:rounded-xl">
        {header}
      </div>
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <div className="mt-3 xs:mt-4 flex items-center gap-2">
          <div className="rounded-full bg-violet-900/20 p-1.5 xs:p-2">
            {icon}
          </div>
          <h3 className="font-bold text-base xs:text-lg sm:text-xl text-white line-clamp-1">
            {title}
          </h3>
        </div>
        <div className="mt-1 xs:mt-2 mb-10 xs:mb-12">
          <p className="text-xs xs:text-sm font-light text-white/70 line-clamp-2 xs:line-clamp-3">
            {description}
          </p>
        </div>
      </div>
      <button className="group absolute bottom-3 xs:bottom-4 right-3 xs:right-4 inline-flex items-center gap-1 text-xs xs:text-sm text-violet-400 hover:text-white transition-all duration-300 cursor-pointer">
        Learn More
        <IconArrowRight
          size={16}
          className="-rotate-45 transform transition-transform duration-300 group-hover:rotate-0"
        />
      </button>
    </div>
  );
};
