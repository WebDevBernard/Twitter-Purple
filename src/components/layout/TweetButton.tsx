import { PencilIcon } from "@heroicons/react/outline";
import { FC } from "react";
import Button from "../shared/Button";
import { icons } from "../styles/heroicons-style";

const TweetButton: FC<{ className: string; text: string }> = (props) => {
  return (
    <Button className={`rounded-full p-3 ${props.className}`}>
      <div className="flex">
        <PencilIcon className={`${icons} md:hidden inline-block`} />
        <p className="hidden md:inline-block">{props.text}</p>
      </div>
    </Button>
  );
};

export default TweetButton;
