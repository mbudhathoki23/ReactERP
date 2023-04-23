import React from "react";
import Hero from "../components/website/hero/Hero";
import OurServices from "../components/website/ourServices/OurServices";
import Enquiry from "../components/website/enquiry/Enquiry";
import AboutUs from "../components/website/aboutUs/AboutUs";
import Team from "../components/team/Team";
import Support from "../components/website/support/Support";
import Pricings from "../components/website/pricing/Pricings";
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
