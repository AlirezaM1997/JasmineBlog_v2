import { configureStore } from '@reduxjs/toolkit';
import slideCounterSlice from '../slices/slideCounterSlice';
import topBlogsSlice from '../slices/topBlogsSlice';

export const store = configureStore({
  reducer: {
    counter: slideCounterSlice,
    topBlogs: topBlogsSlice
  },
});
