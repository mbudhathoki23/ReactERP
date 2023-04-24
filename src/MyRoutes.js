import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// components import
import Products from "./components/website/products/Products";
import ComingSoon from "./components/website/comingSoon/ComingSoon";

// pages import
import HomePage from "./pages/websitepages/HomePage";
import PricingsPage from "./pages/websitepages/PricingsPage";
import Login from "./components/webapp/login/Login";
import Dashboard from "./components/webapp/dashboard/Dashboard";

const MyRoutes = () => {
  const handleContextMenu = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <BrowserRouter onContextMenu={handleContextMenu}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contactUs" element={<ComingSoon />} />
          <Route path="/products" element={<Products />} />
          <Route path="/pricings" element={<PricingsPage />} />
          <Route>
            <Route path="/login" element={<Login />} />
            <Route path="/login/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MyRoutes;
