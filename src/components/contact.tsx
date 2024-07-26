import { ProfessionalPersonal } from "@/utils/constants";
import { IconBrandTinder } from "@tabler/icons-react";

const Contact = () => {
  return (
    <div className="relative" id="contact">
      <div className="flex flex-col gap-4 max-w-5xl container items-center">
        <h1 className="text-3xl md:text-5xl text-blue-500 font-bold text-center">
          Professional Profile
        </h1>
        <div className="grid sm:grid-cols-2 sm:gap-12 gap-4 place-content-center place-items-center">
          {ProfessionalPersonal.map((profile) => (
            <div
              key={profile.id}
              className="bg-gradient-to-br from-40% from-transparent to-blue-600/20 my-4 h-60 w-60 md:h-60 md:w-96 rounded-3xl p-4 shadow-xl border border-slate-800 shadow-black/[0.1] mx-2 dark:shadow-white/[0.05] flex flex-col justify-between"
            >
              <p className="text-neutral-400 font-normal dark:text-neutral-200">
                {profile.designation}
              </p>
              <div className="self-end">
                <IconBrandTinder fill="#3B82F6" color="#3B82F6" />
              </div>
            </div>
          ))}
        </div>
        {/* <CardStack
          items={[
            {
              id: 1,
              designation:
                "As an experienced expert in the industry, I excel at transforming initial ideas into effective and user-friendly digital solutions.Elevate Your Business with Advanced Technological Solutions!",
            },
            {
              id: 2,
              designation:
                "I am always open to exploring new opportunities and collaborations. Feel free to contact me to discuss how we can work together.",
            },
          ]}
        /> */}
      </div>
    </div>
  );
};

export default Contact;
