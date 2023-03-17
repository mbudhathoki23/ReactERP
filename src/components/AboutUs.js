import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import AboutUsWrapper from "../assest/wrappers/AboutUsWrapper";
import TeamImg from "../assest/images/team.png";

const AboutUs = () => {
  return (
    <AboutUsWrapper>
      <Box className="about-us-section" sx={{ my: 0 }}>
        <Container>
          <Grid container columnSpacing={3}>
            <Grid item xs={12} sm={6}>
              <Box
                className="img-container"
                sx={{
                  backgroundImage: `url(${TeamImg})`,
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              ></Box>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ pt: 8 }}>
              <Box>
                <Box sx={{ mb: 3 }}>
                  <Typography fontWeight={800} fontSize={52}>
                    About Us
                  </Typography>
                  <Typography variant="body1">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which dont
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum,
                  </Typography>
                </Box>
                <Grid container spacing={3}>
                  <Grid item sm={6}>
                    <Typography fontWeight={800} fontSize={24}>
                      Who we are
                    </Typography>
                    <Typography variant="body2">
                      There are many vtions of passages of Lorem Ipsum
                      available, but the majority have suffered.
                    </Typography>
                  </Grid>
                  <Grid item sm={6}>
                    <Typography fontWeight={800} fontSize={24}>
                      Who we are
                    </Typography>
                    <Typography variant="body2">
                      There are many vtions of passages of Lorem Ipsum
                      available, but the majority have suffered.
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </AboutUsWrapper>
  );
};

export default AboutUs;
