import { Button, ButtonGroup, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import HeroWrapper from "../assest/wrappers/HeroWrapper";
import HeroImg from "../assest/images/HeroSection.jpg";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ContactPageSharpIcon from "@mui/icons-material/ContactPageSharp";

const Hero = () => {
  const heroSectionContents = {
    title: "Welcome to our website for best conceling",
    description:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.",
  };
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  return (
    <HeroWrapper>
      <Box className="hero-section-container">
        <Container className="hero-section">
          <Particles
            id="hero-section-particle"
            init={particlesInit}
            options={{
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#a78bfa",
                  opacity: 0.5,
                },
                links: {
                  color: "#a78bfa",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 1,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              detectRetina: true,
            }}
          />
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
              <ButtonGroup sx={{ my: 3 }} size="large" className="button-group">
                <Button variant="outlined" className="demo-button">
                  Request For Demo
                </Button>
                <Button variant="contained" className="download-button">
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
