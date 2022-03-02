import { useState } from "react";
import {
  HomeIcon,
  HashtagIcon,
  BellIcon,
  MailIcon,
  FlagIcon,
  DocumentTextIcon,
  DotsCircleHorizontalIcon,
} from "@heroicons/react/outline";
import NavButton from "./shared/NavButton";
import LoginButton from "./LoginButton";
import TweetButton from "./TweetButton";
import { AnimatePresence } from "framer-motion";
import NavTweet from "./NavTweet";
const style = {
  navIcon: "h-[24px] w-[24px]",
  navText: "hidden md:flex ml-2",
};

const Nav = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <div className="min-w-fit pl-2 items-center flex flex-col justify-between overflow-hidden">
      <div className="space-y-3 flex flex-col items-start mt-4">
        <i className="devicon-twitter-original text-[30px] ml-2 mb-2 text-violet-500"></i>
        <NavButton className="rounded-3xl p-3">
          <HomeIcon className={style.navIcon} />

          <p className={style.navText}>Home</p>
        </NavButton>
        <NavButton className="rounded-3xl p-3">
          <HashtagIcon className={style.navIcon} />
          <p className={style.navText}>Explore</p>
        </NavButton>
        <NavButton className="rounded-3xl p-3">
          <BellIcon className={style.navIcon} />
          <p className={style.navText}> Notifications</p>
        </NavButton>
        <NavButton className="rounded-3xl p-3">
          <MailIcon className={style.navIcon} />
          <p className={style.navText}> Messages</p>
        </NavButton>
        <NavButton className="rounded-3xl p-3">
          <FlagIcon className={style.navIcon} />
          <p className={style.navText}> Bookmarks</p>
        </NavButton>
        <NavButton className="rounded-3xl p-3">
          <DocumentTextIcon className={style.navIcon} />
          <p className={style.navText}> Lists</p>
        </NavButton>
        <NavButton className="rounded-3xl p-3">
          <DotsCircleHorizontalIcon className={style.navIcon} />
          <p className={style.navText}> More</p>
        </NavButton>
        <div onClick={handleOpenModal}>
          <AnimatePresence
            initial={false}
            exitBeforeEnter={true}
            onExitComplete={() => null}
          >
            {openModal && <NavTweet />}
          </AnimatePresence>
          <TweetButton className="md:px-20 md:py-3" text="Tweet" />
        </div>
      </div>
      <div className="bottom-0 mb-4">
        <LoginButton className="md:pl-2 md:pr-4 md:py-2 md:hover:bg-violet-100 rounded-full " />
      </div>
    </div>
  );
};

export default Nav;
