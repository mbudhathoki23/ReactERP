import {
  Grid,
  Container,
  FormControl,
  InputLabel,
  Input,
  TextField,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Wrapper from "../assest/wrappers/ContactUsWrapper";
import SendIcon from "@mui/icons-material/Send";
import ContactUsImg from "../assest/images/Contact-us.png";

const ContactUs = () => {
  return (
    <Wrapper>
      <Box className="contact-us-section" sx={{ p: 5 }}>
        <Container>
          <Typography variant="h3" sx={{ mb: 1 }}>
            Contact Us
          </Typography>
          <Typography variant="body2" sx={{ mb: 3 }}>
            If any problem you can contact us through the form given below.
          </Typography>

          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <Box className="cWidth">
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      label="Name"
                      fullWidth
                      required
                      color="secondary"
                      id="fullName"
                      helperText="Enter full name."
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      label="Email"
                      fullWidth
                      color="secondary"
                      required
                      id="customerEmail"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      label="Phone Number"
                      color="secondary"
                      fullWidth
                      id="phoneNumber"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      label="Subject"
                      fullWidth
                      color="secondary"
                      required
                      id="messageSubject"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      label="Message"
                      helperText="Enter message."
                      color="secondary"
                      multiline
                      minRows={4}
                    />
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  sx={{ mt: 3 }}
                  className="cButton"
                  fullWidth
                >
                  <Typography variant="body1">Submit Message</Typography>
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box className="img-container">
                <img src={ContactUsImg} className="contact-us-image" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Wrapper>
  );
};

export default ContactUs;
