"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import HamburgerButton from "./hamburger-button";

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

const menuVars = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const Navbar = () => {
  const pathName = usePathname();
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="fixed w-full top-0 left-0">
      <div className="flex w-full justify-between md:py-4 py-2 container  bg-black-100/40 backdrop-blur-md">
        {/* logo */}
        <div>logo</div>

        {/* humburger button in mobile */}

        <HamburgerButton isActive={isActive} setIsActive={setIsActive} />

        {isActive && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute pr-6 pl-2 rounded-md border border-white py-1 top-14 right-8 md:hidden"
          >
            <ul className="flex flex-col items-start space-y-2">
              {menuItem.map((nav) => {
                return (
                  <li
                    key={nav.link}
                    className="relative flex items-center justify-center"
                  >
                    {/* {pathName === nav.link && (
                      <motion.div
                        initial={{
                          y: "0px",
                        }}
                        className="absolute -bottom-1 transform -translate-x-1/2 bg-sky-300/80  w-full h-[2px] rounded-full "
                        layoutId="red-dot"
                      />
                    )} */}
                    <Link
                      href={nav.link}
                      className={`font-medium ${
                        pathName === nav.link ? "text-[#DC143C]" : ""
                      }`}
                    >
                      {nav.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
        {/* items menu */}
        <div className="hidden md:block">
          <ul className="space-x-8 md:flex">
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
                      className="absolute -bottom-1 transform -translate-x-1/2 bg-[#DC143C]  w-full h-[2px] rounded-full "
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
        <div className="hidden md:block" />
      </div>
    </div>
  );
};

export default Navbar;
