export interface ITweetProps {
  id: number;
  createdAt: Date;
  tweet: string;
  avatar: string[];
  userName: string;
  like: boolean;
}

export interface ICommentProps {
  id: number;
  createdAt: Date;
  tweetId: string;
  tweet: string;
  avatar: string[];
  userName: string;
  like: boolean;
}
