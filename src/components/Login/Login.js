import { useState, useContext } from "react";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Input from "../Form/Input";
import classes from "./Login.module.css";
import AuthContext from "../../store/auth-context";
import useForm from "../../hooks/use-form";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) =>
  value
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

const passwordMinLength = (value) => value.length >= 6;

export default function Login(props) {
  const {
    reset: resetNameInput,
    isValid: enteredNameIsValid,
    value: enteredName,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHander,
    inputBlurHandler: nameBlurHandler,
  } = useForm(isNotEmpty);
  const {
    reset: resetEmailInput,
    isValid: enteredEmailIsValid,
    value: enteredEmail,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHander,
    inputBlurHandler: emailBlurHandler,
  } = useForm(isEmail);
  const {
    reset: resetPasswordInput,
    isValid: enteredPasswordIsValid,
    value: enteredPassword,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangedHander,
    inputBlurHandler: passwordBlurHandler,
  } = useForm(passwordMinLength);
  const context = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(false);
  const handleToggle = () => {
    isLogin ? setIsLogin(false) : setIsLogin(true);
  };
  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }
  const formSubmissionHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    context.handleLoginName(enteredName);
    context.login();
    props.onClose();
    console.log("Submitted");
    console.log(enteredName, enteredEmail, enteredPassword);
    resetNameInput();
    resetEmailInput();
    resetPasswordInput();
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
          <Input
            element="input"
            name="username"
            placeholder="Username"
            onChange={nameChangedHander}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
        )}
        {nameInputHasError && (
          <p className={classes.error}>Username must not be empty</p>
        )}
        <Input
          element="input"
          name="email"
          placeholder="Email"
          onChange={emailChangedHander}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className={classes.error}>Email is not valid</p>
        )}
        <Input
          element="input"
          name="password"
          placeholder="Password"
          type="password"
          onChange={passwordChangedHander}
          onBlur={passwordBlurHandler}
          value={enteredPassword}
        />
        {passwordInputHasError && (
          <p className={classes.error}>
            Password must be greater than 6 characters
          </p>
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
