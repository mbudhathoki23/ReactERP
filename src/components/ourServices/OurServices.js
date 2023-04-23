import { Typography, Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Wrapper from "./OurServicesWrapper";
import OurServicesDetails from "../../details/OurServicesDetails";

const OurServices = () => {
  return (
    <Wrapper>
      <Box className="backgroundColorChange" sx={{ py: 4 }} id="Services">
        <Container className="containg holebackground" maxWidth="xl" fixed>
          <Box className="containg ourservicesmain" sx={{ height: 300 }}>
            <Box className="title">
              <Typography
                className="component-title"
                fontSize={34}
                align="center"
              >
                The Services We Offer
              </Typography>
              <Typography
                fontSize={18}
                sx={{ my: 2 }}
                className="component-text"
              >
                Streamline Your Business Finances with a Complete Accounting
                Software Suite
              </Typography>
            </Box>
          </Box>

          {/* second part */}
          <Grid
            container
            sx={{ my: 5 }}
            className="containg holebackground"
            justifyContent="space-around"
            rowSpacing={6}
          >
            {OurServicesDetails.map((items, index) => {
              const { title, icon, paratitle } = items;
              return (
                <Grid item key={index} sx={{ mx: 2 }}>
                  <Box
                    sx={{
                      maxWidth: 350,
                      minWidth: 200,
                      backgroundColor: "white",
                      borderRadius: 10,
                      py: 2,
                    }}
                    className="our-services-box"
                  >
                    <Grid container className="containg cmargin">
                      <Container fixed sx={{ borderRadius: 10 }}>
                        <Grid item sm={12} sx={{ my: 2 }}>
                          <Typography
                            className="our-service-icon"
                            align="center"
                          >
                            {icon}
                          </Typography>
                        </Grid>
                        <Grid item sm={12} sx={{ my: 2 }}>
                          <Typography
                            fontSize={18}
                            fontWeight={600}
                            className="our-service-title"
                            align="center"
                          >
                            {title}
                          </Typography>
                        </Grid>

                        <Grid item sm={12} className="containg" sx={{ my: 2 }}>
                          <Typography
                            fontSize={16}
                            sx={{ lineHeight: 1.2 }}
                            className="our-service-paratitle"
                            align="center"
                          >
                            {paratitle}
                          </Typography>
                        </Grid>
                      </Container>
                    </Grid>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </Wrapper>
  );
};

export default OurServices;
