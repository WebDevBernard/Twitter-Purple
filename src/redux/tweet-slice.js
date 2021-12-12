import { createSlice } from "@reduxjs/toolkit";
import { avatarArray } from "../utils/generate-avatar-names";

const initialState = [
  {
    id: "1",
    createdAt: 1639077467544,
    tweet:
      "Try out the login feature without signing up by logging in with email: user1@fakemail.com // pw: 123456",
    avatar: avatarArray[3],
    userName: "Bernard-Yang",
    like: true,
    reply: [
      {
        id: "1",
        createdAt: 1639077467544,
        comment: "Why am I commenting on my own tweet?",
        avatar: avatarArray[3],
        userName: "Bernard-Yang",
        like: false,
      },
    ],
  },
  {
    id: "2",
    createdAt: 1639077467544,
    tweet:
      "Yes, it's not exactly twitter but it does have data persisted through local storage, and a login connected to Firebase.",

    avatar: avatarArray[3],
    userName: "Bernard-Yang",
    like: true,
    reply: [],
  },
];

const tweetSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    addTweet: (state, action) => {
      const newTweet = {
        id: `${action.payload.tweet}_${new Date().getTime()}`,
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
      const newComment = {
        id: `${action.payload.reply.comment}_${new Date().getTime()}`,
        createdAt: Date.now(),
        comment: action.payload.reply.comment,
        avatar: action.payload.reply.avatar,
        userName: action.payload.reply.userName,
        like: false,
      };
      state[index].reply.push(newComment);
    },
    toggleCommentLike: (state, action) => {
      const index = state.findIndex((tweet) => tweet.id === action.payload.id);
      const currentTweet = state[index].reply;
      const commentIndex = currentTweet.findIndex(
        (comment) => comment.id === action.payload.commentid
      );
      state[index].reply[commentIndex].like = action.payload.like;
    },
  },
});

export const tweetActions = tweetSlice.actions;
export default tweetSlice;
