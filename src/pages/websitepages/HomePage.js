import React from "react";
import Hero from "../../components/website/hero/Hero";
import OurServices from "../../components/website/ourServices/OurServices";
import Enquiry from "../../components/website/enquiry/Enquiry";
import AboutUs from "../../components/website/aboutUs/AboutUs";
// import Team from "../../components/website/team/Team";
import Support from "../../components/website/support/Support";
import Pricings from "../../components/website/pricing/Pricings";
import NavBars from "../../components/website/navbar/NavBars";
import Footer from "../../components/website/footer/Footer";
// import Testimonial from "../components/Testimonial";

const HomePage = () => {
  return (
    <>
      <NavBars />
      <Hero />
      <OurServices />
      <AboutUs />
      {/* <Team /> */}
      <Support />
      <Enquiry />
      <Pricings />
      <Footer />
      {/* <Testimonial /> */}
    </>
  );
};

export default HomePage;
