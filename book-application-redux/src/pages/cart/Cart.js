import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdAdd, MdDelete, MdRemove } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import emptyCartImage from "../../assets/empty-cart.png";
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
import { BsArrowLeft } from "react-icons/bs";
import "./Cart.css";
import {
  clearCart,
  removeFromCart,
  updateCartItemQuantity,
} from "../redux/CartSlice";
import { TbTruckDelivery } from "react-icons/tb";
export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleQuantityIncrement = (item) => {
    dispatch(
      updateCartItemQuantity({ id: item.id, quantity: 1, price: item.price })
    );
  };

  const handleQuantityDecrement = (item) => {
    if (item.quantity === 1) {
      toast.error("Item quantity cannot be 0", {
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

    dispatch(
      updateCartItemQuantity({ id: item.id, quantity: -1, price: -item.price })
    );
  };

  return (
    <>
      <div className="cart-page-main-container">
        <div className="cart-page-main-container-inner-part">
          <div className="cart-page-cart-component">
            <div className="cart-top-bar">
              <Typography
                style={{ fontWeight: "700", fontSize: "25px", color: "black" }}
                className="cart-title"
              >
                Shopping Cart
              </Typography>
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
                            <div color="black">{item.title}</div>
                            <div
                              style={{
                                color: "black",
                                fontSize: "15px",
                                opacity: "50%",
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
                  color: "#ee4036",
                  fontWeight: "500",
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
                  fontWeight: "600",
                  color: "#ee4036",
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
            </div>
            <div className="cart-order-summary">
              <div className="bottom-part">
                <div className="cart-bottom-bar">
                  <div className="cart-bottom-title">Total Cost:</div>
                  <div className="cart-bottom-title">₹{totalPrice}</div>
                </div>
                <div className="order-now-button">
                  <Button
                    // disabled={cartItems.length === 0}
                    onClick={() => {
                      if (cartItems.length !== 0) {
                        toast.success("Order Done");
                      } else {
                        toast.error("Your Cart is empty");
                      }
                    }}
                    endIcon={<TbTruckDelivery className="truck-icon" />}
                    style={{
                      cursor:
                        cartItems.length === 0 ? "not-allowed" : "pointer",
                      backgroundColor: "#121920",
                      color: "white",
                    }}
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
