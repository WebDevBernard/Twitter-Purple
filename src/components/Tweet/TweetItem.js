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
      <header>
        <div>
          <div>
            {/* <img src="https://i.imgur.com/ilT4JDe.png" alt="avatar" /> */}
            <img src={props.avatar} alt="avatar" />
            <p>@ random dude</p>
          </div>
          <FontAwesomeIcon
            onClick={deleteHandler}
            className={classes.delete}
            icon={faTrashAlt}
            alt="delete"
          />
        </div>
      </header>
      <p className={classes.input}>{props.tweet}</p>
      <footer>
        <span className={classes.time}>{timeAgo(props.createdAt)}</span>

        <FontAwesomeIcon
          onClick={toggleLike}
          className={likeToggle ? classes.like : classes.heart}
          icon={faHeart}
          alt="like"
        />
      </footer>
    </Card>
  );
}
