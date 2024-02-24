"use client";
import { Add, Home, Person } from "@mui/icons-material";
import { Box, Button, Grid } from "@mui/material";
import { useRouter } from "next/navigation";

const MobileNav = () => {
  const router = useRouter();
  return (
    <Box
      position={"fixed"}
      bottom={0}
      width={"100vw"}
      left={0}
      p={1}
      bgcolor={"black"}
    >
      <Grid container>
        <Grid item xs={4} textAlign={"center"}>
          <Button variant="text" onClick={() => router.push("/home")} fullWidth>
            <Home fontSize="large" />
          </Button>
        </Grid>
        <Grid item xs={4} textAlign={"center"}>
          <Button variant="text" onClick={() => router.push("/home")} fullWidth>
            <Add fontSize="large" />
          </Button>
        </Grid>
        <Grid item xs={4} textAlign={"center"}>
          <Button variant="text" onClick={() => router.push("/home")} fullWidth>
            <Person fontSize="large" />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MobileNav;
