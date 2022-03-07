export interface ITweetProps {
  id: number | string;
  createdAt: number | Date;
  tweet: string;
  avatar: string;
  userName: string;
  like: boolean;
}

export interface ICommentProps {
  id: number | string;
  createdAt: number | Date;
  tweetId: number | string;
  tweet: string;
  avatar: string;
  userName: string;
  like: boolean;
}
