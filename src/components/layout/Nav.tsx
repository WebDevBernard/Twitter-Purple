import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";
import React, { useState, useContext, FC, RefObject } from "react";
import AuthContext from "../../store/auth-context";
import { auth } from "../../utils/firebase";
import { nanoid } from "nanoid";
import { AnimatePresence } from "framer-motion";
import { navLinks } from "../../utils/nav-links";
import NavButton from "../shared/NavButton";
import ProfileButton from "./ProfileButton";
import TweetButton from "./TweetButton";
import { avatarIcon, tweetIcon } from "../styles/heroicons-style";
import Dialog from "../shared/Dialog";
import Avatar from "../shared/Avatar";
import useClickedOutside from "../hooks/useClickedOutside";
import useCurrentUser from "../hooks/useCurrentUser";
import { CheckIcon } from "@heroicons/react/outline";
const logout = async () => {
  await auth.signOut();
};

interface IProps {
  openDialog?: any;
  menuRef?: RefObject<HTMLDivElement>;
  className?: string;
  handleOpenProfile?: () => void;
  handleOpenAuth?: () => void;
  handleOpenDialog?: React.MouseEventHandler<HTMLSpanElement>;
  handleOpenModal?: React.MouseEventHandler<HTMLDivElement>;
}
const ProfileDialog: FC<IProps> = (props) => {
  const { currentUser } = useContext(AuthContext);
  const [selectUserAvatar, selectUserName] = useCurrentUser();
  const domNode = useClickedOutside(() => {
    props.openDialog();
  });

  return (
    <Dialog className="p-2  left-20 xl:relative xl:left-0 xl:bottom-0">
      <div ref={domNode}>
        <span className="flex space-x-1 p-2 border-b-[1px] border-border ">
          <div
            ref={props.menuRef}
            className={`flex items-center ${props.className}`}
          >
            <Avatar avatar={selectUserAvatar} className={avatarIcon} />
            <div className="ml-4">
              <p className="font-bold text-purple-500">{selectUserName}</p>
              <p>@ {selectUserName}</p>
            </div>
            <CheckIcon className="h-6 w-6 ml-8 xl:inline-block text-violet-400" />
          </div>
        </span>
        {currentUser && (
          <span
            onClick={props.handleOpenProfile}
            className="flex  space-x-2 border-transparent border-[1px] hover:bg-hover cursor-pointer p-2"
          >
            <p>Update User Avatar</p>
          </span>
        )}

        <p
          className="flex  space-x-2 border-transparent border-[1px] hover:bg-hover cursor-pointer p-2 "
          onClick={!currentUser ? props.handleOpenAuth : logout}
        >
          {currentUser ? `Log out @${selectUserName}` : "Login"}
        </p>
      </div>
    </Dialog>
  );
};

const Nav: FC<IProps> = (props) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleOpenDialog = () => {
    setOpenDialog(!openDialog);
  };

  return (
    <div className="max-w-xs px-2 xl:px-3 items-center flex flex-col justify-between top-0 overflow-x-hidden overflow-y-auto ">
      <div className="xl:mr-8 mt-4 ">
        <div className="mb-4">
          <Link to={"/"}>
            <i
              className="devicon-twitter-original text-[24px] ml-2  text-secondary_text"
              title="twitter icon"
            ></i>
          </Link>
        </div>
        {Object.entries(navLinks).map((link) => {
          return (
            <React.Fragment key={nanoid()}>
              <NavButton className="rounded-3xl  p-3">
                <ReactTooltip backgroundColor="#64748b" />
                {link[1]}
                <p className="hidden text-[22px] xl:flex ml-4">{link[0]}</p>
              </NavButton>
            </React.Fragment>
          );
        })}
        <div onClick={props.handleOpenModal}>
          <TweetButton
            className={`${tweetIcon} mt-4`}
            p="hidden xl:inline-block"
            pencil="xl:hidden inline-block"
            text="Tweet"
          />
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
        className=" hover:bg-hover mb-4 md:pl-2 md:pr-4 md:py-2 rounded-full left-0 relative"
      />
    </div>
  );
};

export default Nav;
