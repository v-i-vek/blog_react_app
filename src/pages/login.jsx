import React, { useState } from "react";
import { AUTH_API } from "../config/apiConfig";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export function LoginForm() {
  const [formdata, setFormData] = useState({ userName: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(AUTH_API.login, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formdata),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("response ", data);
      })
      .catch((err) => console.log("error ", err));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>login</h2>
        <Box
          component="div"
          sx={{ width: 500, maxWidth: '100%'}}
          autoComplete="off"
        >
          <div>
            <TextField
              id="userName"
              fullWidth
              label="userName"
              name="userName"
              type="text"
              varient="outlined"
              value={formdata.userName}
              onChange={handleChange}
              required
            ></TextField>
          </div>

          <div>
            <TextField
              fullWidth
              id="password"
              label="password"
              name="password"
              varient="outlined"
              type="password"
              value={formdata.password}
              onChange={handleChange}
              margin="dense"
              required
            ></TextField>
          </div>
        </Box>
        <Button
          margin="dense"
          variant="contained"
          color="primary"
          type="submit"
        >
          Login
        </Button>
      </form>
    </div>
  );
}
