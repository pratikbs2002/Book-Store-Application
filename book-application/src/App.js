import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Book from "./pages/Book";
import NotFound from "./pages/NotFound";
import Navbar from "./components/navbar/Navbar";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Categories from "./pages/Categories";
import UserProfile from "./pages/userProfile/UserProfile";
import BookListCard from "./components/ui/BookListCard";
import BookList from "./pages/BookList";
import Cart from "./pages/cart/Cart";
import { AuthContext } from "./pages/AuthContext";

function App() {
  const { isLogin } = useContext(AuthContext);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="profile" element={isLogin ? <UserProfile /> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={isLogin ? <Cart /> : <Login />} />
        <Route path="/categories/:category" element={<BookList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
