"use client";

import GenericForm from "@/components/GenericForm";

import {
  Box,
  Grid,
  Container,
  TextField,
  Paper,
  Button,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Service } from "@/services/Service";
import Loader from "@/components/Loader";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { openSnackbar } from "@/redux/reducers/snackbarSlice";

const SignUp = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [specialization, setSpecialization] = useState("");

  const [radioVal, setRadioVal] = useState("");

  const fields = [
    {
      label: "Name",
      type: "text",
      value: name,
      onChange: (e) => setName(e.target.value.trimStart()),
    },
    {
      label: "Email",
      type: "email",
      value: email,
      onChange: (e) => setEmail(e.target.value.trim()),
    },
    {
      label: "Phone Number",
      type: "text",
      value: phone,
      onChange: (e) => setPhone(e.target.value.trim()),
    },
    {
      label: "Password",
      type: "password",
      value: password,
      onChange: (e) => setPassword(e.target.value),
    },
    {
      label: "Confirm Password",
      type: "password",
      value: confirmPassword,
      onChange: (e) => setConfirmPassword(e.target.value),
    },
  ];

  const additionalFields = [
    {
      label: "Address",
      type: "text",
      value: address,
      onChange: (e) => setAddress(e.target.value.trimStart()),
    },
    {
      label: "Specialization",
      type: "text",
      value: specialization,
      onChange: (e) => setSpecialization(e.target.value.trimStart()),
    },
  ];

  const handleRadioChange = (e) => {
    setRadioVal(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !name ||
      !email ||
      !phone ||
      !password ||
      !confirmPassword ||
      !radioVal
    ) {
      alert("Fill all details");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    if (radioVal === "doctor") {
      if (!address && !specialization) {
        alert("Fill all fields");
        return;
      }
    }
    setLoading(true);
    let data;
    if (radioVal === "patient") {
      data = await Service.signupPatient({
        username: name,
        email,
        phonenumber: phone,
        password,
      });
    }

    if (radioVal === "doctor") {
      data = await Service.signupDoctor({
        username: name,
        email,
        phonenumber: phone,
        password,
        address,
        specialization,
      });
    }
    if (data.status === 201) {
      dispatch(openSnackbar({ message: data.message, severity: "success" }));
      router.push("/login");
    } else {
      setLoading(false);
      dispatch(openSnackbar({ message: data.message, severity: "error" }));
    }
  };

  if (isLoading)
    return <Loader text="Please wait while we create your account" />;

  return (
    <GenericForm>
      <form onSubmit={handleSubmit}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Typography variant="body1" textAlign={"center"}>
              Enter your details to create your account
            </Typography>
          </Grid>
          {fields.map((field) => (
            <Grid item key={field.label}>
              <TextField required variant={"outlined"} fullWidth {...field} />
            </Grid>
          ))}
          <Grid item>
            <FormControl>
              <FormLabel>You are</FormLabel>
              <RadioGroup
                defaultValue=""
                name="radio-buttons-group"
                value={radioVal}
                onChange={handleRadioChange}
              >
                <FormControlLabel
                  value="doctor"
                  control={<Radio />}
                  label="Doctor"
                />
                <FormControlLabel
                  value="patient"
                  control={<Radio />}
                  label="Patient"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          {radioVal === "doctor" &&
            additionalFields.map((af) => (
              <Grid item key={af.label}>
                <TextField required variant={"outlined"} fullWidth {...af} />
              </Grid>
            ))}
          <Grid item alignSelf={"center"}>
            <Button variant="contained" type="submit">
              Create My Account
            </Button>
          </Grid>
          <Grid item container direction={"column"}>
            <Grid item>
              <Typography variant="subtitle2" textAlign={"center"}>
                Already have an account?
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                textAlign={"center"}
                color="skyblue"
              >
                <Link href="/login">Login</Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </GenericForm>
  );
};

export default SignUp;
