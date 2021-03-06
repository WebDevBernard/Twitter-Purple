import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Comment from "./Comment";
import { RootState } from "../../redux/store";
const CommentList = () => {
  const params = useParams();
  const comments = useSelector((state: RootState) => state.tweetList.comments);
  const selectedComment = comments.filter(
    (comment) => comment.tweetId === params.id
  );

  return (
    <div>
      {[...selectedComment].reverse().map((entries, id) => {
        return (
          <Comment
            key={id}
            id={entries.id}
            tweetId={params.id}
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

export default CommentList;
