import React from "react";
import "./UserProfile.css";

export default function UserProfile(props) {
  const { userData } = props;
  console.log(props.userData);
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
