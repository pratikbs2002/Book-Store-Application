import React, { useContext, useState } from "react";
import { FaTimes, FaBars, FaShoppingCart, FaUser } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../pages/AuthContext";
import {
  Badge,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const { currentUser, setCurrentUser, isLogin, setIsLogin } =
    useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    setIsDialogOpen(true);
  };

  const confirmLogoutHandler = () => {
    setCurrentUser(null);
    setIsLogin(false);
    sessionStorage.removeItem("currentUser");
    sessionStorage.removeItem("isLogin");
    setIsDialogOpen(false);
  };

  const cancelLogout = () => {
    setIsDialogOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
          Pratik
        </Link>
        <div className="navbar-toggle" onClick={toggle}>
          {isOpen ? (
            <FaTimes className="navbar-toggle-icon" />
          ) : (
            <FaBars className="navbar-toggle-icon" />
          )}
        </div>
        <ul className={isOpen ? "navbar-menu active" : "navbar-menu"}>
          <li className="navbar-item">
            <Link to="/">Home</Link>
          </li>
          {/* <li className="navbar-item">
            <Link to="/about">About</Link>
          </li> */}
          <li className="navbar-item">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="navbar-item">
            <Link to="/categories">Categories</Link>
          </li>
          <li className="">
            {isLogin ? (
              <>
                <Button
                  style={{ backgroundColor: "black", color: "white" }}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button style={{ backgroundColor: "black", color: "white" }}>
                  <Link style={{ color: "white" }} to="/login">
                    Login
                  </Link>
                </Button>
              </>
            )}
          </li>
          {isLogin ? (
            <>
              <li
                className="navbar-item"
                style={{ borderLeft: "1px solid black" }}
              >
                <Badge badgeContent={cartItems.length} color="info">
                  <Link to="/cart">
                    <FaShoppingCart />
                  </Link>
                </Badge>
              </li>
              <li style={{ marginLeft: "-15px" }} className="navbar-item">
                <Link to="/profile">
                  <FaUser />
                </Link>
              </li>
            </>
          ) : (
            <></>
          )}
        </ul>
      </div>

      <Dialog open={isDialogOpen} Width="ls" fullWidth onClose={cancelLogout}>
        <DialogTitle>Confirm Logout</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to logout?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={cancelLogout}>
            Cancel
          </Button>
          <Button
            variant="contained"
            // style={{ backgroundColor: "black" }}
            onClick={confirmLogoutHandler}
            autoFocus
          >
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </nav>
  );
}
