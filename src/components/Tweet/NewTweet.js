import { useDispatch } from "react-redux";
import { tweetActions } from "../../redux/tweet-slice";
import { useState, useContext } from "react";
import { auth } from "../../utils/firebase";
import Card from "../Card/Card";
import Button from "../Button/Button";
import classes from "./NewTweet.module.css";
import AuthContext from "../../store/auth-context";
import avatar, { shortName } from "../../utils/avatars-names";

export default function Tweet() {
  const [enteredTweet, setEnteredTweet] = useState("");
  const [error, setError] = useState({});
  const [count, setCount] = useState(0);
  const { selectUserName, selectUserAvatar, currentUser } =
    useContext(AuthContext);
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

  const validateInput = (values) => {
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
        <div>
          <img
            className={classes.avatar}
            src={!currentUser ? avatar : auth.currentUser.photoURL}
            alt="avatar"
          />
          <div className={classes.tag}>
            <img
              className={classes.atSign}
              src="https://img.icons8.com/ios/50/000000/email.png"
              alt="email"
            />
            {!currentUser ? shortName : auth.currentUser.displayName}
          </div>
        </div>
        <textarea
          className={classes.input}
          id="tweetinput"
          placeholder="What are you humming about?"
          onClick={errorHandler}
          onChange={tweetChangeHandler}
          value={enteredTweet}
          rows={4}
          autoComplete="off"
          type="text"
        />
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
