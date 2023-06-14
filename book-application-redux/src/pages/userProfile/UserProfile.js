import React, { useContext, useState } from "react";
import {
  TextField,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  InputAdornment,
  Typography,
  Card,
  Divider,
} from "@mui/material";
import { AuthContext } from "../AuthContext";
import { FaTimes } from "react-icons/fa";
import { AiFillEyeInvisible, AiFillEye, AiFillEdit } from "react-icons/ai";
import { toast } from "react-toastify";

const UserProfile = () => {
  const { currentUser, setCurrentUser, updateProfile } =
    useContext(AuthContext);
  const [updatedUserData, setUpdatedUserData] = useState({
    id: currentUser.id,
    name: currentUser.name,
    email: currentUser.email,
    mobileNumber: currentUser.mobileNumber,
    city: currentUser.city,
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleProfileUpdateChange = (e) => {
    setUpdatedUserData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleProfileUpdateSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (updatedUserData.name.trim() === "") {
      validationErrors.name = "Please enter your name";
    }

    if (updatedUserData.email.trim() === "") {
      validationErrors.email = "Please enter your email";
    }

    if (updatedUserData.mobileNumber.trim() === "") {
      validationErrors.mobileNumber = "Please enter your mobile number";
    }

    if (updatedUserData.city.trim() === "") {
      validationErrors.city = "Please enter your city name";
    }

    if (
      updatedUserData.password !== "" &&
      updatedUserData.password.length < 8
    ) {
      validationErrors.password = "Password must be at least 8 characters long";
    }

    if (updatedUserData.password !== updatedUserData.confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const updatedUser = {
      ...currentUser,
      name: updatedUserData.name,
      email: updatedUserData.email,
      mobileNumber: updatedUserData.mobileNumber,
    };

    if (updatedUserData.password !== "") {
      updatedUser.password = updatedUserData.password;
    }
    console.log(updatedUser);
    setCurrentUser(updatedUser);
    setErrors({});
    updateProfile(updatedUser);
    handleClose();
    toast.success("Profile Update Successfully", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flexDirection: "column",
          marginTop: "100px",
          paddingBottom: "100px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            width: "100%",
            color: "black",
          }}
        >
          Profile
        </h2>
        <Card
          style={{
            display: "flex",
            flexWrap: "wrap",
            minWidth: "300px",
            columnGap: "100px",
            rowGap: "50px",
            width: "80%",
            padding: "50px",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "5px",
              minWidth: "300px",
              maxWidth: "300px",
              flexDirection: "column",
            }}
          >
            <Typography color={"black"}>Name</Typography>
            <div
              style={{
                borderRadius: "5px",
                border: "1px solid black",
                padding: "10px",
                backgroundColor: "#fbf7f7",
                color: "black",
              }}
            >
              <Typography>{currentUser.name}</Typography>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "5px",
              minWidth: "300px",
              maxWidth: "300px",
              flexDirection: "column",
            }}
          >
            <Typography>Mobile Number</Typography>
            <div
              style={{
                borderRadius: "5px",
                border: "1px solid black",
                padding: "10px",
                backgroundColor: "#fbf7f7",
                color: "black",
              }}
            >
              <Typography>{currentUser.mobileNumber}</Typography>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "5px",
              minWidth: "300px",
              maxWidth: "300px",
              flexDirection: "column",
            }}
          >
            <Typography>Email</Typography>
            <div
              style={{
                borderRadius: "5px",
                border: "1px solid black",
                padding: "10px",
                backgroundColor: "#fbf7f7",
                color: "black",
              }}
            >
              <Typography>{currentUser.email}</Typography>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "5px",
              minWidth: "300px",
              maxWidth: "300px",
              flexDirection: "column",
            }}
          >
            <Typography>City</Typography>
            <div
              style={{
                borderRadius: "5px",
                border: "1px solid black",
                padding: "10px",
                backgroundColor: "#fbf7f7",
                color: "black",
              }}
            >
              <Typography>{currentUser.city}</Typography>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "5px",
              minWidth: "300px",
              maxWidth: "300px",
              flexDirection: "column",
            }}
          >
            <Typography>Password</Typography>
            <div
              style={{
                borderRadius: "5px",
                border: "1px solid black",
                padding: "10px",
                backgroundColor: "#fbf7f7",
                color: "black",
              }}
            >
              <Typography>***************</Typography>
            </div>
          </div>
          <Button
            style={{
              position: "absolute",
              bottom: "10px",
              right: "10px",
              zIndex: 100,
              backgroundColor: "black",
              color: "white",
            }}
            startIcon={<AiFillEdit />}
            onClick={handleClickOpen}
          >
            Edit
          </Button>
        </Card>
      </div>
      <Dialog open={open} onClose={handleClose} style={{ maxWidth: "100%" }}>
        <DialogTitle>
          Profile
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", right: 8, top: 8, zIndex: 1 }}
          >
            <FaTimes />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box>
            <form onSubmit={handleProfileUpdateSubmit}>
              <TextField
                label="Name"
                type="text"
                name="name"
                value={updatedUserData.name}
                onChange={handleProfileUpdateChange}
                fullWidth
                margin="normal"
                error={!!errors.name}
                helperText={errors.name}
              />
              <TextField
                label="Email"
                type="email"
                name="email"
                value={updatedUserData.email}
                onChange={handleProfileUpdateChange}
                fullWidth
                margin="normal"
                error={!!errors.email}
                helperText={errors.email}
              />
              <TextField
                label="City"
                type="city"
                name="city"
                value={updatedUserData.city}
                onChange={handleProfileUpdateChange}
                fullWidth
                margin="normal"
                error={!!errors.city}
                helperText={errors.city}
              />
              <TextField
                label="Mobile Number"
                type="tel"
                name="mobileNumber"
                value={updatedUserData.mobileNumber}
                onChange={handleProfileUpdateChange}
                fullWidth
                margin="normal"
                error={!!errors.mobileNumber}
                helperText={errors.mobileNumber}
              />
              <div style={{ display: "flex", gap: "10px" }}>
                <TextField
                  label="New Password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={updatedUserData.password}
                  onChange={handleProfileUpdateChange}
                  fullWidth
                  margin="normal"
                  error={!!errors.password}
                  helperText={errors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleTogglePassword} edge="end">
                          {showPassword ? (
                            <AiFillEyeInvisible />
                          ) : (
                            <AiFillEye />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Confirm New Password"
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={updatedUserData.confirmPassword}
                  onChange={handleProfileUpdateChange}
                  fullWidth
                  margin="normal"
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleTogglePassword} edge="end">
                          {showPassword ? (
                            <AiFillEyeInvisible />
                          ) : (
                            <AiFillEye />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <DialogActions>
                <Button
                  style={{ backgroundColor: "#121920", color: "white" }}
                  onClick={handleProfileUpdateSubmit}
                >
                  Update
                </Button>
              </DialogActions>
            </form>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UserProfile;
