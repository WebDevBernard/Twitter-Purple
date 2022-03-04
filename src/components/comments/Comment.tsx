import moment from "moment";
import { avatarIcon } from "../styles/heroicons-style";
import Avatar from "../shared/Avatar";
const timeAgo = (el: any) => moment(el).fromNow();
const Comment = (props: any) => {
  return (
    <div className="flex px-3 py-2 border-hover_border border-y-[1px] max-w-[600px]">
      <Avatar avatar={props.avatar} className={avatarIcon} />
      <div className="w-full mt-2 mx-3 ">
        <div className="flex items-center justify-between relative">
          <span className="flex items-center space-x-2">
            <p className="text-lg text-secondary_text font-bold ">
              {props.userName.split("_")[0]}
            </p>
            <p className="text-xs ">@ {props.userName}</p>
            <p className="text-sm ">{timeAgo(props.createdAt)}</p>
          </span>
        </div>
        <p>{props.tweet}</p>
      </div>
    </div>
  );
};

export default Comment;
