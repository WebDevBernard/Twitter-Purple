import React, { FC, useState, useContext } from "react";
import AuthContext from "../../store/auth-context";
import Modal from "../shared/Modal";
import { XIcon } from "@heroicons/react/solid";
import SignUp, { ResetPassword, SignIn } from "./Auth";

const Login = (props: any) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [forgotPassword, setForgotPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const { handleNotification } = useContext(AuthContext);

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
    <Modal className="w-[502.188px] h-[600px] relative" onClose={props.onClose}>
      <div className="flex justify-between">
        <XIcon
          onClick={props.onClose}
          className="h-10 w-10 p-2 cursor-pointer"
        />
        <i className="devicon-twitter-original text-[24px] mt-4 mr-6 text-secondary_text "></i>
        <br />
      </div>
      <div className="flex flex-col justify center space-y-6">
        <h3 onClick={handleLoginTab} className="font-bold text-xl">
          {!forgotPassword && !isLogin && "Sign in to Twitter"}
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
      </div>
    </Modal>
  );
};

export default Login;
