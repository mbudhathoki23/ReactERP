import {
  Avatar,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialWrapper from "../assest/wrappers/TestimonialWrapper";
import Testimonials from "../details/TestimonialDetails";

const Testimonial = () => {

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



  // testimonial map
  const testimonial = Testimonials.map((testimonial, index) => {
    const { name, post, img, comment } = testimonial;
    return (
      <Paper key={index} variant="elevation" sx={{ p: 3, mx: 5, borderRadius: 5 }} className="testimonial-card">
        <Box display="flex" justifyContent="center">
          <Avatar
            src={img}
            alt={name}
            sx={{ width: 140, height: 140, outline: "10px solid #ddd6fe" }}
            className="testimonial-avatar"
          ></Avatar>
        </Box>
        <Box>
          <Box sx={{ my: 3 }} position="relative">
            <span className="testimonial-quotes start">"</span>
            <Typography
              sx={{ px: 3 }}
            >
              {comment}
            </Typography>
            <span className="testimonial-quotes end">"</span>
          </Box>
          <Box display="flex" justifyContent="center">
            <Typography className="testimonial-title">{name} - <span className="testimonial-title-post">{post}</span></Typography>
          </Box>
        </Box>
      </Paper>

    );
  });

  return (
    <TestimonialWrapper>
      <Box sx={{ py: 3 }} className="testimonial-section">
        <Typography align='center' sx={{ textDecoration: "underline" }} className="component-title">Testimonial</Typography>
        <Typography align='center' sx={{ mb: 5 }} className="component-text">Listen to our customers that use our products.</Typography>
        <Container maxWidth="xl" fixed>
          <Carousel responsive={responsiveCarousel}
            showDots={false}
            infinite
            arrows={false}
            autoPlay={true}
            autoPlaySpeed={7000}
            partialVisbile={true}
            customTransition="all 1.2s ease-in-out"
            draggable
            focusOnSelect={true}
            pauseOnHover
            shouldResetAutoplay
            minimumTouchDrag={80}
            rtl={false}
            containerClass="portfolio-container"
            rewind={false}
            rewindWithAnimation={false}>
            {testimonial}
          </Carousel>
        </Container>
      </Box>
    </TestimonialWrapper>
  );
};

export default Testimonial;
