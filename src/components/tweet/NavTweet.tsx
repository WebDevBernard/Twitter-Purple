import { ArrowLeftIcon, XIcon } from "@heroicons/react/outline";
import { FC } from "react";
import Modal from "../shared/Modal";
import NewTweet from "./NewTweet";
const NavTweet: FC<{ onClose: any }> = (props) => {
  return (
    <Modal
      onClose={props.onClose}
      className="md:w-[600px] md:h-[200px] md:top-10 top-0 h-screen relative"
    >
      <ArrowLeftIcon
        onClick={props.onClose}
        className="inline-block md:hidden h-10 w-10 p-2 cursor-pointer top-0"
      />
      <XIcon
        onClick={props.onClose}
        className="md:inline-block hidden h-10 w-10 p-2 cursor-pointer top-0"
      />
      <NewTweet
        p="inline-block"
        pencil="hidden"
        onClose={props.onClose}
        rows={4}
      />
    </Modal>
  );
};

export default NavTweet;
