import { useState, useRef } from "react";
import { auth } from "../../utils/firebase";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import classes from "./Login.module.css";
import avatar from "../../utils/avatars-names";
import { Formik, Form } from "formik";

export default function Login(props) {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const passwordConfirm = useRef();
  const resetPasswordRef = useRef();
  const [isLogin, setIsLogin] = useState(false);
  const [passwordReset, setPasswordReset] = useState(false);

  const handleSignUpTab = () => {
    setIsLogin(true);
  };

  const handleLoginTab = () => {
    setIsLogin(false);
  };

  const signUpHandler = async (e) => {
    e.preventDefault();
    try {
      await auth.createUserWithEmailAndPassword(
        email.current.value,
        password.current.value
      );

      await auth.currentUser.updateProfile({
        displayName: name.current.value,
        photoURL: avatar,
      });
      props.onClose();
    } catch (err) {
      console.error(err);
    }
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(
        email.current.value,
        password.current.value
      );
      props.onClose();
    } catch (err) {
      console.error(err);
    }
  };

  const resetPasswordHandler = async (e) => {
    e.preventDefault();
    try {
      await auth.Auth.sendPasswordResetEmail(resetPasswordRef.current.value);
      props.onClose();
    } catch (err) {
      console.error(err);
    }
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
      <div className={classes.loginheader}>
        {!passwordReset && (
          <label
            onClick={handleLoginTab}
            className={`${!isLogin ? classes.underline : classes.signup}`}
            htmlFor="input"
          >
            Sign Up
          </label>
        )}
        {!passwordReset && (
          <label
            onClick={handleSignUpTab}
            className={`${isLogin ? classes.underline : classes.login}`}
            htmlFor="input"
          >
            Login
          </label>
        )}
        {passwordReset && <label htmlFor="email">Reset Password</label>}
      </div>
      {!passwordReset && (
        <form
          onSubmit={!isLogin ? signUpHandler : loginHandler}
          id="input"
          className={classes.input}
        >
          {!isLogin && (
            <input
              element="input"
              name="username"
              placeholder="Username"
              autoComplete="off"
              type="text"
              ref={name}
            />
          )}
          <input
            element="input"
            name="email"
            placeholder="Email"
            autoComplete="off"
            type="text"
            ref={email}
          />
          <input
            element="input"
            name="password"
            placeholder="Password"
            type="password"
            autoComplete="off"
            ref={password}
          />
          {!isLogin && (
            <input
              element="input"
              name="confirmpassword"
              placeholder="Confirm Password"
              type="password"
              autoComplete="off"
              ref={passwordConfirm}
            />
          )}
          <Button type="submit" className={classes.buttons}>
            {isLogin ? "Login" : "Create Account"}
          </Button>
        </form>
      )}

      {passwordReset && (
        <form className={classes.input} onSumbit={resetPasswordHandler}>
          <input
            element="input"
            name="email"
            placeholder="Enter Email Address"
            autoComplete="off"
            type="text"
            ref={resetPasswordRef}
          />
          <Button type="submit" className={classes.buttons}>
            Reset Password
          </Button>
        </form>
      )}
      <footer>
        <p
          className={classes.logincreate}
          onClick={() => setPasswordReset(!passwordReset)}
        >
          {!passwordReset ? "Forgot Password?" : "Nevermind..."}
        </p>
      </footer>
    </Modal>
  );
}
