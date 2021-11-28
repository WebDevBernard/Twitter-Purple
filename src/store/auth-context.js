import { createContext, useState, useCallback } from "react";
import { shortName } from "../utils/avatars-names";
const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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

  const handleUserName = () => {
    setUserName(shortName);
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
