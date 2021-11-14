import { useState } from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import classes from "./NewTweet.module.css";

export default function Tweet(props) {
  const [enteredTweet, setEnteredTweet] = useState("");
  const [error, setError] = useState({ message: "" });
  const [count, setCount] = useState(0);

  const addTweetHandler = (e) => {
    e.preventDefault();
    if (enteredTweet.trim().length >= 140) {
      setError({
        message: "tweet too long",
      });
      return;
    }
    if (enteredTweet.trim().length <= 0) {
      setError({
        message: "tweet too short!",
      });
      return;
    }
    props.onAddTweet(enteredTweet);
    setEnteredTweet("");
    setCount(0);
  };
  // removes the error message
  const errorHandler = () => {
    setError(null);
  };

  // used in onChange prop to reset the input, enteredTweet goes in value
  const tweetChangeHandler = (e) => {
    setEnteredTweet(e.target.value);
    setCount(e.target.value.length);
  };
  //press enter to submit
  const onEnterPress = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      props.onAddTweet(enteredTweet);
      setEnteredTweet("");
      setCount(0);
    }
  };
  return (
    <Card className={classes.card}>
      <form onSubmit={addTweetHandler} onKeyDown={onEnterPress}>
        <div>
          <img src="https://i.imgur.com/ilT4JDe.png" alt="avatar" />
          <p className={classes.tag}>@ happy guy</p>
        </div>
        <textarea
          className={classes.input}
          placeholder="What are you humming about?"
          autoComplete="off"
          id="tweetinput"
          type="text"
          onClick={errorHandler}
          onChange={tweetChangeHandler}
          value={enteredTweet}
          rows="4"
          cols="30"
        ></textarea>

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
