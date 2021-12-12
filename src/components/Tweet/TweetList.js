import TweetItem from "./TweetItem";
import classes from "./TweetList.module.css";
import { useSelector } from "react-redux";
export default function TweetList(props) {
  const tweets = useSelector((state) => state.tweet);

  return (
    <div className={classes.card}>
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          color: "blueviolet",
        }}
      >
        Home Page
      </p>
      {[...tweets].reverse().map((tweet) => {
        return (
          <TweetItem
            key={tweet.id}
            id={tweet.id}
            tweet={tweet.tweet}
            like={tweet.like}
            createdAt={tweet.createdAt}
            avatar={tweet.avatar}
            userName={tweet.userName}
            handleNotification={props.handleNotification}
          />
        );
      })}
    </div>
  );
}
