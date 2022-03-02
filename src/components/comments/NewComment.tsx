import Avatar from "../shared/Avatar";
import TweetButton from "../layout/TweetButton";
const NewComment = (props: any) => {
  return (
    <div className="flex px-3 py-2 border-hover_border border-b-[1px]">
      <Avatar className="h-12 w-12 md:h-16 md:w-16" />
      <div className="w-full mt-2 mx-3">
        <textarea
          rows={3}
          autoComplete="off"
          placeholder="What are you humming about?"
          className="text-primary_dark_text w-full text-lg bg-transparent border-b-2 border-hover_border resize-none focus:outline-none"
        ></textarea>{" "}
        <div className="flex items-center justify-between mt-2">
          <br />
          <div className="flex items-center">
            <p>140</p>
            <TweetButton
              className="text-sm ml-4 md:px-4 md:py-2"
              text="Tweet"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewComment;
