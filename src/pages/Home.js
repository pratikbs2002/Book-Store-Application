import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/background.svg";
import { ToastContainer } from "react-toastify";
export default function Home() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        flexDirection: "column",
        marginTop: "100px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100%",
          flexDirection: "column",
          marginTop: "0px",
          background: `${bgImage}`,
          paddingLeft: "100px",
          backgroundSize: "cover",
          height: "80vh",
        }}
      >
        <div style={{ fontWeight: "700", fontSize: "30px", color: "blue" }}>
          Pratik's Book Store
        </div>
        <div style={{ fontWeight: "700", fontSize: "50px", color: "black" }}>
          Are You Looking For Good Books in one place ?
        </div>
        <Button
          style={{
            marginTop: "30px",
            color: "white",
            backgroundColor: "darkblue",
          }}
          variant="contained"
          onClick={() => navigate(`/login`)}
        >
          Join Now
        </Button>
      </div>
      <ToastContainer />
    </div>
  );
}
