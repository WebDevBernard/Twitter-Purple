import AuthContext from "../../store/auth-context";
import { useDispatch, useSelector } from "react-redux";
import { tweetActions } from "../../redux/tweet-slice";
import { Link } from "react-router-dom";
import { useState, useContext, FC } from "react";

import {
  ChatAltIcon,
  HeartIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import { avatarIcon, icons } from "../styles/heroicons-style";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/solid";
import { AnimatePresence } from "framer-motion";
import Avatar from "../shared/Avatar";
import DeleteDialog from "./DeleteDialog";
import { AppDispatch, RootState } from "../../redux/store";
import { ITweetProps, ICommentProps } from "../interfaces/interface";
import ReactTimeAgo from "react-time-ago";

const Tweet = (props: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const { tweets, comments } = useSelector(
    (state: RootState) => state.tweetList
  );
  const tweetIndex = tweets.findIndex((tweet) => tweet.id === props.id);
  const selectedComment = Array.isArray(comments)
    ? comments.filter((comment) => comment.tweetId === props.id)
    : null;

  const commentLength = selectedComment?.length;
  const heartLength = tweets[tweetIndex].like ? 1 : 0;
  const { handleNotification } = useContext(AuthContext);

  const likeToggleHandler = () => {
    dispatch(tweetActions.toggleLike({ id: props.id, like: !props.like }));
  };

  const deleteHandler = () => {
    handleNotification("Tweet Deleted");
    dispatch(tweetActions.deleteTweet(props.id));
  };

  const handleDialog = () => {
    setOpenDialog(!openDialog);
  };

  return (
    <div className="flex px-3 py-2 border-hover_border border-y-[1px] max-w-[600px]">
      <Avatar className={avatarIcon} avatar={props.avatar} />
      <div className="w-full mt-2 mx-3 ">
        <div className="flex items-center justify-between relative">
          <span className="flex items-center space-x-2">
            <p className="text-lg text-secondary_text font-bold ">
              {props.userName.split("_")[0]}
            </p>

            <p className="text-xs whitespace-nowrap">@ {props.userName}</p>

            <ReactTimeAgo
              className="text-sm "
              date={props.createdAt}
              locale="en-US"
              timeStyle={
                new Date(props.createdAt + 60000) < new Date(Date.now())
                  ? "round-minute"
                  : "twitter"
              }
            />
          </span>
          {!(tweetIndex <= 4) && (
            <DotsHorizontalIcon
              onClick={handleDialog}
              className={`rounded-full ${icons}`}
            />
          )}
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
          <div className="flex space-x-2">
            <Link to={`${props.userName}/comments/${props.id}`}>
              <ChatAltIcon
                className={`rounded-full hover:text-purple-500 opacity-90 ${icons}`}
              />
            </Link>
            <p>{commentLength}</p>
          </div>

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
        </div>
      </div>
    </div>
  );
};

export default Tweet;
