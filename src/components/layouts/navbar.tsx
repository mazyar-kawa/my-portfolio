"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import HamburgerButton from "./hamburger-button";
import useActiveLink from "@/utils/lib/hooks/use-active-link";

const menuItems = [
  { name: "Home", link: "#home" },
  { name: "Projects", link: "#projects" },
  { name: "Services", link: "#services" },
  { name: "Skills", link: "#my-skills" },
  { name: "Contact", link: "#contact" },
];

const menuVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Navbar = () => {
  const pathName = usePathname();
  const [isActive, setIsActive] = useState(false);
  const activeLink = useActiveLink((state) => state.activeLink);
  const setActiveLink = useActiveLink((state) => state.setActiveLink);

  const handleHashChange = useCallback(() => {
    const hash = window.location.hash;
    setActiveLink(hash || "#home");

    // Scroll to the correct section if activeLink is different from hash
    if (hash && hash !== activeLink) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathName]);

  useEffect(() => {
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [handleHashChange]);

  return (
    <header className="fixed z-50 w-full top-0 left-0">
      <div className="flex w-full justify-between md:py-4 py-2 container bg-opacity-40 bg-black-100 backdrop-blur-md">
        {/* logo */}
        <div>
          <h1 className="text-2xl font-extrabold">
            <span className="text-blue-500 transform rotate-12 inline-block">
              M
            </span>
            k
          </h1>
        </div>

        {/* hamburger button in mobile */}
        <HamburgerButton isActive={isActive} setIsActive={setIsActive} />

        {isActive && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute pr-6 pl-2 rounded-md bg-black-100 border border-white py-1 top-14 right-8 md:hidden"
          >
            <ul className="flex flex-col items-start space-y-2">
              {menuItems.map((nav) => (
                <li key={nav.link} onClick={() => setActiveLink(nav.link)}>
                  <Link
                    href={nav.link}
                    className={`font-medium ${
                      activeLink === nav.link ? "text-blue-500 underline" : ""
                    }`}
                  >
                    {nav.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* items menu */}
        <div className="hidden md:block">
          <ul className="space-x-8 md:flex">
            {menuItems.map((nav) => (
              <li
                key={nav.link}
                className="relative flex items-center justify-center"
                onClick={() => setActiveLink(nav.link)}
              >
                {activeLink === nav.link && (
                  <motion.div
                    initial={{
                      y: "0px",
                    }}
                    className="absolute -bottom-1 ml-[0.5px] bg-blue-500 w-full h-[2px] rounded-full"
                    layoutId="red-dot"
                  />
                )}
                <Link href={nav.link} className="font-medium">
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:block" />
      </div>
    </header>
  );
};

export default Navbar;
