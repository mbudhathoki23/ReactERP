import { Box, Container, Typography, Grid } from "@mui/material";
import React from "react";

import SupportWrapper from "./SupportWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadset,
  faPeopleLine,
  faSignal,
} from "@fortawesome/free-solid-svg-icons";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";

const SupportServices = () => {
  return (
    <SupportWrapper>
      <Box sx={{ py: 5 }}>
        <Container maxWidth="xl" fixed>
          <Box>
            <Typography className="component-title">
              Support We Provide
            </Typography>
          </Box>
          <Box>
            <Typography className="component-text">
              At <span className="emphasis"> M AND R SOLUTION</span>, we believe
              in the intrinsic value of human resources. We have made
              significant investments in physical and technological
              infrastructure and telecommunication to ensure adequate ability to
              support and enhance our rapidly growing business. HiTech is
              Nepal’s No. 1 Business Solution Provider Company only due to our
              dynamic Partners and Team across Nepal. Our team is up and ready
              to offer professional support and solutions to ease your
              operation.
            </Typography>
          </Box>
          <Box>
            <Grid container columnSpacing={5}>
              <Grid item xs={12} md={3}>
                <Box className="support-category">
                  <Box className="icon-box">
                    <FontAwesomeIcon
                      icon={faHeadset}
                      className="icon-fontAwesome"
                    />
                  </Box>
                  <Typography className="support-types-title">
                    Live Chat Support
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box className="support-category">
                  <Box className="icon-box">
                    <FontAwesomeIcon
                      icon={faPeopleLine}
                      className="icon-fontAwesome"
                    />
                  </Box>
                  <Typography className="support-types-title">
                    Industry-specific Implementations
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box className="support-category">
                  <Box className="icon-box">
                    <FontAwesomeIcon
                      icon={faSignal}
                      className="icon-fontAwesome"
                    />
                  </Box>
                  <Typography className="support-types-title">
                    Online Support
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box className="support-category">
                  <Box className="icon-box">
                    <CastForEducationIcon className="icon-fontAwesome material-ui-icon" />
                  </Box>
                  <Typography className="support-types-title">
                    Software Trainging
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </SupportWrapper>
  );
};

export default SupportServices;
