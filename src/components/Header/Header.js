import classes from "./Header.module.css";
import Button from "../Button/Button";
export default function Header(props) {
  return (
    <div id="top" className={classes.header}>
      <h1 className={classes.title}>
        <img src="https://img.icons8.com/plasticine/100/000000/twitter--v1.png" />

        <a href="https://www.bernardyang.com/" target="_blank" rel="noreferrer">
          <p>twitter tweeter react</p>{" "}
        </a>
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
