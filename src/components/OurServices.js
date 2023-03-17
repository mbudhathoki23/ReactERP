import { Typography, Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Wrapper from "../assest/wrappers/OurServicesPage";
import { useState } from "react";
import OurServicesDetails from "../details/OurServicesDetails";
import OurServe from "../assest/images/OurServices.jpg"


const OurServices = () => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <Wrapper>
    <Box className='backgroundColorChange'>
      <Container className="containg holebackground">
        <Box className="containg ourservicesmain" sx={{height : 300}}>
          <Box className="ourservicemage">
          <Grid container  alignItems='center' spacing={5}>
          <Grid item sm={4} className="containg">
            <Typography variant="h3" sx={{ textDecoration: "underline " }} className='texting '>
              Our Services
            </Typography>
           
                <Typography
                  variant="body1"
                  sx={{ mt: 2 }}
                  className ='paragraphingtext'
                >
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration.
                </Typography>
              </Grid>
              <Grid item  sm={6}>
              <img src={OurServe} alt="our" className="imageservicing"/>
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
          {OurServicesDetails.map((items) => {
            const { id, title, icon, paratitle } = items;

            

            return (
              <Grid item key={id} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Box
                  sx={{
                    width: 350,
                    height: 300,
                    backgroundColor: "white",
                    borderRadius: 7,
                  }}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  // onMouseEnter={handleMouseEnter}
                  // onMouseLeave={handleMouseLeave}
                  className={isHover ? "doingmargin" : "nodomargin"}
                >
                  <Grid
                    container
                    className="containg cmargin"
                    sx={{
                      height: 190,
                    }}
                   
                  >
                    <Container>
                      <Grid item sm={12}>
                        <div
                          style={{ fontSize: 50 }}
                        
                          
                        >
                          {icon}
                        </div>
                      </Grid>

                      <Grid item sm={12}>
                        <Typography
                          variant="h5"
                          className={isHover ? "paratrue" : "parafasle"}
                        >
                          {title}
                        </Typography>
                      </Grid>

                      <Grid item sm={12} className="containg">
                        <Typography
                          className={isHover ? "paratrue" : "parafasle"}
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
