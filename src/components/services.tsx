"use client";

import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";
import { MyServices } from "@/utils/constants";
import Card from "./ui/service-card";

const Services = () => {
  return (
    <div
      className="flex flex-col items-center container py-10 relative"
      id="services"
    >
      <h1 className="md:text-5xl text-blue-500 font-extrabold">My Services</h1>
      <div className="grid grid-cols-4 gap-4 max-w-6xl w-full mx-auto my-8">
        {MyServices.map((service) => (
          <Card
            key={service.id}
            title={service.title}
            description={service.description}
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
