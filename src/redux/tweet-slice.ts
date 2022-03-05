import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import initialState from "./initial-state";
import { nanoid } from "nanoid";

interface Tweet {
  id: string;
  createdAt: number;
  tweet: string;
  avatar: string;
  userName: string;
  like: boolean;
  reply: Array<Comment>;
}

interface Comment {
  id: string;
  createdAt: number;
  comment: string;
  avatar: string;
  userName: string;
  like: boolean;
}
const tweetSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    addTweet: (state, action: PayloadAction<any>) => {
      const newTweet = {
        id: nanoid(),
        createdAt: Date.now(),
        tweet: action.payload.tweet,
        avatar: action.payload.avatar,
        userName: action.payload.userName,
        like: false,
      };
      state.tweets.push(newTweet);
    },
    deleteTweet: (state: any, action) => {
      return {
        ...state,
        tweets: state.tweets.filter(
          (tweet: any) => tweet.id !== action.payload
        ),
      };
    },
    toggleLike: (state: any, action) => {
      const index = state.tweets.findIndex(
        (tweet: any) => tweet.id === action.payload.id
      );
      state.tweets[index].like = action.payload.like;
    },
    addComment: (state: any, action: PayloadAction<any>) => {
      const newComment: any = {
        id: nanoid(),
        createdAt: Date.now(),
        tweetId: action.payload.tweetid,
        comment: action.payload.comment,
        avatar: action.payload.avatar,
        userName: action.payload.userName,
        like: false,
      };
      {
        state.comments.push(newComment);
      }
    },
    toggleCommentLike: (state: any, action) => {
      const index = state.comments.findIndex(
        (tweet: any) => tweet.id === action.payload.id
      );
      state.comments[index].like = action.payload.like;
    },
    deleteComment: (state: any, action) => {
      return {
        ...state,
        comments: state.comments.filter(
          (comment: any) => comment.id !== action.payload
        ),
      };
    },
  },
});

export const tweetActions = tweetSlice.actions;
export default tweetSlice;
