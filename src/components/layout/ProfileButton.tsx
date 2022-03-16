import useCurrentUser from "../hooks/useCurrentUser";
import Avatar from "../shared/Avatar";
import useAvatarReady from "../hooks/useAvatarReady";
import { FC } from "react";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import { avatarIcon } from "../styles/heroicons-style";
const ProfileButton: FC<{
  openDialog: React.MouseEventHandler<HTMLDivElement>;
  className: string;
}> = (props) => {
  const [selectUserAvatar, selectUserName] = useCurrentUser();
  const ready = useAvatarReady();
  return (
    <div
      onClick={props.openDialog}
      className={`flex items-center  cursor-pointer ${props.className}`}
    >
      {ready && <Avatar avatar={selectUserAvatar} className={avatarIcon} />}
      <div className="ml-4 hidden xl:inline-block whitespace-nowrap">
        {ready && (
          <p className=" font-bold text-secondary_text">{selectUserName}</p>
        )}
        {ready && <p>@ {selectUserName}</p>}
      </div>
      {ready && (
        <DotsHorizontalIcon className="h-4 w-4 ml-8 hidden xl:inline-block text-violet-400" />
      )}
    </div>
  );
};

export default ProfileButton;
