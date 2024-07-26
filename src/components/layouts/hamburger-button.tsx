import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

type Props = {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
};

const HamburgerButton = ({ isActive, setIsActive }: Props) => {
  return (
    <motion.button
      aria-label="menu"
      animate={isActive ? "open" : "close"}
      onClick={() => setIsActive((pv) => !pv)}
      className="relative size-9 rounded-md border border-white md:hidden"
    >
      <motion.span
        className="absolute bg-white rounded-md min-h-[3px] w-6 left-[5px] top-2"
        variants={{
          open: {
            rotate: "45deg",
            top: "15px",
            left: "2px",
            width: "30px",
          },
          closed: {
            rotate: "0deg",
          },
        }}
      />
      <motion.span
        className="absolute bg-white rounded-md min-h-[3px] w-6 left-[5px] top-4"
        variants={{
          open: {
            opacity: "0",
          },
          closed: {
            opacity: "1",
          },
        }}
      />
      <motion.span
        className="absolute bg-white rounded-md min-h-[3px] w-6 left-[5px] top-6"
        variants={{
          open: {
            rotate: "-45deg",
            top: "15px",
            left: "3px",
            width: "30px",
          },
          closed: {
            rotate: "0deg",
          },
        }}
      />
    </motion.button>
  );
};

export default HamburgerButton;
