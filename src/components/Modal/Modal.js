import React from "react";
import { CSSTransition } from "react-transition-group";
import classes from "./Modal.module.css";
import Backdrop from "./Backdrop";

export default function Modal(props) {
  const content = <div></div>;
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
}
