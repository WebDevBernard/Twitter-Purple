import { useState } from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import "./Tweet.css";
export default function Tweet(props) {
  const [enteredTweet, setEnteredTweet] = useState("");

  const addTweetHandler = (e) => {
    e.preventDefault();
    props.onAddTweet(enteredTweet);
    setEnteredTweet("");
  };

  const tweetChangeHandler = (e) => {
    setEnteredTweet(e.target.value);
    console.log(enteredTweet);
  };
  return (
    <Card className="input">
      <form onSubmit={addTweetHandler}>
        <label htmlFor="username">What's Happening?</label>
        <input
          id="username"
          type="text"
          onChange={tweetChangeHandler}
          value={enteredTweet}
        ></input>
        <footer>
          <Button type="submit">Tweet</Button>
        </footer>
      </form>
    </Card>
  );
}
