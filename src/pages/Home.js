import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
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
          marginLeft: "100px",
          width: "100%",
          flexDirection: "column",
          marginTop: "100px",
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
          onClick={() => navigate(`/about`)}
        >
         Join Now
        </Button>
      </div>
    </div>
  );
}
