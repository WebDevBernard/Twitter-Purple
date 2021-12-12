import { useDispatch, useSelector } from "react-redux";
import { tweetActions } from "../../redux/tweet-slice";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import moment from "moment";
import Card from "../Card/Card";
import classes from "./TweetItem.module.css";
import DeleteDialog from "./DeleteDialog";
const timeAgo = (el) => moment(el).fromNow();
export default function TweetItem(props) {
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState(false);
  const tweets = useSelector((state) => state.tweet);
  const tweetIndex = tweets.findIndex((tweet) => tweet.id === props.id);
  const commentLength = tweets[tweetIndex].reply.length;
  const heartLength = tweets[tweetIndex].like ? 1 : 0;
  const likeToggleHandler = () => {
    dispatch(tweetActions.toggleLike({ id: props.id, like: !props.like }));
  };

  const deleteHandler = () => {
    props.handleNotification("Tweet Deleted");
    dispatch(tweetActions.deleteTweet({ id: props.id }));
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Card className={classes.card}>
        <div className={classes.header}>
          <br />
          {!(tweetIndex === 0 || tweetIndex === 1) && (
            <img
              onClick={handleOpenDialog}
              className={classes.delete}
              alt="delete"
              src="https://img.icons8.com/ios/50/000000/ellipsis.png"
            />
          )}
        </div>
        {openDialog && (
          <DeleteDialog
            open={openDialog}
            delete={deleteHandler}
            onOpen={handleOpenDialog}
            onClose={handleCloseDialog}
          />
        )}
        <header>
          <div>
            <img className={classes.avatar} src={props.avatar} alt="avatar" />
            <div className={classes.username}>
              <img
                className={classes.atSign}
                src="https://img.icons8.com/ios/50/000000/email.png"
                alt="@ sign"
              />

              <Link
                to={
                  !window.location.href.match("tweets")
                    ? `/${props.userName}/tweets`
                    : `/`
                }
              >
                <p>{props.userName}</p>
              </Link>
            </div>
          </div>
        </header>
        <br />
        <Link to={`/comments/${props.id}`}>
          <p className={classes.input}>{props.tweet}</p>
        </Link>

        <footer>
          <span className={classes.time}>{timeAgo(props.createdAt)}</span>
          <div className={classes.likecontainer}>
            <Link to={`/comments/${props.id}`}>
              <img
                className={classes.comment}
                alt="comment"
                src="https://img.icons8.com/ios/50/000000/no-comments.png"
              />
            </Link>
            <span className={classes.commentcount}>{commentLength}</span>

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
    </>
  );
}
