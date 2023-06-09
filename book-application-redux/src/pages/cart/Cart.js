import {
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import {
  BsArrowLeft
} from "react-icons/bs";
import { MdAdd, MdDelete, MdRemove } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import emptyCartImage from "../../assets/empty-cart.png";
import { AuthContext } from "../AuthContext";
import "./Cart.css";
import { CartContext } from "./CartContext";
export default function Cart() {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    updateCartItemQuantity,
    totalPrice,
  } = useContext(CartContext);
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const userData = currentUser;
  const navigate = useNavigate();
  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const handleQuantityIncrement = (item) => {
    updateCartItemQuantity(item.id, 1, item.price);
  };

  const handleQuantityDecrement = (item) => {
    if (item.quantity === 1) {
      toast.error("Item quantity can not be 0", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    updateCartItemQuantity(item.id, -1, -item.price);
  };

  return (
    <>
      <div className="cart-page-main-container">
        <div className="cart-page-main-container-inner-part">
          <div className="cart-page-cart-component">
            <div className="cart-top-bar">
              <Typography className="cart-title">Shopping Cart</Typography>
              <Typography className="cart-title">
                {cartItems.length} Items
              </Typography>
            </div>
            <Divider />
            <div className="cart-data-container">
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Product Details</TableCell>
                      <TableCell style={{ color: "white" }}></TableCell>
                      <TableCell align="center">Quantity</TableCell>
                      <TableCell align="center">Price</TableCell>
                      <TableCell align="center">Remove</TableCell>
                    </TableRow>
                  </TableHead>
                  {cartItems.length === 0 ? (
                    <TableBody>
                      {" "}
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src={emptyCartImage}
                          alt="Empty Cart"
                          style={{
                            width: "300px",
                            marginTop: "20px",
                            alignSelf: "center",
                            justifySelf: "center",
                          }}
                        />
                      </div>
                    </TableBody>
                  ) : (
                    <TableBody>
                      {cartItems.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell align="center">
                            <img
                              src={item.imageSrc}
                              alt={item.title}
                              style={{ width: "50px" }}
                            />
                          </TableCell>
                          <TableCell>
                            <div>{item.title}</div>
                            <div
                              style={{
                                color: "red",
                                fontSize: "15px",
                                opacity: "60%",
                              }}
                            >
                              {item.author}
                            </div>
                          </TableCell>
                          <TableCell align="center">
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "10px",
                              }}
                            >
                              <MdRemove
                                cursor={"pointer"}
                                color="red"
                                fontSize={"25px"}
                                onClick={() => handleQuantityDecrement(item)}
                              />
                              <div
                                style={{
                                  border: "1px solid black",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  padding: "10px",
                                }}
                              >
                                {item.quantity}
                              </div>
                              <MdAdd
                                cursor={"pointer"}
                                color="red"
                                fontSize={"25px"}
                                onClick={() => handleQuantityIncrement(item)}
                              />
                            </div>
                          </TableCell>
                          <TableCell align="center">
                            ₹{item.totalIndividualPrice}
                          </TableCell>
                          <TableCell align="center">
                            <MdDelete
                              cursor={"pointer"}
                              color="red"
                              fontSize={"25px"}
                              onClick={() => handleRemoveFromCart(item)}
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  )}
                </Table>
              </TableContainer>
            </div>
            <Divider />
            <div
              style={{
                marginTop: "30px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                gap: "10px",
              }}
            >
              <div
                style={{
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  color: "blue",
                }}
                onClick={() => navigate(`/categories`)}
              >
                <BsArrowLeft />
                <>Continue Shopping</>
              </div>
              <div
                style={{
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  color: "blue",
                }}
                onClick={handleClearCart}
              >
                <>Clear Cart</>
              </div>
            </div>
          </div>
          <div className="cart-page-order-summary">
            <div className="cart-top-bar">
              <Typography className="cart-title">Order Summary</Typography>
              <Divider />
              {/* <div className="cart-title">3 Items</div> */}
            </div>
            <div className="cart-order-summary">
              <div className="bottom-part">
                <div className="cart-bottom-bar">
                  <div className="cart-bottom-title">Total Cost:</div>
                  <div className="cart-bottom-title">₹{totalPrice}</div>
                </div>
                <div className="order-now-button">
                  <Button
                    disabled={cartItems.length === 0}
                    onClick={() => alert("Order Done")}
                    variant="contained"
                  >
                    Order Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
