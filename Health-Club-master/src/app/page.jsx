"use client";
import { Button, Container, Grid, Typography, Box } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <Box display={"flex"} height={"100vh"} justifyContent={"center"} py={8}>
      <Grid container direction={"column"} bgcolor={"orange"}>
        <Grid item container direction={"column"} spacing={2} flex={1}>
          <Grid item>
            <Typography>Yaha logo aayega</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h4">some quote here</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">Join Today!</Typography>
          </Grid>
        </Grid>
        <Grid item flex={1}>
          <Box display="flex" justifyContent={"center"} alignItems={"center"}>
            <Box width={"80%"}>
              <Grid item container direction={"column"} spacing={3}>
                <Grid item>
                  <Button
                    variant="contained"
                    size="medium"
                    fullWidth
                    onClick={() => router.push("/login")}
                  >
                    Login
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    size="medium"
                    fullWidth
                    onClick={() => router.push("/signup")}
                  >
                    Sign up
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
