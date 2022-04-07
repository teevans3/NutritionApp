import { createSlice } from "@reduxjs/toolkit";

export const nutritionSlice = createSlice({
  name: "nutrition",
  initialState: {
    mealIds: [], // meal ids
    totalCalories: 0,
    totalProtein: 0,
    totalNetCarbs: 0,
  },
  reducers: {
    // NOTE: it looks like we are mutating the state directly,
    // but we are not because createSlice uses Immer: https://redux.js.org/tutorials/essentials/part-2-app-structure#reducers-and-immutable-updates
    addMeal: (state, action) => {
      state.mealIds.push(action.payload.mealId);
      state.totalCalories += action.payload.calories;
      state.totalProtein += action.payload.protein;
      state.totalNetCarbs += action.payload.netCarbs;
    },
    removeMeal: (state, action) => {
      // TODO - find a better way to do this
      const index = state.mealIds.indexOf(action.payload.mealId);
      if (index !== -1) {
        state.mealIds.splice(index, 1);
        state.totalCalories -= action.payload.calories;
        state.totalProtein -= action.payload.protein;
        state.totalNetCarbs -= action.payload.netCarbs;
      }
    },
    addByAmount: (state, action) => {
      // TODO - find a better way to do this
      if (action.payload.nutritionType === "Calories") {
        state.totalCalories += action.payload.amount;
      }
      if (action.payload.nutritionType === "Protein") {
        state.totalProtein += action.payload.amount;
      }
      if (action.payload.nutritionType === "Net Carbs") {
        state.totalNetCarbs += action.payload.amount;
      }
    },
    removeByAmount: (state, action) => {
      // TODO - find a better way to do this
      if (action.payload.nutritionType === "Calories") {
        state.totalCalories -= action.payload.amount;
      }
      if (action.payload.nutritionType === "Protein") {
        state.totalProtein -= action.payload.amount;
      }
      if (action.payload.nutritionType === "Net Carbs") {
        state.totalNetCarbs -= action.payload.amount;
      }
    },
  },
});

export const { addMeal, removeMeal, addByAmount, removeByAmount } =
  nutritionSlice.actions;

// TODO - do we need this thunk?
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectTotalCalories = (state) => state.nutrition.totalCalories;
export const selectTotalProtein = (state) => state.nutrition.totalProtein;
export const selectTotalNetCarbs = (state) => state.nutrition.totalNetCarbs;
export const selectMealIds = (state) => state.nutrition.mealIds;

export default nutritionSlice.reducer;
