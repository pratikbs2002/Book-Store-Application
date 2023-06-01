import React, { useContext } from "react";
import "./UserProfile.css";
import { AuthContext } from "../AuthContext";

export default function UserProfile() {
  const { currentUser, isLogin } = useContext(AuthContext);
  const userData = currentUser;

  return (
    <div
      className="profile-page-container"
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "column",
        paddingLeft: "100px",
        gap: "50px",
        width: "100%",
        height: "100vh",
      }}
    >
      <div>Name : {userData.name}</div>
      <div>Email: {userData.email}</div>
      <div>Mobile Number: {userData.mobileNumber}</div>
    </div>
  );
}
