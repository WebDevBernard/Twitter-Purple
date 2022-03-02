import { motion } from "framer-motion";
import { dialogAnimation } from "../../utils/variants";

const Dialog = (props: any) => {
  return (
    <motion.div
      variants={dialogAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
      ref={props.ref}
      className="flex flex-col justify-center space-y-2 border-[1px] border-violet-500 text-purple-700 bg-violet-100 rounded-md absolute z-20 right-0 top-0 opacity-95 shadow-lg"
    >
      {props.children}
    </motion.div>
  );
};

export default Dialog;
