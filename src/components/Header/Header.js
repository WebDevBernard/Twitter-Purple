import { useContext, useState, useEffect } from "react";
import classes from "./Header.module.css";
import Button from "../Button/Button";
import AuthContext from "../../store/auth-context";
import { auth } from "../../utils/firebase";
export default function Header({ onOpen }) {
  const [ready, setReady] = useState(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      setReady(true);
    }, 150);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  const logout = async () => {
    await auth.signOut();
  };
  const { currentUser } = useContext(AuthContext);
  return (
    <div id="top" className={classes.header}>
      <h1 className={classes.title}>
        <img
          src="https://img.icons8.com/dusk/64/000000/twitter--v1.png"
          alt="twitter"
        />
        <a href="/" rel="noreferrer">
          <p>twitter tweeter react</p>
        </a>
      </h1>

      <nav>
        {ready && (
          <>
            {currentUser && (
              <a href="/profile">
                <Button className={classes.profilebutton}>Profile</Button>
              </a>
            )}
            <Button
              className={classes.button}
              onClick={!currentUser ? onOpen : logout}
            >
              {!currentUser ? "Login" : "Logout"}
            </Button>
          </>
        )}
      </nav>
    </div>
  );
}
