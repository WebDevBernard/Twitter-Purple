import Card from "../Card/Card";
import TweetItem from "./TweetItem";
import classes from "./TweetList.module.css";
export default function TweetList(props) {
  return (
    <Card className={classes.card}>
      {[...props.tweets].reverse().map((tweet) => {
        return (
          <TweetItem
            key={tweet.id}
            id={tweet.id}
            tweet={tweet.text}
            like={tweet.like}
            createdAt={tweet.createdAt}
            onRemoveTweet={props.onRemoveTweet}
            avatar={tweet.avatar}
            userName={tweet.userName}
          />
        );
      })}
    </Card>
  );
}
