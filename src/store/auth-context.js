import { createContext, useState, useCallback } from "react";
import avatar, { shortName } from "../utils/avatars-names";
const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userAvatar, setUserAvatar] = useState(avatar);
  const [userName, setUserName] = useState(shortName);
  const [loginName, setLoginName] = useState("");

  const handleLoginName = (name) => {
    setLoginName(name);
  };
  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  const handleAvatar = () => {
    setUserAvatar(avatar);
  };
  const handleUserName = () => {
    setUserName(shortName);
  };

  return (
    <AuthContext.Provider
      value={{
        userAvatar,
        handleAvatar,
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
