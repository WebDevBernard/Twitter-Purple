import Dialog from "./shared/Dialog";
import {
  TrashIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/outline";
const DeleteDialog = (props: any) => {
  return (
    <Dialog className="right-0 top-0">
      <span className="flex space-x-1 p-2 border-b-[1px] border-violet-300">
        <TrashIcon className="h-6 w-6" />
        <p>Delete?</p>
      </span>
      <span
        onClick={props.onClose}
        className="flex  space-x-2 border-transparent border-[1px] hover:bg-violet-200 cursor-pointer p-2"
      >
        <CheckCircleIcon className="h-6 w-6" /> <p>Yes</p>
      </span>
      <span
        onClick={props.onClose}
        className="flex  space-x-2 border-transparent border-[1px] hover:bg-violet-200 cursor-pointer p-2 "
      >
        <XCircleIcon className="h-6 w-6" /> <p>No</p>
      </span>
    </Dialog>
  );
};

export default DeleteDialog;
