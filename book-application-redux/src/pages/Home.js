import React, { useContext } from "react";
import "./Home.css"; // Import your custom styles here
import img from "../assets/home.png";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { FaShoppingCart } from "react-icons/fa";
import { ToastContainer } from "react-toastify";

export default function Home() {
  const { isLogin } = useContext(AuthContext);

  const navigate = useNavigate();

  const imageUrl =
    "https://drive.google.com/file/d/10gtq5YGNnsZdMVVQm8P1bVNvrqTSDxnr/view?usp=sharing";
  return (
    <div className="homepage-container">
      {/* <div className="content-section">
        <div style={{ fontSize: "20px", fontWeight: "400" }}>Welcome</div>
        <div className="title">
          <span style={{ color: "red", fontWeight: "700" }}>
            Pratik's Book Store
          </span>
        </div>
        <p className="slogan">
          Explore a world of literary treasures with our vast collection of
          books across various genres and categories, catering to every reader's
          taste and curiosity.
        </p>
        {isLogin ? (
          <>
            <Button
              style={{
                marginTop: "30px",
                backgroundColor: "black",
                color: "white",
              }}
              variant="contained"
              onClick={() => navigate(`/categories`)}
              startIcon={<FaShoppingCart />}
            >
              Shop Now
            </Button>
          </>
        ) : (
          <>
            <Button
              style={{
                marginTop: "30px",
                backgroundColor: "black",
                color: "white",
              }}
              variant="contained"
              onClick={() => navigate(`/login`)}
            >
              Join Now
            </Button>
          </>
        )}
      </div>
      <div className="image-section">
        <img src={img} alt="Bookstore" className="homepage-image" />
      </div> */}
      <ToastContainer />
      <img src={imageUrl} alt="My custom description" />
    </div>
  );
}
