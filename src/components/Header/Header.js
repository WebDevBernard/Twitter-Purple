import classes from "./Header.module.css";
import Button from "../Button/Button";
export default function Header(props) {
  return (
    <div id="top" className={classes.header}>
      <h1 className={classes.title}>
        <br />
        <a href="#top">
          <span>twitter</span>
          <span className={classes.middle}>tweeter</span>
          <span> react</span>
        </a>
        <br />
      </h1>
      <nav>
        <p>
          <span>Login</span> to write a new tweet
        </p>
        <Button className={classes.button} onClick={props.onShowLogin}>
          Login
        </Button>
      </nav>
    </div>
  );
}
