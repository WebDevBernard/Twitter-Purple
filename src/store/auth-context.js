import { createContext, useState, useEffect } from "react";
import { auth } from "../utils/firebase";
import avatar, { shortName } from "../utils/avatars-names";
const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const createLogin = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password);
  };

  const createProfile = (displayName, photoUrl) => {
    auth.currentUser.updateProfile({
      displayName: displayName,
      photoURL: photoUrl,
    });
  };

  const selectUserName = !currentUser
    ? shortName
    : auth.currentUser.displayName;
  const selectUserAvatar = !currentUser ? avatar : auth.currentUser.photoURL;

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        selectUserName,
        selectUserAvatar,
        createLogin,
        createProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
