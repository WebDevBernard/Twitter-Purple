import { createSlice } from "@reduxjs/toolkit";
import { avatarArray } from "../utils/generate-avatar-names";

const initialState = [
  {
    id: 1,
    createdAt: 1639077467544,
    tweet:
      "Yes, it's not exactly a twitter clone, more like a to-do list. Btw user data is persisted through local storage, while login is connected to Firebase.",
    avatar: avatarArray[3],
    userName: "Bernard Yang",
    like: true,
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
      };
      state.push(newTweet);
    },
    deleteTweet: (state, action) => {
      return state.filter((tweet) => tweet.id !== action.payload.id);
    },
    toggleLike: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].like = action.payload.like;
    },
  },
});

export const tweetActions = tweetSlice.actions;
export default tweetSlice;
