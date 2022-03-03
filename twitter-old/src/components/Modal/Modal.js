import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => (
  <div className={classes.backdrop} onClick={props.onClose} />
);

const ModalOverlay = (props) => {
  return (
    <div className={`${classes.modal} ${props.className}`}>
      {props.children}
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose} {...props}>
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
const portalElement = document.getElementById("modal-hook");

{
  ReactDOM.createPortal(<Modal />, portalElement);
}
