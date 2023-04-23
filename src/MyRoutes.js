import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// components import
import NavBars from "./components/website/navbar/NavBars";
import Footer from "./components/website/footer/Footer";
import Products from "./components/website/products/Products";
import ComingSoon from "./components/website/comingSoon/ComingSoon";

// pages import
import HomePage from "./pages/websitepages/HomePage";
import PricingsPage from "./pages/websitepages/PricingsPage";

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
