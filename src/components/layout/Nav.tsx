import { useState } from "react";
import { nanoid } from "nanoid";
import { AnimatePresence } from "framer-motion";
import { navLinks } from "../../utils/nav-links";
import NavButton from "../shared/NavButton";
import ProfileButton from "./ProfileButton";
import TweetButton from "./TweetButton";
import NavTweet from "../tweet/NavTweet";

const Nav = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="min-w-fit pl-2 items-center flex flex-col justify-between overflow-hidden">
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
        <ProfileButton className="md:pl-2 md:pr-4 md:py-2 md:hover:bg-hover rounded-full " />
      </div>
    </div>
  );
};

export default Nav;
