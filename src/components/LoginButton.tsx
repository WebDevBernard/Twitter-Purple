import { useState } from "react";
import Avatar from "./shared/Avatar";
import { AnimatePresence } from "framer-motion";
import ProfileDialog from "./ProfileDialog";

const LoginButton = (props: any) => {
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
        <p className="font-bold text-purple-500">Bernard</p>
        <p>@WebDevBernard</p>
      </div>
    </div>
  );
};

export default LoginButton;
