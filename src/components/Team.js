import React from "react";
import Wrapper from "../assest/wrappers/TeamWrapper";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Typography, Container, Link } from "@mui/material";
import { Box } from "@mui/system";
import PortFolio from "../details/TeamDetails";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";

const OurPortfolio = () => {
  const responsiveCarousel = {
    xxl: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    xl: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    md: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    sm: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const portfolioDisplay = PortFolio.map((details, index) => {
    const { name, img, email, facebook, linkedin, profession } = details;
    return (
      <Box
        key={index}
        className="carousel_item"
        sx={{ backgroundImage: `url(${img})` }}
      >
        <Box className="active-on-hover " key={index}>
          <Typography
            fontSize={28}
            variant="overline"
            gutterBottom={false}
            fontWeight={600}
            color="white"
            sx={{ lineHeight: 1.2 }}
          >
            {name}
            <Box>
              <Typography
                variant="body1"
                sx={{ py: 3, color: "white", fontStyle: "italic" }}
              >
                {profession}
              </Typography>
            </Box>
          </Typography>
          <Box
            className="contact-links"
            display="flex"
            justifyContent="space-between"
          >
            <Box display="flex">
              <Link href={facebook} target="_blank">
                <FacebookIcon className="portfolio-icon" />
              </Link>
              <Link href={linkedin} target="_blank">
                <LinkedInIcon className="portfolio-icon" />
              </Link>
            </Box>
            <Box>
              <Typography
                fontSize={24}
                align="center"
                fontStyle="italic"
                gutterBottom={false}
                fontWeight={600}
                color="#9a65fe"
              >
                <a href={`mailto:${email}`}>
                  <AttachEmailIcon className="portfolio-icon" />
                </a>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  });

  return (
    <Wrapper>
      <Box className="our-portfolio-section" sx={{ py: 4 }} id="Team">
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
          <Typography
            variant="body1"
            textTransform="uppercase"
            className="upgrading-text"
          >
            We are still upgrading!!!
          </Typography>
          <Carousel
            responsive={responsiveCarousel}
            showDots={false}
            arrows={true}
            autoPlay={true}
            autoPlaySpeed={7000}
            partialVisbile={true}
            customTransition="all 2s ease-in-out"
            draggable
            focusOnSelect={true}
            slidesToSlide={1}
            pauseOnHover={true}
            shouldResetAutoplay
            minimumTouchDrag={80}
            rtl={false}
            containerClass="portfolio-container"
            rewind={false}
            rewindWithAnimation={false}
            height={700}
          >
            {portfolioDisplay}
          </Carousel>
        </Container>
      </Box>
    </Wrapper>
  );
};

export default OurPortfolio;
