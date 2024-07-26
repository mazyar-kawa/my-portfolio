import Image from "next/image";
import { BackgroundBeams } from "./ui/background-beams";
import { CvButton } from "./ui/cv-button";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Hero = () => {
  return (
    <div className="relative h-screen  md:pt-14 overflow-hidden" id="home">
      <BackgroundBeams />
      <div className="max-w-5xl container h-screen mx-auto grid md:grid-cols-2  sm:place-content-center place-content-between place-items-center mt-12 md:mt-0">
        <div className="gap-4 flex flex-col items-center sm:items-start py-14 md:py-0">
          <div className="text-blue-500 flex flex-col">
            <TextGenerateEffect
              words="Mazyar kawa"
              className="text-blue-500 font-extrabold sm:text-8xl text-4xl"
            />
          </div>
          <p className="text-white text-sm sm:text-base sm:text-justify text-center">
            Hello and welcome! I&apos;m a frontend developer skilled in creating
            stunning, interactive web applications, robust database systems, and
            enhancing cybersecurity. Explore my portfolio to see how I transform
            ideas into digital realities.
          </p>
          <a href="/mazyar-cv.pdf" download>
            <CvButton title="Download my CV" />
          </a>
        </div>
        <div className="sm:px-5">
          <Image
            alt="My Photo"
            src={"/my-photo.webp"}
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

/*
<div className="container flex flex-col sm:flex-row justify-end sm:justify-between gap-4 items-center max-w-5xl h-screen overflow-hidden sm:pt-24">
        <div className="gap-4 sm:basis-1/2 flex flex-col items-center sm:items-start bg-rose-500">
          <div className="text-blue-500 flex flex-col">
            <TextGenerateEffect
              words="Mazyar kawa"
              className="text-blue-500 font-extrabold sm:text-8xl text-5xl"
            />
          </div>
          <p className="text-white text-base sm:text-justify text-center">
            Hello and welcome! I&apos;m a frontend developer skilled in creating
            stunning, interactive web applications, robust database systems, and
            enhancing cybersecurity. Explore my portfolio to see how I transform
            ideas into digital realities.
          </p>
          <a href="/mazyar-cv.pdf" download>
            <CvButton title="Download my CV" />
          </a>
        </div>
        <div className="sm:basis-1/2">
          <Image
            alt="My Photo"
            src={"/my-photo-min.png"}
            width={500}
            height={500}
            loading="lazy"
            className=" md:w-[90%] z-50 md:h-[80%] w-full h-full"
          />
        </div>
      </div>


*/
