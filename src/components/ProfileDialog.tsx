import Dialog from "./shared/Dialog";
import Avatar from "./shared/Avatar";

const ProfileDialog = (props: any) => {
  return (
    <Dialog className="right-0 bottom-20">
      <span className="flex space-x-1 p-2 border-b-[1px] border-violet-300">
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
        className="flex  space-x-2 border-transparent border-[1px] hover:bg-violet-200 cursor-pointer p-2"
      >
        <p>Update Avatar</p>
      </span>
      <span
        onClick={props.onClose}
        className="flex  space-x-2 border-transparent border-[1px] hover:bg-violet-200 cursor-pointer p-2 "
      >
        <p>Login ? Logout?</p>
      </span>
    </Dialog>
  );
};

export default ProfileDialog;
