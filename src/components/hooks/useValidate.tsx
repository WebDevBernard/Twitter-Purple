import { ChangeEvent, useState } from "react";

const useValidate = (validateValue: any) => {
  const [enteredValue, setEnteredValue] = useState<string>("");

  const [count, setCount] = useState<number>(0);
  const valueIsValid = validateValue(enteredValue);

  const valueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    e.target.style.height = "60px";
    e.target.style.height = `${e.target.scrollHeight}px`;
    setEnteredValue(e.target.value);
    // setCount(e.target.value) not setCount(enteredTweet) otherwise it will not update immediately
    setCount(e.target.value.length);
  };

  const reset = () => {
    setCount(0);
    setEnteredValue("");
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,

    valueChangeHandler,
    reset,
    count,
  };
};

export default useValidate;
