import { useState, useContext } from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import classes from "./NewTweet.module.css";
import AuthContext from "../../store/auth-context";
export default function Tweet(props) {
  // const ctx = useContext(AuthContext);
  const [enteredTweet, setEnteredTweet] = useState("");
  const [error, setError] = useState();
  const [count, setCount] = useState(0);

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

    props.handleAvatar();
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
      validateInput();
    }
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

  // <===============================useRef==++========================>
  // this is just an example on how to useRef. useReft should be used only for when reading not changing state
  // const tweetInputRef = useRef();
  // put this inside const validateInput
  // const enteredRefTweet = tweetInputRef.current.value;
  // put this inside input <input ref={enteredRefTweet}></input>
  // <=================================================================>

  const avatars = {
    Female: [
      "https://i.imgur.com/nlhLi3I.png",
      "https://i.imgur.com/z5LNkkB.png",
      "https://i.imgur.com/v0JXau2.png",
      "https://i.imgur.com/lRUnDgU.png",
      "https://i.imgur.com/3GvwNBf.png",
    ],
    Male: [
      "https://i.imgur.com/73hZDYK.png",
      "https://i.imgur.com/5fUVPRP.png",
      "https://i.imgur.com/DVpDmdR.png",
      "https://i.imgur.com/2WZtOD6.png",
      "https://i.imgur.com/ilT4JDe.png",
    ],
  };
  const avatarArray = Object.values(avatars.Male).concat(
    Object.values(avatars.Female)
  );
  const avatar = avatarArray[Math.floor(Math.random() * avatarArray.length)];
  return (
    <Card className={classes.card}>
      <form onSubmit={addTweetOnClick} onKeyDown={addTweetOnEnter}>
        <div>
          <img src={props.avatar} alt="avatar" />
          <p className={classes.tag}>@ random dude</p>
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
