import { XIcon } from "@heroicons/react/outline";
import { FC } from "react";
import Modal from "../shared/Modal";
import NewTweet from "./NewTweet";
const NavTweet: FC<{ onClose: any }> = (props) => {
  return (
    <Modal
      onClose={props.onClose}
      className="w-[600px] h-[200px] pt-10 relative"
    >
      <XIcon
        onClick={props.onClose}
        className="h-10 w-10 p-2 cursor-pointer absolute top-0"
      />
      <NewTweet onClose={props.onClose} rows={4} />
    </Modal>
  );
};

export default NavTweet;
