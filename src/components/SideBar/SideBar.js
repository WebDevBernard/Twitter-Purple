import { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
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
  // Pass in the name as a parameter

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

  const messagelength = window.location.href.match("comment")
    ? selectedTweet.reply.filter(
        (comments) => comments.userName === selectUserName
      ).length
    : tweets.filter((tweet) => tweet.userName === selectUserName).length;

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
              <a href="/profile">
                <p>{selectUserName}</p>
              </a>
            </div>
          </div>
        )}
        <Card className={classes.cards}>
          <p className={classes.profiledescription}>
            {messagelength}{" "}
            {window.location.href.match("comment") ? "Comments" : "Tweets"}
          </p>
        </Card>
      </Card>
    </div>
  );
}
