// import React, { useContext } from "react";
// import { Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import bgImage from "../assets/background.svg";
// import { ToastContainer } from "react-toastify";
// import { AuthContext } from "./AuthContext";
// import { FaShoppingCart } from "react-icons/fa";

// export default function Home() {
//   const { isLogin } = useContext(AuthContext);

//   const navigate = useNavigate();

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         width: "100%",
//         flexDirection: "column",
//         marginTop: "100px",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "flex-start",
//           width: "100%",
//           flexDirection: "column",
//           marginTop: "0px",
//           backgroundImage: `url(${bgImage})`,
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "right bottom",
//           paddingLeft: "100px",
//           height: "80vh",
//         }}
//       >
//         <div
//           style={{
//             fontWeight: "700",
//             fontSize: "30px",
//             color: "blue",
//           }}
//         >
//
//         </div>
//         <div
//           style={{
//             fontWeight: "700",
//             maxWidth: "800px",
//             fontSize: "50px",
//             color: "black",
//           }}
//         >
//           Are You Looking For Good Books in one place?
//         </div>
// {isLogin ? (
//   <>
//     <Button
//       style={{
//         marginTop: "30px",
//       }}
//       variant="contained"
//       onClick={() => navigate(`/categories`)}
//       startIcon={<FaShoppingCart />}
//     >
//       Shop Now
//     </Button>
//   </>
// ) : (
//   <>
//     <Button
//       style={{
//         marginTop: "30px",
//       }}
//       variant="contained"
//       onClick={() => navigate(`/login`)}
//     >
//       Join Now
//     </Button>
//   </>
// )}
//       </div>
//
//     </div>
//   );
// }

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
  return (
    <div className="homepage-container">
      <div className="content-section">
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
      </div>
      <ToastContainer />
    </div>
  );
}
