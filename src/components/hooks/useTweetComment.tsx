import { useState } from "react";

const useTweetComment = (
  dispatchWithRedux: any,
  navigateTo: any,
  closeModal: any
) => {
  const [enteredTweet, setEnteredTweet] = useState("");
  const [error, setError] = useState<any>({});
  const [count, setCount] = useState(0);

  const validateTweetInput = (enteredTweet: any) => {
    if (enteredTweet.trim().length > 140) {
      setError({
        message: "tweet too long!",
      });
      return;
    }
    if (enteredTweet.trim().length === 0) {
      setError({
        message: "tweet too short!",
      });
      return;
    }
    dispatchWithRedux;
    setEnteredTweet("");
    setCount(0);
  };

  const addTweetOnClick = (e: any) => {
    e.preventDefault();
    validateTweetInput(e);
    navigateTo;
    closeModal;
  };

  const addTweetOnEnter = (e: any) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      validateTweetInput(e);
      navigateTo;
      closeModal;
    }
  };
  // removes the error message
  const errorHandler = () => {
    setError("");
  };

  return [enteredTweet, count, error, errorHandler];
};
export default useTweetComment;
