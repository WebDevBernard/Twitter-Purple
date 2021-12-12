import TweetItem from "./TweetItem";
import classes from "./TweetList.module.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import { useContext } from "react";
import { auth } from "../../utils/firebase";
import { shortName } from "../../utils/generate-avatar-names";
export default function UserTweets(props) {
  const params = useParams(``);
  const tweets = useSelector((state) => state.tweet);
  const { currentUser } = useContext(AuthContext);
  const selectUserName = currentUser ? auth.currentUser.displayName : shortName;
  const selectedTweets = tweets.filter(
    (tweet) => tweet.userName === params.userid
  );
  const showTweets = selectedTweets !== undefined ? selectedTweets : null;

  const getUserName = params.userid !== selectUserName ? params.userid : "Your";

  return (
    <div className={classes.card}>
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          color: "blueviolet",
        }}
      >
        {`${getUserName} Tweets`}
      </p>
      {[...showTweets].reverse().map((tweet) => {
        return (
          <TweetItem
            key={tweet.id}
            id={tweet.id}
            tweet={tweet.tweet}
            like={tweet.like}
            createdAt={tweet.createdAt}
            avatar={tweet.avatar}
            userName={tweet.userName}
          />
        );
      })}
    </div>
  );
}
