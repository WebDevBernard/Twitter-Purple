import { createSlice } from "@reduxjs/toolkit";
import { avatarArray } from "../utils/generate-avatar-names";
import { v4 as uuidv4 } from "uuid";
const initialState = [
  {
    id: "1",
    createdAt: 1639077467544,
    tweet:
      "Try out the login feature without signing up by logging in with email: user1@fakemail.com // pw: 123456",
    avatar: avatarArray[3],
    userName: "Bernard_Yang",
    like: true,
    reply: [],
  },
  {
    id: "2",
    createdAt: 1639077467544,
    tweet:
      "Yes, it's not exactly Twitter but it does have data persisted through local storage, and a login connected to Firebase.",

    avatar: avatarArray[3],
    userName: "Bernard_Yang",
    like: true,
    reply: [
      {
        id: "1",
        createdAt: 1639077467544,
        comment:
          "Some other features include: login validation using Formik and Yup, Twitter feed using Twitter API, app wide state management with Redux.",
        avatar: avatarArray[3],
        userName: "Bernard_Yang",
        like: false,
      },
      {
        id: "2",
        createdAt: 1639077467544,
        comment:
          "Click the tweets counter to toggle between user tweets and all tweets.",
        avatar: avatarArray[3],
        userName: "Bernard_Yang",
        like: false,
      },
    ],
  },
];

const tweetSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    addTweet: (state, action) => {
      const newTweet = {
        id: uuidv4(),
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
        id: uuidv4(),
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
