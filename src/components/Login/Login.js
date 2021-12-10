import { useState } from "react";
import Modal from "../Modal/Modal";
import classes from "./Login.module.css";
import SignUp, { ResetPassword, SignIn } from "./SignUp";
export default function LoginContainer(props) {
  const [isLogin, setIsLogin] = useState(false);
  const [passwordReset, setPasswordReset] = useState(false);

  const handleSignUpTab = () => {
    setIsLogin(true);
  };

  const handleLoginTab = () => {
    setIsLogin(false);
  };

  return (
    <Modal onClose={props.onClose} className={classes.modal}>
      <header>
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
      </header>

      {!passwordReset && !isLogin && <SignUp onClose={props.onClose} />}
      {!passwordReset && isLogin && <SignIn onClose={props.onClose} />}
      {passwordReset && <ResetPassword onClose={props.onClose} />}
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
