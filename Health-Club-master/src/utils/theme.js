"use client";

import { createTheme } from "@mui/material/styles";

export const darkThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
};

export const darkTheme = createTheme(darkThemeOptions);
