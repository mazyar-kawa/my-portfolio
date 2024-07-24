import { MyProjects } from "@/utils/constants";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center container py-5 gap-6 relative"
      id="projects"
    >
      <h1 className="md:text-5xl text-3xl text-blue-500 font-extrabold">
        Recent Projects
      </h1>
      <BentoGrid>
        {MyProjects.map((project) => (
          <BentoGridItem
            className="h-[23rem] w-full z-20"
            key={project.id}
            title={project.title}
            image={project.image}
            description={project.description}
            tools={project.tools}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default Projects;
