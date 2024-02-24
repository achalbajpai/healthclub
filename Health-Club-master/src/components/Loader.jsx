"use client";
import { Box, Grid, CircularProgress, Typography } from "@mui/material";

const Loader = ({ text }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <Grid
        container
        direction="column"
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <CircularProgress color="secondary" size={200} />
        </Grid>
        {text && (
          <Grid item>
            <Typography>{text}</Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Loader;
