import { Button, ButtonGroup, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import HeroWrapper from "../assest/wrappers/HeroWrapper";
import HeroImg from "../assest/images/HeroSection.jpg";
// import Particle from "./configs/particles/Particle";

const Hero = () => {
  const heroSectionContents = {
    title: "Welcome to our website for best conceling",
    description:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.",
  };

  return (
    <HeroWrapper>
      {/* <Particle /> */}
      <Box className="hero-section-container">
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
              <ButtonGroup sx={{ my: 3 }} size="large" className="button-group" variant="outlined" disableElevation>
                <Button className="demo-button">
                  Request For Demo
                </Button>
                <Button variant="contained" className="download-button" href="https://mega.nz/folder/BrRWQJxZ#VUYUeqE2eAAUjkTI4jK4lw">
                  Download
                </Button>
              </ButtonGroup>
            </Grid>
            <Grid item sm={12} md={6}>
              <Box
                className="img-container"
                sx={{
                  backgroundImage: `url(${HeroImg})`,
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              ></Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </HeroWrapper>
  );
};

export default Hero;
