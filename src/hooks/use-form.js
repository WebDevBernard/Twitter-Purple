import { useState, useEffect, useReducer } from "react";
import validate from "../utils/validate";

export default function useForm(
  callback,
  initialState = { count: 0 },
  validate
) {
  // state is initial state
  const [state, dispatch] = useReducer(inputReducer, {
    value: action.val,
    isValid: false,
  });
  const [enteredTweet, setEnteredTweet] = useState(initialState);
  const [error, setError] = useState({});
  const [count, setCount] = useState(0);

  const changeHandler = (e) => {
    dispatch({ type: "change", val: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(validate(values)).length === 0) {
      callback();
      setEnteredTweet(initialState);
    } else {
      setErrors(validate(values));
    }
    return { error, onChange, onSubmit, enteredTweet };
  };
}
