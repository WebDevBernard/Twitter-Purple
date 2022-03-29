import { useState, useContext, FC } from "react";
import { tweetActions } from "../../redux/tweet-slice";
import { useDispatch } from "react-redux";
import AuthContext from "../../store/auth-context";
import ReactTimeAgo from "react-time-ago";
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
import { AppDispatch } from "../../redux/store";

const Comment = (props: any) => {
  const dispatch = useDispatch<AppDispatch>();

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
              {props.userName.split(" ")[0]}
            </p>
            <p className="text-xs whitespace-nowrap">@ {props.userName}</p>

            <ReactTimeAgo
              className="text-sm "
              date={new Date(props.createdAt) || 0}
              locale="en-US"
              timeStyle={
                new Date(props.createdAt + 60000) > new Date(Date.now())
                  ? "round-minute"
                  : "twitter"
              }
            />
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
        <p className="break-all  whitespace-pre-line">{props.tweet}</p>
        <div className="flex items-center justify-evenly my-2">
          <ReactTooltip backgroundColor="#64748b" />

          <ShareIcon data-tip="Not Implemented" className={`${commentIcon}`} />

          <ChatAltIcon
            data-tip="Not Implemented"
            className={`${commentIcon}`}
          />
          <div className="flex items-center space-x-2">
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
            <p>{heartLength}</p>
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
