import { configureStore } from "@reduxjs/toolkit";
import nutritionReducer from "./nutritionSlice";

export default configureStore({
  reducer: {
    nutrition: nutritionReducer,
  },
});
