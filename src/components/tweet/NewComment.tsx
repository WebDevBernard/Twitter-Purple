import { tweetActions } from "../../redux/tweet-slice";
import { useDispatch } from "react-redux";
import useCurrentUser from "../hooks/useCurrentUser";
import useValidate from "../hooks/useValidate";
import TweetForm from "./TweetForm";
import { useParams } from "react-router-dom";
import { ChangeEvent, FC } from "react";
import { AppDispatch } from "../../redux/store";
import { ICommentProps } from "../interfaces/interface";

interface IValidate {
  enteredTweet: string;
enteredTweetIsValid: boolean;
tweetInputHasError: boolean;
 tweetChangeHandler: () => void;
  tweetBlurHandler: t
 resetTweetInput:
  tweetCount:
}
const NewComment:FC = (props) => {
  const params = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const [selectUserAvatar, selectUserName] = useCurrentUser();
  const {
    value: enteredTweet,
    isValid: enteredTweetIsValid,
    hasError: tweetInputHasError,
    valueChangeHandler: tweetChangeHandler,
    inputBlurHandler: tweetBlurHandler,
    reset: resetTweetInput,
    count: tweetCount,
  }: IValidate = useValidate(
    (value: string) => value.trim().length !== 0 && value.trim().length < 140
  );

  const handleDispatch = () => {
    dispatch(
      tweetActions.addComment({
        tweetid: params.id,
        comment: enteredTweet,
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
  };

  const addTweetOnEnter = (e: ) => {
    if (e.key === "Enter") {
      tweetSubmitHandler(e);
    }
  };

  return (
    <TweetForm
      placeholder={"Tweet your reply"}
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

export default NewComment;
