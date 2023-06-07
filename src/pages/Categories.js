import React from "react";
import "./Categories.css";
import CategoriesCard from "../components/ui/CategoriesCard";
import education from "../assets/categories/education.png";
import cooking from "../assets/categories/cooking.png";
import arts from "../assets/categories/arts.png";
import { Typography } from "@mui/material";
export default function Categories() {
  const data = [
    { id: 0, title: "Fiction", imageSrc: education },
    { id: 1, title: "Non-fiction", imageSrc: cooking },
    { id: 2, title: "Children's Books", imageSrc: education },
    { id: 3, title: "Education", imageSrc: education },
    { id: 4, title: "Self-Help and Personal Development", imageSrc: cooking },
    { id: 5, title: "Biographies and Memoirs", imageSrc: education },
    { id: 6, title: "Business and Entrepreneurship", imageSrc: education },
    { id: 7, title: "Arts and Photography", imageSrc: arts },
    { id: 8, title: "Science and Technology", imageSrc: arts },
    { id: 9, title: "Cooking and Food", imageSrc: cooking },
    { id: 10, title: "Travel and Adventure", imageSrc: education },
    { id: 11, title: "Poetry", imageSrc: education },
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "300px",
        paddingBottom: "100px",
      }}
    >
      <Typography
        display={"flex"}
        position={"sticky"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"100%"}
        padding={5}
        bgcolor={"wheat"}
        variant="h5"
      >
        Choose Your Category
      </Typography>
      <div className="card-container">
        {data.map((card, index) => (
          <CategoriesCard
            key={index}
            title={card.title}
            imageSrc={card.imageSrc}
          />
        ))}
      </div>
    </div>
  );
}
