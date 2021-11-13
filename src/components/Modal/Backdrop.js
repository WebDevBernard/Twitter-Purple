// Backdrop renders a darkened background when modal is called
import classes from "./Backdrop.module.css";
import ReactDOM from "react-dom";

export default function Backdrop(props) {
  return ReactDOM.createPortal(
    <div className={classes.backdrop} onClick={props.onClick}></div>,
    document.getElementById("backdrop-hook")
  );
}
