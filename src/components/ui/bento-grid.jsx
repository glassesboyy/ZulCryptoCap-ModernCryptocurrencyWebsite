import { cn } from "@/lib/utils";
import { IconArrowRight } from "@tabler/icons-react";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
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
        "group/bento relative overflow-hidden rounded-2xl border border-violet-900/30 bg-black/40 backdrop-blur-md p-4 transition duration-300 hover:border-white/20 hover:bg-violet-500/10 cursor-pointer",
        className
      )}
    >
      <div className="h-1/2 w-full overflow-hidden rounded-xl">{header}</div>
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <div className="mt-4 flex items-center gap-2">
          <div className="rounded-full bg-violet-900/20 p-2">{icon}</div>
          <h3 className="font-bold text-xl text-white">{title}</h3>
        </div>
        <div className="mt-2">
          <p className="text-sm font-light text-white/70">{description}</p>
        </div>
      </div>
      <button className="group absolute bottom-4 right-4 inline-flex items-center gap-1 text-violet-400 hover:text-white transition-all duration-300 cursor-pointer">
        Learn More
        <IconArrowRight
          size={18}
          className="-rotate-45 transform transition-transform duration-300 group-hover:rotate-0"
        />
      </button>
    </div>
  );
};
