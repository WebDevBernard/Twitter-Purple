import { createContext, useState, useEffect } from "react";
import { auth } from "../utils/firebase";
const AuthContext = createContext({});

export const AuthContextProvider = (props: any) => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [notification, setNotification] = useState("");
  const handleNotification = (e: any) => {
    setNotification(e);
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
