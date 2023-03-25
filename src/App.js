import React from "react"
import "./index.css";
import NavBars from "./components/NavBars";
import Hero from "./components/Hero";
import OurServices from "./components/OurServices";
import Team from "./components/Team";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
// import ComingSoon from "./components/ComingSoon";

function App() {
  return (
    <div>
      <NavBars />
      <Hero />
      <OurServices />
      <Team />
      <ContactUs />
      <Testimonial />
      <Footer />
      {/* <ComingSoon /> */}
    </div>
  );
}

export default App;
