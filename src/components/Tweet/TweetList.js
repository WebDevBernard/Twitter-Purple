import Card from "../Card/Card";
import "./TweetList.css";
export default function TweetList(props) {
  return (
    <Card className="users">
      <ul>
        {props.tweets.map((tweet) => {
          return <li key={tweet.id}>{tweet.text}</li>;
        })}
      </ul>
    </Card>
  );
}
