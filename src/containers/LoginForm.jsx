import React from "react";
import { useState } from "react";
import {
  TextField,
  Checkbox,
  Select,
  MenuItem,
  Button,
  Paper,
  Box,
} from "@mui/material";

import { FormControl, FormControlLabel, InputLabel } from "@mui/material";

import { Link } from "react-router-dom";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [hasSubmit, setHasSubmit] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };
  const handleSubmit = () => {
    setHasSubmit(true);
  };
  const displayAlert = () => {
    console.log("hasSubmit", hasSubmit);

    return hasSubmit ? (
      <Alert severity="success">welcome back, {email}</Alert>
    ) : (
      <></>
    );
  };
}
return (
  <Box
    display="flex"
    height={"80%"}
    justifyContent={"center"}
    alignItems={"center"}
  >
    <Box position={"absolute"} top="150px">
      <Alert severity="success">This is a success Alert.</Alert>
    </Box>

    <Paper sx={{ p: "10px" }}>
      <FormControl component="fieldset">
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
          onChange={handleEmailChange}
        />

        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
          onChange={handlePasswordChange}
        />

        <FormControlLabel
          control={<Checkbox />}
          label="Remember Me"
          sx={{ mb: 2 }}
          onChange={handleRememberMeChange}
        />

        <Button
          variant="contained"
          sx={{ mb: 2 }}
          disabled={!email || password}
          onClick={handleSubmit}
        >
          Login
        </Button>

        <Link to="/register">Register</Link>
      </FormControl>
    </Paper>
  </Box>
);
