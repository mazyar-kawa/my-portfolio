import Image from "next/image";
import { BackgroundBeams } from "./ui/background-beams";
import { CvButton } from "./ui/cv-button";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Hero = () => {
  return (
    <div>
      <BackgroundBeams />
      <div className="container flex flex-col md:flex-row justify-end md:justify-between gap-4 items-center max-w-5xl h-[calc(100vh-50px)] md:h-[calc(100vh-44px)] overflow-hidden mt-12 md:mt-14">
        <div className="gap-4 md:basis-1/2 flex flex-col items-center md:items-start">
          <div className="text-purple-500 flex flex-col">
            <TextGenerateEffect
              words="Mazyar kawa"
              className="text-purple-500  font-extrabold md:text-8xl text-5xl"
            />
          </div>
          <p className="text-white text-sm md:text-justify text-center">
            Hello and welcome! I&apos;m a frontend developer skilled in creating
            stunning, interactive web applications, robust database systems, and
            enhancing cybersecurity. Explore my portfolio to see how I transform
            ideas into digital realities.
          </p>
          <a href="/mazyar-cv.pdf" download>
            <CvButton title="Download my CV" />
          </a>
        </div>
        <div className="md:basis-1/2">
          <Image
            alt="My Photo"
            src={"/my-photo.png"}
            width={500}
            height={500}
            className="md:w-[90%] z-50 md:h-[80%] w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
