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
        <a
          target="_blank"
          rel="noreferrer"
          href="https://icons8.com/icon/42859/twitter"
        >
          <img
            src="https://img.icons8.com/dusk/64/000000/twitter--v1.png"
            alt="twitter"
          />
        </a>

        <a href="https://www.bernardyang.com/" target="_blank" rel="noreferrer">
          <p>twitter tweeter react</p>
        </a>
      </h1>

      <nav>
        {ready && (
          <>
            {currentUser && <Button className={classes.button}>Profile</Button>}
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
