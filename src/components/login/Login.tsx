import { useState, useContext } from "react";
import AuthContext from "../../store/auth-context";
import Modal from "../shared/Modal";
import { XIcon } from "@heroicons/react/solid";
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

  const handleLoginTab = () => {
    setIsLogin(!isLogin);
    setError("");
  };

  const handlePasswordReset = () => {
    setPasswordReset(!passwordReset);
  };
  return (
    <Modal className="w-[400px]" onClose={props.onClose}>
      <div className="float-right p-2 cursor-pointer">
        <XIcon onClick={props.onClose} className="h-6 w-6" />
      </div>

      <div className=" p-6">
        <p className="">{error}</p>

        <div className="">
          {!passwordReset && !isLogin && (
            <label onClick={handleLoginTab} className="text-xl" htmlFor="input">
              Sign in with us
            </label>
          )}

          {!passwordReset && isLogin && (
            <label onClick={handleLoginTab} className="text-xl" htmlFor="input">
              Sign up with us
            </label>
          )}

          {passwordReset && (
            <label className="text-xl" htmlFor="email">
              Reset Password
            </label>
          )}
        </div>

        {!passwordReset && isLogin && (
          <SignUp
            handleNotification={handleNotification}
            onClose={props.onClose}
            handleLoading={handleLoading}
            loading={loading}
            handleError={handleError}
            passwordReset={handlePasswordReset}
            passwordText={passwordReset}
          />
        )}

        {!passwordReset && !isLogin && (
          <SignIn
            handleNotification={handleNotification}
            handleError={handleError}
            onClose={props.onClose}
            passwordText={passwordReset}
            passwordReset={handlePasswordReset}
          />
        )}

        {passwordReset && (
          <ResetPassword
            handleNotification={handleNotification}
            onClose={props.onClose}
            passwordText={passwordReset}
            passwordReset={handlePasswordReset}
          />
        )}
        {!isLogin && !passwordReset && (
          <div className="cursor-pointer mt-2">
            <p onClick={handleLoginTab}>Not registered? Create account</p>
          </div>
        )}
        {isLogin && !passwordReset && (
          <div className="cursor-pointer mt-2">
            <p onClick={handleLoginTab}>Login with an existing account</p>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default Login;
