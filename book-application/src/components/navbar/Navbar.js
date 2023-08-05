import React, { useContext, useState } from "react";
import { FaTimes, FaBars, FaShoppingCart, FaUser } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../pages/AuthContext";
import { Badge } from "@mui/material";
import { CartContext } from "../../pages/cart/CartContext";

export default function Navbar() {
  const { cartItems } = useContext(CartContext);
  const { currentUser, setCurrentUser, isLogin, setIsLogin } =
    useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    setCurrentUser(null);
    setIsLogin(false);
    sessionStorage.removeItem("currentUser");
    sessionStorage.removeItem("isLogin");
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
        Book Store
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

          <li className="navbar-item">
            <Link to="/about">About</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="navbar-item">
            <Link to="/categories">Categories</Link>
          </li>

          <li
            className="navbar-item"
            style={{
              cursor: "pointer",
              border: "1px solid black",
              padding: "5px",
              borderRadius: "5px",
            }}
          >
            {isLogin ? (
              <>
                <div onClick={handleLogout}>Logout</div>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
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
              <li className="navbar-item">
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
    </nav>
  );
}
