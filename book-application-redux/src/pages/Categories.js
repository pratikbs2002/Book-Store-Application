import React from "react";
import "./Categories.css";
import CategoriesCard from "../components/ui/CategoriesCard";
import { Typography } from "@mui/material";
export default function Categories() {
  const categories = [
    { id: 0, category: "All" },
    { id: 2, category: "Psychology" },
    { id: 3, category: "History" },
    { id: 4, category: "Fiction" },
    { id: 5, category: "Classic" },
    { id: 6, category: "Dystopian" },
    { id: 7, category: "Thriller" },
    { id: 8, category: "Adventure" },
    { id: 9, category: "Mystery" },
    { id: 10, category: "Fantasy" },
    { id: 11, category: "Art" },
    { id: 12, category: "High-fantasy" },
    { id: 13, category: "Magical" },
    { id: 14, category: "Psychological" },
    { id: 15, category: "Redemption" },
    { id: 16, category: "Post-apocalyptic" },
    { id: 17, category: "Friendship" },
    { id: 18, category: "Young Adult" },
    { id: 19, category: "Education" },
  ];

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <h2 style={{ textAlign: "center", color: "black" }}>Books Categories</h2>
      <div>
        Explore a world of literary treasures with our vast collection of books
        across various genres and categories, catering to every reader's taste
        and curiosity.
      </div>
      <div className="card-container">
        {categories.map((card, index) => (
          <CategoriesCard key={index} title={card.category} />
        ))}
      </div>
    </div>
  );
}
