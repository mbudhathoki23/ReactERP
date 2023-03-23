import {
  Grid,
  Container,
  // FormControl,
  // InputLabel,
  // Input,
  TextField,
  Button,
  // IconButton,
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
      <Box className="contact-us-section" sx={{ py: 5 }}>
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
                <form >                
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      label="Name"
                      fullWidth
                      required
                      id="fullName"
                      helperText="Enter full name."
                      type="text"
                      // onChange={this.addFullName}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      label="Email"
                      fullWidth
                      required
                      id="customerEmail"
                      type="email"
                      // onChange={this.addEmail}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      label="Phone Number"
                      fullWidth
                      id="phoneNumber"
                      type="text"
                      // onChange={this.addPhoneNumber}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      label="Subject"
                      fullWidth
                      required
                      id="messageSubject"
                      type="text"
                      // onChange={this.addSubject}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      label="Message"
                      helperText="Enter your message here."
                      multiline
                      minRows={4}
                      type="text"
                      // onChange={this.addMessage}
                    />
                  </Grid>
                </Grid>
                </form>
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  sx={{ mt: 3 }}
                  className="cButton"
                  fullWidth
                  type="submit"
                  >
                  <Typography variant="body1">Submit Message</Typography>
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box className="img-container">
                <img src={ContactUsImg} className="contact-us-image" alt="contact us svg element" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Wrapper>
  );
};

// download link
// https://mega.nz/folder/BrRWQJxZ#VUYUeqE2eAAUjkTI4jK4lw
export default ContactUs;
