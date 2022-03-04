import { useState, useContext } from "react";
import AuthContext from "../../store/auth-context";
import { tweetActions } from "../../redux/tweet-slice";
import { useDispatch } from "react-redux";
import { auth } from "../../utils/firebase";
import useAvatarReady from "../hooks/useAvatarReady";
import Avatar from "../shared/Avatar";
import TweetButton from "../layout/TweetButton";
import { tweetIconSmall } from "../styles/heroicons-style";
import avatar, { shortName } from "../../utils/avatar-names";
const NewComment = (props: any) => {
  const dispatch = useDispatch();
  const [enteredTweet, setEnteredTweet] = useState("");
  const [error, setError] = useState<any>({});
  const [count, setCount] = useState(0);
  const { currentUser } = useContext<any>(AuthContext);
  const ready = useAvatarReady();

  const selectUserName = currentUser
    ? auth.currentUser?.displayName
    : shortName;
  const selectUserAvatar = !currentUser ? avatar : auth.currentUser?.photoURL;
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
  };

  const addTweetOnEnter = (e: any) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      validateInput();
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
            placeholder="Tweet your reply"
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
              <TweetButton className={tweetIconSmall} text="Comment" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewComment;
