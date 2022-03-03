import { useState } from "react";
import { motion } from "framer-motion";
import { dialogAnimation } from "../../utils/variants";

const Dialog = (props: any) => {
  return (
    <motion.div
      variants={dialogAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`flex flex-col justify-center space-y-2 border-[1px] border-border text-secondary_text bg-bg rounded-md absolute z-20  opacity-95 shadow-lg ${props.className}`}
    >
      {props.children}
    </motion.div>
  );
};

export default Dialog;