import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import initialState from "./initial-state";
import { nanoid } from "nanoid";
import { ICommentProps, ITweetProps } from "../components/interfaces/interface";

const tweetSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    addTweet: (state, action: any) => {
      const newTweet: any = {
        id: nanoid(),
        createdAt: Date.now(),
        tweet: action.payload.tweet,
        avatar: action.payload.avatar,
        userName: action.payload.userName,
        like: false,
      };
      state.tweets.push(newTweet);
    },
    deleteTweet: (state, action: any) => {
      return {
        ...state,
        tweets: state.tweets.filter(
          (tweet: any) => tweet.id !== action.payload
        ),
      };
    },
    toggleLike: (state, action: any) => {
      const index = state.tweets.findIndex(
        (tweet) => tweet.id === action.payload.id
      );
      state.tweets[index].like = action.payload.like;
    },
    addComment: (state, action: any) => {
      const newComment: any = {
        id: nanoid(),
        createdAt: Date.now(),
        tweetId: action.payload.tweetId,
        comment: action.payload.comment,
        avatar: action.payload.avatar,
        userName: action.payload.userName,
        like: false,
      };
      {
        state.comments.push(newComment);
      }
    },
    toggleCommentLike: (state, action: any) => {
      const index = state.comments.findIndex(
        (tweet) => tweet.id === action.payload.id
      );
      state.comments[index].like = action.payload.like;
    },
    deleteComment: (state, action: any) => {
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
