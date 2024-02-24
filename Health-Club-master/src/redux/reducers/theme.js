import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "themeSlice",
  initialState: {
    mode: "light",
  },
  reducers: {
    changeTheme(state) {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
