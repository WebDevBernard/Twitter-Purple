import { ChangeEvent, useState, FC } from "react";

type Hook = (validateValue: string) => void;

interface IValidate {
  enteredValue: string;
}

const useValidate: Hook = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState<string>("");
  const [isTouched, setIsTouched] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(e.target.value);
    // setCount(e.target.value) not setCount(enteredTweet) otherwise it will not update immediately
    setCount(e.target.value.length);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setIsTouched(false);
    setCount(0);
    setEnteredValue("");
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
