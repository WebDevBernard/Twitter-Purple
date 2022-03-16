import React, { FC, useState, useContext } from "react";
import AuthContext from "../../store/auth-context";
import Modal from "../shared/Modal";
import { XIcon } from "@heroicons/react/solid";
import SignUp, { ResetPassword, SignIn } from "./Auth";
import { FirebaseLogin } from "./Auth";
const ForgotPassword = (props: any) => {
  return (
    <div>
      <button
        className="font-thin px-6 py-1.5 rounded-3xl w-full border-2 border-purple-500 hover:bg-violet-200"
        onClick={props.toggleForgotPassword}
      >
        {!props.forgotPassword ? "Forgot Password?" : "Return"}
      </button>
    </div>
  );
};
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
    <Modal
      className="md:top-20 h-screen md:absolute md:w-[600px] md:h-[650px]"
      onClose={props.onClose}
    >
      <div className="flex p-3  justify-between">
        <XIcon onClick={props.onClose} className="h-6 w-6  cursor-pointer" />
        <i className="devicon-twitter-original text-[24px]  mr-8 text-secondary_text "></i>
        <br />
      </div>
      <div
        className={`${!isLogin && "px-8 md:px-36"} ${
          isLogin && "px-8"
        }  py-6 flex flex-col justify center space-y-6`}
      >
        <h3 className="font-bold text-xl">
          {!forgotPassword && !isLogin && "Sign in to Twitter"}
          {!forgotPassword && isLogin && "Create your account"}
          {forgotPassword && "Reset your password"}
        </h3>

        {!forgotPassword && isLogin && (
          <SignUp
            handleNotification={handleNotification}
            onClose={props.onClose}
            handleLoading={handleLoading}
            loading={loading}
          />
        )}
        {!forgotPassword && !isLogin && (
          <div>
            <FirebaseLogin
              handleNotification={handleNotification}
              onClose={props.onClose}
            />
            <p className="leading-4 relative flex items-center  justify-center mb-6 border-t-2 border-violet-400  ">
              <span className=" p-2 absolute bg-violet-100 ">or</span>
            </p>
            <SignIn
              handleNotification={handleNotification}
              onClose={props.onClose}
            />
          </div>
        )}
        {forgotPassword && (
          <ResetPassword
            handleNotification={handleNotification}
            onClose={props.onClose}
          />
        )}
        {!isLogin && (
          <ForgotPassword
            forgotPassword={forgotPassword}
            toggleForgotPassword={toggleForgotPassword}
          />
        )}

        <div className="cursor-pointer">
          <p className={`${!isLogin && "mt-8"} `}>
            {isLogin && !forgotPassword && "Login with an existing account"}
            {!isLogin && !forgotPassword && (
              <p>
                Don't have an account?{" "}
                <span onClick={handleLoginTab} className="text-blue-500">
                  Sign Up
                </span>
              </p>
            )}
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default Login;
