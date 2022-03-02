import { motion } from "framer-motion";
import { deleteAnimation } from "../utils/variants";
import {
  TrashIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/outline";
const DeleteButton = (props: any) => {
  return (
    <motion.div
      variants={deleteAnimation}
      initial="hidden"
      animate="visible"
      ref={props.menuRef}
      className="flex flex-col justify-center space-y-2 border-[1px] border-violet-500 text-purple-700 bg-violet-100 rounded-md absolute z-20 right-0 top-0 opacity-95 shadow-lg"
    >
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
    </motion.div>
  );
};

export default DeleteButton;
