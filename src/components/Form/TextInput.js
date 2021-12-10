import classes from "./TextInput.module.css";
import { ErrorMessage, useField } from "formik";

export const TextInput = ({ label, ...props }) => {
  const [field] = useField(props);
  const element =
    props.element === "textarea" ? (
      <textarea autoComplete="off" {...field} {...props} />
    ) : (
      <input autoComplete="off" {...field} {...props} />
    );

  return (
    <div {...props}>
      <label {...props} htmlFor={field.name}>
        {label}
      </label>
      {element}
      <ErrorMessage
        component="div"
        className={classes.error}
        name={field.name}
      />
    </div>
  );
};
