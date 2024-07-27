import { MyProjects } from "@/utils/constants";
import { ProjectBentoGrid } from "./ui/bento-grid";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center container py-5 gap-6 relative"
      id="projects"
    >
      <h1 className="md:text-5xl text-3xl text-blue-500 font-extrabold">
        Recent Projects
      </h1>
      <ProjectBentoGrid />
    </div>
  );
};

export default Projects;
