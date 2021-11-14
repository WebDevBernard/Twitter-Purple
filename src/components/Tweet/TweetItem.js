import moment from "moment";
import Card from "../Card/Card";
import classes from "./TweetItem.module.css";

// const avatars = {

//   Female: ["https://i.imgur.com/nlhLi3I.png","https://i.imgur.com/z5LNkkB.png","https://i.imgur.com/v0JXau2.png","https://i.imgur.com/lRUnDgU.png", "https://i.imgur.com/3GvwNBf.png"],
//   Male: ["https://i.imgur.com/73hZDYK.png","https://i.imgur.com/5fUVPRP.png","https://i.imgur.com/DVpDmdR.png","https://i.imgur.com/2WZtOD6.png", "https://i.imgur.com/ilT4JDe.png"]

// }
export default function TweetItem(props) {
  const timeago = moment(Date.now().created_at).fromNow();
  return (
    <Card className={classes.card}>
      <header>
        <div>
          <div>
            <img src="https://i.imgur.com/ilT4JDe.png" /> <p>@ username</p>
          </div>
          <i className="fas fa-ellipsis-h"></i>
        </div>
      </header>
      <p>{props.tweet}</p>
      <footer>
        <span>{timeago}</span>
        <div className={classes.icons}>
          <i className="far fa-heart" fa-stack-1x></i>
        </div>
      </footer>
    </Card>
  );
}
