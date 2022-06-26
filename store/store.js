import { configureStore } from '@reduxjs/toolkit';
import slideCounterSlice from '../slices/slideCounterSlice';

export const store = configureStore({
  reducer: {
    counter: slideCounterSlice,
  },
});
