import React from "react";
import Hero from "../components/Hero";
import OurServices from "../components/OurServices";
// import Team from "../components/Team";
import Enquiry from "../components/Enquiry";
// import Testimonial from "../components/Testimonial";
import AboutUs from "../components/AboutUs";
// import ComingSoon from "../components/ComingSoon";

const HomePage = () => {
  return (
    <>
      <Hero />
      <OurServices />
      <AboutUs />
      {/* <Team /> */}
      <Enquiry />
      {/* <ComingSoon /> */}
      {/* <Testimonial /> */}
    </>
  );
};

export default HomePage;
