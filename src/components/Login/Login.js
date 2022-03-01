import { useState } from "react";
import Modal from "../Modal/Modal";
import classes from "./Login.module.css";
import Button from "../Button/Button";
import SignUp, { ResetPassword, SignIn } from "./SignUp";
export default function LoginContainer(props) {
  const [isLogin, setIsLogin] = useState(false);
  const [passwordReset, setPasswordReset] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLoading = () => {
    setLoading(true);
  };

  const handleError = (e) => {
    setError(e);
  };

  const handleSignUpTab = () => {
    setIsLogin(true);
    setError("");
  };

  const handleLoginTab = () => {
    setIsLogin(false);
    setError("");
  };

  return (
    <Modal onClose={props.onClose} className={classes.modal}>
      <p className={classes.error}>{error}</p>
      <Button onClick={props.onClose} className={classes.close}>
        Exit
      </Button>
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

      {!passwordReset && !isLogin && (
        <SignUp
          handleNotification={props.handleNotification}
          onClose={props.onClose}
          handleLoading={handleLoading}
          loading={loading}
          handleError={handleError}
        />
      )}
      {!passwordReset && isLogin && (
        <SignIn
          handleNotification={props.handleNotification}
          handleError={handleError}
          onClose={props.onClose}
        />
      )}
      {passwordReset && (
        <ResetPassword
          handleNotification={props.handleNotification}
          onClose={props.onClose}
        />
      )}
      <footer>
        <p
          className={classes.logincreate}
          onClick={() => setPasswordReset(!passwordReset)}
        >
          {!passwordReset ? "Forgot Password?" : "Return"}
        </p>
      </footer>
    </Modal>
  );
}
