import { createSlice } from "@reduxjs/toolkit";
import avatar, { shortName, avatarArray } from "../utils/avatars-names";
const initialState = [
  {
    id: 1,
    createdAt: "Dec 8, 2021",
    tweet: "My First Tweet",
    avatar: avatarArray[0],
    userName: "Curly",
    like: false,
  },
  {
    id: 2,
    createdAt: "Dec 6, 2021",
    tweet: "My Second Tweet",
    avatar: avatarArray[1],
    userName: "Larry",
    like: false,
  },
  {
    id: 3,
    createdAt: "Dec 7, 2021",
    tweet: "My Third Tweet",
    avatar: avatarArray[2],
    userName: "Joe",
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
