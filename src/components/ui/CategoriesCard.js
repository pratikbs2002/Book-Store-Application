import React from "react";
import "./CategoriesCard.css";

const CategoriesCard = ({ title, imageSrc }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
    </div>
  );
};

export default CategoriesCard;
