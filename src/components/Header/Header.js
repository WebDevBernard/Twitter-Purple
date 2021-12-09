import { useContext } from "react";
import classes from "./Header.module.css";
import Button from "../Button/Button";
import AuthContext from "../../store/auth-context";
export default function Header(props) {
  const context = useContext(AuthContext);
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
          <p>twitter tweeter react</p>{" "}
        </a>
      </h1>

      <nav>
        {!context.isLoggedIn && (
          <p>
            <span>Sign Up</span> to tweet with a unique username
          </p>
        )}
        <Button
          className={classes.button}
          onClick={!context.isLoggedIn ? props.onOpen : context.logout}
        >
          {!context.isLoggedIn ? "SIGN UP" : "Logout"}
        </Button>
      </nav>
    </div>
  );
}
