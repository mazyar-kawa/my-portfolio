import { cn } from "@/utils/cn";
import React from "react";
import { AnimatedTooltip } from "./animated-tooltip";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 w-full gap-10 max-w-6xl my-4",
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
  tools,
}: {
  className?: string;
  title?: string;
  description?: string;
  tools: { id: number; name: string; image: string }[];
}) => {
  return (
    <div
      className={cn(
        "rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 border-white/[0.2] border justify-between flex flex-col space-y-4 cursor-pointer",
        className
      )}
    >
      <div className="flex flex-1 w-full rounded-lg mb-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
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
