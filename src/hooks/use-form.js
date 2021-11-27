import { useState, useEffect, useReducer } from "react";

export default function useForm(validateValue) {
  const [enteredTweet, setEnteredTweet] = useState("");
  const [error, setError] = useState({});
  const [count, setCount] = useState(0);
}
