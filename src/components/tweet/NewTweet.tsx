import Avatar from "../shared/Avatar";
import TweetButton from "../layout/TweetButton";
import { tweetIconSmall } from "../styles/heroicons-style";
const NewTweet = (props: any) => {
  return (
    <div className="flex px-3 py-2 border-hover_border  border-b-[1px]">
      <Avatar className="h-12 w-12 md:h-16 md:w-16" />
      <div className="w-full mt-2 mx-3">
        <textarea
          rows={3}
          autoComplete="off"
          placeholder="What are you humming about?"
          className="text-primary_dark_text placeholder:text-primary_light_text w-full text-lg bg-transparent border-b-2 border-hover_border resize-none focus:outline-none"
        ></textarea>{" "}
        <div className="flex items-center justify-between mt-2">
          <br />
          <div className="flex items-center">
            <p>140</p>
            <TweetButton className={tweetIconSmall} text="Tweet" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTweet;
