import { useDispatch } from "react-redux";
import { tweetActions } from "../../redux/tweet-slice";
import moment from "moment";
import Card from "../Card/Card";
import classes from "./TweetItem.module.css";
import { faHeart, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default function TweetItem(props) {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(tweetActions.deleteTweet({ id: props.id }));
  };
  const likeToggleHandler = () => {
    dispatch(tweetActions.toggleLike({ id: props.id, like: !props.like }));
  };

  const timeAgo = (el) => moment(el).fromNow();

  return (
    <Card className={classes.card}>
      <div className={classes.header}>
        <br />
        <img
          onClick={deleteHandler}
          className={classes.delete}
          icon={faTrashAlt}
          alt="delete"
          src="https://img.icons8.com/dotty/80/000000/delete-sign.png"
        />
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
        <div className={classes.likecontainer}>
          {props.like && <span>1</span>}
          <img
            onClick={likeToggleHandler}
            className={props.like ? classes.like : classes.heart}
            icon={faHeart}
            alt="like"
            src={
              props.like
                ? "https://img.icons8.com/dusk/64/000000/hearts.png"
                : "https://img.icons8.com/wired/64/000000/hearts.png"
            }
          />
        </div>
      </footer>
    </Card>
  );
}
