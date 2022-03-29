import useClickedOutside from "../hooks/useClickedOutside";
import { FC } from "react";
import Modal from "../shared/Modal";

interface IProps {
  handleDialog: () => void;
  delete?: () => void;
}
const DeleteDialog: FC<IProps> = (props) => {
  const domNode = useClickedOutside(() => {
    props.handleDialog();
  });

  return (
    <Modal
      onClose={props.handleDialog}
      className="top-28 lg:top-40 w-[320px] h-auto min-h-[290px] absolute "
    >
      <div ref={domNode} className="flex flex-col py-6 px-8">
        <h2 className="text-xl font-extrabold mb-2 tracking-widest">
          Delete Tweet?
        </h2>
        <p className="text-md mb-6 tracking-wider leading-5">
          This can’t be undone and it will be removed from your profile, the
          timeline of any accounts that follow you, and from Twitter search
          results.
        </p>
        <button
          className="mb-2 rounded-3xl p-2 text-bg bg-violet-500 hover:bg-violet-600 text-lg font-bold block select-none duration-150 ease-out active:scale-95 active:shadow-sm"
          onClick={props.delete}
        >
          Delete
        </button>
        <button
          className="rounded-3xl p-2  border-2 border-violet-500 hover:bg-violet-200 text-lg font-bold block select-none duration-150 ease-out active:scale-95 active:shadow-sm"
          onClick={props.handleDialog}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default DeleteDialog;
