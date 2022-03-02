import { useState } from "react";
import Avatar from "../shared/Avatar";
import { AnimatePresence } from "framer-motion";
import Dialog from "../shared/Dialog";

const ProfileDialog = (props: any) => {
  return (
    <Dialog className="right-0 bottom-20">
      <span className="flex space-x-1 p-2 border-b-[1px] border-border">
        <div
          ref={props.menuRef}
          className={`flex cursor-pointer relative ${props.className}`}
        >
          <Avatar className="h-12 w-12" />
          <div className="ml-4 hidden md:inline-block">
            <p className="font-bold text-purple-500">Bernard</p>
            <p>@WebDevBernard</p>
          </div>
        </div>
      </span>
      <span
        onClick={props.onClose}
        className="flex  space-x-2 border-transparent border-[1px] hover:bg-hover cursor-pointer p-2"
      >
        <p>Update Avatar</p>
      </span>
      <span
        onClick={props.onClose}
        className="flex  space-x-2 border-transparent border-[1px] hover:bg-hover cursor-pointer p-2 "
      >
        <p>Login ? Logout?</p>
      </span>
    </Dialog>
  );
};

const ProfileButton = (props: any) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div
      onClick={handleOpenDialog}
      className={`flex cursor-pointer relative ${props.className}`}
    >
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {openDialog && (
          <ProfileDialog
            onClose={handleCloseDialog}
            onOpen={handleOpenDialog}
          />
        )}
      </AnimatePresence>
      <Avatar className="h-12 w-12" />
      <div className="ml-4 hidden md:inline-block">
        <p className="font-bold text-secondary_text">Bernard</p>
        <p>@WebDevBernard</p>
      </div>
    </div>
  );
};

export default ProfileButton;
