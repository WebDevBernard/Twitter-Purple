import { createSlice } from "@reduxjs/toolkit";
import avatar, { shortName } from "../utils/avatars-names";
const initialState = [
  {
    id: 1,
    createdAt: Date.now(),
    tweet: "My First Tweet",
    avatar: avatar,
    userName: shortName,
    like: false,
  },
  {
    id: 2,
    createdAt: Date.now(),
    tweet: "My Second Tweet",
    avatar: avatar,
    userName: shortName,
    like: false,
  },
  {
    id: 3,
    createdAt: Date.now(),
    tweet: "My Third Tweet",
    avatar: avatar,
    userName: shortName,
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
        avatar: avatar,
        userName: shortName,
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
export default tweetSlice.reducer;
