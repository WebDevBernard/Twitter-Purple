import { useState } from "react";
import { nanoid } from "nanoid";
import { AnimatePresence } from "framer-motion";
import { navLinks } from "../../utils/nav-links";
import NavButton from "../shared/NavButton";
import ProfileButton from "./ProfileButton";
import TweetButton from "./TweetButton";
import NavTweet from "../tweet/NavTweet";
import { tweetIcon } from "../styles/heroicons-style";
import Dialog from "../shared/Dialog";
import Avatar from "../shared/Avatar";
import useClickedOutside from "../hooks/useClickedOutside";
const ProfileDialog = (props: any) => {
  const domNode = useClickedOutside(() => {
    props.openDialog();
  });
  return (
    <Dialog className="bottom-10 left-20 md:left-0 md:relative">
      <span
        ref={domNode}
        className="flex space-x-1 p-2 border-b-[1px] border-border "
      >
        <div
          ref={props.menuRef}
          className={`flex cursor-pointer ${props.className}`}
        >
          <Avatar className="h-12 w-12" />
          <div className="ml-4">
            <p className="font-bold text-purple-500">Bernard</p>
            <p>@WebDevBernard</p>
          </div>
        </div>
      </span>
      <span className="flex  space-x-2 border-transparent border-[1px] hover:bg-hover cursor-pointer p-2">
        <p>Update Avatar</p>
      </span>
      <span className="flex  space-x-2 border-transparent border-[1px] hover:bg-hover cursor-pointer p-2 ">
        <p>Login ? Logout?</p>
      </span>
    </Dialog>
  );
};

const Nav = (props: any) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleOpenDialog = () => {
    setOpenDialog(!openDialog);
  };

  return (
    <div className="min-w-fit px-2 md:px-8 items-center flex flex-col justify-between overflow-hidden ">
      <div className="space-y-3 flex flex-col items-start mt-4">
        <i className="devicon-twitter-original text-[30px] ml-2 mb-2 text-secondary_text"></i>
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
        {openDialog && <ProfileDialog openDialog={handleOpenDialog} />}
      </AnimatePresence>
      <ProfileButton
        openDialog={handleOpenDialog}
        className=" hover:bg-hover mb-4 md:pl-2 md:pr-4 md:py-2 rounded-full"
      />
    </div>
  );
};

export default Nav;
