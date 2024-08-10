"use client";

import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";
import { MyServices } from "@/utils/constants";
import Card from "./ui/service-card";

const Services = () => {
  return (
    <div
      className="flex flex-col scroll-m-10 items-center container py-5 gap-6 relative"
      id="services"
    >
      <h1 className="md:text-5xl text-3xl text-blue-500 font-extrabold">
        My Services
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2  gap-4 max-w-6xl w-full mx-auto my-8">
        {MyServices.map((service, index) => (
          <Card
            key={service.id}
            title={service.title}
            description={service.description}
            index={index + 1}
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName={service.color}
              colors={[[125, 211, 252]]}
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;
