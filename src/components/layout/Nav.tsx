import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import AuthContext from "../../store/auth-context";
import { auth } from "../../utils/firebase";
import avatar, { shortName } from "../../utils/avatar-names";
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
const ProfileDialog = (props: any) => {
  const domNode = useClickedOutside(() => {
    props.openDialog();
  });
  return (
    <Dialog className="bottom-0 left-20 md:left-0 md:relative">
      <span
        ref={domNode}
        className="flex space-x-1 p-2 border-b-[1px] border-border "
      >
        <div ref={props.menuRef} className={`flex  ${props.className}`}>
          <Avatar avatar={props.selectUserAvatar} className="h-12 w-12" />
          <div className="ml-4">
            <p className="font-bold text-purple-500">{props.selectUserName}</p>
            <p>@ {props.selectUserName}</p>
          </div>
        </div>
      </span>
      {props.currentUser && (
        <span
          onClick={props.handleOpenProfile}
          className="flex  space-x-2 border-transparent border-[1px] hover:bg-hover cursor-pointer p-2"
        >
          <p>Update Avatar</p>
        </span>
      )}
      <span
        onClick={props.handleOpenAuth}
        className="flex  space-x-2 border-transparent border-[1px] hover:bg-hover cursor-pointer p-2 "
      >
        <p>{props.currentUser ? "Logout" : "Login"}</p>
      </span>
    </Dialog>
  );
};

const Nav = (props: any) => {
  const { currentUser } = useContext<any>(AuthContext);

  const selectUserName = currentUser
    ? auth.currentUser?.displayName
    : shortName;
  const selectUserAvatar = !currentUser ? avatar : auth.currentUser?.photoURL;
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleOpenDialog = () => {
    setOpenDialog(!openDialog);
  };

  return (
    <div className="max-w-xs px-2 md:px-8 items-center flex flex-col justify-between overflow-hidden ">
      <div className="space-y-3 flex flex-col items-start mt-4">
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
            selectUserAvatar={selectUserAvatar}
            selectUserName={selectUserName}
            currentUser={props.currentUser}
          />
        )}
      </AnimatePresence>
      <ProfileButton
        selectUserAvatar={selectUserAvatar}
        selectUserName={selectUserName}
        openDialog={handleOpenDialog}
        className=" hover:bg-hover mb-4 md:pl-2 md:pr-4 md:py-2 rounded-full"
      />
    </div>
  );
};

export default Nav;
