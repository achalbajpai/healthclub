"use client";

import { Box, Paper } from "@mui/material";

const GenericForm = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box width={"80%"}>
        <Paper elevation={3} sx={{ p: 2 }}>
          {children}
        </Paper>
      </Box>
    </Box>
  );
};

export default GenericForm;
