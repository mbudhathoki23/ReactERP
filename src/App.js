import React from "react";
import "./index.css";
import NavBars from "./components/NavBars";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComingSoon from "./components/ComingSoon";

function App() {
  return (
    <BrowserRouter>
      <NavBars />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contactUs" element={<ComingSoon />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
