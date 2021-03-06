import { FC } from "react";
import { motion } from "framer-motion";
import { modalAnimation } from "../../utils/variants";
import ReactDOM from "react-dom";
import useClickedOutside from "../hooks/useClickedOutside";

const Backdrop: FC<{ onClose: () => void }> = (props) => (
  <div
    className="fixed top-0 left-0 h-screen w-full z-20 opacity-20 transition bg-black ease-out duration-75"
    onClick={props.onClose}
  />
);

const ModalOverlay: FC<{ className: string }> = (props) => {
  return (
    <div className={" z-30  flex justify-center overflow-y-auto inset-0 fixed"}>
      <div className={` ${props.className}`}>{props.children}</div>{" "}
    </div>
  );
};

const portalElement: HTMLElement = document.getElementById("modal")!;

const Modal: FC<{
  onClose: () => void;
  className: string;
}> = (props) => {
  const domNode = useClickedOutside(() => {
    props.onClose();
  });
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay {...props}>
          <motion.div
            ref={domNode}
            variants={modalAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={` text-secondary_text bg-bg rounded-2xl opacity-95 shadow-md ${props.className}`}
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
