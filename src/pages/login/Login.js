import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (email.trim() === "") {
      validationErrors.email = "Please enter your email";
    }

    if (password.trim() === "") {
      validationErrors.password = "Please enter your password";
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log("Email:", email);
    console.log("Password:", password);

    const storedData = JSON.parse(localStorage.getItem("userData")) || [];
    const user = storedData.find(
      (userData) => userData.email === email && userData.password === password
    );

    if (user) {
      sessionStorage.setItem("currentUser", JSON.stringify(user));
      sessionStorage.setItem("isLogin", "true");
      toast.success("Login successfully", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        navigate(`/`);
      }, 2000);
    } else {
      toast.error("Login Failed", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        maxWidth="400px"
        m="auto"
        mt={15}
      >
        <Typography variant="h5" align="center" mb={3}>
          Login
        </Typography>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          fullWidth
          margin="normal"
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          fullWidth
          margin="normal"
          error={!!errors.password}
          helperText={errors.password}
        />
        <Button variant="contained" type="submit" fullWidth mt={3}>
          Login
        </Button>
        <Link
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
          to="/register"
        >
          <span>Don't have an account?</span>
          <span>Register here</span>
        </Link>
      </Box>
      <ToastContainer />
    </form>
  );
};

export default Login;
