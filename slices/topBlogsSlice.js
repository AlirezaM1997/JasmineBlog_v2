import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topBlogList: [],
};

function topBlogs(state, action) {
  console.log("action.payload", action.payload);
  state.value = action.payload;
}

export const topBlogsSlice = createSlice({
  name: "topBlogs",
  initialState,
  reducers: {
    topBlogs,
  },
});
export const { topBlogs: topBlogsAction } = topBlogsSlice.actions;

export default topBlogsSlice.reducer;
