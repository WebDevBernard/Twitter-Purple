import { useState, useRef } from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import classes from "./NewTweet.module.css";

export default function Tweet(props) {
  const [enteredTweet, setEnteredTweet] = useState("");
  const [error, setError] = useState();
  const [count, setCount] = useState(140);
  const countRef = useRef(140);

  const addTweetHandler = (e) => {
    e.preventDefault();
    if (enteredTweet.trim().length >= 140 || enteredTweet.trim().length <= 0) {
      setError({
        message: "An error has occured!",
      });
      return;
    }
    props.onAddTweet(enteredTweet);
    setEnteredTweet("");
  };

  const errorHandler = () => {
    setError(null);
  };

  const tweetChangeHandler = (e) => {
    setEnteredTweet(e.target.value);
    setCount(e.target.value.length);
  };
  return (
    <Card className={classes.card}>
      <form onSubmit={addTweetHandler}>
        <label htmlFor="tweetinput">
          What's happening? / What are you humming about?
        </label>
        <input
          autocomplete="off"
          id="tweetinput"
          type="text"
          onClick={errorHandler}
          onChange={tweetChangeHandler}
          value={enteredTweet}
        ></input>

        <footer>
          <Button className={classes.button} type="submit">
            TWEET
          </Button>
          {error && <p className={classes.error}>{error.message}</p>}
          <p>{140 - count}</p>
        </footer>
      </form>
    </Card>
  );
}
