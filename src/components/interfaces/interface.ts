export interface ITweetProps {
  id: number | string;
  createdAt: Date;
  tweet: string;
  avatar: string;
  userName: string;
  like: boolean;
}

export interface ICommentProps {
  id: number | string;
  createdAt: Date;
  tweetId: number | string;
  comment: string;
  avatar: string;
  userName: string;
  like: boolean;
}
