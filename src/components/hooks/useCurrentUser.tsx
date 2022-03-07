import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import { auth } from "../../utils/firebase";
import avatar, { shortName } from "../../utils/avatar-names";
import { string } from "yup/lib/locale";

// custom hook to find if current user is the random generated one or the signed in user
const useCurrentUser = () => {
  const { currentUser } = useContext(AuthContext);
  const selectUserName: string | null = currentUser
    ? auth.currentUser!.displayName
    : shortName;
  const selectUserAvatar: string | null = !currentUser
    ? avatar
    : auth.currentUser!.photoURL;

  return [selectUserAvatar, selectUserName];
};
export default useCurrentUser;
