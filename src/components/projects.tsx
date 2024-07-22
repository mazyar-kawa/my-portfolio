import { MyProjects } from "@/utils/constants";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center container py-5 gap-6 relative"
      id="projects"
    >
      <h1 className="md:text-5xl text-blue-500 font-extrabold">
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
      {/* <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 w-full">
        {MyProjects.map((project) => (
          <div
            key={project.id}
            className="h-[23rem] w-full flex items-center justify-center z-20"
          >
            <PinContainer title={project.title}>
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <div className="flex flex-1 w-full rounded-lg mb-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />

                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-xl text-slate-100">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm">{project.description}</p>
                <div className="flex flex-row items-center mt-2">
                  <AnimatedTooltip items={project.tools} />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Projects;
