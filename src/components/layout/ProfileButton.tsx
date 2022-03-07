import useCurrentUser from "../hooks/useCurrentUser";
import Avatar from "../shared/Avatar";
import useAvatarReady from "../hooks/useAvatarReady";
import { FC } from "react";
const ProfileButton: FC = (props) => {
  const [selectUserAvatar, selectUserName] = useCurrentUser();
  const ready = useAvatarReady();
  return (
    <div
      onClick={props.openDialog}
      className={`flex cursor-pointer ${props.className}`}
    >
      {ready && <Avatar avatar={selectUserAvatar} className="h-12 w-12" />}
      <div className="ml-4 hidden md:inline-block whitespace-nowrap">
        {ready && (
          <p className="font-bold text-secondary_text">{selectUserName}</p>
        )}
        {ready && <p>@ {selectUserName}</p>}
      </div>
    </div>
  );
};

export default ProfileButton;
