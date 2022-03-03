import { motion } from "framer-motion";
import { modalAnimation } from "../../utils/variants";
import ReactDOM from "react-dom";

const Backdrop = (props: any) => (
  <div
    className="fixed top-0 left-0 h-screen w-full z-20  opacity-20 transition bg-black ease-out duration-75"
    onClick={props.onClose}
  />
);

const ModalOverlay = (props: any) => {
  return <div className={` ${props.className}`}>{props.children}</div>;
};

const portalElement: HTMLElement = document.getElementById("modal")!;

const Modal = (props: any) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose} {...props}>
          <motion.div
            variants={modalAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`z-30 fixed border-[1px]  border-border text-secondary_text bg-bg rounded-md opacity-95 shadow-lg ${props.className}`}
          >
            {props.children}
          </motion.div>
        </ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
