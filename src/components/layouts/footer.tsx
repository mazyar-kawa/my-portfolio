import { MyContact } from "@/utils/constants";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800  px-4 py-4 mx-auto">
      <div className="flex justify-between container flex-row items-center  max-w-5xl mx-auto gap-4 sm:gap-0">
        <div className="flex gap-4 items-center">
          <a href="/">
            <h1 className="text-base sm:text-4xl font-extrabold">
              <span className="text-blue-500 transform rotate-12 inline-block">
                M
              </span>
              k
            </h1>
          </a>
          <p className="text-sm">© 2024 All rights reserved.</p>
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
                loading="lazy"
                className="size-4 md:size-6 object-contain object-center"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
