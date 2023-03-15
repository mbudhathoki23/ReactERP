import { Typography, Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Wrapper from "../assest/wrappers/OurServicesPage";

const OurServices = () => {
  return (
    <Wrapper>
      <Container className="containg">
        <Box>
          <Typography variant="h3">Our Services</Typography>
          <Grid container>
            <Grid item sm={4}>
              <Typography variant="body1" sx={{ mt: 2 }}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box></Box>
      </Container>
    </Wrapper>
  );
};

export default OurServices;
