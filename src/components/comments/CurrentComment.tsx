import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { tweetActions } from "../../redux/tweet-slice";
import moment from "moment";
import { ChatAltIcon, HeartIcon } from "@heroicons/react/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/solid";
import { avatarIcon, icons } from "../styles/heroicons-style";
import Avatar from "../shared/Avatar";
import NewComment from "./NewComment";
import Comment from "./Comment";
const timeAgo = (el: any) => moment(el).fromNow();
const CurrentComment = (props: any) => {
  const params = useParams();
  const tweets = useSelector((state: any) => state.tweet);
  const selectedTweet = tweets.find((tweet: any) => tweet.id === params.id);
  const replies = selectedTweet === undefined ? null : selectedTweet.reply;
  const dispatch = useDispatch();
  const likeToggleHandler = () => {
    dispatch(
      tweetActions.toggleLike({
        id: selectedTweet.id,
        like: !selectedTweet.like,
      })
    );
  };

  if (selectedTweet === undefined) {
    return null;
  }
  const commentLength = selectedTweet.reply.length;
  const heartLength = selectedTweet.like ? 1 : 0;
  return (
    <div>
      <div className="flex px-3 py-2 border-hover_border border-y-[1px] max-w-[600px]">
        <Avatar avatar={selectedTweet.avatar} className={avatarIcon} />
        <div className="w-full mt-2 mx-3 ">
          <div className="flex items-center justify-between relative">
            <span className="flex items-center space-x-2">
              <p className="text-lg text-secondary_text font-bold ">
                {selectedTweet.userName.split("_")[0]}
              </p>
              <p className="text-xs ">@ {selectedTweet.userName}</p>
              <p className="text-sm ">{timeAgo(selectedTweet.createdAt)}</p>
            </span>
          </div>
          <p>{selectedTweet.tweet}</p>
          <div className="flex items-center justify-evenly my-2">
            <div className="flex space-x-2">
              <p>{commentLength}</p>
              <ChatAltIcon className={`${icons} opacity-90`} />
            </div>
            <div className="flex space-x-2">
              <p>{heartLength}</p>
              <div onClick={likeToggleHandler}>
                {selectedTweet.like ? (
                  <SolidHeartIcon className="h-6 w-6 cursor-pointer rounded-full text-purple-500 opacity-90 duration-150 ease-out active:scale-95 active:shadow-sm" />
                ) : (
                  <HeartIcon className="h-6 w-6 cursor-pointer rounded-full  hover:text-purple-500 opacity-90" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewComment id={selectedTweet.id} />
      {[...replies].reverse().map((entries, id) => {
        return (
          <Comment
            currentTweetId={selectedTweet.id}
            key={id}
            id={entries.id}
            createdAt={entries.createdAt}
            tweet={entries.comment}
            avatar={entries.avatar}
            userName={entries.userName}
            like={entries.like}
          />
        );
      })}
    </div>
  );
};

export default CurrentComment;
