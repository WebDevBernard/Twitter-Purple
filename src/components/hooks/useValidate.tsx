import { ChangeEvent, useState, useEffect } from "react";

const useValidate = (validateValue: any) => {
  const [enteredValue, setEnteredValue] = useState<string>("");
  const [isTouched, setIsTouched] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const valueIsValid = validateValue(enteredValue);

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

  const [rows, setRows] = useState(2);
  useEffect(() => {
    const rowlen = enteredValue.split(/\r\n|\r|\n/);
    if (rowlen.length > 2) {
      setRows(rowlen.length);
    }
    console.log(rowlen.length);
  }, [enteredValue]);

  return {
    value: enteredValue,
    isValid: valueIsValid,
    rows,
    valueChangeHandler,
    inputBlurHandler,
    reset,
    count,
  };
};

export default useValidate;
