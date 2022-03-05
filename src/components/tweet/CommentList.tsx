import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Comment from "./Comment";

const CommentList = () => {
  const params = useParams();
  const comments = useSelector((state: any) => state.tweetList.comments);
  const selectedComment = comments.filter(
    (comment: any) => comment.tweetId === params.id
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
