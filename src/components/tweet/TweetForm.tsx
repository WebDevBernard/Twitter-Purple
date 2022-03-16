import useCurrentUser from "../hooks/useCurrentUser";
import Avatar from "../shared/Avatar";
import TweetButton from "../layout/TweetButton";
import { tweetIconSmall } from "../styles/heroicons-style";
import useAvatarReady from "../hooks/useAvatarReady";
import { FC } from "react";
import { avatarIcon } from "../styles/heroicons-style";

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
  rows: number;
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
  rows,
}) => {
  const ready = useAvatarReady();
  const [selectUserAvatar] = useCurrentUser();

  const errorStyle = tweetInputHasError
    ? "text-red-500"
    : "text-secondary_text";
  return (
    <div className="flex p-2 border-hover_border">
      {ready && (
        <Avatar avatar={selectUserAvatar} className={`ml-1 ${avatarIcon}`} />
      )}
      <div className="w-full mt-2 mx-3">
        <form onSubmit={tweetSubmitHandler} onKeyDown={addTweetOnEnter}>
          <textarea
            id="tweetinput"
            onChange={tweetChangeHandler}
            onBlur={tweetBlurHandler}
            value={enteredTweet}
            rows={rows}
            autoComplete="off"
            placeholder={placeholder}
            className="text-primary_dark_text placeholder:text-primary_light_text w-full text-lg bg-transparent border-b-[1px] border-hover_border resize-none focus:outline-none mt-2"
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
