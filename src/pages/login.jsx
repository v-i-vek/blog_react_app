import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { AUTH_API } from "../config/apiConfig";
import { useAuth } from "../context/AuthContext";

export function LoginForm() {
  const [formdata, setFormData] = useState({ userName: "", password: "" });
  const navigate = useNavigate();
  const { login } = useAuth();


  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(AUTH_API.login, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formdata),
    });
    const result = await res.json();

    if (!res.ok) {
      // server returned non-2xx
      throw new Error(result?.message || "Login failed");
    }

    if (result.message === 'success' && result?.data) {
      const userData = {
        accessToken: result?.data?.accessToken,
        user: result?.data?.user || { email: formdata.userName }
      };
      login(userData);
      navigate("/dashboard", { replace: true });
    } else {
      throw new Error(result?.message || "Login failed");
    }

  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>login</h2>
        <Box
          component="div"
          sx={{ width: 500, maxWidth: '100%' }}
          autoComplete="off"
        >
          <div>
            <TextField
              id="userName"
              fullWidth
              label="userName"
              name="userName"
              type="text"
              variant="outlined"
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
              variant="outlined"
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
