import { useState, useEffect } from "react";
import TweetItem from "./TweetItem";
import classes from "./TweetList.module.css";
import { useSelector } from "react-redux";
export default function TweetList(props) {
  const tweets = useSelector((state) => state.tweet);
  console.log(tweets);

  const [tweetsList, setTweetsList] = useState([]);
  // only run once the first time this component is rendered
  useEffect(() => {
    if (localStorage.getItem("tweetData")) {
      setTweetsList(JSON.parse(localStorage.getItem("tweetData")));
    }
  }, []);
  // run every time our state changes (first argument is the name, 2nd data is an array)
  useEffect(() => {
    localStorage.setItem("tweetData", JSON.stringify(tweetsList));
  }, [tweetsList]);

  return (
    <div className={classes.card}>
      {[...tweets].reverse().map((tweet) => {
        return (
          <TweetItem
            key={tweet.id}
            id={tweet.id}
            tweet={tweet.tweet}
            like={tweet.like}
            createdAt={tweet.createdAt}
            onRemoveTweet={props.onRemoveTweet}
            avatar={tweet.avatar}
            userName={tweet.userName}
          />
        );
      })}
    </div>
  );
}
