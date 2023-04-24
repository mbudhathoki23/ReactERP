import { Button, ButtonGroup, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import HeroWrapper from "./HeroWrapper";

// image import
import HeroImg from "../../../assest/images/HeroSection.jpg";
// import Particle from "./configs/particles/Particle";

const Hero = () => {
  const heroSectionContents = {
    title: "Streamline your business with our management software.",
    description:
      "    Streamline your business, Management software, Simplify management tasks, and processes Save time Improve productivity",
  };

  return (
    <HeroWrapper>
      {/* <Particle /> */}
      <Box className="hero-section-container" id="Hero" sx={{ py: 5 }}>
        <Container className="hero-section" maxWidth="xl" fixed>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            className="content-box"
            columnSpacing={2}
          >
            <Grid item sm={12} md={6}>
              <Typography align="start" className="title">
                {heroSectionContents.title}
              </Typography>
              <Typography
                align="start"
                variant="h6"
                className="description"
                sx={{ my: 2 }}
              >
                {heroSectionContents.description}
              </Typography>
              <ButtonGroup
                sx={{ my: 3, display: "none" }}
                size="large"
                className="button-group"
                variant="outlined"
                disableElevation
              >
                <Button className="demo-button">Request For Demo</Button>
                <Button
                  variant="contained"
                  href="https://mega.nz/folder/BrRWQJxZ#VUYUeqE2eAAUjkTI4jK4lw/folder/1mYVzQTS"
                  target="_blank"
                  className="download-button"
                >
                  Download
                </Button>
              </ButtonGroup>
            </Grid>
            <Grid
              item
              xs={12}  
              md={6}
              className="img-container"
              sx={{
                backgroundImage: `url(${HeroImg})`,
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            ></Grid>
          </Grid>
        </Container>
      </Box>
    </HeroWrapper>
  );
};

export default Hero;
