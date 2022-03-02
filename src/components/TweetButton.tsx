import { PencilIcon } from "@heroicons/react/outline";
import Button from "./shared/Button";

const TweetButton = (props: any) => {
  return (
    <Button className={`rounded-full p-3 ${props.className}`}>
      <div className="flex">
        <PencilIcon className="h-6 w-6 md:hidden inline-block" />
        <p className="hidden md:inline-block">{props.text}</p>
      </div>
    </Button>
  );
};

export default TweetButton;
