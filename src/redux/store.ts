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
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
