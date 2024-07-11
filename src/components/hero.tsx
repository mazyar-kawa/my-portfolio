import Image from "next/image";
import { BackgroundBeams } from "./ui/background-beams";
import { CvButton } from "./ui/cv-button";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Hero = () => {
  return (
    <div className="md:h-[calc(100vh-72px)]">
      <BackgroundBeams />
      <div className="container flex justify-between gap-4 items-center max-w-4xl h-full overflow-hidden mt-14">
        <div className="basis-1/2 gap-4 flex flex-col items-start">
          <div className="text-purple-500 flex flex-col">
            <TextGenerateEffect
              words="Mazyar kawa"
              className="text-purple-500 font-extrabold text-8xl"
            />
          </div>
          <p className="text-white text-sm text-justify">
            Hello and welcome! I&apos;m a frontend developer skilled in creating
            stunning, interactive web applications, robust database systems, and
            enhancing cybersecurity. Explore my portfolio to see how I transform
            ideas into digital realities.
          </p>
          <a href="/mazyar-cv.pdf" download>
            <CvButton title="My CV" />
          </a>
        </div>
        <div className="basis-1/2">
          <Image
            alt="My Photo"
            src={"/my-photo.png"}
            width={500}
            height={500}
            className="w-full z-50"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
