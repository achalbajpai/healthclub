import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./theme";
import snackbarReducer from "./snackbarSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    snackbar: snackbarReducer,
  },
});
