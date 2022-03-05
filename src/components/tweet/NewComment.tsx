import { tweetActions } from "../../redux/tweet-slice";
import { useDispatch } from "react-redux";
import useCurrentUser from "../hooks/useCurrentUser";
import useValidate from "../hooks/useValidate";
import TweetForm from "./TweetForm";
const NewComment = (props: any) => {
  const dispatch = useDispatch();
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
        id: props.id,
        reply: {
          comment: enteredTweet,
          avatar: selectUserAvatar,
          userName: selectUserName,
        },
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
    if (e.keyCode === 13) {
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
