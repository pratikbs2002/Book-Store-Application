import React, { useState, useEffect } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
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
            <Link to="/book">Categories</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
