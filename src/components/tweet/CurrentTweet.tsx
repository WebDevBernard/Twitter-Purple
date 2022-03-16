import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { tweetActions } from "../../redux/tweet-slice";
import moment from "moment";
import { ChatAltIcon, HeartIcon } from "@heroicons/react/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/solid";
import { avatarIcon, icons } from "../styles/heroicons-style";
import Avatar from "../shared/Avatar";
import { AppDispatch, RootState } from "../../redux/store";

const timeAgo = (date: Date) => moment(date).fromNow();
const CurrentTweet = () => {
  const params = useParams();
  const { tweets, comments } = useSelector(
    (state: RootState) => state.tweetList
  );
  const selectedTweet = tweets.find((tweet) => tweet.id === params.id);
  const selectedComment = Array.isArray(comments)
    ? comments.filter((comment) => comment.tweetId === params.id)
    : null;

  const commentLength = selectedComment?.length;
  const dispatch = useDispatch<AppDispatch>();
  const likeToggleHandler = () => {
    dispatch(
      tweetActions.toggleLike({ id: params.id, like: !selectedTweet?.like })
    );
  };

  if (selectedTweet === undefined) {
    return null;
  }

  const heartLength = selectedTweet.like ? 1 : 0;
  return (
    <div>
      <div className="flex px-3 py-2 border-y-[1px] max-w-[600px]">
        <Avatar avatar={selectedTweet.avatar} className={avatarIcon} />
        <div className="w-full mt-2 mx-3 ">
          <div className="flex items-center justify-between relative">
            <span className="flex items-center space-x-2">
              <p className="text-lg text-secondary_text font-bold ">
                {selectedTweet.userName?.split("_")[0]}
              </p>
              <p className="text-xs ">@ {selectedTweet.userName}</p>
              <p className="text-sm ">{timeAgo(selectedTweet.createdAt)}</p>
            </span>
          </div>
          <p>{selectedTweet.tweet}</p>
          <div className="flex items-center justify-evenly my-2">
            <div className="flex space-x-2">
              <ChatAltIcon className={`${icons} cursor-auto opacity-90`} />{" "}
              <p>{commentLength}</p>
            </div>
            <div className="flex space-x-2">
              <div onClick={likeToggleHandler}>
                {selectedTweet.like ? (
                  <SolidHeartIcon className="h-6 w-6 cursor-pointer rounded-full text-purple-500 opacity-90 duration-150 ease-out active:scale-95 active:shadow-sm" />
                ) : (
                  <HeartIcon className="h-6 w-6 cursor-pointer rounded-full  hover:text-purple-500 opacity-90" />
                )}
              </div>{" "}
              <p>{heartLength}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentTweet;
