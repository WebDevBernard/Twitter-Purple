import { PencilIcon } from "@heroicons/react/outline";
import { FC } from "react";
import Button from "../shared/Button";
import { icons } from "../styles/heroicons-style";

const TweetButton: FC<{
  className: string;
  text: string;
}> = (props) => {
  return (
    <Button className={`rounded-full p-3 ${props.className}`}>
      <PencilIcon className={`${icons} xl:hidden inline-block`} />
      <p className="hidden xl:inline-block">{props.text}</p>
    </Button>
  );
};

export default TweetButton;
