import { useState, useReducer } from "react";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import classes from "./Login.module.css";
export default function Login(props) {
  const [toggleLogin, setToggleLogin] = useState(false);
  const handleToggle = () => {
    toggleLogin ? setToggleLogin(false) : setToggleLogin(true);
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
      {!toggleLogin && (
        <form id="signup" className={classes.signup}>
          <label htmlFor="signup">Sign Up</label>
          <input placeholder="Name"></input>
          <input placeholder="Username"></input>
          <input placeholder="Password"></input>
          <input placeholder="Enter Password Again"></input>
          <Button className={classes.buttons}>Sign up</Button>
        </form>
      )}
      {toggleLogin && (
        <form id="login" className={classes.login}>
          <label htmlFor="login">Enter Login Information</label>
          <input placeholder="Username"></input>
          <input placeholder="Password"></input>
          <Button className={classes.buttons}>Login</Button>
        </form>
      )}
      <footer>
        <p onClick={handleToggle} className={classes.logincreate}>
          {toggleLogin ? "Create a new account" : "Login with existing account"}
        </p>
      </footer>
    </Modal>
  );
}
