import { createContext, useState } from "react";
import avatar, { shortName } from "../utils/avatars-names";
const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [userAvatar, setUserAvatar] = useState(avatar);
  const handleAvatar = () => {
    setUserAvatar(avatar);
  };
  const [userName, setUserName] = useState(shortName);
  const handleUserName = () => {
    setUserName(shortName);
  };
  return (
    <AuthContext.Provider
      value={{ userAvatar, handleAvatar, userName, handleUserName }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
