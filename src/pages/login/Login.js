import React from "react";
import { Link } from "react-router-dom";
import LoginImage from "../../assets/book.png";
import "./Login.css";
import { TextField } from "@mui/material";

export default function Login() {
  return (
    <div
      style={{
        marginTop: "130px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          background: " #ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "80%",
          height: "80%",
          flexWrap: "wrap",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "10px",
            width: "100%",
          }}
        >
          <div className="first-part">
            <img src={LoginImage} alt="login" />
          </div>
          <div className="second-part">
            <div className="login-data">
              <div className="login-logo"></div>
              <div className="greeting-message">Welcome back</div>
              <form>
                <div
                  style={{
                    gap: "10px",
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "wrap",
                  }}
                >
                  <TextField label="UserName" />
                  <TextField label="Password " />
                </div>
                <Link
                  className="link-for-forgot-password"
                  to="/forgot-password"
                >
                  <span> forgot password ?</span>
                </Link>
                <button className="login-button" htmlType="submit">
                  LOGIN
                </button>
                <Link className="link-for-register" to="/register">
                  <span> Don’t have an account ?</span>
                  <span> Register here</span>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
