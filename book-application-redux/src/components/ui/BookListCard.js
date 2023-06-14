import React, { useContext, useState } from "react";
import { IoIosCart, IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { Button, Divider } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../pages/AuthContext";
import "./BookListCard.css";
import { addToCart } from "../../pages/redux/CartSlice";
import { BiRightArrow } from "react-icons/bi";
import BookDialog from "../../pages/BookDialog";

export default function BookListCard(props) {
  const { title, imageSrc, price, productId, author } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogin } = useContext(AuthContext);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddToCart = () => {
    if (isLogin) {
      const bookItem = {
        id: productId,
        title: title,
        price: price,
        totalIndividualPrice: price,
        imageSrc: imageSrc,
        quantity: 1,
        author: author,
      };
      dispatch(addToCart(bookItem));
    } else {
      navigate(`/login`);
    }
  };

  return (
    <>
      <div className="book-list-card">
        <div className="upper-component">
          <img src={imageSrc} alt={title} className="book-list-card-image" />
        </div>
        <div style={{ width: "2px", background: "black", height: "80%" }}></div>
        <div className="bottom-component">
          <div style={{ color: "#121920" }} className="book-list-card-title">
            {title}
          </div>
          <div style={{ opacity: "50%" }} className="book-list-card-title">
            Author: {author}
          </div>
          <div className="price-tag">₹ {price}</div>
          <div onClick={handleClickOpen} className="details-button-container">
            <span className="details-icon">
              <BiRightArrow fontSize={"10px"} />
            </span>
            Details
          </div>
          <div className="button-container">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "5px",
                gap: "5px",
                backgroundColor: "#121920",
                borderRadius: "30px",
                cursor: "pointer",
                paddingRight: "15px",
                paddingLeft: "10px",
              }}
              onClick={handleAddToCart}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: "100%",
                  padding: "2px",
                }}
              >
                <IoIosCart />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "2px",
                  fontWeight: "bold",
                  fontSize: "15px",
                  color: "white",
                }}
              >
                Add To Cart
              </div>
            </div>
          </div>
        </div>
      </div>
      <BookDialog
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        open={open}
        setOpen={setOpen}
        imageSrc={imageSrc}
        title={title}
        author={author}
        price={price}
        handleAddToCart={handleAddToCart}
      />
    </>
  );
}
