import Contact from "@/components/contact";
import Hero from "@/components/hero";
import MySkils from "@/components/my-skills";
import Projects from "@/components/projects";
import Services from "@/components/services";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="h-full w-full bg-black-100  bg-grid-slate-800/[0.2]  relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <h1 className="text-9xl font-extrabold">
          <span className="text-blue-500 transform rotate-12 inline-block">
            M
          </span>
          k
        </h1>
      </div>
      {/* <Hero />
      <Projects />
      <Services />
      <MySkils />
      <Contact /> */}
    </div>
  );
}
