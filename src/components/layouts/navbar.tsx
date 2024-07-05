"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const menuItem = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Skills",
    link: "/skills",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className="fixed w-full top-0 left-0">
      <div className="flex w-full justify-between py-4 container  bg-black-100/40 backdrop-blur-md">
        {/* logo */}
        <div>logo</div>
        {/* items menu */}
        <div>
          <ul className="space-x-8 hidden md:flex">
            {menuItem.map((nav) => {
              return (
                <li
                  key={nav.link}
                  className="relative flex items-center justify-center"
                >
                  {pathName === nav.link && (
                    <motion.div
                      initial={{
                        y: "0px",
                      }}
                      className="absolute -bottom-1 transform -translate-x-1/2 bg-sky-300/80  w-full h-[2px] rounded-full "
                      layoutId="red-dot"
                    />
                  )}
                  <Link href={nav.link} className="font-medium">
                    {nav.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* others */}
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
