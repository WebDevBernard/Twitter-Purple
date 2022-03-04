import { useState } from "react";
import { tweetActions } from "../../redux/tweet-slice";
import { useDispatch } from "react-redux";
import Avatar from "../shared/Avatar";
import TweetButton from "../layout/TweetButton";
import { tweetIconSmall } from "../styles/heroicons-style";
import useAvatarReady from "../hooks/useAvatarReady";
import { useNavigate } from "react-router-dom";
import useCurrentUser from "../hooks/useCurrentUser";
import useTweetComment from "../hooks/useTweetComment";
const NewTweet = (props: any) => {
  const dispatch = useDispatch();
  const [enteredTweet, setEnteredTweet] = useState("");
  const [error, setError] = useState<any>({});
  const [count, setCount] = useState(0);
  const [selectUserAvatar, selectUserName] = useCurrentUser();
  const ready = useAvatarReady();

  const navigate = useNavigate();

  const handleDispatch = () => {
    dispatch(
      tweetActions.addTweet({
        tweet: enteredTweet,
        avatar: selectUserAvatar,
        userName: selectUserName,
      })
    );
  };
  const validateInput = () => {
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
    handleDispatch();
    setEnteredTweet("");
    setCount(0);
  };

  const addTweetOnClick = (e: any) => {
    e.preventDefault();
    validateInput();
    navigate("/");
    props.onClose();
  };

  const addTweetOnEnter = (e: any) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      validateInput();
      navigate("/");
      props.onClose();
    }
  };
  // removes the error message
  const errorHandler = () => {
    setError("");
  };

  // used in onChange prop to reset the input, enteredTweet goes in value
  const tweetChangeHandler = (e: any) => {
    setEnteredTweet(e.target.value);
    setCount(enteredTweet.length);
  };
  return (
    <div className="flex px-3 py-2 border-hover_border  border-y-[1px]">
      {ready && (
        <Avatar
          avatar={selectUserAvatar}
          className="h-12 w-12 md:h-16 md:w-16"
        />
      )}
      <div className="w-full mt-2 mx-3">
        <form onSubmit={addTweetOnClick} onKeyDown={addTweetOnEnter}>
          <textarea
            id="tweetinput"
            onClick={errorHandler}
            onChange={tweetChangeHandler}
            value={enteredTweet}
            rows={3}
            autoComplete="off"
            placeholder="What are you humming about?"
            className="text-primary_dark_text placeholder:text-primary_light_text w-full text-lg bg-transparent border-b-2 border-hover_border resize-none focus:outline-none"
          ></textarea>
          <div className="flex items-center justify-between mt-2">
            <br />
            <div className="flex items-center">
              <p className="mr-4 text-secondary_text">
                {error && error.message}
              </p>
              <p
                className={error ? "text-secondary_text " : "text-primary_text"}
              >
                {140 - count}
              </p>
              <TweetButton className={tweetIconSmall} text="Tweet" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTweet;
