import { cn } from "@/utils/cn";
import React from "react";
import { AnimatedTooltip } from "./animated-tooltip";
import Image from "next/image";
import { MyProjects } from "@/utils/constants";

export const ProjectBentoGrid = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 w-full gap-10 max-w-6xl my-4",
        className
      )}
    >
      {MyProjects.map((project) => (
        <BentoGridItem
          className="w-full z-20"
          key={project.id}
          title={project.title}
          image={project.image}
          description={project.description}
          tools={project.tools}
        />
      ))}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  image,
  tools,
}: {
  className?: string;
  title?: string;
  description?: string;
  image?: string;
  tools: { id: number; name: string; image: string }[];
}) => {
  return (
    <div
      className={cn(
        "rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 border-white/[0.2] border justify-between flex flex-col space-y-4 cursor-pointer",
        className
      )}
    >
      <div className="flex flex-1 w-full rounded-lg mb-4 h-[10rem]">
        <Image
          alt="project picture"
          src={`${image}`}
          width={400}
          height={400}
          className="h-full rounded-lg"
        />
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-xl text-slate-100">
          {title}
        </h3>
        <p className="text-slate-500 text-sm">{description}</p>
      </div>
      <div className="flex flex-row items-center mt-2">
        <AnimatedTooltip items={tools} />
      </div>
    </div>
  );
};
