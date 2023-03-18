import React from "react";
import Wrapper from "../assest/wrappers/OurPortfolioPage";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Typography,Container } from "@mui/material";


const OurPortfolio = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Wrapper>
    <Container>
     <Typography variant="h3">
       Our PortFolio
     </Typography>
     <Typography className="whynot" sx={{width:450}} >
      There are many variations of Lorem Ipsum available,but the majority have suffered alterattion
     </Typography>

  <Carousel responsive={responsive} showDots={true}  className="carosel">
  <div className="carouselitem">Item 1</div>
  <div className="carouselitem">Item 2</div>
  <div className="carouselitem">Item 3</div>
  <div className="carouselitem">Item 4</div>
  <div className="carouselitem">Item 5</div>
  <div className="carouselitem">Item 6</div>
</Carousel>


   
</Container>
    </Wrapper>
  );
};

export default OurPortfolio;
