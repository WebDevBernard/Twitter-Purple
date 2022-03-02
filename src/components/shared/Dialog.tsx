import { motion } from "framer-motion";
import { dialogAnimation } from "../../utils/variants";

const Dialog = (props: any) => {
  return (
    <motion.div
      variants={dialogAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`flex flex-col justify-center space-y-2 border-[1px] border-violet-500 text-purple-700 bg-violet-100 rounded-md absolute z-20  opacity-95 shadow-lg ${props.className}`}
    >
      {props.children}
    </motion.div>
  );
};

export default Dialog;
