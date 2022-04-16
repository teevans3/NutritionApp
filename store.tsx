import { configureStore } from "@reduxjs/toolkit";
import nutritionReducer from "./nutritionSlice";
import mealsReducer from "./mealsSlice";
import profileReducer from "./profileSlice";
export default configureStore({
  reducer: {
    nutrition: nutritionReducer,
    meals: mealsReducer,
    profile: profileReducer,
  },
});
