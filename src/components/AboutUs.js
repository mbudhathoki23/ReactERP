import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import AboutUsWrapper from "../assest/wrappers/AboutUsWrapper";
import TeamImg from "../assest/images/team.png";

const AboutUs = () => {
  return (
    <AboutUsWrapper>
      <Box>
        <Container>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Box className='img-container'>
              <img src={TeamImg} className=''/>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              About Description section
            </Grid>
          </Grid>
        </Container>
      </Box>
    </AboutUsWrapper>
  );
};

export default AboutUs;
