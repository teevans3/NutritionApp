import { createSlice } from "@reduxjs/toolkit";
import { nutritionModes } from "./enums/profileEnums";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    mode: nutritionModes.both,
    dailyGoals: {
      calories: 0,
      protein: 0,
      netCarbs: 0,
    },
  },
  reducers: {
    updateMode: (state, action) => {
      state.mode = action.payload.mode;
    },
    updateDailyGoals: (state, action) => {
      state.dailyGoals[action.payload.nutritionType] =
        action.payload.goalAmount;
    },
  },
});

export const { updateMode, updateDailyGoals } = profileSlice.actions;

export const selectMode = (state) => state.profile.mode;

export const selectDailyGoals = (state) => state.profile.dailyGoals;

export default profileSlice.reducer;
