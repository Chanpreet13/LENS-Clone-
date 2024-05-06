import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    updateMode: (state, { payload }) => {
      console.log(payload, "PAYLOAD");
      state.darkMode = payload;
    },
  },
});

export const { updateMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
