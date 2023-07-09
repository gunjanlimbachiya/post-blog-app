import React, { ChangeEvent, FormEvent, useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import { RegisterUserInfo } from "../redux/features/authantication/types";
import { useDispatch } from "react-redux";
import { registerRequest } from "../redux/features/authantication/actions";

const Register = () => {
  const [user, setUser] = useState<RegisterUserInfo>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    age: 0,
  });

  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(registerRequest(user));
  };

  return (
    <>
      <Typography variant="h5" py={2} color="primary">
        Register
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="First Name"
              fullWidth
              value={user.firstname}
              onChange={handleChange}
              name="firstname"
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Last Name"
              fullWidth
              value={user.lastname}
              onChange={handleChange}
              name="lastname"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              fullWidth
              value={user.email}
              onChange={handleChange}
              name="email"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              fullWidth
              value={user.password}
              onChange={handleChange}
              name="password"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Age"
              fullWidth
              value={user.age}
              onChange={handleChange}
              name="age"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default Register;
