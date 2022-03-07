import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import initialState from "./initial-state";
import { nanoid } from "nanoid";
import { ICommentProps, ITweetProps } from "../components/interfaces/interface";

const tweetSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    addTweet: (state: ITweetProps[], action: PayloadAction<ITweetProps>) => {
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
    deleteTweet: (state, action: PayloadAction<ITweetProps>) => {
      return {
        ...state,
        tweets: state.tweets.filter((tweet) => tweet.id !== action.payload),
      };
    },
    toggleLike: (state, action: PayloadAction<ITweetProps>) => {
      const index = state.tweets.findIndex(
        (tweet) => tweet.id === action.payload.id
      );
      state.tweets[index].like = action.payload.like;
    },
    addComment: (
      state: ICommentProps[],
      action: PayloadAction<ICommentProps>
    ) => {
      const newComment = {
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
    toggleCommentLike: (state, action: PayloadAction<ICommentProps>) => {
      const index = state.comments.findIndex(
        (tweet) => tweet.id === action.payload.id
      );
      state.comments[index].like = action.payload.like;
    },
    deleteComment: (state, action: PayloadAction) => {
      return {
        ...state,
        comments: state.comments.filter(
          (comment) => comment.id !== action.payload
        ),
      };
    },
  },
});

export const tweetActions = tweetSlice.actions;
export default tweetSlice;
