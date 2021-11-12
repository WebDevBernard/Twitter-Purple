import "./Header.css";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="content">
        <h1 className="title">
          <Link to="/">twitter clone</Link>
        </h1>
      </div>
      <nav>
        <ul className="navlinks">
          <li>
            <NavLink to="/">Sign Up</NavLink>
          </li>
          <li>
            <NavLink to="/">Login</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
