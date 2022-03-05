import { useState } from "react";
const useValidate = (validateValue: any) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [count, setCount] = useState(0);
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (e: any) => {
    setEnteredValue(e.target.value);
    // setCount(e.target.value) not setCount(enteredTweet) otherwise it will not update immediately
    setCount(e.target.value.length);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setCount(0);
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
    count,
  };
};

export default useValidate;
