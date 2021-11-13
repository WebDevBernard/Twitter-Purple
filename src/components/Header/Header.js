import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
export default function Header() {
  return (
    <div className={classes.header}>
      <h1 className={classes.title}>
        <Link to="/">
          <span>twitter</span>
          <span style={{ color: "greenyellow" }}> tweeter</span>
          <span> clone</span>
        </Link>
      </h1>
      <nav>
        <p>
          <span>Login</span> to write a new tweet
        </p>
        <Button className={classes.button}>Login</Button>
      </nav>
    </div>
  );
}
