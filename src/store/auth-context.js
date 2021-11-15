import React, { useState, useEffect, useReducer } from "react";

const AuthContext = React.createContext({
  isLoggedin: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormisValid] = useState(false);
  const [userAvatar, setUserAvatar] = useState();
  const emailReducer = (state, action) => {
    return { value: "", isValid: false };
  };
  const [emailState, dispacthEmail] = useReducer(emailReducer, {
    value: "",
    isVaild: false,
  });
  const avatars = {
    Female: [
      "https://i.imgur.com/nlhLi3I.png",
      "https://i.imgur.com/z5LNkkB.png",
      "https://i.imgur.com/v0JXau2.png",
      "https://i.imgur.com/lRUnDgU.png",
      "https://i.imgur.com/3GvwNBf.png",
    ],
    Male: [
      "https://i.imgur.com/73hZDYK.png",
      "https://i.imgur.com/5fUVPRP.png",
      "https://i.imgur.com/DVpDmdR.png",
      "https://i.imgur.com/2WZtOD6.png",
      "https://i.imgur.com/ilT4JDe.png",
    ],
  };
  const avatarArray = Object.values(avatars.Male).concat(
    Object.values(avatars.Female)
  );
  const avatar = avatarArray[Math.floor(Math.random() * avatarArray.length)];
  const handleAvatar = () => {
    setUserAvatar(avatar);
  };

  useEffect(() => {
    // we put set timeout here so the browser doesn't evaluate every keystroke when we only care about what the user enters at the end
    const identifier = setTimeout(() => {
      setFormisValid(
        enteredEmail.includes("@") && enteredPassword.trim().length > 6
      );
    }, 500);

    // clean up function makes it so identifier function runs just once
    return () => {
      clearTimeout(identifier);
    };
  }, [enteredPassword, enteredEmail]);

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
    setFormisValid(
      emailState.value.includes("@") && enteredPassword.trim().length > 6
    );
  };
  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);
    setFormisValid(
      enteredEmail.includes("@") && e.target.value.trim().length > 6
    );
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.onLogin(emailState.value, enteredPassword);
  };

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(false);
  };
  const loginHandler = () => {
    setIsLoggedIn(true);
  };
  return (
    <AuthContext.Provider value={{ avatar: avatar }}>
      {props.children}
    </AuthContext.Provider>
  );
};
// export function AuthContextProvider;
export default AuthContext;
