import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import {
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import emptyCartImage from "../../assets/empty-cart.png";
import { MdDelete, MdAdd, MdRemove } from "react-icons/md";
import { BsCartXFill } from "react-icons/bs";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthContext";

export default function Cart() {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    updateCartItemQuantity,
    totalPrice,
  } = useContext(CartContext);
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const userData = currentUser


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
    <div
      style={{
        background: "white",
        paddingTop: "10px",
        marginTop: "150px",
        textAlign: "center",
      }}
    >
      <div>Name : {userData.name}</div>
      <div>Email: {userData.email}</div>
      <div>Mobile Number: {userData.mobileNumber}</div>
      <Typography variant="h5">Your Shopping Cart</Typography>
      <Typography
        style={{
          paddingTop: "10px",
          paddingBottom: "20px",
          borderBottom: "5px solid black",
        }}
        variant="h5"
      >
        Total Price : ₹{totalPrice}
      </Typography>
      {cartItems.length === 0 ? (
        <>
          <img
            src={emptyCartImage}
            alt="Empty Cart"
            style={{ width: "300px", marginTop: "20px" }}
          />
        </>
      ) : (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">Image</TableCell>
                <TableCell>Name</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Remove</TableCell>
              </TableRow>
            </TableHead>
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
                  <TableCell>{item.title}</TableCell>
                  <TableCell align="center">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "20px",
                      }}
                    >
                      <div
                        style={{
                          border: "1px solid black",
                          borderRadius: "10px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <MdRemove
                          cursor={"pointer"}
                          color="red"
                          fontSize={"25px"}
                          onClick={() => handleQuantityDecrement(item)}
                        />
                      </div>
                      <div> {item.quantity}</div>
                      <div
                        style={{
                          border: "1px solid black",
                          borderRadius: "10px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <MdAdd
                          cursor={"pointer"}
                          color="red"
                          fontSize={"25px"}
                          onClick={() => handleQuantityIncrement(item)}
                        />
                      </div>
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
          </Table>
        </TableContainer>
      )}
      {cartItems.length > 0 && (
        <Button
          style={{ cursor: "pointer", marginTop: "10px", marginBottom: "10px" }}
          variant="outlined"
          onClick={handleClearCart}
        >
          <BsCartXFill fontSize={"25px"} />
        </Button>
      )}
    </div>
  );
}
