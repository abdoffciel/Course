import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./slice/courseSlice"; // Assuming you have a courseSlice

const store = configureStore({
  reducer: {
    courses: courseReducer, // Add your reducers here
  },
});

export default store;
