import React, { useState } from "react";
import { FaTimes, FaBars, FaShoppingCart, FaUser } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

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
            <Link to="/login">Login</Link>
          </li>

          <li className="navbar-item" style={{ borderLeft: "1px solid black" }}>
            <Link to="/cart">
              <FaShoppingCart />
            </Link>
          </li>
          <li className="navbar-item" style={{ marginLeft: "-30px" }}>
            <Link to="/profile">
              <FaUser />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
