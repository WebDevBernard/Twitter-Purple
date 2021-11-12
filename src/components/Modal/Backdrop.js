// Backdrop renders a darkened background when modal is called
import "./Backdrop.css";
import ReactDOM from "react-dom";

export default function Backdrop(props) {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={props.onClick}></div>,
    document.getElementById("backdrop-hook")
  );
}
