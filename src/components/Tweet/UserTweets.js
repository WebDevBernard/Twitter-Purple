import TweetItem from "./TweetItem";
import classes from "./TweetList.module.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function UserTweets(props) {
  const params = useParams(``);
  const tweets = useSelector((state) => state.tweet);

  const selectedTweets = tweets.filter(
    (tweet) => tweet.userName === params.userid
  );
  const showTweets = selectedTweets !== undefined ? selectedTweets : null;

  console.log(params.userid);
  return (
    <div className={classes.card}>
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          color: "blueviolet",
        }}
      >
        Your Tweets
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
