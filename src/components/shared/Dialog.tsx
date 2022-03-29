import { FC } from "react";
import { motion } from "framer-motion";
import { dialogAnimation } from "../../utils/variants";
interface IProps {
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
}

const Dialog: FC<IProps> = (props) => {
  return (
    <motion.div
      ref={props.ref}
      variants={dialogAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`z-20 flex flex-col justify-center space-y-2 text-secondary_text bg-bg rounded-md absolute  opacity-95 shadow-lg ${props.className}`}
    >
      {props.children}
    </motion.div>
  );
};

export default Dialog;
