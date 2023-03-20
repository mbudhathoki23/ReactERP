import { Card, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import ComingSoonWrapper from "../assest/wrappers/ComingSoonWrapper";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MrSolution from "../assest/images/MrSolution.png";
import Particles from "./configs/particles/Particle";
import Counter from "./configs/counter/Counter";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import DiamondIcon from "@mui/icons-material/Diamond";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ChairAltIcon from "@mui/icons-material/ChairAlt";

const ComingSoon = () => {
  // company details
  const companyDetail = {
    mail: "info@mrsolution.com.np",
    phone: "(+977) 1-4430676 / 4438465",
    alternatePhone: "(+977) 980-1093560 / 980-1093561",
  };

  // features we offer
  const featuresOffered = ["Softwares"];

  const softwares = [
    "Pharmacy Shop Software",
    "Grocery Shop",
    "POS Software",
    "Jwellery Software",
    "Resturant Software",
    "Grament Software",
    "Retail Software",
    "Salon Software",
  ];

  const icons = [
    <LocalHospitalIcon />,
    <LocalGroceryStoreIcon />,
    <LoyaltyIcon />,
    <DiamondIcon />,
    <RestaurantIcon />,
    <CheckroomIcon />,
    <StorefrontIcon />,
    <ChairAltIcon />,
  ];

  // map of sotware
  const softwareList = softwares.map((item, index) => (
    <Typography className="software-list" key={index} sx={{ marginLeft: 5 }}>
      <span className="icons-display">
      {icons[index]}
      </span>
      {item}
    </Typography>
  ));

  // map of features
  const itemList = featuresOffered.map((item, index) => (
    <Typography key={index} sx={{ marginLeft: 2 }} className="features-offered">
      {item}
    </Typography>
  ));

  return (
    <ComingSoonWrapper>
      {/* <Particles /> */}
      <Box className="coming-soon-section">
        <Container disableGutters maxWidth="xxl" fixed>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            className="grid-container"
            columnSpacing={3}
          >
            <Grid item xs={12} md={12} lg={6}>
              <Grid container maxWidth="xl">
                <Grid
                  item
                  className="coming-soon-logo-img"
                  sx={{
                    backgroundImage: `url(${MrSolution})`,
                    backgroundRepeat: "no-repeat",
                  }}
                ></Grid>
                <Grid item xs={12} md={12}>
                  <Box sx={{ borderTop: "3px solid #5b21b6", mt: 2 }}>
                    <Typography className="title">
                      We are upgrading...
                    </Typography>
                  </Box>
                  <Box sx={{ m: 1 }}>
                    <Typography className="sub-title" sx={{ my: 1, mx: 1 }}>
                      For info, consult us through
                    </Typography>
                    <Typography className="coming-soon-mail" sx={{ mx: 1 }}>
                      <a href={`mailto:${companyDetail.mail}`}>
                        <AlternateEmailIcon />M AND R SOLUTIONS
                      </a>
                    </Typography>
                    <Box sx={{ m: 1 }} component="span">
                      <Typography
                        className="coming-soon-phone-number"
                        sx={{ mx: 1 }}
                      >
                        <LocalPhoneIcon />
                        {companyDetail.phone}
                      </Typography>
                      <Typography
                        className="coming-soon-phone-number"
                        sx={{ mx: 1 }}
                      >
                        <LocalPhoneIcon />
                        {companyDetail.alternatePhone}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={12} lg={5} className="card-box">
              <Card variant="outlined" raised className="custom-card">
                <img src={MrSolution} className="card-img" alt="logo" />
                <Box className="card-texts">
                  <Typography
                    className="features-offered-title"
                    sx={{ textDecoration: "underline" }}
                  >
                    The features we offer:
                  </Typography>
                  {itemList}
                  {softwareList}
                </Box>
              </Card>
            </Grid>
            <Grid item className="counter-box">
              <Counter />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ComingSoonWrapper>
  );
};

export default ComingSoon;
