import { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import classes from "./SideBar.module.css";
import Card from "../Card/Card";
import AuthContext from "../../store/auth-context";
import { auth } from "../../utils/firebase";
import avatar, { shortName } from "../../utils/generate-avatar-names";
export default function SideBar() {
  const params = useParams();
  const tweets = useSelector((state) => state.tweet);
  const { currentUser } = useContext(AuthContext);
  const [ready, setReady] = useState(null);

  // this useEffect makes it so the conditional default element is not shown when the app is checking if currentUser exists
  useEffect(() => {
    const timer = setTimeout(() => {
      setReady(true);
    }, 150);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {}, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  const selectUserName = currentUser ? auth.currentUser.displayName : shortName;
  const selectUserAvatar = !currentUser ? avatar : auth.currentUser.photoURL;
  const selectedTweet = tweets.find((tweet) => tweet.id === params.id);
  const messageLength =
    selectedTweet !== undefined
      ? selectedTweet.reply.filter(
          (comments) => comments.userName === selectUserName
        ).length
      : null;

  const tweetLength = !window.location.href.match("comment")
    ? tweets.filter((tweet) => tweet.userName === selectUserName).length
    : null;

  return (
    <div className={classes.cardcontainer}>
      <Card className={classes.card}>
        {ready && (
          <div className={classes.followcard}>
            <img
              className={classes.avatar}
              src={selectUserAvatar}
              alt="avatar"
            />

            <div className={classes.username}>
              <img
                className={classes.atSign}
                src="https://img.icons8.com/ios/50/000000/email.png"
                alt="email"
              />

              <p>{selectUserName}</p>
            </div>
          </div>
        )}
        <Card className={classes.cards}>
          <Link
            to={
              window.location.href.match("comments")
                ? `/comments/${params.id}`
                : !window.location.href.match("tweets")
                ? `/${selectUserName}/tweets`
                : `/`
            }
          >
            <p
              className={
                window.location.href.match("comment")
                  ? classes.profiledescription
                  : classes.tweetdescription
              }
            >
              {tweetLength} {messageLength}{" "}
              {window.location.href.match("comment") ? "Comment" : "Tweet"}
              {!window.location.href.match("comment")
                ? tweetLength <= 1
                  ? null
                  : "s"
                : null}
              {window.location.href.match("comment")
                ? messageLength <= 1
                  ? null
                  : "s"
                : null}
            </p>
          </Link>
        </Card>
      </Card>
    </div>
  );
}
