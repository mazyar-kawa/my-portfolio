import Hero from "@/components/hero";
import MySkils from "@/components/my-skils";
import Projects from "@/components/projects";
import Services from "@/components/services";

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <Services />
      <MySkils />
    </div>
  );
}
