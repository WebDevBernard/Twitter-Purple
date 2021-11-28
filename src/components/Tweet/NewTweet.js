import { useState, useContext } from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import classes from "./NewTweet.module.css";
import AuthContext from "../../store/auth-context";
import Input from "../Form/Input";

export default function Tweet(props) {
  const [enteredTweet, setEnteredTweet] = useState("");
  const [error, setError] = useState({});
  const [count, setCount] = useState(0);
  const context = useContext(AuthContext);

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
    props.onAddTweet(enteredTweet);
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
            src={context.userAvatar}
            alt="avatar"
          />
          <div className={classes.tag}>
            <img
              className={classes.atSign}
              src="https://img.icons8.com/ios/50/000000/email.png"
              alt="email"
            />
            {context.userName}
          </div>
        </div>
        <Input
          className={classes.input}
          id="tweetinput"
          placeholder="What are you humming about?"
          onClick={errorHandler}
          onChange={tweetChangeHandler}
          value={enteredTweet}
        ></Input>
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
