import React from "react";
import Wrapper from "../assest/wrappers/OurPortfolioPage";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Typography, Container, Grid, Link } from "@mui/material";
import { Box } from "@mui/system";
import PortFolio from "../details/PortfolioDetails";
import FacebookIcon from "@mui/icons-material/Facebook";

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
                // variant="overline"
                align="center"
                fontStyle="italic"
                gutterBottom={false}
                fontWeight={600}
                color="#9a65fe"
              >
                <a href={`mailto:${email}`}>{email}</a>
              </Typography>
            </Grid>
            <Grid item sm={12}>
              <Typography>
                <Link href="facebook.com">
                  <FacebookIcon className="portfolio-icon" />
                </Link>
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
            className="component-title"
          >
            Our Skilled Team
          </Typography>
          <Typography
            align="center"
            sx={{ my: 2 }}
            className="component-text"
            fontSize={18}
          >
            Transforming ideas into reality with our personals.
          </Typography>

          <Carousel
            responsive={responsiveCarousel}
            showDots={false}
            arrows={true}
            // autoPlay={true}
            autoPlaySpeed={7000}
            partialVisbile={true}
            customTransition="all 2s ease-in-out"
            draggable
            focusOnSelect={true}
            slidesToSlide={1}
            pauseOnHover
            shouldResetAutoplay
            minimumTouchDrag={80}
            rtl={false}
            containerClass="portfolio-container"
            rewind={false}
            rewindWithAnimation={false}
          >
            {portfolioDisplay}
          </Carousel>
        </Container>
      </Box>
    </Wrapper>
  );
};

export default OurPortfolio;
