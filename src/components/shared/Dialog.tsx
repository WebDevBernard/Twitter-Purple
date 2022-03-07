import { FC } from "react";
import { motion } from "framer-motion";
import { dialogAnimation } from "../../utils/variants";

const Dialog: FC<{ className: string, ref:}> = (props) => {
  return (
    <motion.div
      ref={props.ref}
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
