import { MyContact } from "@/utils/constants";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="border-t border-slate-800">
      <div className="flex items-center lg:items-start flex-col gap-4 py-5 max-w-6xl mx-auto">
        <h1 className="text-3xl text-blue-500 font-bold">
          Professional Profile
        </h1>
        <div className="px-6 space-y-4 max-w-2xl">
          <p>
            As an experienced expert in the industry, I excel at transforming
            initial ideas into effective and user-friendly digital solutions.
            Elevate Your Business with Advanced Technological Solutions!
          </p>
          <p>
            I am always open to exploring new opportunities and collaborations.
            Feel free to contact me to discuss how we can work together.
          </p>
        </div>
      </div>

      <div className="border-t border-slate-800  px-4 py-4 mx-auto  backdrop-blur-md">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="flex gap-4 items-center">
            <a href="/">
              <h1 className="text-lg md:text-4xl font-extrabold">
                <span className="text-blue-500 transform rotate-12 inline-block">
                  M
                </span>
                k
              </h1>
            </a>
            <p>© 2024 All rights reserved.</p>
          </div>
          <div className="flex gap-2 md:flex-row">
            {MyContact.map((contact) => (
              <a
                href={contact.link}
                key={contact.icon}
                className="border border-white rounded-full size-6 md:size-8 items-center flex justify-center"
                target="_blank"
              >
                <Image
                  alt="contacts icon"
                  src={contact.icon}
                  width={400}
                  height={400}
                  className="size-4 md:size-6"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
