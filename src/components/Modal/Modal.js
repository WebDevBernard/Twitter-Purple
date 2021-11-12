import React from "react";
import reactDom from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./Modal.css";
import Backdrop from "./Backdrop";

interface ModalProps {
  items: { id: string, text: string };
}
const ModalOverlay: React.FC<ModalProps> = (props) => {
  const content = (
    <div className={`modal ${props.className}`} style={props.style}>
      <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={props.onSubmit ? props.onSubmit : (e) => e.preventDefault}
      >
        <div className={`modal__content ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`modal__footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );
  return reactDom.createPortal(content, document.getElementById("modal-hook"));
};
export default function Modal(props) {
  return (
    <>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        className="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  );
}
