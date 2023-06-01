import React, { useEffect, useState } from "react";
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

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="profile" element={<UserProfile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
