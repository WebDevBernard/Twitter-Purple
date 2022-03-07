import { Link } from "react-router-dom";
import { useState, useContext, FC } from "react";
import AuthContext from "../../store/auth-context";
import { auth } from "../../utils/firebase";
import { nanoid } from "nanoid";
import { AnimatePresence } from "framer-motion";
import { navLinks } from "../../utils/nav-links";
import NavButton from "../shared/NavButton";
import ProfileButton from "./ProfileButton";
import TweetButton from "./TweetButton";
import { tweetIcon } from "../styles/heroicons-style";
import Dialog from "../shared/Dialog";
import Avatar from "../shared/Avatar";
import useClickedOutside from "../hooks/useClickedOutside";
import useCurrentUser from "../hooks/useCurrentUser";
const logout = async () => {
  await auth.signOut();
};

interface IProps{
  ref: 

}
const ProfileDialog: FC<IProps> = (props) => {
  const { currentUser } = useContext(AuthContext);
  const [selectUserAvatar, selectUserName] = useCurrentUser();
  const domNode = useClickedOutside(() => {
    props.openDialog();
  });

  return (
    <Dialog className="relative top-0">
      <div ref={domNode}>
        <span className="flex space-x-1 p-2 border-b-[1px] border-border ">
          <div ref={props.menuRef} className={`flex  ${props.className}`}>
            <Avatar avatar={selectUserAvatar} className="h-12 w-12" />
            <div className="ml-4">
              <p className="font-bold text-purple-500">{selectUserName}</p>
              <p>@ {selectUserName}</p>
            </div>
          </div>
        </span>
        {currentUser && (
          <span
            onClick={props.handleOpenProfile}
            className="flex  space-x-2 border-transparent border-[1px] hover:bg-hover cursor-pointer p-2"
          >
            <p>Update Avatar</p>
          </span>
        )}

        <p
          className="flex  space-x-2 border-transparent border-[1px] hover:bg-hover cursor-pointer p-2 "
          onClick={!currentUser ? props.handleOpenAuth : logout}
        >
          {currentUser ? "Logout" : "Login"}
        </p>
      </div>
    </Dialog>
  );
};

const Nav = (props) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleOpenDialog = () => {
    setOpenDialog(!openDialog);
  };

  return (
    <div className="max-w-xs px-2 md:px-8 items-center flex flex-col justify-between top-0 overflow-hidden ">
      <div className="space-y-3 flex flex-col items-start justify-between mt-4">
        <Link to={"/"}>
          <i className="devicon-twitter-original text-[30px] ml-2 mb-2 text-secondary_text"></i>
        </Link>
        {Object.entries(navLinks).map((link) => {
          return (
            <NavButton
              className="rounded-3xl p-3"
              content={link[0]}
              key={nanoid()}
            >
              {link[1]}
            </NavButton>
          );
        })}
        <div onClick={props.handleOpenModal}>
          <TweetButton className={tweetIcon} text="Tweet" />
        </div>
      </div>
      <br />
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {openDialog && (
          <ProfileDialog
            openDialog={handleOpenDialog}
            handleOpenAuth={props.handleOpenAuth}
            handleOpenProfile={props.handleOpenProfile}
            handleOpenDialog={handleOpenDialog}
          />
        )}
      </AnimatePresence>
      <ProfileButton
        openDialog={handleOpenDialog}
        className="bottom-0 hover:bg-hover mb-4 md:pl-2 md:pr-4 md:py-2 rounded-full"
      />
    </div>
  );
};

export default Nav;
