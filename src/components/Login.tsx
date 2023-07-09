import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { loginRequest } from "../redux/features/authantication/actions";
import { LoginUserInfo } from "../redux/features/authantication/types";

const Login = () => {
  const [user, setUser] = useState<LoginUserInfo>({ email: "", password: "" });
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(loginRequest(user));
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Typography py={2} variant="h5" color="primary">
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12} py={2}>
            <TextField
              label="Email"
              fullWidth
              value={user.email}
              onChange={handleChange}
              name="email"
              required
            />
          </Grid>
          <Grid item xs={12} py={2}>
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
          <Grid item>
            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default Login;
