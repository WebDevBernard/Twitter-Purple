import { createContext, useState, useEffect, FC } from "react";
import { auth } from "../utils/firebase";

interface IAuthContextProps {
  currentUser: string | null;
  handleNotification: (message: string) => void;
  notification: string | null;
}

const AuthContext = createContext<IAuthContextProps>({
  currentUser: "",
  handleNotification: () => {},
  notification: "",
});

export const AuthContextProvider: FC = (props) => {
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [notification, setNotification] = useState<string | null>("");
  const handleNotification = (message: string) => {
    setNotification(message);
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotification("");
    }, 10000);
    return () => {
      clearTimeout(timer);
    };
  }, [notification]);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        handleNotification,
        notification,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
