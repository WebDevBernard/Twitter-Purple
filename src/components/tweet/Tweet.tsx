import AuthContext from "../../store/auth-context";
import { useDispatch, useSelector } from "react-redux";
import { tweetActions } from "../../redux/tweet-slice";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import moment from "moment";
import {
  ChatAltIcon,
  HeartIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/solid";
import { AnimatePresence } from "framer-motion";
import Dialog from "../shared/Dialog";
import {
  TrashIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/outline";
import Avatar from "../shared/Avatar";
import { icons } from "../styles/heroicons-style";
import useClickedOutside from "../hooks/useClickedOutside";
const timeAgo = (el: any) => moment(el).fromNow();
const DeleteDialog = (props: any) => {
  const domNode = useClickedOutside(() => {
    props.handleDialog();
  });

  return (
    <Dialog className="right-0 top-0">
      <span ref={domNode} className="dialog-head">
        <TrashIcon className={icons} />
        <p>Delete?</p>
      </span>
      <span onClick={props.delete} className="dialog-cell">
        <CheckCircleIcon className={icons} /> <p>Yes</p>
      </span>
      <span onClick={props.handleDialog} className="dialog-cell">
        <XCircleIcon className={icons} /> <p>No</p>
      </span>
    </Dialog>
  );
};

const Tweet = (props: any) => {
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const tweets = useSelector((state: any) => state.tweet);
  const tweetIndex = tweets.findIndex((tweet: any) => tweet.id === props.id);
  const commentLength = tweets[tweetIndex].reply.length;
  const heartLength = tweets[tweetIndex].like ? 1 : 0;
  const { handleNotification } = useContext<any>(AuthContext);
  const likeToggleHandler = () => {
    dispatch(tweetActions.toggleLike({ id: props.id, like: !props.like }));
  };
  const deleteHandler = () => {
    handleNotification("Tweet Deleted");
    dispatch(tweetActions.deleteTweet({ id: props.id }));
  };

  const handleDialog = (e: any) => {
    setOpenDialog(!openDialog);
  };

  return (
    <div className="flex px-3 py-2 border-hover_border border-y-[1px] max-w-[600px]">
      <Avatar
        className="h-12 w-12 md:h-16 md:w-16"
        avatar={props.avatar}
        alt="avatar"
      />
      <div className="w-full mt-2 mx-3 ">
        <div className="flex items-center justify-between relative">
          <span className="flex items-center space-x-2">
            <Link
              to={
                !window.location.href.match("tweets")
                  ? `/${props.userName}/tweets`
                  : `/`
              }
            >
              <p className="text-lg text-secondary_text font-bold ">
                {props.userName.split("_")[0]}
              </p>
            </Link>
            <p className="text-xs ">@ {props.userName}</p>
            <p className="text-sm ">{timeAgo(props.createdAt)}</p>
          </span>
          {!(tweetIndex <= 4) && (
            <DotsHorizontalIcon
              onClick={handleDialog}
              className="h-6 w-6 cursor-pointer rounded-full"
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
            <p>{commentLength}</p>{" "}
            <Link to={`${props.userName}/comments/${props.id}`}>
              <ChatAltIcon className="h-6 w-6 cursor-pointer rounded-full hover:text-purple-500 opacity-90" />
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            <p>{heartLength}</p>
            <div onClick={likeToggleHandler}>
              {props.like ? (
                <SolidHeartIcon className="h-6 w-6 cursor-pointer rounded-full text-purple-500 opacity-90 duration-150 ease-out active:scale-95 active:shadow-sm" />
              ) : (
                <HeartIcon className="h-6 w-6 cursor-pointer rounded-full  hover:text-purple-500 opacity-90" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
