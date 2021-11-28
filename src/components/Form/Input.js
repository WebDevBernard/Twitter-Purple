import classes from "./Input.module.css";

export default function Input(props) {
  const element =
    props.element === "input" ? (
      <input
        onBlur={props.onBlur}
        name={props.name}
        onClick={props.onClick}
        onChange={props.onChange}
        value={props.value}
        id={props.id}
        type={props.type || "text"}
        placeholder={props.placeholder}
        autoComplete={props.autoComplete || "off"}
      />
    ) : (
      <textarea
        onBlur={props.onBlur}
        name={props.name}
        onClick={props.onClick}
        onChange={props.onChange}
        value={props.value}
        id={props.id}
        type={props.type || "text"}
        placeholder={props.placeholder}
        rows={props.rows || 4}
        autoComplete="off"
      />
    );
  return (
    <div className={`${classes.formcontrol} ${props.className}`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
    </div>
  );
}
