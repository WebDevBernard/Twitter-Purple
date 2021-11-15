import classes from "./Header.module.css";
import Button from "../Button/Button";
export default function Header(props) {
  return (
    <div id="top" className={classes.header}>
      <h1 className={classes.title}>
        <br />
        <a
          href="https://github.com/WebDevBernard/Twitter-React"
          target="_blank"
          rel="noreferrer"
        >
          <span>twitter</span>
          <span className={classes.middle}>tweeter</span>
          <span> react</span>
        </a>
        <br />
      </h1>
      <nav>
        <p>
          <span>Login</span> or <span>Sign Up</span> to tweet as a different
          user
        </p>
        <Button className={classes.button} onClick={props.onShowLogin}>
          Sign Up
        </Button>
      </nav>
    </div>
  );
}
