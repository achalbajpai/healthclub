"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import {
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
  Snackbar,
  Alert,
} from "@mui/material";
import { darkTheme } from "@/utils/theme";
import { useState } from "react";
import { store } from "@/redux/reducers/store";
import { closeSnackbar } from "@/redux/reducers/snackbarSlice";
import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isOpen, setOpen] = useState(store.getState().snackbar.isOpen);
  const [message, setMessage] = useState(store.getState().snackbar.message);
  const [severity, setSeverity] = useState(store.getState().snackbar.severity);
  store.subscribe(() => {
    setOpen(store.getState().snackbar.isOpen);
    setMessage(store.getState().snackbar.message);
    setSeverity(store.getState().snackbar.severity);
  });

  const handleClose = () => {
    store.dispatch(closeSnackbar());
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Box
              sx={{ width: "100vw", minHeight: "100vh", postion: "relative" }}
            >
              <Container>{children}</Container>
              <Snackbar
                open={isOpen}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert severity={severity} sx={{ width: "100%" }}>
                  {message}
                </Alert>
              </Snackbar>
            </Box>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
