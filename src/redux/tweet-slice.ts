import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initial-state";
import { nanoid } from "nanoid";

const tweetSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    addTweet: (state, action) => {
      const newTweet = {
        id: nanoid(),
        createdAt: Date.now(),
        tweet: action.payload.tweet,
        avatar: action.payload.avatar,
        userName: action.payload.userName,
        like: false,
        reply: [],
      };
      state.push(newTweet);
    },
    deleteTweet: (state, action) => {
      return state.filter((tweet) => tweet.id !== action.payload.id);
    },
    toggleLike: (state, action) => {
      const index = state.findIndex((tweet) => tweet.id === action.payload.id);
      state[index].like = action.payload.like;
    },
    addComment: (state, action) => {
      const index = state.findIndex((tweet) => tweet.id === action.payload.id);
      const newComment: any | null = {
        id: nanoid(),
        createdAt: Date.now(),
        comment: action.payload.reply.comment,
        avatar: action.payload.reply.avatar,
        userName: action.payload.reply.userName,
        like: false,
      };
      {
        newComment && state[index].reply.push(newComment);
      }
    },
    toggleCommentLike: (state: any, action) => {
      const index = state.findIndex(
        (tweet: any) => tweet.id === action.payload.id
      );
      const currentTweet = state[index].reply;
      const commentIndex = currentTweet.findIndex(
        (comment: any) => comment.id === action.payload.commentid
      );
      state[index].reply[commentIndex].like = action.payload.like;
    },
  },
});

export const tweetActions = tweetSlice.actions;
export default tweetSlice;
