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

        <FontAwesomeIcon
          className={classes.close}
          onClick={props.onClose}
          icon={faTimes}
          alt="close"
        />
      </header>
      {!toggleLogin && (
        <form id="signup" className={classes.signup}>
          <label htmlFor="signup">Create an new Account</label>
          <input placeholder="Name"></input>
          <input placeholder="Username"></input>
          <input placeholder="Password"></input>
          <input placeholder="Enter Password Again"></input>
          <Button className={classes.buttons}>Sign UP</Button>
        </form>
      )}
      {toggleLogin && (
        <form id="login" className={classes.login}>
          <label htmlFor="login">Enter Login Information</label>
          <input placeholder="Username"></input>
          <input placeholder="Password"></input>
          <Button className={classes.buttonl}>Login</Button>
        </form>
      )}
      <footer>
        <p>or</p>
        <Button onClick={handleToggle} className={classes.button}>
          {toggleLogin ? "Create an account" : "Login with an account"}
        </Button>
      </footer>
    </Modal>
  );
}
