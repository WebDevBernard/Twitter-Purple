import { configureStore } from "@reduxjs/toolkit";
import { loadState, saveState } from "./localStorage";
import throttle from "lodash.throttle";
import tweetSlice from "./tweet-slice";
const store = configureStore({
  reducer: { tweetList: tweetSlice.reducer },
  preloadedState: loadState(),
});

store.subscribe(throttle(() => saveState(store.getState()), 1000));

export default store;
