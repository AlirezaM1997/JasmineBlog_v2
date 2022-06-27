import { configureStore } from '@reduxjs/toolkit';
import slideCounterSlice from '../slices/slideCounterSlice';
import topBlogsSlice from '../slices/topBlogsSlice';
import userInfoSlice from '../slices/userInfoSlice';

export const store = configureStore({
  reducer: {
    counter: slideCounterSlice,
    topBlogs: topBlogsSlice,
    userInfo: userInfoSlice
  },
});
