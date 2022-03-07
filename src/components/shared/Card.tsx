import { FC } from "react";
const Card: FC<{ className: string }> = (props) => {
  return (
    <div className={`rounded-2xl ${props.className}`}>{props.children}</div>
  );
};

export default Card;
