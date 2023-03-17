import { Card, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import ComingSoonWrapper from "../assest/wrappers/ComingSoonWrapper";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MrSolution from "../assest/images/MrSolution.png";
import Particle from "./configs/Particle";

const ComingSoon = () => {
  // company details
  const companyDetail = {
    mail: "manish@mrsolution.com.np",
    phone: "(+977) 1-4430676",
    alternatePhone: "(+977) 980-1093561",
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

  // map of sotware
  const softwareList = softwares.map((item, index) => (
    <Typography className="software-list" key={index} sx={{ marginLeft: 5 }}>
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
      <Particle />
      <Box
        className="coming-soon-section"
        sx={{
          backgroundImage: `url(${MrSolution})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            className="grid-container"
            spacing={3}
          >
            <Grid item sm={12} md={6}>
              <Box>
                <Typography className="title">Coming Soon</Typography>
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
                <Box sx={{ m: 1 }}>
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
            <Grid item sm={8} md={6}>
              <Card variant="outlined" raised className="custom-card">
                <Typography
                  className="features-offered-title"
                  align=""
                  sx={{ textDecoration: "underline" }}
                >
                  <pre className="m-0">The features we offer: </pre>
                </Typography>
                {itemList}
                {softwareList}
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ComingSoonWrapper>
  );
};

export default ComingSoon;
