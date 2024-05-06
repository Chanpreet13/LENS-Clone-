import { configureStore } from "@reduxjs/toolkit";
import updateMode from "./reducer/reducer";

const store = configureStore({
  reducer: {
    updateMode,
  },
});

export default store;
