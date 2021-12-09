import classes from "./Input.module.css";

export default function Input(props) {
  const element =
    props.element === "input" ? (
      <input {...props.input} />
    ) : (
      <textarea {...props.input} />
    );
  return (
    <div className={`${classes.formcontrol} ${props.className}`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
    </div>
  );
}
