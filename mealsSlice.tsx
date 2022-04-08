import { createSlice } from "@reduxjs/toolkit";
import { mealItems } from "./sampleData";

export const mealsSlice = createSlice({
  name: "meals",
  initialState: {
    mealItems: mealItems,
  },
  reducers: {
    createMeal: (state, action) => {
      // TODO - create and add to actual database
      const updatedMealItems = [...state.mealItems, action.payload.newMealItem];
      state.mealItems = updatedMealItems;
    },
    deleteMeal: (state, action) => {
      // TODO - delete from actual database
    },
  },
});

export const { createMeal, deleteMeal } = mealsSlice.actions;

export const selectMealItems = (state) => state.meals.mealItems;

export default mealsSlice.reducer;
