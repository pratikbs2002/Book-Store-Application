import React from "react";
import "./Book.css";
import { IoIosCart } from "react-icons/io";
import { BiRightArrow } from "react-icons/bi";

export default function Book(props) {
  const { imageSrc, title, author, price } = props;
  return (
    <>
      <div className="dialog-book-list-card">
        <div className="dialog-upper-component">
          <img
            src={imageSrc}
            alt={title}
            className="dialog-book-list-card-image"
          />
        </div>
        <div style={{ width: "2px", background: "black", height: "80%" }}></div>
        <div className="dialog-bottom-component">
          <div className="dialog-book-list-card-title">{title}</div>
          <div style={{ fontSize: "15px", textAlign: "left" }}>
            Author: {author}
          </div>
          <div style={{ fontSize: "15px", textAlign: "left" }}>
            Description: {author}
          </div>
        </div>
      </div>
    </>
  );
}
