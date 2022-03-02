import { avatarArray } from "../../utils/avatar-names";

const Avatar = (props: any) => {
  return (
    <img
      loading="lazy"
      className={` border-violet-400 border-2 p-1.5 rounded-full ${props.className}`}
      src={avatarArray[4]}
      alt="avatar"
    />
  );
};

export default Avatar;
