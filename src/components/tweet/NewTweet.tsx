import React, { FC } from "react";
import { tweetActions } from "../../redux/tweet-slice";
import { useDispatch } from "react-redux";
import useCurrentUser from "../hooks/useCurrentUser";
import { useNavigate } from "react-router-dom";
import useValidate from "../hooks/useValidate";
import TweetForm from "./TweetForm";
import { ChangeEvent } from "react";
import { ITweetProps } from "../interfaces/interface";
import { AppDispatch } from "../../redux/store";
const NewTweet: FC<ITweetProps> = (props) => {
  const [selectUserAvatar, selectUserName] = useCurrentUser();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const {
    value: enteredTweet,
    isValid: enteredTweetIsValid,
    hasError: tweetInputHasError,
    valueChangeHandler: tweetChangeHandler,
    inputBlurHandler: tweetBlurHandler,
    reset: resetTweetInput,
    count: tweetCount,
  } = useValidate(
    (value: string) => value.trim().length !== 0 && value.trim().length < 140
  );
  const handleDispatch = () => {
    dispatch(
      tweetActions.addTweet({
        tweet: enteredTweet,
        avatar: selectUserAvatar,
        userName: selectUserName,
      })
    );
  };

  const tweetSubmitHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!enteredTweetIsValid) {
      return;
    }
    handleDispatch();
    resetTweetInput();
    navigate("/");
    props.onClose();
  };

  const addTweetOnEnter = (e) => {
    if (e.key === "Enter") {
      tweetSubmitHandler(e);
    }
  };

  return (
    <TweetForm
      placeholder={"What are you humming about?"}
      enteredTweet={enteredTweet}
      tweetSubmitHandler={tweetSubmitHandler}
      tweetBlurHandler={tweetBlurHandler}
      tweetChangeHandler={tweetChangeHandler}
      addTweetOnEnter={addTweetOnEnter}
      tweetInputHasError={tweetInputHasError}
      tweetCount={tweetCount}
    />
  );
};

export default NewTweet;
