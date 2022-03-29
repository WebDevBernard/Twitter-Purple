import { useState, useEffect, useRef } from "react";
import useCurrentUser from "../hooks/useCurrentUser";
import Avatar from "../shared/Avatar";
import TweetButton from "../layout/TweetButton";
import { tweetIconSmall } from "../styles/heroicons-style";
import useAvatarReady from "../hooks/useAvatarReady";
import { FC } from "react";
import { avatarIcon } from "../styles/heroicons-style";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface IProps {
  enteredTweet: string;
  tweetSubmitHandler: React.FormEventHandler<HTMLFormElement>;
  tweetBlurHandler: React.FocusEventHandler<HTMLTextAreaElement>;
  tweetChangeHandler: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
  tweetCount: number;
  placeholder: string;
  pencil?: string;
  p?: string;
  disabled?: boolean;
  rows: number;
}

const TweetForm: FC<IProps> = ({
  disabled,
  enteredTweet,
  tweetSubmitHandler,
  tweetBlurHandler,
  tweetChangeHandler,
  tweetCount,
  placeholder,
  pencil,
  p,
  rows,
}) => {
  const ready = useAvatarReady();
  const [selectUserAvatar] = useCurrentUser();

  return (
    <div className="flex p-2 border-hover_border">
      {ready && (
        <Avatar avatar={selectUserAvatar} className={`ml-1 ${avatarIcon}`} />
      )}
      <div className="w-full mt-2 mx-3">
        <form onSubmit={tweetSubmitHandler}>
          <textarea
            onChange={tweetChangeHandler}
            id="tweetinput"
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
              {tweetCount ? (
                <div className="h-6 w-6 text-xl">
                  <CircularProgressbar
                    styles={buildStyles({
                      textSize: "36px",
                      pathTransitionDuration: 0.5,
                      pathColor: "#7e22ce",
                      textColor: "red",
                      trailColor: "#cbd5e1",
                    })}
                    value={tweetCount}
                    maxValue={140}
                    text={tweetCount > 140 ? (140 - tweetCount).toString() : ""}
                  />
                </div>
              ) : (
                ""
              )}
              <TweetButton
                disabled={disabled}
                pencil={pencil}
                p={p}
                className={tweetIconSmall}
                text="Tweet"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TweetForm;
