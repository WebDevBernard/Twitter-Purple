import useCurrentUser from "../hooks/useCurrentUser";
import Avatar from "../shared/Avatar";
import TweetButton from "../layout/TweetButton";
import { tweetIconSmall } from "../styles/heroicons-style";
import useAvatarReady from "../hooks/useAvatarReady";
import { FC } from "react";

interface IProps {
  enteredTweet: string;
  tweetSubmitHandler: React.FormEventHandler<HTMLFormElement>;
  tweetBlurHandler: React.FocusEventHandler<HTMLTextAreaElement>;
  tweetChangeHandler: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
  addTweetOnEnter: React.KeyboardEventHandler<HTMLFormElement>;
  tweetInputHasError: boolean;
  tweetCount: number;
  placeholder: string;
}

const TweetForm: FC<IProps> = ({
  enteredTweet,
  tweetSubmitHandler,
  tweetBlurHandler,
  tweetChangeHandler,
  addTweetOnEnter,
  tweetInputHasError,
  tweetCount,
  placeholder,
}) => {
  const ready = useAvatarReady();
  const [selectUserAvatar] = useCurrentUser();

  const errorStyle = tweetInputHasError
    ? "text-red-500"
    : "text-secondary_text";
  return (
    <div className="flex px-3 py-2 border-hover_border  border-y-[1px]">
      {ready && (
        <Avatar
          avatar={selectUserAvatar}
          className="h-12 w-12 md:h-16 md:w-16"
        />
      )}
      <div className="w-full mt-2 mx-3">
        <form onSubmit={tweetSubmitHandler} onKeyDown={addTweetOnEnter}>
          <textarea
            id="tweetinput"
            onChange={tweetChangeHandler}
            onBlur={tweetBlurHandler}
            value={enteredTweet}
            rows={3}
            autoComplete="off"
            placeholder={placeholder}
            className="text-primary_dark_text placeholder:text-primary_light_text w-full text-lg bg-transparent border-b-2 border-hover_border resize-none focus:outline-none"
          ></textarea>
          <div className="flex items-center justify-between mt-2">
            <br />
            <div className="flex items-center">
              <p className={`mr-4 ${errorStyle}`}>
                {tweetInputHasError && tweetCount === 0 && "tweet too short!"}
                {tweetInputHasError && tweetCount > 140 && "tweet too long!"}
              </p>
              <p className={errorStyle}>{140 - tweetCount}</p>
              <TweetButton className={tweetIconSmall} text="Tweet" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TweetForm;
