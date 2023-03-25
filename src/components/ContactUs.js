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
import React,{useState} from "react";
import Wrapper from "../assest/wrappers/ContactUsWrapper";
import SendIcon from "@mui/icons-material/Send";
import ContactUsImg from "../assest/images/Contact-us.png";

const ContactUs = () => {

  const [messageSubject, setMessageSubject] =  useState('')
  const [phoneNumber, setPhoneNumber] =  useState('')
  const [fullName, setFullName] =  useState('') 
  const [message, setMessage] =  useState('') 
  const [email, setEmail] =  useState('') 

  const sendMail =()=>{
    const mailtoLink = `mailto:info@mrsolution.com.np?cc=${email}&subject=${encodeURIComponent(messageSubject)}&body=${encodeURIComponent(`Message: ${message}\nFull Name: ${fullName}\nEmail: ${email}\nPhone Number: ${phoneNumber}`)}`
    window.location.href = mailtoLink
  }

  return (
    <Wrapper>
      <Box className="contact-us-section" sx={{ py: 5 }}>
        <Container>
          <Typography className="component-title" sx={{ mb: 1 }}>
            Contact Us
          </Typography>
          <Typography className="component-text" sx={{ mb: 3 }}>
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
                      onChange={(e)=>setFullName(e.target.value)}
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
                      onChange={(e)=>setEmail(e.target.value)}
                      
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      label="Phone Number"
                      fullWidth
                      id="phoneNumber"
                      type="text"
                      onChange={(e)=>setPhoneNumber(e.target.value)}
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
                      onChange={(e)=>setMessageSubject(e.target.value)}

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
                      onChange={(e)=>setMessage(e.target.value)}

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
                  onClick={sendMail}
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
