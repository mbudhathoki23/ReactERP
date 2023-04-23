import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// components import
import NavBars from "./components/navbar/NavBars";
import Footer from "./components/footer/Footer";
import Products from "./components/products/Products";
import ComingSoon from "./components/comingSoon/ComingSoon";

// pages import
import HomePage from "./pages/HomePage";
import PricingsPage from "./pages/PricingsPage";

const MyRoutes = () => {
  const handleContextMenu = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <BrowserRouter onContextMenu={handleContextMenu}>
        <NavBars />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contactUs" element={<ComingSoon />} />
          <Route path="/products" element={<Products />} />
          <Route path="/pricings" element={<PricingsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default MyRoutes;
