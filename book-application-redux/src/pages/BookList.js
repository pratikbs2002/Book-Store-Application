import "./Categories.css";
import education1 from "../assets/books/education1.jpg";
import education2 from "../assets/books/education2.jpg";
import education3 from "../assets/books/education3.jpg";
import education4 from "../assets/books/education4.jpg";
import education5 from "../assets/books/education5.jpeg";
import React from "react";
import BookListCard from "../components/ui/BookListCard";
import { Typography } from "@mui/material";

export default function BookList() {
  const BookData = [
    {
      id: 1,
      productId: 1,
      title: "The Element: How Finding Your Passion Changes Everything",
      author: "Ken Robinson",
      imageSrc: education1,
      price: 1000,
      category: "education",
    },
    {
      id: 2,
      productId: 2,
      title: "Mindset: The New Psychology of Success",
      author: "Carol S. Dweck",
      imageSrc: education2,
      price: 1200,
      category: "education",
    },
    {
      id: 3,
      productId: 3,
      title: "Educated: A Memoir",
      author: "Tara Westover",
      imageSrc: education3,
      price: 700,
      category: "education",
    },
    {
      id: 4,
      productId: 4,
      title: "Grit: The Power of Passion and Perseverance",
      author: "Angela Duckworth",
      imageSrc: education1,
      price: 2000,
      category: "education",
    },
    {
      id: 5,
      productId: 5,
      title: "The Smartest Kids in the World: And How They Got That Way",
      author: "Amanda Ripley",
      imageSrc: education4,
      price: 1300,
      category: "education",
    },
    {
      id: 6,
      productId: 6,
      title:
        "The Teacher Wars: A History of America's Most Embattled Profession",
      author: "Dana Goldstein",
      imageSrc: education5,
      price: 1200,
      category: "education",
    },
    {
      id: 7,
      productId: 7,
      title:
        "How Children Succeed: Grit, Curiosity, and the Hidden Power of Character",
      author: "Paul Tough",
      imageSrc: education1,
      price: 600,
      category: "education",
    },
    {
      id: 8,
      productId: 8,
      title: "The Learning Brain: Memory and Brain Development in Children",
      author: "Torkel Klingberg",
      imageSrc: education1,
      price: 2100,
      category: "education",
    },
    {
      id: 9,
      productId: 9,
      title: "Make It Stick: The Science of Successful Learning",
      author: "Peter C. Brown",
      imageSrc: education3,
      price: 3200,
      category: "education",
    },
    {
      id: 10,
      productId: 10,
      title:
        "The Reading Mind: A Cognitive Approach to Understanding How the Mind Reads",
      author: "Daniel T. Willingham",
      imageSrc: education4,
      price: 1600,
      category: "education",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "400px",
        paddingBottom: "200px",
        background: "#d7fefc",
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
        Choose Your Book
      </Typography>
      <div className="card-container">
        {BookData.map((card, index) => (
          <BookListCard
            key={index}
            productId={card.productId}
            title={card.title}
            price={card.price}
            imageSrc={card.imageSrc}
            author={card.author}
          />
        ))}
      </div>
    </div>
  );
}
