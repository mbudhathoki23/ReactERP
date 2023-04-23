import React from "react";
import Hero from "../components/hero/Hero";
import OurServices from "../components/ourServices/OurServices";
import Enquiry from "../components/enquiry/Enquiry";
import AboutUs from "../components/aboutUs/AboutUs";
import Team from "../components/team/Team";
import Support from "../components/support/Support";
import Pricings from "../components/pricing/Pricings";
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

// size="large"
// aria-label="account of current user"
// aria-controls="menu-appbar"
// aria-haspopup="true"
// onClick={handleOpenNavMenu}

// id="menu-appbar"
//                   anchorEl={anchorElNav}
//                   anchorOrigin={{
//                     vertical: "bottom",
//                     horizontal: "left",
//                   }}
//                   keepMounted
//                   transformOrigin={{
//                     vertical: "top",
//                     horizontal: "left",
//                   }}
//                   open={Boolean(anchorElNav)}
//                   onClose={handleCloseNavMenu}
//                   sx={{
//                     display: { md: "block", xl: "none" },
//                   }}
