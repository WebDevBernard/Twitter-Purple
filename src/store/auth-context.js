import { createContext, useState, useCallback } from "react";
import avatar, { shortName } from "../utils/avatars-names";
const AuthContext = createContext({});
const isEmail = (value) =>
  value
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState(shortName);
  const [loginName, setLoginName] = useState("");
  const [userAvatar, setUserAvatar] = useState(avatar);

  const handleLoginName = (name) => {
    setLoginName(name);
  };
  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  const handleUserName = !isLoggedIn ? userName : loginName;

  return (
    <AuthContext.Provider
      value={{
        userAvatar,
        userName,
        handleUserName,
        login,
        logout,
        isLoggedIn,
        loginName,
        handleLoginName,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
