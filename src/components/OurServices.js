import { Typography, Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Wrapper from "../assest/wrappers/OurServicesPage";
import OurServicesDetails from "../details/OurServicesDetails";
import OurServe from "../assest/images/OurServices.jpg";

const OurServices = () => {
  return (
    <Wrapper>
      <Box className="backgroundColorChange" sx={{ py: 4 }}>
        <Container className="containg holebackground" maxWidth="xl" fixed>
          <Box className="containg ourservicesmain" sx={{ height: 300 }}>
            <Box className="ourservicemage">
              <Grid container alignItems="center" spacing={5}>
                <Grid item sm={4} className="containg">
                  <Typography
                    variant="h3"
                    sx={{ textDecoration: "underline " }}
                    className="texting "
                  >
                    Our Services
                  </Typography>

                  <Typography
                    fontSize={18}
                    sx={{ my: 2 }}
                    className="paragraphingtext"
                  >
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                  </Typography>
                </Grid>
                <Grid item sm={6}>
                  <img src={OurServe} alt="our" className="imageservicing" />
                </Grid>
              </Grid>
            </Box>
          </Box>

          {/* second part */}
          <Grid
            container
            sx={{ mt: 5 }}
            className="containg holebackground"
            justifyContent="space-between"
            rowGap={6}
          >
            {OurServicesDetails.map((items, index) => {
              const { title, icon, paratitle } = items;
              return (
                <Grid item key={index} sx={{ mx: 2 }}>
                  <Box
                    sx={{
                      width: 350,
                      height: 300,
                      backgroundColor: "white",
                      borderRadius: 10,
                    }}
                  >
                    <Grid container className="containg cmargin ">
                      <Container
                        fixed
                        className="our-services-box"
                        sx={{ borderRadius: 10 }}
                      >
                        <Grid item sm={12} sx={{ my: 2 }}>
                          <Typography style={{ fontSize: 50 }} className="our-service-icon">
                            {icon}
                          </Typography>
                        </Grid>
                        <Grid item sm={12} sx={{ my: 2 }}>
                          <Typography fontSize={24} fontWeight={600} className="our-service-title">
                            {title}
                          </Typography>
                        </Grid>

                        <Grid item sm={12} className="containg" sx={{ my: 2 }}>
                          <Typography variant="h6" sx={{ lineHeight: 1.2 }} className="our-service-paratitle">
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
