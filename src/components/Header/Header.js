import classes from "./Header.module.css";
import Button from "../Button/Button";
export default function Header(props) {
  return (
    <div id="top" className={classes.header}>
      <h1 className={classes.title}>
        <a href="https://icons8.com/icon/67617/twitter">
          <img src="https://img.icons8.com/plasticine/100/000000/twitter--v1.png" />
        </a>

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
          SIGN UP
        </Button>
      </nav>
    </div>
  );
}
