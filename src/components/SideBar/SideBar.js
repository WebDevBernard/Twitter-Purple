import { useState, useEffect, useContext } from "react";
import classes from "./SideBar.module.css";
import Card from "../Card/Card";
import AuthContext from "../../store/auth-context";
import { auth } from "../../utils/firebase";
import avatar, { shortName } from "../../utils/generate-avatar-names";
const knope = require("knope");

export default function SideBar() {
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
  const compliment = knope.getCompliment(selectUserName);
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
          <p className={classes.profiledescription}>{compliment}</p>
        </Card>
      </Card>
    </div>
  );
}
