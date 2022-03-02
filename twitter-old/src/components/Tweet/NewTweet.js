import { useDispatch } from "react-redux";
import { tweetActions } from "../../redux/tweet-slice";
import { useState, useContext, useEffect } from "react";
import { auth } from "../../utils/firebase";
import Card from "../Card/Card";
import Button from "../Button/Button";
import classes from "./NewTweet.module.css";
import AuthContext from "../../store/auth-context";
import avatar, { shortName } from "../../utils/generate-avatar-names";

export default function NewTweet(props) {
  const [enteredTweet, setEnteredTweet] = useState("");
  const [error, setError] = useState({});
  const [count, setCount] = useState(0);
  const { currentUser } = useContext(AuthContext);
  const [ready, setReady] = useState(null);

  // this useEffect makes it so the conditional default element is not shown when the app is checking if currentUser exists
  useEffect(() => {
    const timer = setTimeout(() => {
      setReady(true);
    }, 150);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {}, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  const selectUserName = currentUser ? auth.currentUser.displayName : shortName;
  const selectUserAvatar = !currentUser ? avatar : auth.currentUser.photoURL;
  const dispatch = useDispatch();

  const handleDispatch = (e) => {
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

  const addTweetOnClick = (e) => {
    e.preventDefault();
    validateInput();
  };

  const addTweetOnEnter = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      validateInput(e);
    }
  };
  // removes the error message
  const errorHandler = () => {
    setError("");
  };

  // used in onChange prop to reset the input, enteredTweet goes in value
  const tweetChangeHandler = (e) => {
    setEnteredTweet(e.target.value);
    setCount(enteredTweet.length);
  };

  return (
    <Card className={classes.card}>
      <form onSubmit={addTweetOnClick} onKeyDown={addTweetOnEnter}>
        <div className={classes.textareacontainer}>
          {ready && (
            <img
              className={classes.avatar}
              src={selectUserAvatar}
              alt="avatar"
            />
          )}
          <textarea
            className={classes.input}
            id="tweetinput"
            placeholder="What are you humming about?"
            onClick={errorHandler}
            onChange={tweetChangeHandler}
            value={enteredTweet}
            rows={3}
            autoComplete="off"
            type="text"
          />
        </div>

        <footer>
          <Button className={classes.button} type="submit">
            TWEET
          </Button>

          {error && <p className={classes.error}>{error.message}</p>}
          <p
            className={
              count - 140 <= 0 ? classes.counterblack : classes.counterred
            }
          >
            {140 - count}
          </p>
        </footer>
      </form>
    </Card>
  );
}
