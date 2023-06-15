import React from "react";
import "./Book.css";

export default function Book(props) {
  const { imageSrc, title, author, price, description } = props;
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
          <div style={{ fontSize: "20px", textAlign: "left" }}>
            Author: {author}
          </div>
          <div style={{ fontSize: "15px", textAlign: "left" }}>
            {description}
          </div>
        </div>
      </div>
    </>
  );
}
