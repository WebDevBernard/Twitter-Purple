import { useState, useContext } from "react";
import AuthContext from "../../store/auth-context";
import Modal from "../shared/Modal";
import Button from "../shared/Button";
import SignUp, { ResetPassword, SignIn } from "./Auth";
const Login = (props: any) => {
  const [isLogin, setIsLogin] = useState(false);
  const [passwordReset, setPasswordReset] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { handleNotification } = useContext<any>(AuthContext);
  const handleLoading = () => {
    setLoading(true);
  };

  const handleError = (e: any) => {
    setError(e);
  };

  const handleSignUpTab = () => {
    setIsLogin(false);
    setError("");
  };

  const handleLoginTab = () => {
    setIsLogin(true);
    setError("");
  };

  return (
    <Modal onClose={props.onClose}>
      <p className="">{error}</p>
      <Button onClick={props.onClose} className="">
        Exit
      </Button>
      <header>
        <div className="">
          {!passwordReset && (
            <label onClick={handleSignUpTab} className="" htmlFor="input">
              Login
            </label>
          )}

          {!passwordReset && (
            <label onClick={handleLoginTab} className="" htmlFor="input">
              Sign Up
            </label>
          )}

          {passwordReset && <label htmlFor="email">Reset Password</label>}
        </div>
      </header>
      {!passwordReset && isLogin && (
        <SignUp
          handleNotification={handleNotification}
          onClose={props.onClose}
          handleLoading={handleLoading}
          loading={loading}
          handleError={handleError}
        />
      )}
      {!passwordReset && !isLogin && (
        <SignIn
          handleNotification={handleNotification}
          handleError={handleError}
          onClose={props.onClose}
        />
      )}
      {passwordReset && (
        <ResetPassword
          handleNotification={handleNotification}
          onClose={props.onClose}
        />
      )}
      <footer>
        <p className="" onClick={() => setPasswordReset(!passwordReset)}>
          {!passwordReset ? "Forgot Password?" : "Return"}
        </p>
      </footer>
    </Modal>
  );
};

export default Login;
