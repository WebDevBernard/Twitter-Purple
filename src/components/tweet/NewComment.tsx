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
    valueChangeHandler: tweetChangeHandler,

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

  return (
    <TweetForm
      placeholder={"Tweet your reply"}
      enteredTweet={enteredTweet}
      tweetSubmitHandler={tweetSubmitHandler}
      tweetChangeHandler={tweetChangeHandler}
      tweetCount={tweetCount}
      p="inline-block"
      pencil="hidden"
      disabled={!enteredTweetIsValid}
    />
  );
};

export default NewComment;
