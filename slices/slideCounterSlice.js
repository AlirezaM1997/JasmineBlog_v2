import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 1,
};
function changeSlideNumber(state, action) {
  state.value = action.payload;
}
export const slideCounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changeSlideNumber,
  },
});
export const { changeSlideNumber: changeSlideNumberAction } =
  slideCounterSlice.actions;
export default slideCounterSlice.reducer;