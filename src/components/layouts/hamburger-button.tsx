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
      className="relative rounded-md border border-white size-8 md:hidden"
    >
      <motion.span
        className="bg-white absolute h-1 w-5 rounded-sm"
        style={{
          top: "20%",
          right: "20%",
        }}
        variants={{
          open: {
            rotate: "45deg",
            top: "45%",
            width: "25px",
            x: "15%",
          },
          closed: {
            rotate: "0deg",
          },
        }}
      />
      <motion.span
        className="bg-white absolute h-1 w-5 rounded-sm"
        style={{
          top: "35%",
          right: "20%",
          x: "5%",
          y: "50%",
        }}
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
        className="bg-white absolute h-1 w-5 rounded-sm"
        style={{
          top: "50%",
          right: "20%",
          x: "5%",
          y: "100%",
        }}
        variants={{
          open: {
            rotate: "-45deg",
            width: "25px",
            top: "35%",
            x: "20%",
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
