import { useState, useRef } from "react";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import classes from "./Login.module.css";
// const initialState = {
//   name: "",
//   email: "",
//   password: "",
//   passwordConfirm: "",
//   isLoggedIn: false,
//   error: "",
// };

// const emailReducer = (state, action) => {
//   switch (action.type) {
//     case "login": {
//       return { ...state, isLoggedIn: true, error: "" };
//     }
//     case "success": {
//       return { ...state, isLoggedIn: true, error: "" };
//     }
//     default:
//       break;
//   }
// };

export default function Login(props) {
  const [isLogin, setIsLogin] = useState(false);
  const handleToggle = () => {
    isLogin ? setIsLogin(false) : setIsLogin(true);
  };
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  // const [emailState, dispatchEmail] = useReducer(emailReducer, initialState);

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    if (isLogin) {
    } else {
      fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_API_KEY}`,
        {
          method: "POST",
          body: JSON.stringify({ email: "", password: "" }),
        }
      );
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
      {!isLogin && (
        <form id="signup" className={classes.signup}>
          <label htmlFor="signup">Sign Up</label>
          <input name="name" placeholder="Name" autoComplete="off"></input>
          <input
            name="username"
            placeholder="Username"
            autoComplete="off"
          ></input>
          <input
            name="password"
            placeholder="Password"
            autoComplete="off"
          ></input>
          <input
            name="passwordConfirm"
            placeholder="Enter Password Again"
            autoComplete="off"
          ></input>
          <Button className={classes.buttons}>Sign up</Button>
        </form>
      )}
      {isLogin && (
        <form id="login" className={classes.login}>
          <label htmlFor="login">Enter Login Information</label>
          <input
            ref={emailInputRef}
            name="username"
            placeholder="Username"
            autoComplete="off"
          ></input>
          <input
            ref={passwordInputRef}
            name="passwordconfirm"
            placeholder="Password"
            autoComplete="off"
          ></input>
          <Button className={classes.buttons}>Login</Button>
        </form>
      )}
      <footer>
        <p onClick={handleToggle} className={classes.logincreate}>
          {isLogin ? "Create a new account" : "Login with existing account"}
        </p>
      </footer>
    </Modal>
  );
}
