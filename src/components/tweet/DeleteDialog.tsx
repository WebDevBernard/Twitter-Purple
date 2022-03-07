import Dialog from "../shared/Dialog";
import {
  TrashIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/outline";
import { icons } from "../styles/heroicons-style";
import useClickedOutside from "../hooks/useClickedOutside";
const DeleteDialog = (props) => {
  const domNode = useClickedOutside(() => {
    props.handleDialog();
  });

  return (
    <Dialog className="right-0 top-0">
      <div ref={domNode}>
        <span className="dialog-head">
          <TrashIcon className={icons} />
          <p>Delete?</p>
        </span>
        <span onClick={props.delete} className="dialog-cell">
          <CheckCircleIcon className={icons} /> <p>Yes</p>
        </span>
        <span onClick={props.handleDialog} className="dialog-cell">
          <XCircleIcon className={icons} /> <p>No</p>
        </span>
      </div>
    </Dialog>
  );
};

export default DeleteDialog;
