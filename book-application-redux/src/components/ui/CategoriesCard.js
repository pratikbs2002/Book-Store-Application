import React from "react";
import "./CategoriesCard.css";
import { useNavigate } from "react-router-dom";

const CategoriesCard = ({ title, imageSrc }) => {
  const categoryPath = title.toLowerCase().replace(/\s+/g, "-");
  const navigate = useNavigate();
  const handleCardClicker = () => {
    navigate(`/categories/${categoryPath}`);
  };
  return (
    <div onClick={handleCardClicker} className="card">
      {/* <img src={imageSrc} alt={title} className="card-image" /> */}
      <h2 className="card-title">{title}</h2>
    </div>
  );
};

export default CategoriesCard;
