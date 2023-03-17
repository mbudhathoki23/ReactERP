import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import ComingSoonWrapper from "../assest/wrappers/ComingSoonWrapper";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const ComingSoon = () => {
  // company details
  const companyDetail = {
    mail: "manish@mrsolution.com.np",
    phone: ["(+977) 1-4430676", "(+977) 980-1093561"],
  };

  // features we offer
  const featuresOffered = ["Softwares"];

  return (
    <ComingSoonWrapper>
      <Box className="coming-soon-section">
        <Container>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            className="grid-container"
            spacing={3}
          >
            <Grid item sm={12} md={6}>
              <Box>
                <Typography className="title">We are coming soon!!</Typography>
              </Box>
              <Box sx={{ m: 1 }}>
                <Typography className="sub-title" sx={{ my: 1, mx: 1 }}>
                  For info consult us through
                </Typography>
                <Typography className="coming-soon-mail" sx={{ mx: 1 }}>
                  <a href={`mailto:${companyDetail.mail}`}>
                    <AlternateEmailIcon />M AND R SOLUTIONS
                  </a>
                </Typography>
                <Box sx={{ m: 1 }}>
                  <Typography
                    className="coming-soon-phone-number"
                    sx={{ mx: 1 }}
                  >
                    <LocalPhoneIcon />
                    {companyDetail.phone[0]}
                  </Typography>
                  <Typography
                    className="coming-soon-phone-number"
                    sx={{ mx: 1 }}
                  >
                    <LocalPhoneIcon />
                    {companyDetail.phone[1]}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item md={6}>
              <Box>
                <Typography className="features-offered-title">
                  The features we offer
                </Typography>
                <Box></Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ComingSoonWrapper>
  );
};

export default ComingSoon;
