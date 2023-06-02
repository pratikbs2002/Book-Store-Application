import React, { useContext } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/background.svg";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "./AuthContext";

export default function Home() {
  const { isLogin } = useContext(AuthContext);

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
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right bottom",
          paddingLeft: "100px",
          height: "80vh",
        }}
      >
        <div
          style={{
            fontWeight: "700",
            fontSize: "30px",
            color: "blue",
          }}
        >
          Pratik's Book Store
        </div>
        <div
          style={{
            fontWeight: "700",
            maxWidth: "800px",
            fontSize: "50px",
            color: "black",
          }}
        >
          Are You Looking For Good Books in one place?
        </div>
        {isLogin ? (
          <>
            {" "}
            <Button
              style={{
                marginTop: "30px",
              }}
              variant="contained"
              onClick={() => navigate(`/categories`)}
            >
              Shop Now
            </Button>
          </>
        ) : (
          <>
            <Button
              style={{
                marginTop: "30px",
              }}
              variant="contained"
              onClick={() => navigate(`/login`)}
            >
              Join Now
            </Button>
          </>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}
