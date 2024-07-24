import { cn } from "@/utils/cn";
import { MySkills } from "@/utils/constants";

import Image from "next/image";

export function SkillCards() {
  return (
    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-6xl w-full mx-auto">
      {MySkills.map((feature, index) => (
        <Card key={feature.name} {...feature} index={index} />
      ))}
    </div>
  );
}

const Card = ({
  name,
  description,
  image,
  index,
}: {
  name: string;
  description: string;
  image: string;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature border-slate-800 cursor-pointer",
        (index === 0 || index === 4 || index === 8 || index === 12) &&
          "lg:border-l border-slate-800",
        (index < 4 || index < 8 || index < 12) && "lg:border-b border-slate-800"
      )}
    >
      <div className="opacity-0  group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-500/20 to-75% to-transparent pointer-events-none" />
      <div className="mb-4 relative z-10 px-10  text-neutral-400">
        <div>
          <Image
            alt="logo brand"
            src={image}
            height={400}
            width={400}
            className="size-6 mr-2"
          />
        </div>
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
          {name}
        </span>
      </div>
      <p className="text-sm text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
