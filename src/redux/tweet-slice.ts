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
    addComment: (state, action: PayloadAction<any>) => {
      const index = state.findIndex((tweet) => tweet.id === action.payload.id);
      const newComment: Comment = {
        id: nanoid(),
        createdAt: Date.now(),
        comment: action.payload.reply.comment,
        avatar: action.payload.reply.avatar,
        userName: action.payload.reply.userName,
        like: false,
      };
      {
        state[index].reply.push(newComment);
      }
    },
    toggleCommentLike: (state: any, action) => {
      const currentTweetIndex = state.findIndex(
        (tweet: Tweet) => tweet.id === action.payload.id // props.currentTweetId
      );

      let currentComment = state[currentTweetIndex].reply.find(
        (comment: Comment) => comment.id === action.payload.commentid
      );

      if (currentComment) {
        currentComment.like = !currentComment.like;
      }
    },
    deleteComment: (state: any, action) => {
      const currentTweetIndex = state.findIndex(
        (tweet: Tweet) => tweet.id === action.payload.id // props.currentTweetId
      );

      const currentComment = state[currentTweetIndex].reply.findIndex(
        (tweet: any) => tweet.id === action.payload.commentid
      );
      // console.log(current(currentComment));
      // console.log(action.payload.commentid);
      // return state.filter(
      // (tweet: any) => console.log(tweet[0].reply.id)
      // tweet[currentTweetIndex].reply[currentComment].id !==
      // action.payload.commentid
      // );
    },
  },
});

export const tweetActions = tweetSlice.actions;
export default tweetSlice;
