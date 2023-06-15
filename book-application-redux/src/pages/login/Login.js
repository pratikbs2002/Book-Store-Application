import React, { useContext, useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../AuthContext";
import bgImage from "../../assets/home.png";

const Login = () => {
  const { login } = useContext(AuthContext);
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

    login(email, password);
  };

  return (
    <form
      style={{
        height: "80vh",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        width: "100%",
        marginTop: "100px",
      }}
      onSubmit={handleSubmit}
    >
      <Box
        bgcolor={"white"}
        borderRadius={"20px"}
        boxShadow={"0 4px 8px rgba(0, 0, 0, 0.2)"}
        padding={"70px"}
        paddingTop={"20px"}
        display="flex"
        flexDirection="column"
        maxWidth="400px"
        width={"100%"}
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
        <Button
          style={{ backgroundColor: "black", color: "white" }}
          variant="contained"
          type="submit"
          fullWidth
          mt={3}
        >
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
