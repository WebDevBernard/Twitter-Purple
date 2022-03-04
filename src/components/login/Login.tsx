import { useState, useContext } from "react";
import AuthContext from "../../store/auth-context";
import Modal from "../shared/Modal";
import { XIcon } from "@heroicons/react/solid";
import SignUp, { ResetPassword, SignIn } from "./Auth";

const Login = (props: any) => {
  const [isLogin, setIsLogin] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const { handleNotification } = useContext<any>(AuthContext);

  const handleLoading = () => {
    setLoading(true);
  };

  const handleLoginTab = () => {
    setIsLogin(!isLogin);
  };

  const toggleForgotPassword = () => {
    setForgotPassword(!forgotPassword);
  };

  return (
    <Modal className="w-[420px] p-10" onClose={props.onClose}>
      <XIcon
        onClick={props.onClose}
        className="h-6 w-6 float-right cursor-pointer"
      />
      <h3 onClick={handleLoginTab} className="font-bold text-xl">
        {!forgotPassword && !isLogin && "Sign in with us"}
        {!forgotPassword && isLogin && "Sign up with us"}
        {forgotPassword && "Reset password"}
      </h3>

      {!forgotPassword && isLogin && (
        <SignUp
          handleNotification={handleNotification}
          onClose={props.onClose}
          handleLoading={handleLoading}
          loading={loading}
          forgotPassword={forgotPassword}
          toggleForgotPassword={toggleForgotPassword}
        />
      )}
      {!forgotPassword && !isLogin && (
        <SignIn
          handleNotification={handleNotification}
          onClose={props.onClose}
          forgotPassword={forgotPassword}
          toggleForgotPassword={toggleForgotPassword}
        />
      )}
      {forgotPassword && (
        <ResetPassword
          handleNotification={handleNotification}
          onClose={props.onClose}
          forgotPassword={forgotPassword}
          toggleForgotPassword={toggleForgotPassword}
        />
      )}

      <div className="cursor-pointer mt-2">
        <p onClick={handleLoginTab}>
          {isLogin && !forgotPassword && "Login with an existing account"}
          {!isLogin && !forgotPassword && "Not registered? Create account"}
        </p>
      </div>
    </Modal>
  );
};

export default Login;
