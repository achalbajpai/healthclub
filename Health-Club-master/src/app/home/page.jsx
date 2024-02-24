import MobileNav from "@/components/MobileNav";
import { Post } from "@/components/Post";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const HomePage = () => {
  return (
    <Box pb={5}>
      <Grid>
        <Post />
        <Post />
        <Post />
        <Post />
      </Grid>
      <MobileNav />
    </Box>
  );
};

export default HomePage;
