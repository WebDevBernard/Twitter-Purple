import { useState, useCallback } from "react";
import moment from "moment";
import Card from "../Card/Card";
import classes from "./TweetItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

// const avatars = {

//   Female: ["https://i.imgur.com/nlhLi3I.png","https://i.imgur.com/z5LNkkB.png","https://i.imgur.com/v0JXau2.png","https://i.imgur.com/lRUnDgU.png", "https://i.imgur.com/3GvwNBf.png"],
//   Male: ["https://i.imgur.com/73hZDYK.png","https://i.imgur.com/5fUVPRP.png","https://i.imgur.com/DVpDmdR.png","https://i.imgur.com/2WZtOD6.png", "https://i.imgur.com/ilT4JDe.png"]

// }

export default function TweetItem(props) {
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
            <img src="https://i.imgur.com/ilT4JDe.png" alt="avatar" />
            <p>@ username</p>
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
        <span>{timeAgo(props.createdAt)}</span>

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
