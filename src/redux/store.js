import { configureStore } from "@reduxjs/toolkit";
import tweetSlice from "./tweet-slice";
export default configureStore({
  reducer: { tweet: tweetSlice.reducer },
});
