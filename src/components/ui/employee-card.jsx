import { cn } from "@/lib/utils";

export const EmployeeCard = ({ name, position, department, img }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-48 cursor-pointer overflow-hidden rounded-xl border p-3",
        "border-violet-950 bg-violet-950/20 hover:bg-violet-950/50",
        "transition-colors duration-300"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full w-8 h-8 object-cover"
          width="32"
          height="32"
          alt={name}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-normal text-violet-400">{position}</p>
        </div>
      </div>
      <p className="mt-2 text-xs font-light text-white/60">{department}</p>
    </figure>
  );
};
