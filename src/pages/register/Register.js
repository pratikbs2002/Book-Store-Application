import React from "react";
import { Link } from "react-router-dom";
import LoginImage from "../../assets/book.png";
import "./Register.css";
import { TextField } from "@mui/material";

export default function Register() {
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
            padding: "30px",
          }}
        >
          <div className="first-part">
            <img src={LoginImage} alt="login" />
          </div>
          <div className="second-part">
            <div className="login-data">
              <div className="login-logo"></div>
              <div className="greeting-message">
                Welcome to online Book Store
              </div>
              <div
                className="greeting-message"
                style={{ fontWeight: "500", fontSize: "20px" }}
              >
                Register Now
              </div>
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
                  <TextField label="Email" />
                  <TextField label="Mobile Number" />
                  <TextField label="Password " />
                  <TextField label="Confirm Password" />
                </div>
                {/* <Link
                  className="link-for-forgot-password"
                  to="/forgot-password"
                >
                  <span> forgot password ?</span>
                </Link> */}
                <button className="login-button" htmlType="submit">
                  Register
                </button>
                <Link className="link-for-register" to="/about">
                  <span> Already have an account ?</span>
                  <span> Login here</span>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
