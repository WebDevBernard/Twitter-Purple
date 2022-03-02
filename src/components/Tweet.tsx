import { useState } from "react";
import {
  ChatAltIcon,
  HeartIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/solid";
import { AnimatePresence } from "framer-motion";
import DeleteDialog from "./DeleteDialog";
import Avatar from "./shared/Avatar";
const Tweet = (props: any) => {
  const [openDelete, setOpenDelete] = useState<boolean>(false);

  const handleOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  return (
    <div className="flex px-3 py-2 border-b-slate-300 border-[1px] max-w-[600px]">
      <Avatar className="h-12 w-12 md:h-16 md:w-16" />
      <div className="w-full mt-2 mx-3 ">
        <div className="flex items-center justify-between relative">
          <span className="flex items-center space-x-2">
            <p className="text-lg text-purple-500 font-bold ">Bernard</p>
            <p className="text-xs ">@WebDevBernard</p>
            <p className="text-sm ">7h</p>
          </span>
          <DotsHorizontalIcon
            onClick={handleOpenDelete}
            className="h-6 w-6 cursor-pointer rounded-full"
          />
          <AnimatePresence
            initial={false}
            exitBeforeEnter={true}
            onExitComplete={() => null}
          >
            {openDelete && (
              <DeleteDialog
                onClose={handleCloseDelete}
                onOpen={handleOpenDelete}
              />
            )}
          </AnimatePresence>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="flex items-center justify-evenly my-2">
          <div className="flex space-x-2">
            <p>0</p>
            <ChatAltIcon className="h-6 w-6 cursor-pointer rounded-full hover:text-purple-500 opacity-90" />
          </div>
          <div className="flex space-x-2">
            <p>1</p>
            <HeartIcon className="h-6 w-6 cursor-pointer rounded-full hover:text-red-500 opacity-90" />
            {/* <SolidHeartIcon className="h-6 w-6 cursor-pointer rounded-full text-red-500 opacity-90" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
