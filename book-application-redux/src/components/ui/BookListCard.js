import React, { useContext } from "react";
import { IoIosCart } from "react-icons/io";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../pages/AuthContext";
import "./BookListCard.css";
import { addToCart } from "../../pages/redux/CartSlice";

export default function BookListCard(props) {
  const { title, imageSrc, price, productId, author } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogin } = useContext(AuthContext);

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
          <h2 className="book-list-card-title">{title}</h2>
        </div>
        <div className="bottom-component">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "500",
              background: "#1565c0",
              color: "white",
              borderRadius: "4px",
              width: "100%",
              padding: "8px",
            }}
          >
            ₹{price}
          </div>
          <Button
            variant="contained"
            color="primary"
            startIcon={<IoIosCart />}
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </>
  );
}
