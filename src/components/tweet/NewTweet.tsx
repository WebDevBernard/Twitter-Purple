import { useState, useEffect } from "react";
import { tweetActions } from "../../redux/tweet-slice";
import { useDispatch } from "react-redux";
import useCurrentUser from "../hooks/useCurrentUser";
import { useNavigate } from "react-router-dom";
import useValidate from "../hooks/useValidate";
import TweetForm from "./TweetForm";
import { ChangeEvent } from "react";
import { AppDispatch } from "../../redux/store";
const NewTweet = (props: any) => {
  const [selectUserAvatar, selectUserName] = useCurrentUser();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const {
    value: enteredTweet,
    isValid: enteredTweetIsValid,
    valueChangeHandler: tweetChangeHandler,

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

  const tweetSubmitHandler = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!enteredTweetIsValid) {
      return;
    }
    handleDispatch();
    resetTweetInput();
    navigate("/");
    props.onClose();
  };

  return (
    <TweetForm
      placeholder={"What are you humming about?"}
      enteredTweet={enteredTweet}
      tweetSubmitHandler={tweetSubmitHandler}
      tweetChangeHandler={tweetChangeHandler}
      tweetCount={tweetCount}
      pencil={props.pencil}
      p={props.p}
      disabled={!enteredTweetIsValid}
    />
  );
};

export default NewTweet;
