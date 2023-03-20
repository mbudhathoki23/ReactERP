import React from "react";
import Wrapper from "../assest/wrappers/OurPortfolioPage";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Typography, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import PortFolio from "../details/Portfolio";

const OurPortfolio = () => {
  const responsiveCarousel = {
    xxl: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    xl: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    md: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    sm: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const portfolioDisplay = PortFolio.map((details, index) => {
    const { name, img, email } = details;
    return (
      <Box
        key={index}
        className="carousel_item"
        sx={{ backgroundImage: `url(${img})` }}
      >
        <Box className="active-on-hover" key={index}>
          <Grid container>
            <Grid item sm={12}>
              <Typography
                fontSize={28}
                variant="overline"
                align="center"
                gutterBottom={false}
                fontWeight={600}
                color="#8b5cf6"
              >
                {name}
              </Typography>
            </Grid>
            <Grid item sm={12}>
              <Typography
                fontSize={24}
                variant="overline"
                align="center"
                gutterBottom={false}
                fontWeight={600}
              >
                <a href={`mailto:${email}`}>{email}</a>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  });

  return (
    <Wrapper>
      <Box className="our-portfolio-section" sx={{ py: 4 }}>
        <Container sx={{ my: 3 }} maxWidth="xl" fixed>
          <Typography
            variant="h3"
            align="center"
            sx={{ textDecoration: "underline" }}
            className="title"
          >
            Our PortFolio
          </Typography>
          <Typography
            align="center"
            sx={{ my: 2 }}
            className="subtitle"
            fontSize={18}
          >
            Transforming ideas into reality with our personals.
          </Typography>

          <Carousel
            responsive={responsiveCarousel}
            showDots={false}
            infinite={true}
            arrows={false}
            autoPlay={true}
            autoPlaySpeed={7000}
            partialVisbile={true}
            customTransition="all linear 3s"
            slidesToSlide={1}
            shouldResetAutoplay={true}
            rtl={false}
          >
            {portfolioDisplay}
          </Carousel>
        </Container>
      </Box>
    </Wrapper>
  );
};

export default OurPortfolio;
