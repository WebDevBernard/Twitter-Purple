import { useState, useCallback, useContext } from "react";
import moment from "moment";
import Card from "../Card/Card";
import classes from "./TweetItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../store/auth-context";

export default function TweetItem(props) {
  // const ctx = useContext(AuthContext);
  const deleteHandler = () => {
    // console.log(props);
    props.onRemoveTweet(props.id);
  };
  const [likeToggle, setLikeToggle] = useState(false);
  const toggleLike = useCallback(() => {
    setLikeToggle((prevShowToggle) => !prevShowToggle);
    // likeToggle ? setLikeToggle(false) : setLikeToggle(true);
  }, []);
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
          {/* <img src="https://i.imgur.com/ilT4JDe.png" alt="avatar" /> */}
          <img className={classes.avatar} src={props.avatar} alt="avatar" />
          <div className={classes.username}>
            <img
              className={classes.atSign}
              src="https://img.icons8.com/ios/50/000000/email.png"
            />
            <p>{props.userName}</p>
          </div>
        </div>
      </header>
      <br />
      <p className={classes.input}>{props.tweet}</p>
      <footer>
        <span className={classes.time}>{timeAgo(props.createdAt)}</span>
        <img
          onClick={toggleLike}
          className={likeToggle ? classes.like : classes.heart}
          icon={faHeart}
          alt="like"
          src={
            likeToggle
              ? "https://img.icons8.com/dusk/64/000000/hearts.png"
              : "https://img.icons8.com/wired/64/000000/hearts.png"
          }
        />
      </footer>
    </Card>
  );
}
