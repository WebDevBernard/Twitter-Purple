import { FC } from "react";

const Avatar: FC<{ className: string; avatar: string }> = (props) => {
  return (
    <img
      loading="lazy"
      className={` border-border border-2 p-1.5 rounded-full ${props.className}`}
      src={props.avatar}
      alt="avatar"
    />
  );
};

export default Avatar;
