import Modal from "../shared/Modal";
import NewTweet from "./NewTweet";
const NavTweet = (props: any) => {
  return (
    <Modal onClose={props.onClose} className="w-[400px]">
      <NewTweet onClose={props.onClose} />
    </Modal>
  );
};

export default NavTweet;
