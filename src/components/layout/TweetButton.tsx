import { PencilIcon } from "@heroicons/react/outline";
import { FC } from "react";
import Button from "../shared/Button";
import { icons } from "../styles/heroicons-style";

const TweetButton: FC<{
  className: string;
  text: string;
  pencil?: string;
  p?: string;
}> = (props) => {
  return (
    <Button className={`rounded-full p-3 ${props.className}`}>
      <PencilIcon className={`${icons} ${props.pencil}`} />
      <p className={`${props.p}`}>{props.text}</p>
    </Button>
  );
};

export default TweetButton;
