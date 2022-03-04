import useCurrentUser from "../hooks/useCurrentUser";
import Avatar from "../shared/Avatar";
import TweetButton from "../layout/TweetButton";
import { tweetIconSmall } from "../styles/heroicons-style";
import useAvatarReady from "../hooks/useAvatarReady";

const TweetForm = ([
  enteredTweet,
  count,
  error,
  errorHandler,
  tweetChangeHandler,
  addTweetOnClick,
  addTweetOnEnter,
]: any) => {
  const ready = useAvatarReady();
  const [selectUserAvatar] = useCurrentUser();
  console.log(count, error);
  return (
    <div className="flex px-3 py-2 border-hover_border  border-y-[1px]">
      {ready && (
        <Avatar
          avatar={selectUserAvatar}
          className="h-12 w-12 md:h-16 md:w-16"
        />
      )}
      <div className="w-full mt-2 mx-3">
        <form onSubmit={addTweetOnClick} onKeyDown={addTweetOnEnter}>
          <textarea
            id="tweetinput"
            onClick={errorHandler}
            onChange={tweetChangeHandler}
            value={enteredTweet}
            rows={3}
            autoComplete="off"
            placeholder="What are you humming about?"
            className="text-primary_dark_text placeholder:text-primary_light_text w-full text-lg bg-transparent border-b-2 border-hover_border resize-none focus:outline-none"
          ></textarea>
          <div className="flex items-center justify-between mt-2">
            <br />
            <div className="flex items-center">
              <p className="mr-4 text-secondary_text">
                {error && error.message}
              </p>
              <p
                className={error ? "text-secondary_text " : "text-primary_text"}
              >
                {140 - count}
              </p>
              <TweetButton className={tweetIconSmall} text="Tweet" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TweetForm;
