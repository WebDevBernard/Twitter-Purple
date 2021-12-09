import { useState, useContext } from "react";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import classes from "./Login.module.css";
import AuthContext from "../../store/auth-context";

export default function Login(props) {
  const context = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(false);
  const handleToggle = () => {
    isLogin ? setIsLogin(false) : setIsLogin(true);
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Modal onClose={props.onClose} className={classes.modal}>
      <header>
        <br />
        <img
          className={classes.close}
          onClick={props.onClose}
          icon={faTimes}
          alt="close"
          src="https://img.icons8.com/ultraviolet/40/000000/delete-sign.png"
        />
      </header>
      <label htmlFor="login"> {isLogin ? "Login" : "Sign Up"}</label>
      <form
        onSubmit={formSubmissionHandler}
        id="login"
        className={classes.signup}
      >
        {!isLogin && (
          <input
            element="input"
            name="username"
            placeholder="Username"
            autoComplete="off"
            type="text"
          />
        )}
        <input
          element="input"
          name="email"
          placeholder="Email"
          autoComplete="off"
          type="text"
        />
        <input
          element="input"
          name="password"
          placeholder="Password"
          type="password"
          autoComplete="off"
          type="text"
        />
        {!isLogin && (
          <input
            element="input"
            name="confirmpassword"
            placeholder="Confirm Password"
            type="password"
            autoComplete="off"
            type="text"
          />
        )}
        <Button type="submit" className={classes.buttons}>
          {isLogin ? "Login" : "Create Account"}
        </Button>
      </form>
      <footer>
        <p onClick={handleToggle} className={classes.logincreate}>
          {isLogin ? "Create a new account" : "Login with existing account"}
        </p>
      </footer>
    </Modal>
  );
}
