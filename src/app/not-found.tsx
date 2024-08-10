import { ShimmerButton } from "@/components/ui/cv-button";
import Image from "next/image";

const PageNotFount = () => {
  return (
    <div className="max-w-6xl container h-screen mx-auto grid md:grid-cols-2  sm:place-content-center md:gap-8 place-items-center md:mt-0">
      <div className="gap-4 flex flex-col place-self-center sm:place-self-center items-center sm:items-start pt-10 sm:my-0 md:py-0">
        <div className="text-blue-500 flex flex-col items-start gap-4">
          <h1 className=" font-extrabold sm:text-7xl text-4xl capitalize">
            go home, you&apos;re lost
          </h1>
          <a href="/">
            <ShimmerButton title="BACK TO HOME" />
          </a>
        </div>
      </div>
      <div className="sm:px-5 place-self-center">
        <Image
          alt="404 Image"
          src={"/404.png"}
          width={500}
          height={500}
          loading="lazy"
          className="z-50 md:h-[80%] w-full h-full object-center object-cover"
        />
      </div>
    </div>
  );
};

export default PageNotFount;
