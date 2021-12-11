import { useParams, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { tweetActions } from "../../../redux/tweet-slice";
import NewComment from "./NewComment";
import CommentItem from "./CommentItem";
import Card from "../../Card/Card";
import moment from "moment";
import classes from "./CommentList.module.css";
const timeAgo = (el) => moment(el).fromNow();
export default function CommentList() {
  const dispatch = useDispatch();
  const params = useParams();
  const tweets = useSelector((state) => state.tweet);
  const selectedTweet = tweets.find((tweet) => tweet.id === params.id);
  const replies =
    selectedTweet === undefined ? <Navigate to="/404" /> : selectedTweet.reply;

  const likeToggleHandler = () => {
    dispatch(
      tweetActions.toggleLike({
        id: selectedTweet.id,
        like: !selectedTweet.like,
      })
    );
  };

  if (selectedTweet === undefined) {
    return <Navigate to="/404" />;
  }

  const commentLength = selectedTweet.reply.length;
  const heartLength = selectedTweet.like ? 1 : 0;
  return (
    <div className={classes.cardcontainer}>
      <Card className={classes.card}>
        <div className={classes.header}>
          <br />
        </div>
        <header>
          <div>
            <img
              className={classes.avatar}
              src={selectedTweet.avatar}
              alt="avatar"
            />
            <div className={classes.username}>
              <img
                className={classes.atSign}
                src="https://img.icons8.com/ios/50/000000/email.png"
                alt="@ sign"
              />
              <p>{selectedTweet.userName}</p>
            </div>
          </div>
        </header>
        <br />
        <p className={classes.input}>{selectedTweet.tweet}</p>
        <footer>
          <span className={classes.time}>
            {timeAgo(selectedTweet.createdAt)}
          </span>
          <div className={classes.likecontainer}>
            <img
              className={classes.comment}
              alt="comment"
              src="https://img.icons8.com/ios/50/000000/no-comments.png"
            />

            <span className={classes.commentcount}>{commentLength}</span>

            <img
              onClick={likeToggleHandler}
              className={selectedTweet.like ? classes.like : classes.heart}
              alt="like"
              src={
                selectedTweet.like
                  ? "https://img.icons8.com/dusk/64/000000/hearts.png"
                  : "https://img.icons8.com/wired/64/000000/hearts.png"
              }
            />
            <span>{heartLength}</span>
          </div>
        </footer>
      </Card>
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          color: "blueviolet",
        }}
      >
        Add A New Comment
      </p>
      <NewComment id={selectedTweet.id} />
      {[...replies].reverse().map((entries, id) => {
        return (
          <CommentItem
            currentTweetId={selectedTweet.id}
            key={id}
            id={entries.id}
            createdAt={entries.createdAt}
            tweet={entries.comment}
            avatar={entries.avatar}
            userName={entries.userName}
            like={entries.like}
          />
        );
      })}
    </div>
  );
}
