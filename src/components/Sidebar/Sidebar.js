import { Link } from "react-router-dom";
import classes from "./Sidebar.module.css";
export default function Sidebar(props) {
  return (
    <aside className={classes.sidebar}>
      <h1 className={classes.title}>
        <br />
        <Link to="/">
          <span>twitter</span>
          <span style={{ color: "greenyellow" }}> tweeter</span>
          <span> react</span>
        </Link>
        <br />
      </h1>
    </aside>
  );
}
