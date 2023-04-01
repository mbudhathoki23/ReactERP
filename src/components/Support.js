import { Box, Container, Typography } from "@mui/material";
import React from "react";

const SupportServices = () => {
  return (
    <>
      <Box>
        <Container maxWidth="xl" fixed>
          <Box>
            <Typography className="component-title">
              Support We Provide
            </Typography>
          </Box>
          <Box>
            <Typography className="component-text">
              At <span className="emphasis"> M AND R SOLUTION</span>, we believe in the intrinsic
              value of human resources. We have made significant investments in
              physical and technological infrastructure and telecommunication to
              ensure adequate ability to support and enhance our rapidly growing
              business. HiTech is Nepal’s No. 1 Business Solution Provider
              Company only due to our dynamic Partners and Team across Nepal.
              Our team is up and ready to offer professional support and
              solutions to ease your operation.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default SupportServices;
