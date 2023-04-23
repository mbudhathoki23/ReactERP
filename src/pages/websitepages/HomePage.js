import React from "react";
import Hero from "../../components/website/hero/Hero";
import OurServices from "../../components/website/ourServices/OurServices";
import Enquiry from "../../components/website/enquiry/Enquiry";
import AboutUs from "../../components/website/aboutUs/AboutUs";
import Team from "../../components/website/team/Team";
import Support from "../../components/website/support/Support";
import Pricings from "../../components/website/pricing/Pricings";
// import Testimonial from "../components/Testimonial";

const HomePage = () => {
  return (
    <>
      <Hero />
      <OurServices />
      <AboutUs />
      <Team />
      <Enquiry />
      <Support />
      <Pricings />
      {/* <Testimonial /> */}
    </>
  );
};

export default HomePage;