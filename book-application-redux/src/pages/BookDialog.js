import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Book from "./Book";
import { FaTimes } from "react-icons/fa";
import { IoIosCart } from "react-icons/io";

export default function BookDialog(props) {
  const {
    handleClickOpen,
    handleClose,
    open,
    setOpen,
    imageSrc,
    title,
    author,
    price,
    handleAddToCart,
  } = props;

  return (
    <div>
      <Dialog maxWidth={"md"} fullWidth open={open} onClose={handleClose}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: "20px",
            paddingTop: "20px",
          }}
        >
          <div
            style={{ fontSize: "20px", cursor: "pointer" }}
            onClick={handleClose}
          >
            <FaTimes />
          </div>
        </div>
        {/* <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle> */}
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Book
              imageSrc={imageSrc}
              title={title}
              author={author}
              price={price}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Close</Button> */}
          <div className="dialog-price-tag">₹ {price}</div>
          <div
            onClick={handleAddToCart}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "5px",
              gap: "5px",
              backgroundColor: "black",
              borderRadius: "30px",
              cursor: "pointer",
              paddingRight: "15px",
              paddingLeft: "10px",
            }}
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
        </DialogActions>
      </Dialog>
    </div>
  );
}
