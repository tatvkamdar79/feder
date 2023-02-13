import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import CategoryPage from "./CategoryPage";
import ProductPage from "./ProductPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Footer from "./Footer";
import Copyright from "./Copyright";

const Routing = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Home />} />
        <Route path="/products/:category" element={<CategoryPage />} />
        <Route path="/products/:category/:name" element={<ProductPage />} />
      </Routes>
      <Contact />
      <Footer />
      <Copyright />
    </BrowserRouter>
  );
};

export default Routing;
