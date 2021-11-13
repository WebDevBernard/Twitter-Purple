import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
export default function Header() {
  return (
    <div className={classes.header}>
      <p className={classes.title}>
        <Link to="/">Home</Link>
      </p>
      <nav>
        <p>
          <span>Login</span> to write a new tweet
        </p>
        <Button className={classes.button}>Login</Button>
      </nav>
    </div>
  );
}
