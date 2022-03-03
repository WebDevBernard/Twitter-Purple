import Tweet from "./Tweet";

import { useSelector } from "react-redux";
export default function TweetList(props: any) {
  const tweets = useSelector((state: any) => state.tweet);
  return (
    <div className="">
      {[...tweets].reverse().map((tweet) => {
        return (
          <Tweet
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
