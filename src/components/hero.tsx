import Image from "next/image";
import { BackgroundBeams } from "./ui/background-beams";
import { CvButton } from "./ui/cv-button";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { cn } from "@/utils/cn";

const Hero = () => {
  return (
    <div className="relative h-screen  md:pt-14 overflow-hidden" id="home">
      <BackgroundBeams />
      <div className="max-w-5xl container h-screen mx-auto grid md:grid-cols-2  sm:place-content-center place-items-center md:mt-0">
        <div className="gap-4 flex flex-col place-self-end sm:place-self-center items-center sm:items-start pt-10 sm:my-0 md:py-0">
          <div className="text-blue-500 flex flex-col">
            <TextGenerateEffect
              words="Mazyar kawa"
              className="text-blue-500 font-extrabold sm:text-8xl text-4xl"
            />
          </div>
          <p className="text-white text-sm sm:text-base sm:text-justify text-center">
            Hello and welcome! I&apos;m a{" "}
            <span
              className={
                "font-bold bg-rose-700/[0.2] text-rose-500 px-1 py-0.5 uppercase"
              }
            >
              full stack developer
            </span>{" "}
            skilled in creating stunning, interactive web applications, robust
            database systems, and enhancing cybersecurity. Explore my portfolio
            to see how I transform ideas into digital realities.
          </p>
          <a href="/mazyar-cv.pdf" download>
            <CvButton title="Download my CV" />
          </a>
        </div>
        <div className="sm:px-5 place-self-end">
          <Image
            alt="My Photo"
            src={"/mazyar.webp"}
            width={500}
            height={500}
            loading="lazy"
            className="z-50 md:h-[80%] w-full h-full object-center object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
