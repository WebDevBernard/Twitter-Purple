import { useState, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INPUT": {
      return { ...state, value: action.payload, isTouched: state.isTouched };
    }
    case "BLUR": {
      return { isTouched: true, value: state.value };
    }
    case "RESET": {
      return { isTouched: false, value: "" };
    }
    default:
      return { ...state };
  }
};

const initialState = {
  value: "",
  isTouched: false,
};
export default function useForm(validateValue) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const valueIsValid = validateValue(state.value);
  const hasError = !valueIsValid && state.isTouched;
  const valueChangeHandler = (e) => {
    dispatch({ type: "INPUT", payload: e.target.value });
  };

  const inputBlurHandler = (e) => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };
  // const [enteredValue, setEnteredValue] = useState("");
  // const [isTouched, setIsTouched] = useState(false);

  // const valueIsValid = validateValue(enteredValue);
  // const hasError = !valueIsValid && isTouched;

  // const valueChangeHandler = (e) => {
  //   setEnteredValue(e.target.value);
  // };
  // const inputBlurHandler = (e) => {
  //   setIsTouched(true);
  // };

  // const reset = () => {
  //   setEnteredValue("");
  //   setIsTouched(false);
  // };
  return {
    reset,
    // value: enteredValue,
    value: state.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
  };
}
