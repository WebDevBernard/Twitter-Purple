import { motion } from "framer-motion";
import { modalAnimation } from "../../utils/variants";

const Backdrop = (props: any) => {
  return (
    <motion.div
      onClick={props.onClick}
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {props.children}
    </motion.div>
  );
};

const Modal = (props: any) => {
  return (
    <Backdrop onClick={props.handleClose}>
      <motion.div
        variants={modalAnimation}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`flex flex-col justify-center space-y-2 border-[1px] border-border text-secondary_text bg-bg rounded-md absolute z-20 opacity-95 shadow-lg ${props.className}`}
      >
        {props.children}
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
