"use client";

import { Grid, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";
import GenericForm from "@/components/GenericForm";
import Link from "next/link";
import { Service } from "@/services/Service";
import Loader from "@/components/Loader";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { openSnackbar } from "@/redux/reducers/snackbarSlice";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit Clicked");
    if (!email || !password) {
      //show better alert here
      alert("Enter email and password");
    }
    //make login api request here
    setLoading(true);
    const data = await Service.login({ email, password });
    if (data.status === 200) {
      dispatch(openSnackbar({ message: data.message, severity: "success" }));
      router.push("/home");
    } else {
      setLoading(false);
      dispatch(openSnackbar({ message: data.message, severity: "error" }));
    }
  };

  if (isLoading) return <Loader text="Please wait while we log you in" />;

  return (
    <GenericForm>
      <form onSubmit={handleSubmit}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Typography variant="body1" textAlign={"center"}>
              Enter your login credentials
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              variant={"outlined"}
              label="Email"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value.trim())}
            />
          </Grid>
          <Grid item>
            <TextField
              variant={"outlined"}
              label="Password"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item alignSelf={"center"}>
            <Button variant="contained" type="submit">
              Login
            </Button>
          </Grid>
          <Grid item container direction="column">
            <Grid item>
              <Typography variant="subtitle2" textAlign={"center"}>
                Don't have an account?
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                textAlign={"center"}
                color="skyblue"
              >
                <Link href="/signup">Create Account</Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </GenericForm>
  );
};

export default Login;
