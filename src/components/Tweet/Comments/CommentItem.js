import Card from "../../Card/Card";
import moment from "moment";
import classes from "./CommentItem.module.css";
const timeAgo = (el) => moment(el).fromNow();
export default function CommentItem(props) {
  console.log(props);
  return (
    <Card className={classes.card}>
      <div className={classes.header}>
        <br />
      </div>
      <header>
        <div>
          <img className={classes.avatar} src={props.avatar} alt="avatar" />
          <div className={classes.username}>
            <img
              className={classes.atSign}
              src="https://img.icons8.com/ios/50/000000/email.png"
              alt="@ sign"
            />
            <p>{props.userName}</p>
          </div>
        </div>
      </header>
      <br />

      <p className={classes.input}>{props.tweet}</p>
      <footer>
        <span className={classes.time}>{timeAgo(props.createdAt)}</span>
      </footer>
    </Card>
  );
}
