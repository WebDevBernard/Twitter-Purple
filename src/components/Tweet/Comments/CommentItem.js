import Card from "../../Card/Card";
import { useDispatch } from "react-redux";
import { tweetActions } from "../../../redux/tweet-slice";
import moment from "moment";
import classes from "./CommentItem.module.css";
const timeAgo = (el) => moment(el).fromNow();
export default function CommentItem(props) {
  const dispatch = useDispatch();

  const likeToggleHandler = () => {
    dispatch(
      tweetActions.toggleCommentLike({
        id: props.currentTweetId,
        commentid: props.id,
        like: !props.like,
      })
    );
  };

  const heartLength = props.like ? 1 : 0;
  return (
    <Card className={classes.card}>
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
        <div className={classes.likecontainer}>
          <img
            onClick={likeToggleHandler}
            className={props.like ? classes.like : classes.heart}
            alt="like"
            src={
              props.like
                ? "https://img.icons8.com/dusk/64/000000/hearts.png"
                : "https://img.icons8.com/wired/64/000000/hearts.png"
            }
          />
          <span>{heartLength}</span>
        </div>
      </footer>
    </Card>
  );
}
