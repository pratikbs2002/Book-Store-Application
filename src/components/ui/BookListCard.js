import React, { useContext } from "react";
import "./BookListCard.css";
import { IoIosCart } from "react-icons/io";
import { CartContext } from "../../pages/cart/CartContext";
import { Button } from "@mui/material";
import { AuthContext } from "../../pages/AuthContext";
import { useNavigate } from "react-router-dom";
export default function BookListCard(props) {
  const { isLogin } = useContext(AuthContext);

  const { title, imageSrc, price, productId, author } = props;
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

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
      addToCart(bookItem);
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
            // style={{ marginTop: "20px" }}
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
