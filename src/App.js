import React from "react"
import "./index.css";
import NavBars from "./components/NavBars";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <NavBars />
      <HomePage/>
      <Footer />
    </div>
  );
}

export default App;
