import { useState, useContext } from "react";
import { tweetActions } from "../../redux/tweet-slice";
import { useDispatch } from "react-redux";
import AuthContext from "../../store/auth-context";
import moment from "moment";
import { avatarIcon, commentIcon, icons } from "../styles/heroicons-style";
import { AnimatePresence } from "framer-motion";
import {
  DotsHorizontalIcon,
  ChatAltIcon,
  UploadIcon,
  ShareIcon,
  ChartBarIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/solid";
import DeleteDialog from "./DeleteDialog";
import Avatar from "../shared/Avatar";
import ReactTooltip from "react-tooltip";
const Comment = (props) => {
  const dispatch = useDispatch();
  const timeAgo = (el) => moment(el).fromNow();
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const { handleNotification } = useContext(AuthContext);

  const likeToggleHandler = () => {
    dispatch(
      tweetActions.toggleCommentLike({
        id: props.id,
        like: !props.like,
      })
    );
  };

  const heartLength = props.like ? 1 : 0;
  const handleDialog = () => {
    setOpenDialog(!openDialog);
  };
  console.log(props);

  const deleteHandler = () => {
    handleNotification("Comment Deleted");
    handleDialog();
    dispatch(tweetActions.deleteComment(props.id));
  };

  return (
    <div className="flex px-3 py-2 border-hover_border border-y-[1px] max-w-[600px]">
      <Avatar avatar={props.avatar} className={avatarIcon} />
      <div className="w-full mt-2 mx-3 ">
        <div className="flex items-center justify-between relative">
          <span className="flex items-center space-x-2">
            <p className="text-lg text-secondary_text font-bold ">
              {props.userName.split("_")[0]}
            </p>
            <p className="text-xs whitespace-nowrap">@ {props.userName}</p>
            <p className="text-sm ">{timeAgo(props.createdAt)}</p>
          </span>

          <DotsHorizontalIcon
            onClick={handleDialog}
            className={`rounded-full ${icons}`}
          />
          <AnimatePresence
            initial={false}
            exitBeforeEnter={true}
            onExitComplete={() => null}
          >
            {openDialog && (
              <DeleteDialog
                delete={deleteHandler}
                handleDialog={handleDialog}
              />
            )}
          </AnimatePresence>
        </div>
        <p className="break-all">{props.tweet}</p>
        <div className="flex items-center justify-evenly my-2">
          <ReactTooltip backgroundColor="#64748b" />

          <ShareIcon data-tip="Not Implemented" className={`${commentIcon}`} />

          <ChatAltIcon
            data-tip="Not Implemented"
            className={`${commentIcon}`}
          />
          <div className="flex items-center space-x-2">
            <p>{heartLength}</p>
            <div
              className={`rounded-full hover:text-purple-500 opacity-90 ${icons}`}
              onClick={likeToggleHandler}
            >
              {props.like ? (
                <SolidHeartIcon className=" text-purple-500" />
              ) : (
                <HeartIcon />
              )}
            </div>
          </div>
          <UploadIcon data-tip="Not Implemented" className={`${commentIcon}`} />
          <ChartBarIcon
            data-tip="Not Implemented"
            className={`${commentIcon}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Comment;
