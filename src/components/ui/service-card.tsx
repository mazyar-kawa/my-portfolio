"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

interface CardProps {
  title: string;
  children?: React.ReactNode;
  description?: string;
  index: number;
}

const Card = ({ title, children, description, index }: CardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border group/canvas-card flex items-center justify-center border-white/[0.2] w-full p-4 relative h-[25rem] cursor-pointer"
    >
      <CornerIcons />
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      {!hovered && (
        <p className="text-center text-2xl font-bold absolute group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          <span className="text-blue-500 mr-2">Service</span> {index}
        </p>
      )}
      <div className="relative z-20">
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p className="dark:text-white text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-medium group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {description}
        </p>
      </div>
    </div>
  );
};

// Corner Icons Component
const CornerIcons = () => (
  <>
    <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
    <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
    <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
    <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />
  </>
);

const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Card;
