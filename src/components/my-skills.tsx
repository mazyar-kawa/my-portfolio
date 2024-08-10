import { SkillCards } from "./ui/skills-grid";

const MySkils = () => {
  return (
    <div
      className="flex flex-col items-center scroll-m-10 container gap-6 py-5 relative"
      id="my-skills"
    >
      <h1 className="md:text-5xl text-3xl text-blue-500 font-extrabold">
        My Skills
      </h1>
      <SkillCards />
    </div>
  );
};

export default MySkils;
