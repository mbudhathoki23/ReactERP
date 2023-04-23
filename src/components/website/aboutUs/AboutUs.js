import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import AboutUsWrapper from "./AboutUsWrapper";
import TeamImg from "../../../assest/images/team.png";

const AboutUs = () => {
  return (
    <AboutUsWrapper>
      <Box className="about-us-section" sx={{ py: 3 }} id="About">
        <Container maxWidth="xl" fixed>
          <Grid
            container
            columnSpacing={3}
            sx={{ xs: { flexDirection: "column-reverse" } }}
          >
            <Grid
              item
              xs={12}
              md={6}
              className="img-container"
              sx={{
                backgroundImage: `url(${TeamImg})`,
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            ></Grid>
            <Grid item sm={12} md={6} sx={{ pt: { md: 6 } }}>
              <Box>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    fontWeight={800}
                    fontSize={52}
                    className="component-title"
                  >
                    About Us
                  </Typography>
                  <Typography className="about-description" sx={{ pt: 5 }}>
                    The management software's robust reporting and analytics
                    capabilities provided us with detailed insights into our
                    financial performance, enabling us to quickly identify areas
                    for improvement and take proactive steps to optimize our
                    operations and increase profitability.
                  </Typography>
                </Box>
                <Grid container spacing={3} display="none">
                  <Grid item sm={6}>
                    <Typography className="about-subtitle">
                      Where You Can Find Us
                    </Typography>
                    <Box></Box>
                  </Grid>
                  <Grid item sm={6}></Grid>
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
