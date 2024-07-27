import { ProfessionalPersonal } from "@/utils/constants";
import { IconBrandTinder } from "@tabler/icons-react";

const Contact = () => {
  return (
    <div className="relative" id="contact">
      <div className="flex flex-col gap-4 max-w-5xl container items-center">
        <h1 className="text-3xl md:text-5xl text-blue-500 font-bold text-center">
          Professional Profile
        </h1>
        <div className="grid sm:grid-cols-2 sm:gap-12 gap-2 place-content-center place-items-center">
          {ProfessionalPersonal.map((profile) => (
            <div
              key={profile.id}
              className="bg-gradient-to-br from-40% from-transparent to-blue-600/20 my-4 h-60 w-full md:h-60 md:w-96 rounded-3xl p-4 shadow-xl border border-slate-800  mx-2  flex flex-col justify-between"
            >
              <p className="font-normal text-neutral-200">
                {profile.designation}
              </p>
              <div className="self-end">
                <IconBrandTinder fill="#3B82F6" color="#3B82F6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
