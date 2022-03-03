import Avatar from "../shared/Avatar";

const ProfileButton = (props: any) => {
  return (
    <div
      onClick={props.openDialog}
      className={`flex cursor-pointer ${props.className}`}
    >
      <Avatar className="h-12 w-12" />
      <div className="ml-4 hidden md:inline-block">
        <p className="font-bold text-secondary_text">Bernard</p>
        <p>@WebDevBernard</p>
      </div>
    </div>
  );
};

export default ProfileButton;
