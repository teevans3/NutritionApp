import { configureStore } from "@reduxjs/toolkit";
import nutritionReducer from "./nutritionSlice";
import mealsReducer from "./mealsSlice";

export default configureStore({
  reducer: {
    nutrition: nutritionReducer,
    meals: mealsReducer,
  },
});
