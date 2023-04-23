import { Card, Grid, Link, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import ComingSoonWrapper from "./ComingSoonWrapper";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Particles from "../../configs/particles/Particle";
import Counter from "../../configs/counter/Counter";
import { featuresOffered, softwares } from "../../../details/FeaturesOffered";
import LocationOnIcon from "@mui/icons-material/LocationOn";

// image import
import MrSolution from "../../../assest/images/MrSolution.png";
import QrCode from "../../../assest/images/qrcode.png";

const ComingSoon = () => {
  // company details
  const companyDetail = {
    mail: "info@mrsolution.com.np",
    phone: "(+977) 1-4430676 / 4438465",
    alternatePhone: "(+977) 980-1093560 / 980-1093561",
    address: "Putalisadak, Computer Bazar 4th floor",
  };

  // features we offer

  // map of sotware
  const softwareList = softwares.map((software, index) => {
    const { icon, name } = software;
    return (
      <Typography
        className="software-list"
        key={index}
        sx={{ marginLeft: 5, textTransform: "capitalize" }}
      >
        <span className="icons-display">{icon}</span>
        {name}
      </Typography>
    );
  });

  // map of features
  const itemList = featuresOffered.map((item, index) => (
    <Typography key={index} sx={{ marginLeft: 2 }} className="features-offered">
      {item}
    </Typography>
  ));

  return (
    <ComingSoonWrapper>
      <Box className="coming-soon-section">
        <Particles />
        <Container disableGutters maxWidth="xl" fixed>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            className="grid-container"
            columnSpacing={3}
          >
            <Grid item xs={11} sm={10} md={12} lg={6}>
              <Grid container maxWidth="xl">
                <Grid
                  item
                  className="coming-soon-logo-img"
                  sx={{
                    backgroundImage: `url(${MrSolution})`,
                    backgroundRepeat: "no-repeat",
                  }}
                ></Grid>
                <Grid item xs={12}>
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
                      <Link
                        href={`mailto:${companyDetail.mail}`}
                        color="inherit"
                        underline="hover"
                      >
                        <AlternateEmailIcon />M AND R SOLUTIONS
                      </Link>
                    </Typography>
                    <Box sx={{}} component="span">
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
                      <Link
                        href="https://goo.gl/maps/y9XrhJcJrir9JBFUA"
                        underline="hover"
                        target="_blank"
                      >
                        <Typography
                          className="coming-soon-phone-number"
                          sx={{ m: 1 }}
                        >
                          <LocationOnIcon />
                          {companyDetail.address}
                        </Typography>
                      </Link>
                    </Box>
                    <Box sx={{ mx: 4 }}>
                      <Typography className="qrcode-text">
                        Scan here for contact info: 
                          <img  className="qrcode-img" src={QrCode} alt="QR code for contact detail" width={150} height={150} />
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} lg={6} className="card-box">
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
