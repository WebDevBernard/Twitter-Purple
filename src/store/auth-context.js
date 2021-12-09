import { createContext, useState, useCallback } from "react";
import avatar, { shortName } from "../utils/avatars-names";
const AuthContext = createContext({});

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

  const handleUserName = () => {
    !isLoggedIn ? userName : loginName;
  };

  return (
    <AuthContext.Provider
      value={{
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
