import classes from "./Button.module.css";
export default function Button(props) {
  return (
    <button
      className={`${classes.button} ${props.className}`}
      type={props.type || "submit"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
