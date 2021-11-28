import { useState, useRef, useContext } from "react";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Input from "../Form/Input";
import classes from "./Login.module.css";

export default function Login(props) {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const passwordConfirmRef = useRef();
  const handleToggle = () => {
    isLogin ? setIsLogin(false) : setIsLogin(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredPassword2 = passwordConfirmRef.current.value;

    setIsLoading(true);
    let url;
    if (isLogin) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;
    } else {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setIsLoading(false);
      if (res.ok) {
      } else {
        res.json().then((data) => {
          console.log(data);
        });
      }
    });
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
      <form onSubmit={submitHandler} id="login" className={classes.signup}>
        <Input
          element="input"
          ref={emailInputRef}
          name="username"
          placeholder="Username"
          type="email"
        />
        <Input
          element="input"
          ref={passwordInputRef}
          name="password"
          placeholder="Password"
          type="password"
        />

        {!isLogin && (
          <Input
            element="input"
            ref={passwordConfirmRef}
            name="passwordConfirm"
            placeholder="Enter Password Again"
            type="password"
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
