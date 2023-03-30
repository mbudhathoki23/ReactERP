import React from "react";
import Hero from "../components/Hero";
import OurServices from "../components/OurServices";
import Enquiry from "../components/Enquiry";
import AboutUs from "../components/AboutUs";
// import Team from "../components/Team";
// import Testimonial from "../components/Testimonial";
// import ComingSoon from "../components/ComingSoon";

const HomePage = () => {
  return (
    <>
      <Hero />
      <OurServices />
      <AboutUs />
      <Enquiry />
      {/* <Team />
      <ComingSoon />
      <Testimonial /> */}
    </>
  );
};

export default HomePage;
