import { tweetActions } from "../../redux/tweet-slice";
import { useDispatch } from "react-redux";
import useCurrentUser from "../hooks/useCurrentUser";
import useValidate from "../hooks/useValidate";
import TweetForm from "./TweetForm";
import { useParams } from "react-router-dom";

import { AppDispatch } from "../../redux/store";

const NewComment = () => {
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
  } = useValidate(
    (value: string) => value.trim().length !== 0 && value.trim().length < 140
  );

  const handleDispatch = () => {
    dispatch(
      tweetActions.addComment({
        tweetId: params.id,
        comment: enteredTweet,
        avatar: selectUserAvatar,
        userName: selectUserName,
      })
    );
  };

  const tweetSubmitHandler = (e: any) => {
    e.preventDefault();
    if (!enteredTweetIsValid) {
      return;
    }
    handleDispatch();
    resetTweetInput();
  };

  const addTweetOnEnter = (e: any) => {
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
      rows={2}
      p="inline-block"
      pencil="hidden"
    />
  );
};

export default NewComment;
