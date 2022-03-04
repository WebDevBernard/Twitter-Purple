import Avatar from "../shared/Avatar";
import useAvatarReady from "../hooks/useAvatarReady";
const ProfileButton = (props: any) => {
  const ready = useAvatarReady();
  return (
    <div
      onClick={props.openDialog}
      className={`flex cursor-pointer ${props.className}`}
    >
      {ready && (
        <Avatar avatar={props.selectUserAvatar} className="h-12 w-12" />
      )}
      <div className="ml-4 hidden md:inline-block whitespace-nowrap">
        {ready && (
          <p className="font-bold text-secondary_text">
            {props.selectUserName}
          </p>
        )}
        {ready && <p>@ {props.selectUserName}</p>}
      </div>
    </div>
  );
};

export default ProfileButton;
