import { useState } from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import "./Tweet.css";
export default function Tweet(props) {
  const [enteredTweet, setEnteredTweet] = useState("");
  const [error, setError] = useState();

  const addTweetHandler = (e) => {
    e.preventDefault();
    if (enteredTweet.trim().length >= 140) {
      setError({
        message: "Please enter an input less than 140",
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
  };
  return (
    <Card className="input">
      <form onSubmit={addTweetHandler}>
        <label htmlFor="username">What's Happening?</label>
        <input
          id="username"
          type="text"
          onClick={errorHandler}
          onChange={tweetChangeHandler}
          value={enteredTweet}
        ></input>
        {error && <p style={{ color: "red" }}>{error.message}</p>}
        <footer>
          <Button type="submit">Tweet</Button>
        </footer>
      </form>
    </Card>
  );
}
